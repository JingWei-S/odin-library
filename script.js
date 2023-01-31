// stores papers
let myLibrary = [];

// paper constructor
function Paper(title, firstAuthor, venue, year, ifRead) {
    this.title = title;
    this.firstAuthor = firstAuthor;
    this.venue = venue;
    this.year = year;
    this.ifRead = ifRead;
}

const paper1 = new Paper('test1', 'Jing', 'IMWUT', 2021, false);
const paper2 = new Paper('test2', 'Jing', 'CHI', 2022, false);
const paper3 = new Paper('test3', 'Jing', 'CSCW', 2022, false);
myLibrary.push(paper1);
myLibrary.push(paper2);
myLibrary.push(paper3);

// console.log(myLibrary)

// the following function lopps through the myLibrary array and add cards to the page
const card = document.createElement('div');
card.classList.add("paper-display");
function displayPaperInfo (paper) {
    for (const prop in paper) {
        const test = document.createElement("p");
        test.classList.add(`${prop}`);  // make the property the class so that I can manipulate with css
        test.textContent = `${prop}: ${paper[prop]}`;
        card.appendChild(test);
    }
}
displayPaperInfo(paper1);

// this is the default paper list container
const container = document.querySelector(".container");
// const container = document.querySelector(".container");
container.appendChild(card);
// console.log(container)