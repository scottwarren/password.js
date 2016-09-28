// get all allowed characters into an array ['a' .. 'z', '1' .. '9']
// generate a random number between 0 and allowedCharactersArray.length inclusive
// use that to grab a pseudo random character out of the array eg arr[randomNumber]
// and append it to the password string we're generating
// do this passwordLength times
//
// then return the string :)
//
// the entry point could be a method on the instance, for example:
// new passwordGenerator = new Password({ .. })
// let myNewPassword = passwordGenerator.generate();
//
//

// generate: function()
//
//
// @TODO: Add entry point:
//    new Password({   <-- options array
//      passwordLength: 14,
//      ..
//    });


class Password {
  /**
   *
   * @param  Object {
   *           passwordLength: 8 <-- default value for the length of the password
   *        }
   * @return {Password}   instance of Password
   */
  constructor({
    passwordLength = 8
  }) {
    this.setPasswordLength(passwordLength)

    this.allowedCharacters = [
      'abcdefghijklmnopqrstuvwxyz',
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      '0123456789',
      '`~!@#$%^&*()_+='
    ].join()
  }

  setPasswordLength(passwordLength) {
    this.passwordLength = passwordLength
  }

  getPasswordLength() {
    return this.passwordLength
  }

  getRandomCharacterFromString(allowedCharacters) {
    let min = 0,
        max = allowedCharacters.length,
        // Returns a random integer between min (included) and max (included)
        // Using Math.round() will give you a non-uniform distribution!
        // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Using_Math.random()
        randomNumber = Math.floor(
          Math.random() * (max - min + 1) + min
        )

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
