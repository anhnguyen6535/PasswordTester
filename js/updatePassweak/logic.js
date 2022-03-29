/** 
 * Returns true if input string contains both an uppercase and a lowercase character
 * @return {true} String contains both an uppercase and a lowercase character
 * @return {false} String does not contain both an uppercase and a lowercase character
*/
function hasCases(string) {
    const
        upper = /[A-Z]/.test(string),
        lower = /[a-z]/.test(string);

    return upper && lower;
}

/** 
 * Returns true if input string contains a number
 * @return {true} String contains at least one number
 * @return {false} String does not contain any numbers
*/
function hasNumber(string) {
    return /\d/.test(string);
}

/** 
 * Returns true if input string contains a special character
 * @return {true} String contains at least one special character
 * @return {false} String does not contain any special characters
*/
function hasSpecialCharacter(string) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(string);
}

/** 
 * Returns true if input string has at least n characters in length
 * @return {true} String contains at least n characters in length
 * @return {false} String contains less than n characters in length
*/
function hasNCharacters(string, n) {
    return string.length >= n;
}
