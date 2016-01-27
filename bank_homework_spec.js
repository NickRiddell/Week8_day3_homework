var Bank = require('./bank_homework');
var bank = require('./bank_functions_homework');
var assert = require('assert');

describe('account', function(){
  it('should have the name jay', function(){
    var account1 = new Bank('jay', 125.50, 'personal');
    bank.addAccount();
    assert.equal('jay', account1.name);
  });
});