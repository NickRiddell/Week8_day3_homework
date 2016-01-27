var Bank = require('./bank_homework');
var bank = require('./bank_functions_homework');
var assert = require('assert');

describe('bank', function(){
  it('should contain an account', function(){
    var account1 = new Bank('jay', 125.50, 'personal');
    bank.addAccount(account1);
    assert.equal(true, bank.addAccount());
  });
});