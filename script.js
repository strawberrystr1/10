

let books = document.querySelectorAll('.book'),
body = document.getElementsByTagName('body'),
links = document.getElementsByTagName('a'),
bookLi2 = document.getElementsByTagName('li'),
getUl = document.getElementsByTagName('ul');
console.log('getUl: ', getUl);

console.log('bookLi2: ', bookLi2);


console.log(books);

books[0].before(books[1]);
books[2].before(books[4]);
books[4].after(books[3]);
books[5].after(books[2]);

body[0].style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

links[2].innerHTML = 'Книга 3. this и Прототипы Объектов';

bookLi2[9].after(bookLi2[12]);
bookLi2[14].after(bookLi2[12]);
bookLi2[10].after(bookLi2[13]);
bookLi2[11].after(bookLi2[13]);
bookLi2[15].before(bookLi2[12]);
bookLi2[15].after(bookLi2[8]);

bookLi2[37].after(bookLi2[45]);
bookLi2[41].after(bookLi2[39]);
bookLi2[44].after(bookLi2[42]);

getUl[5].insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>')

bookLi2[56].before(bookLi2[57]);