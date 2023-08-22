class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    set state(newState) {
        if (newState < 0){
            this._state = 0;
        } else {
            if (newState > 100) {
                this._state = 100;
            } else {
            this._state = newState;
            } 
        }
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state = this.state * 3 / 2;   
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = this.books.find(book => book[type] === value);
        if (!!result){
            return result;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex(book => book.name === bookName);
        if (index >= 0){
            let result = this.books[index];
            this.books.splice(index, 1);
            return result;
        } else {
            return null;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {}; 
    }
    
    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (!!this.marks[subject]) {
                this.marks[subject] = [...this.marks[subject], mark];
            } else {
                this.marks[subject] = [mark];
            }
        } else {
            return;
        }
    }

    getAverageBySubject(subject) {
        if (!!this.marks[subject]) {
            let subjectAvg = this.marks[subject].reduce((a, b, index, arr) => a + b / arr.length , 0);
            return subjectAvg;
        } else {
            return 0;
        }
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        if (subjects.length !== 0) {
            let avg = subjects.reduce((a,b) => a + this.getAverageBySubject(b) / subjects.length, 0);
            return avg;
        } else {
            return 0;
        }
    }
}