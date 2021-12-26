("use strict");

const accountOne = {
  owner: "Unarine Makhesha",
  movements: [
    300, 1300, -500, 5000, -340, 1200, 1230, 50, 5000, 3400, -150, -790, -3210,
    -1000, 8500, -30,
  ],
  pinCode: 1211,
  movementsDates: [
    "2021-11-01T13:15:33.035Z",
    "2021-11-02T09:48:16.867Z",
    "2021-11-03T06:04:23.907Z",
    "2021-10-25T14:18:46.235Z",
    "2021-10-05T16:33:06.386Z",
    "2021-10-10T14:43:26.374Z",
    "2021-10-25T18:49:59.371Z",
    "2021-10-26T12:01:20.894Z",
    "2021-11-01T13:15:33.035Z",
    "2021-11-02T09:48:16.867Z",
    "2021-11-03T06:04:23.907Z",
    "2021-10-25T14:18:46.235Z",
    "2021-10-05T16:33:06.386Z",
    "2021-10-10T14:43:26.374Z",
    "2021-10-25T18:49:59.371Z",
    "2021-10-26T12:01:20.894Z",
  ],
  currency: "ZAR",
  locale: "en-ZA",
};

const accountTwo = {
  owner: "James Rodrigo",
  movements: [2000000, 2300, -400000, 400, -340000, 5200, 3230, 100],
  pinCode: 1212,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "ZAR",
  locale: "en-ZA",
};
const accountThree = {
  owner: "Samantha Biko",
  movements: [500, 6300, -100, 7000, -840, -1200, 2230, 150],
  pinCode: 1213,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-ZA",
};
const accountFour = {
  owner: "Williams Paul",
  movements: [300, 300, -5000, 9000, -240, 2200, 123, 50],
  pinCode: 1214,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "ZAR",
  locale: "en-ZA",
};
const allAccounts = [accountOne, accountTwo, accountThree, accountFour];

const labelcurrentDate = document.querySelector(".date");
const labeltotalAmount = document.querySelector(".amount");
const labelWithdrwals = document.querySelector(".withdrawal_balance");
const labelDeposits = document.querySelector(".deposit_balance");
const labelWelcome = document.querySelector(".welcome");
const transferAmount = document.querySelector(".transfer_amount");
const transferTo = document.querySelector(".transfer_to");

const inputUsername = document.querySelector(".input_username");
const inputPin = document.querySelector(".input_pin");
const movementCol = document.querySelector(".movements__value");

const containerMain = document.querySelector(".main_section");
const containerMovements = document.querySelector(".movements");
const btnWithdraw = document.querySelector(".con__withdrawals");
const conatainerDeposits = document.querySelector(".con__Deposits");

const btnTransfer = document.querySelector(".btn_transfer");
const btnLogin = document.querySelector(".btn_login");

let currentAccount;

// ================================Logging in Users==============================================

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = allAccounts.find(
    (account) => account.username === inputUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pinCode === Number(inputPin.value)) {
    containerMain.style.opacity = 100;
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.toUpperCase().split(" ")[0]
    }`;
    inputUsername.value = inputPin.value = "";
    inputPin.blur();

    // current Date:
    const today = new Date();
    const opt = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    labelcurrentDate.textContent =
      `Time Logged in ` +
      new Intl.DateTimeFormat(currentAccount.locale, opt).format(today);

    // Update UI
    updateUI(currentAccount);
  }
});

// ===========================Create usernames==================================================
const newUserName = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toUpperCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
    console.log(account.username);
  });
};
newUserName(allAccounts);

// ===============================working with dates=============================================
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (firstDate, secondDate) =>
    Math.round(Math.abs(firstDate - secondDate) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  console.log(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed >= 2) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

// =============================Display the movements============================================

const showMovements = function (account, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;
  // const movs = account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : " withdrawal";
    if (type == "withdrawal") movementCol.style.color = "white";

    const date = new Date(account.movementsDates[i]);
    console.log(date);
    const showDate = formatMovementDate(date, account.locale);
    console.log(showDate);
    const formatMovements = formatCur(mov, account.locale, account.currency);
    console.log(formatMovements);
    const displayhtml = `
    <div class="movements__row">
    <div class="col col-lg-6">
      <div class="movements__type movements__type--${type}">
       ${type}
      </div>
    </div>
    <div class="col col-lg-6">
      <div class="movements__date"> ${showDate}</div>
    </div>
    <div class="col col-lg-6">
     <div class="movements__value">${formatMovements}</div>
    </div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", displayhtml);
  });
};

// =====================================Display Total Balance=========================================

const viewTotalBalance = function (account) {
  account.balance = account.movements.reduce(
    (account, movement) => account + movement,
    0
  );

  labeltotalAmount.textContent = formatCur(
    account.balance,
    account.locale,
    account.currency
  );
};

// ========================cal total deposits==============================

const calcTotalsSummary = function (account) {
  const deposits = account.movements
    .filter((movement) => movement > 0)
    .reduce((account, movement) => account + movement, 0);
  labelDeposits.textContent = formatCur(
    deposits,
    account.locale,
    account.currency
  );
  // ========================cal total withdrawals==============================
  const withdraws = account.movements
    .filter((movement) => movement < 0)
    .reduce((account, movement) => account + movement, 0);
  labelWithdrwals.textContent = formatCur(
    withdraws,
    account.locale,
    account.currency
  );
};

// btnWithdraw.addEventListener("click", function () {
//   currentAccount = allAccounts.find(
//     (account) =>
//       `Welcome back, ${account.owner.split(" ")[0]}` ===
//       labelWelcome.textContent
//   );
//   console.log(currentAccount);
// withdrawMovement = currentAccount.movements;
// console.log(withdrawMovement);
// console.log(currentAccount);
// console.log(1 + 1);
//   .filter(currentAccount.movements > 0)
//   .reduce((currentAccount + currentAccount.movements, 0));
// console.log(withdrawMovement);
// labelWithdrwal.textContent = formatCur(
//   Math.abs(withdrawMovement, account.locale, account.currency)
// );
// Update UI
//   updateUI(currentAccount);
// });

// =============================Transferring cash=============================
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +transferAmount.value;
  const receiver = allAccounts.find(
    (account) => account.owner === transferTo.value
  );
  console.log(receiver);
  transferTo.value = transferAmount.value = "";
  if (
    amount > 0 &&
    currentAccount.balance > amount &&
    receiver?.owner !== currentAccount.owner
  ) {
    // transfer
    currentAccount.movements.push(-amount);
    receiver.movements.push(amount);

    // adding movement dates
    currentAccount.movementsDates.push(new Date().toISOString());
    receiver.movementsDates.push(new Date().toISOString());

    // update(UI)
    updateUI(currentAccount);
  } else {
    return alert("Something went wrong");
  }
});
// =============================Initializer===================================

const updateUI = function (account) {
  // Display movements
  showMovements(account);

  viewTotalBalance(account);

  calcTotalsSummary(account);
};
