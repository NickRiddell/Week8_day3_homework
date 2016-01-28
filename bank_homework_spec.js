var Bank = require('./bank_homework');
var bank = require('./bank_functions_homework');
var assert = require('assert');

describe('bank', function(){
  it('should contain an account', function(){
    var account1 = new Bank('jay', 125.50, 'personal');
    bank.addAccount(account1);
    assert.equal(true, bank.addAccount());
  });
  it("should be able to find jay's account", function(){
    var account1 = new Bank('jay', 125.50, 'personal');
    bank.addAccount(account1);
    bank.findAccountHolder('jay');
    assert.equal('jay', result.name)
  });
});