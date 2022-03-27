const disclaimer = ' (If your password already meets these requirements, just press "Next")'

/** 
 * Updates the HTML to display the current passweak
 * @return {void} Nothing
*/
function updatePassweakDisplay() {
    document.getElementById('passweak').innerHTML = currentPassweak;
}

/** 
 * Updates the HTML in case of a requirement error
 * @return {void} Nothing
*/
function updateErrorDisplay(string) {
    document.getElementById('error').innerHTML = string;
}

/** 
 * Updates the HTML to display the current requirements (displays a success message if all requirements have been met)
 * @return {void} Nothing
*/
function updateRequirementDisplay() {
        document.getElementsByClassName('title')[0].innerHTML = "The new password is";
        Array.from(document.getElementsByClassName('passweakDescription')).forEach((element) => {
            element.innerHTML = "<br>";
         })
        document.getElementById('requirementText').innerHTML = "<b>Success!</b> You have created a complex password!";
}
