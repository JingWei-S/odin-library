// stores papers
let myLibrary = [];

// the object to get title?
const title = {
  location: "Location",
  name: "name",
  why: "Reason(s)",
  year: "Year",
  stillHate: "Still hate them?",
};

// paper constructor
function Hate(location, name, why, year, stillHate) {
  this.location = location;
  this.name = name;
  this.why = why;
  this.year = year;
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
addBookToLibrary();

//--------- above is the initiation --------//

// this is the default paper list container
const container = document.querySelector(".container");

// the following function lopps through the myLibrary array and add cards to the page
function displayPaperInfo(paper) {
  const card = document.createElement("div");
  card.classList.add("paper-display"); // we can decorate cards
  for (const prop in paper) {
    const hateCard = document.createElement("p");
    hateCard.classList.add(`${prop}`); // make the property the class so that I can manipulate with css
    hateCard.textContent = `${title[prop]}: ${paper[prop]}`;
    card.appendChild(hateCard);
  }
  console.log(card);
  container.appendChild(card);
}
function addBookToLibrary() {
  for (const hate of myLibrary) {
    // console.log(myLibrary);
    displayPaperInfo(hate);
  }
}


