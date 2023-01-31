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
