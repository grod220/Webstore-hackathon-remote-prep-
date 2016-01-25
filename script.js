// Web Store sample objects
var book1 = {
  Picture_url: '<img src=http://www.fantasymundo.com/galeria/imagenes/Literatura01/31648.jpg>',
  Title: "Dune",
  Author: "Frank Herbert",
  ReleaseDate: 1960,
  Category: "books",
  Selling_points: 'This Hugo and Nebula Award winner tells the sweeping tale of a desert planet called Arrakis, the focus of an intricate power struggle in a byzantine interstellar empire. Arrakis is the sole source of Melange, the "spice of spices." Melange is necessary for interstellar travel and grants psychic powers and longevity, so whoever controls it wields great influence.',
  Price: '$6.97'
};

var book2 = {
  Picture_url: '<img src=http://d.gr-assets.com/books/1372847500l/5907.jpg>',
  Title: "The Hobbit",
  Author: "JRR Tolkein",
  ReleaseDate: 1953,
  Category: "books",
  Selling_points: 'Created by the author of the "Lord of the Rings" trilogy, this books goes through the adventure of Bilbo Baggins.',
  Price: '$9'
};
var book3 = {
  Picture_url: '<',
  Title: "The Great Gatsby",
  Author: "F. Scott Fitzgerald",
  ReleaseDate: 1923,
  Category: "books",
};


var album1 = {
  Title: "Abbey Road",
  Artist: "The Beatles",
  ReleaseDate: 1969
};

var album2 = {
  Title: "25",
  Artist: "Adele",
  ReleaseDate: 2015
};

$(document).ready(function() {
  
});

for (var key in book1) {
  $('#book1').append(book1[key] + '<br>');
}

for (var key in book2) {
  $('#book2').append(book2[key] + '<br>');
}

for (var key in book3) {
  $('#book3').append(book3[key] + '<br>');
}

for (var key in album1) {
  $('#album1').append(album1[key] + '<br>');
}

for (var key in album2) {
  $('#album2').append(album2[key] + '<br>');
}