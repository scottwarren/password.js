import assert from 'assert';
import passwordJs from '../lib';

describe('password-js', function () {
  it('should return a fixed length of password!', function () {
    assert(passwordJs.generatePassword({
      passwordLength: 10
    }).length, 10);
  });
});
