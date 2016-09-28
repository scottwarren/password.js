import assert from 'assert';
import Password from '../lib';

let passwordGenerator;

describe('password-js', function () {
  beforeEach(function(done) {
    passwordGenerator = new Password({
      passwordLength: 15
    });

    done();
  })


  it('should return a fixed length of password!', function () {
    passwordGenerator.setPasswordLength(10);

    assert(passwordGenerator.generate().length, 10);
  });

  it('should generate a password that does NOT include symbols that are not allowed', function() {
    assert(passwordGenerator.generate().indexOf("'") === -1, true)
  });
});
