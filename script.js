// stores papers
let myLibrary = [];

// the object to get title?
const title = {
  location: "Location",
  time: "Time",
  name: "Name",
  why: "Reason(s)",
  stillHate: "Still hate them?",
};

// set the date picker to be today
const todayDate = document.getElementById("hateTime");

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
todayDate.value = `${year}-${month}-${day}`;

// paper constructor
function Hate(location, name, why, time, stillHate) {
  this.location = location;
  this.name = name;
  this.why = why;
  this.time = time;
  this.stillHate = stillHate;
}

const hate1 = new Hate(
  "Melbourne",
  "Michael Z.",
  "Bad participant",
  2020,
  false
);
const hate2 = new Hate("US", "2AC", "Gave me bad reviews", 2022, true);
const hate3 = new Hate(
  "Shenzhen",
  "Sustech",
  "Destroyed my mental health",
  2017,
  true
);
myLibrary.push(hate1);
myLibrary.push(hate2);
myLibrary.push(hate3);


// this is the default paper list container
const container = document.querySelector(".container");
// add book to library
for (const hate of myLibrary) {
    // console.log(myLibrary);
    displayPaperInfo(hate);
}

//--------- above is the initiation --------//

// the following function lopps through the myLibrary array and add cards to the page
function displayPaperInfo(paper) {
  const card = document.createElement("div");
  card.classList.add("enemy-display"); // we can decorate cards
  for (const prop in paper) {
    const hateCard = document.createElement("p");
    hateCard.classList.add(`${prop}`); // make the property the class so that I can manipulate with css
    hateCard.textContent = `${title[prop]}: ${paper[prop]}`;
    card.appendChild(hateCard);
  }
  console.log(card);
  container.appendChild(card);
}




//below is the add a new enemy button
const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
    // console.log('test');
    document.querySelector(".form-section").style.display = "flex";
});

// remove the new enemy form
const cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener("click", () => {
    document.querySelector(".form-section").style.display = "none";
});

// submit button
const formInfo = document.querySelector('form');
formInfo.addEventListener("submit", (e) => {
    e.preventDefault();  // prevent submission
    const location = formInfo.elements.hateLocation.value;
    const name = formInfo.elements.hateName.value;
    const time = formInfo.elements.hateTime.value;
    const why = formInfo.elements.hateReason.value;
    const stillHate = formInfo.elements.hating.value === "yes" ? true : false;
    const newHate = new Hate(location, name, why, time, stillHate);
    myLibrary.push(newHate);
    displayPaperInfo(newHate);
    // remove the for,
    document.querySelector(".form-section").style.display = "none";
});

