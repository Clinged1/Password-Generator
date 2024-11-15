let lengthDisplay = document.getElementById("length");
let slider = document.getElementById("user-Input");
let First_password = document.getElementById("password1");
let Second_password = document.getElementById("password2");
let Third_password = document.getElementById("password3");
let Fourth_password = document.getElementById("password4");
let firstPass = '';
let secondPass = '';
let thirdPass = '';
let fourthPass = '';

let tempPassword = '';



function copyTextToClipboard() {
    // Select all buttons with the class "copy"
    const buttons = document.querySelectorAll(".copy");

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Create a temporary textarea element to copy the text from
            const tempTextarea = document.createElement("textarea");
            tempTextarea.value = button.textContent;
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand("copy");
            document.body.removeChild(tempTextarea);
            
            // Optional: Provide feedback to the user
            alert("Password copied to clipboard: " + button.textContent);
        });
    });
}

copyTextToClipboard()


function newStyle()  {
    document.getElementById("password1").style.color = "#10b981"
    document.getElementById("password2").style.color = "#10b981"
    document.getElementById("password3").style.color = "#10b981"
    document.getElementById("password4").style.color = "#10b981"

    document.getElementById("password1").style.fontWeight = "bold"
    document.getElementById("password2").style.fontWeight = "bold"
    document.getElementById("password3").style.fontWeight = "bold"
    document.getElementById("password4").style.fontWeight = "bold"


    document.getElementById("password1").style.fontSize = "1rem"
    document.getElementById("password2").style.fontSize = "1rem"
    document.getElementById("password3").style.fontSize = "1rem"
    document.getElementById("password4").style.fontSize = "1rem"


    if (Number(slider.value) > 7) {
        document.getElementById("password1").style.fontSize = "0.8rem"
        document.getElementById("password2").style.fontSize = "0.8rem"
        document.getElementById("password3").style.fontSize = "0.8rem"
        document.getElementById("password4").style.fontSize = "0.8rem"

        document.getElementById("password1").style.paddingTop = "7px"
        document.getElementById("password2").style.paddingTop = "7px"
        document.getElementById("password3").style.paddingTop = "7px"
        document.getElementById("password4").style.paddingTop = "7px"
    }
  
}





function generate() {


    
    slider.addEventListener("input", () => {
        lengthDisplay.innerHTML = `Length: <span style="color: #55f991; font-weight: bold;">${slider.value}</span>`;
    });
    



   First_password.textContent = first()
   Second_password.textContent = second()
   Third_password.textContent = third()
   Fourth_password.textContent = fourth()

   newStyle()
 
 



}




lengthDisplay.innerHTML = `Length: <span style="color: #55f991; font-weight: bold;">${slider.value}</span>`;


// Update length display whenever the slider value changes
slider.addEventListener("input", () => {
    // Wrap the new number in a span with a specific style
    lengthDisplay.innerHTML = `Length: <span style="color: #55f991; font-weight: bold;">${slider.value}</span>`;
});




function first() {
let firstPass = ''; // Reset the variable


for (let i = 0; i < slider.value; i++) {
    firstPass += passwordBeta()
} 



return firstPass
}

function second() {
let secondPass = ''; // Reset the variable
for (let i = 0; i < slider.value; i++) {
    secondPass += passwordBeta()

    
}


return secondPass
}


function third() {
let thirdPass = ''; // Reset the variable
for (let i = 0; i < slider.value; i++) {
    thirdPass += passwordBeta()
   
}

return thirdPass
}

function fourth() {
let fourthPass = ''; // Reset the variable
for (let i = 0; i < slider.value; i++) {
    fourthPass += passwordBeta()

    
}


return fourthPass
}







function passwordBeta() {


    let randomNew = Math.floor(Math.random() * 3) 

    let password = ''

    if (randomNew === 0) {
        password = randomLetterGenerator()
    } else if (randomNew === 1) {
        password = getRandomNumbers() 
        
    } else if (randomNew === 2) {
        password = getSpecialCharacters()
    }


    return password



}










function randomLetterGenerator() {
    let randomLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let letterGenerator = Math.floor(Math.random() * 26)
    let letter = ''

    let isUpperCase = Math.floor(Math.random() * 2)
    // console.log(isUpperCase)

    

    letter = (randomLetters[letterGenerator]);




    if(isUpperCase === 1) {
        letter = letter.toUpperCase();
    } else {
        letter = letter.toLowerCase();
    }
    
    return letter;

}




function getRandomNumbers() {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let numberGenerator = Math.floor(Math.random() * 10)
    let randomNumber = 0;
    randomNumber = (numbers[numberGenerator]);
  

    return randomNumber
}




function getSpecialCharacters() {
    let safeSpecialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '=', '?', '@', '[', ']', '^', '_', '`', '~'];

    let specialGenerator = Math.floor(Math.random() * 23)
    let specialCharacter = '';
    specialCharacter = (safeSpecialCharacters[specialGenerator]);


    return specialCharacter
}



