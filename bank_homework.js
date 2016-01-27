// //7.1 Calculate the total cash in accounts
// function total() {
//   var totalSum = 0;
//   for (var i=0; i<accounts.length;i++) {
//     totalSum += accounts[i].amount;
//   }
//   return totalSum;
// }
// console.log(total());
// //7.2 Find the name of the account with the largest balance
// function maxValue() {
//   var maxVal = -1;
//   for (var i=0; i<accounts.length;i++) {
//     if (accounts[i].amount > maxVal) {
//       maxVal = accounts[i].amount;
//     }
//   }
//   return maxVal;
// }
// console.log(maxValue());
// //7.3 Find the name of the account with the smallest balance
// function minBalance() {
//   var minVal = accounts[0].amount;
//   var accountName = accounts[0].name;
//   for (var i=1;i<accounts.length;i++) {
//     if (accounts[i].amount < minVal) {
//       minVal = accounts[i].amount;
//       accountName = accounts[i].name;
//     }
//   }
//   return accountName;
// }
// console.log(minBalance());
// //7.4 Calculate the average bank account value
// function avgValue() {
//   var totalSum = total();
//   var avgSum = totalSum / accounts.length;
//   return avgSum;
// }
// console.log(avgValue());
// //7.5 Find the value of marcs bank account
// function valueOfAccount(name) {
//   for (var i=1;i<accounts.length;i++) {
//     if (accounts[i].name == name) {
//       return accounts[i].amount;
//     }
//   }
//   return false;
// }
// console.log(valueOfAccount("marc"));
// //7.6 Find the holder of the largest bank account
// function maxHolder() {
//   var maxVal = maxValue();
//   for (var i=0;i<accounts.length;i++) {
//     if (accounts[i].amount == maxVal) {
//       return accounts[i].name;
//     }
//   }
//   return false;
// }
// console.log(maxHolder());
// //7.7 Calculate the total cash in business accounts
// function totalBusiness() {
//   var total = 0;
//   for (var i=0;i<accounts.length;i++) {
//     if (accounts[i].type == "business") {
//       total += accounts[i].amount;
//     }
//   }
//   return total;
// }
// console.log(totalBusiness());
// //7.8 Find the largest personal account owner
// function maxValuePersonal() {
//   var maxVal = -1;
//   for (var i=0; i<accounts.length;i++) {
//     if (accounts[i].type == "personal") {
//       if (accounts[i].amount > maxVal) {
//         maxVal = accounts[i].amount;
//       }
//     }
//   }
//   return maxVal;
// }

// function maxValuePersonalHolder() {
//   var maxVal = maxValuePersonal();
//   for (var i=1;i<accounts.length;i++) {
//     if (accounts[i].amount == maxVal) {
//       return accounts[i].name;
//     }
//   }
//   return false;
// }
// console.log(maxValuePersonalHolder());

var Bank = function(name, amount, type){
  this.name = name;
  this.amount = amount;
  this.type = type
  this.sortCode = Math.floor(Math.random()*10000001)
  this.accountNumber = Math.floor(Math.random()*100000001)
}


// var account2 = new Bank('val', 55125.10, 'business');
// var account3 = new Bank('marc', 400.00, 'business');
// var account4 = new Bank('keith', 220.25, 'personal');
// var account5 = new Bank('rick', 1.00, 'personal');


module.exports = Bank;



