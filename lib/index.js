/**
 * Get all allowed characters into an array ['a' .. 'z', '1' .. '9', '$', '#' 'etc']
 * generate a pseudo random number between 0 and allowedCharactersArray.length inclusive
 * use that to grab a random character out of the array eg arr[randomNumber]
 * and append it to the password string we're generating
 * do this passwordLength times
 */
class Password {
  /**
   *
   * @param  Object {
   *           passwordLength: 8 <-- default value for the length of the password
   *        }
   * @return {Password}   instance of Password
   */
  constructor({
    passwordLength = 8,
    randomGenerator = Math.random
  }) {
    this.setPasswordLength(passwordLength)

    this.allowedCharacters = [
      'abcdefghijklmnopqrstuvwxyz',
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      '0123456789',
      '`~!@#$%^&*()_+='
    ].join()

    this.randomGenerator = randomGenerator;
  }

  setPasswordLength(passwordLength) {
    this.passwordLength = passwordLength
  }

  getPasswordLength() {
    return this.passwordLength
  }

  /**
   * We are using the custom random function that is passed into the class, unless
   * it's not passed, which we then default to `Math.random();` which is a pseudo
   * random generator
   *
   * Returns a random integer between min (included) and max (included)
   * Using Math.round() will give you a non-uniform distribution!
   * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Using_Math.random()
   *
   * @param  int min smallest number to return between (inclusive)
   * @param  int max largest number to return between (inclusive)
   * @return int     [PSEUDO] random number
   */
  getRandomNumber(min, max) {
    return Math.floor(
      this.randomGenerator() * (max - min + 1) + min
    )
  }

  getRandomCharacterFromString(allowedCharacters) {
    let min = 0,
        max = allowedCharacters.length,
        randomNumber = this.getRandomNumber(min, max)

    return allowedCharacters[randomNumber];
  }

  /**
   * Generate a password based on the parameters that were set when the instance was made
   * @return string The password generated
   */
  generate() {
    let generatedPassword = [];

    for (var i = this.getPasswordLength() -1; i >= 0; i--) {
      generatedPassword.push(this.getRandomCharacterFromString(this.allowedCharacters));
    }

    return generatedPassword.join();
  }
}

export default Password
