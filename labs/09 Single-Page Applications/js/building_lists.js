
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

let header = document.createElement("h1");
header.innerHTML = "header";

var list = document.createElement('ul');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('li', onclick = clicked());
	item.innerHTML = books[i].title + " " + books[i].year;
	list.appendChild(item);
}
document.body.appendChild(list);

function clicked() {

}