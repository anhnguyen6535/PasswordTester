import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

/**
 * randomize a passphrase with an adjective and a noun 
 */
function randomizeStr() {
    const adj = faker.hacker.adjective()
    const noun = faker.hacker.noun()
    let str = adj + noun
    str = removeExtra(str)
    str = charModification(str)
    str = addUppercase(str)
    str = addDigit(str)
    return str;
}

/**
 * Add digits at the end of the passphrase
 * to make the passphrase length at least 14 
 * @param the randomized passphrase
 * @returns the passphrase with extra digits at the end
 */
function addDigit(string){
    const len = 14 - string.length
    let digit = 0
    if(len < 0){
        digit = faker.random.number(Math.pow(10, len))
    }else {
        digit = faker.random.number(100)
    }
    return string + digit
}

document.getElementById("superPass").innerHTML = randomizeStr()