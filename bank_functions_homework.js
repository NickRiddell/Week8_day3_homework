var bank = {
  accounts: [
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  }],
  addAccount: function(account){
    this.accounts.push(account);
    if (this.accounts != []) {
      return true
    };
  },
  findAccountHolder: function(n){
    for (var i = 0; i < bank.accounts.length; i++) {
      var account = bank.accounts[i];
      var name = account.name;
      if (name === n) {
        return account;
      };
      console.log(account);
    };

  }
}

bank.findAccountHolder('val');

module.exports = bank