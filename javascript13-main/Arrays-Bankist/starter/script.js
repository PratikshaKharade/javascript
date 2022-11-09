'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',  // js
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis', // jd
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams', // stw
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith', // ss
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



//update movements
function updateMovements(movs) {
  containerMovements.innerHTML = " "
  movs.forEach(function (el, index) {
    let type = el > 0 ? 'deposit' : 'withdrawal'
    let html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
          <div class="movements__value">${el}€</div>
        </div>
    `
    containerMovements.insertAdjacentHTML('beforeend', html)
  })

}
//calulate summury
function calulateSummury(CurrentAcc) {
  let deposit = CurrentAcc.movements.filter(function (el) {
    return el > 0
  }).reduce(function (acc, el) {
    return acc + el
  }, 0)
  accounts.deposit = deposit
  labelSumIn.textContent = `${deposit}€`

  let withdrawal = CurrentAcc.movements.filter(function (el) {
    return el > 0
  }).reduce(function (acc, el) {
    return acc + el
  }, 0)
  accounts.withdrawal = withdrawal
  labelSumOut.textContent = `${withdrawal}€`

  let bal = CurrentAcc.movements.reduce(function (acc, el) {
    return acc + el
  }, 0)
  CurrentAcc.bal = bal
  labelBalance.textContent = `${bal}€`
}

//userName creation 

function CreateUserName(acc) {
  acc.forEach(element => {
    //console.log(element)
    element.username = element.owner.split(' ').map(function (el) {
      return el[0]
      //console.log(mm)
    }).join('').toLowerCase()
    //console.log(mm)
  });
}
CreateUserName(accounts)
console.log(accounts)

//currentaccount
let CurrentAcc;
console.log(CurrentAcc)

btnLogin.addEventListener('click', function (e) {
  e.preventDefault()

  let userN = inputLoginUsername.value
  let Pin = inputLoginPin.value
  CurrentAcc = accounts.find(function (el) {
    return el.username == userN && el.pin == Pin

  })
  //console.log(CurrentAcc)
  containerApp.style.opacity = '100'
  inputLoginUsername.value = ""
  inputLoginPin.value = ""
  console.log(labelWelcome.textContent)
  labelWelcome.textContent = `welcome ${CurrentAcc.owner.split(' ')[0]} !`
  updateMovements(CurrentAcc.movements)
  calulateSummury(CurrentAcc)
})

//money transefer

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  console.log(CurrentAcc.bal)
  let recUser = inputTransferTo.value
  let tranceferAmt = Number(inputTransferAmount.value)
  let transeferUser = accounts.find(function (el) {
    return el.username == recUser
  })
  if (recUser && CurrentAcc.bal > 0 && CurrentAcc.username !== recUser) {
    transeferUser.movements.push(tranceferAmt)
    CurrentAcc.movements.push(-tranceferAmt)
  }
  inputTransferTo.value = ""
  inputTransferAmount.value = ""
  updateMovements(CurrentAcc.movements)
  calulateSummury(CurrentAcc)
  //console.log(accounts)

})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault()
  let reqAmt = Number(inputLoanAmount.value)
  if (reqAmt > 0) {
    CurrentAcc.movements.push(reqAmt)
    updateMovements(CurrentAcc.movements)
    calulateSummury(CurrentAcc)
  }
  inputLoanAmount.value = ""
})

btnClose.addEventListener('click',function(e){
  e.preventDefault()
  let closeuser= inputCloseUsername.value
  let closeuserpin = inputClosePin.value

  let DelUser = accounts.findIndex(function(el){
    return el.username == closeuser && el.pin == closeuserpin

  })
  console.log(DelUser)
  if(DelUser){
    accounts.splice(DelUser,1)
  }
  inputCloseUsername.value =" "
  inputClosePin.value = " "
})

