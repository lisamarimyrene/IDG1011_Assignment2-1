// –––––––––––––––––––– DATE, PATH, LAST MODIFIED section –––––––––––––––––––– 

// * TASK 3, 2E – Date Object Methods – Today's Date
//Adding "+ 1" to the month, because JS starts counting from "0".
//Source: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
let todaysDate = new Date();
let day = todaysDate.getDate();
let month = todaysDate.getMonth();
let year = todaysDate.getFullYear();
todaysDate = day + '/' + (month + 1) + '/' + year;
document.querySelector("#date").innerHTML = `Today\'s date: ${todaysDate}`;

// * TASK 3, 2A – Window Object Method – Path
document.querySelector("#path").innerHTML =  `You are here: ${window.location.pathname}`;

// * TASK 3, 2B – Document Object Method – Last Modified
let modified = document.lastModified;
document.querySelector("#modified").innerHTML = `Last modified: ${modified}`;


// ––––––––––––––––––––––– DOG INFORMATION section ––––––––––––––––––––––– 

// * TASK 3, 1A, 1B & 1C - Object Construction Function, using construction notation
function Dog(name, age, gender, colors, activityLvl, adoption, eyeColors) {
    // * TASK 2C – String Object Method – ToUpperCase
    this.name = name.toUpperCase();
    this.age = age;
    this.gender = gender;
    this.colors = colors;
    this.activityLvl = activityLvl;
    this.adoption = adoption;
    this.eyeColor = eyeColors;
    // * TASK 3, 2B - Method
    this.yearsOld = function () { 
        return `${this.age} years olds`;
    }
}

// * TASK 3, 1A – Creating 3 Objects, for 3 dogs. 
const dogCorgi = new Dog("Pelle", 5, "Male", ["Black", "White", "Brown"], "High", true, "Brown");
const dogShiba = new Dog("Molly", 2, "Female", ["Orange", "Brown", "Beige"], "Medium", true, "Blue");
const dogDalmatian = new Dog("Daisy", 10, "Female", ["Black", "White"], "Low", false, "Black");

// * TASK 3, 1D – Removes the Eye Color property from the dogs
delete dogCorgi.eyeColor;
delete dogShiba.eyeColor;
delete dogDalmatian.eyeColor;

// * TASK 3, 1D – Add Properties
const updateBtn = document.querySelector("#updateBtn");
updateBtn.addEventListener('click', () => {

    dogCorgi.breed = "Corgi";
    let breed1 = `Breed: ${dogCorgi.breed}`;
    document.querySelector("#breed1").innerHTML = breed1;

    dogShiba.breed = "Shiba";
    let breed2 = `Breed: ${dogShiba.breed}`;
    document.querySelector("#breed2").innerHTML = breed2;

    dogDalmatian.breed = "Dalmatian";
    let breed3 = `Breed: ${dogDalmatian.breed}`;
    document.querySelector("#breed3").innerHTML = breed3;
});

// * TASK 3, 1E – Display information about the object to the user
//Group: Corgi
//Declaring a variable to the right dogCorgi property, and retrieving the correct ID from HTML. 
let name1 = `${dogCorgi.name}`;
document.querySelector("#name1").innerHTML = name1;

//Repeating the process. I would think it would be more efficient with a loop, but I couldn't figure out how. 
let age1 = `Age: ${dogCorgi.yearsOld()}`;
document.querySelector("#age1").innerHTML = age1;

let gender1 = `Gender: ${dogCorgi.gender}`;
document.querySelector("#gender1").innerHTML = gender1;

let activityLvl1 = `Activity Level: ${dogCorgi.activityLvl}`;
document.querySelector("#activityLvl1").innerHTML = activityLvl1;

//.join = Putting a comma and space between the array items. 
let colors1 = `Colors: ${dogCorgi.colors.join(', ')}`;
document.querySelector("#colors1").innerHTML = colors1;

let adoption1 = `Up for adoption?: ${dogCorgi.adoption}`;
document.querySelector("#adoption1").innerHTML = adoption1;

// * TASK 3, 1E – Display information about the object to the user
//Breed: Shiba
let name2 = `${dogShiba.name}`;
document.querySelector("#name2").innerHTML = name2;

let age2 = `Age: ${dogShiba.yearsOld()}`;
document.querySelector("#age2").innerHTML = age2;

let gender2 = `Gender: ${dogShiba.gender}`;
document.querySelector("#gender2").innerHTML = gender2;

let activityLvl2 = `Activity Level: ${dogShiba.activityLvl}`;
document.querySelector("#activityLvl2").innerHTML = activityLvl2;

let colors2 = `Colors: ${dogShiba.colors.join(', ')}`;
document.querySelector("#colors2").innerHTML = colors2;

let adoption2 = `Up for adoption?: ${dogShiba.adoption}`;
document.querySelector("#adoption2").innerHTML = adoption2;

// * TASK 3, 1E – Display information about the object to the user
//Breed: Dalmatian
let name3 = `${dogDalmatian.name}`;
document.querySelector("#name3").innerHTML = name3;

let age3 = `Age: ${dogDalmatian.yearsOld()}`;
document.querySelector("#age3").innerHTML = age3;

let gender3 = `Gender: ${dogDalmatian.gender}`;
document.querySelector("#gender3").innerHTML = gender3;

let activityLvl3 = `Activity Level: ${dogDalmatian.activityLvl}`;
document.querySelector("#activityLvl3").innerHTML = activityLvl3;

let colors3 = `Colors: ${dogDalmatian.colors.join(', ')}`;
document.querySelector("#colors3").innerHTML = colors3;

let adoption3 = `Up for adoption?: ${dogDalmatian.adoption}`;
document.querySelector("#adoption3").innerHTML = adoption3;


// ––––––––––––––––––––––– ADOPTION section –––––––––––––––––––––– 

//Two variables that contains the output depending on what dog you choose. 
const upForAdoption = "Congratulation! Go get your new friend:";
const notUpForAdoption = "Sorry! The dog is not up for adoption.";

//Shared class for the different dog-images
const imgBtn = document.querySelectorAll(".imgBtn"); 

// * TASK 3, 3A – Else if statement: Output different messages, based on what image you click on. 
// * TASK 3, 3B – For-Each loop: Makes every dog-images clickable
imgBtn.forEach(img => {
    img.addEventListener('click', () => {
        if (img.id === "corgiBtn") {
            adoptionOutput.innerHTML = upForAdoption + " Corgi";
        }
        else if 
        (img.id === "shibaBtn") {
            adoptionOutput.innerHTML = upForAdoption + " Shiba";
        }
        else if (img.id === "dalmatianBtn") {
            adoptionOutput.innerHTML = notUpForAdoption;
        };
    });
});


// –––––––––––––––––––– OTHER DOGS AVAILABLE section –––––––––––––––––––– 

//Array with different dog breeds available
const dogBreeds = [
    'Labrador',
    'Golden Retriever',
    'Chihuahua',
    'Pit Bull Terrier',
    'Goldendoodle',
    'Australian Sheperd',
    'Pug',
    'Pomeranian',
    'French Bulldog',
    'Pomsky'
]

// * TASK 3, 2D – Math Object Method – Math.random & Math.floor
const shuffleBtn = document.getElementById("shuffleBtn");

//AddEventListener –> Math Object Method activates when clicking on button
shuffleBtn.addEventListener('click', () => {
    const randomBreed = Math.floor(Math.random() * (dogBreeds.length));
    document.getElementById("shuffleOutput").innerHTML = dogBreeds[randomBreed];
})