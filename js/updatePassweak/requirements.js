/** 
 * Checks requirements for current "passweak" to see if they contain the correct characters.
 * Updates HTMl as need be, depending on the case.
 * @return {void} Nothing
*/
function checkRequirements() {
    let updatedPassweak = document.getElementById('password').value;

    // Case: Check if updatedPassweak contains currentPassweak as a substring, and if updatedPassweak contains at least one uppercase / lowercase character
    // Check if updatedPassweak contains currentPassweak as a substring
    if (!updatedPassweak.toLowerCase().includes(currentPassweak.toLowerCase())) {
        updateErrorDisplay("<b>Error:</b> Password must contain previous characters from previous passweak <b>" + currentPassweak + "</b>. Password has deviated too much.")
         return false;
    }

    // Check for uppercase / lowercase
    if (!hasCases(updatedPassweak)) {
        updateErrorDisplay("<b>Error:</b> Password must contain at least one uppercase and lowercase letter.")
        return false;
    }
    
    // Case: Check if updatedPassweak contains at least one number
    if (!hasNumber(updatedPassweak)) {
        updateErrorDisplay("<b>Error:</b> Password must contain at least one number.")
        return false;
    }

    // Case: Check if updatedPassweak contains at least one special character
    if (!hasSpecialCharacter(updatedPassweak)) {
        updateErrorDisplay("<b>Error:</b> Password must contain at least one special character.")
        return false;
    }
    
    // Case: Check if updatedPassweak contains at least N (8) characters
    if (!hasNCharacters(updatedPassweak, 8)) {
        updateErrorDisplay("<b>Error:</b> Password must be at least 8 characters.")
        return false;
    }
    
    // Update passweak information, form index, and displays
    currentPassweak = updatedPassweak;
    updatePassweakDisplay();
    updateErrorDisplay("");
    savedPasswords.push(currentPassweak);
    localStorage.setItem("updatedPassweak", currentPassweak)
    updateRequirementDisplay();
    window.location.replace("home.html")

    // Return false, in order to not refresh page (Javascript quirk)
    return false;
}

document.getElementById('form').onsubmit = checkRequirements;
