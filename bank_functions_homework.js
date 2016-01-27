var bank = {
  accounts: [],
  addAccount: function(account){
    this.accounts.push(account);
    if (this.accounts != []) {
      return true
    };
  },
  findAccountHolder: function(name){
    for (var i = 0; i < accounts.length; i++) {
      var account = this.accounts[i]
    };
    return account;
  }
}

module.exports = bank