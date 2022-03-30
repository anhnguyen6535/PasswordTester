
/**
 * Remove space and hyphens
 * @param the randomized passphrase
 * @returns the passphrase with no space or hyphens
 */
function removeExtra(string){
    string = string.replace(/\s/g, '')
    string = string.replace(/-/g, "")
    return string
}

/**
 * 
 * @param the randomized passphrase 
 * @returns the passphrase with at least one uppercase char
 */
function addUppercase(string){
    let numOfUpper = Math.floor(Math.random() * (string.length/4)) + 1
    for(let i = 0; i < numOfUpper; i++){
        let randomChar = Math.floor(Math.random() * string.length)
        let char = string.charAt(randomChar)
        if(char.toUpperCase() != char.toLowerCase() ){
            string = replaceChar(randomChar,char.toUpperCase(), string)
        }else{i--}
    }
    return string;
}

/**
 * Convert some characters into number
 * @param the randomized passphrase 
 * @returns the passphrase with modified characters
 */
function charModification(string){
    const len = string.length

    for(let i = 0; i < len; i++){
        let char = string.charAt(i)
        let bool = 1
        if(bool == 1){
            if(char === 's'){
                string = replaceChar(i, '$', string)
                bool = Math.floor(Math.random() * 10)
            }
            else if(char === 'e'){
                string = replaceChar(i, '3', string)
                bool = Math.floor(Math.random() * 10)
            }
            else if(char === 'i'){
                string = replaceChar(i, '1', string)
                bool = Math.floor(Math.random() * 10)
            }else if(char === 'o'){
                string = replaceChar(i, '0', string)
                bool = Math.floor(Math.random() * 10)
            }
        }else{
            bool = Math.floor(Math.random() * 5)
        }    
    }

    return string;
}

/**
 * Replace a character in the passphrase with a new character
 * @param index - the index of the character needs to be replaced
 * @param replacement - the new character replaces the old one
 * @param string - the passphrase
 * @returns 
 */
function replaceChar(index, replacement, string){
    return string.substring(0, index) + replacement + string.substring(index + 1);
}