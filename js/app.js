"use strict";
let images = ['1.png', 'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
let productArray = [];
let productToView = [];


function Myproduct(name, imageUrl, count) {

  this.name = name,
    this.imageUrl = imageUrl;
  this.count = count;

}
for (let i = 0; i < images.length; i++) {

  var nameOfpro = images[i].split(".")[0];

  let pordcut1 = new Myproduct(nameOfpro, images[i], 0)

  productArray.push(pordcut1);

}

function genrateProduct() {
  for (let i = 0; i < 3; i++) {

    let randomNum = Math.floor(Math.random() * images.length);
    productToView.push(productArray[randomNum])

  }

  console.log(productToView);
  appendProduct()
}
genrateProduct();

function appendProduct() {

  let showImage1 = document.getElementById('product1');
  let showImage2 = document.getElementById('product2');
  let showImage3 = document.getElementById('product3');
  let firstSourc = './img/' + productToView[0].imageUrl;
  let secSourc = './img/' + productToView[1].imageUrl;
  let thdSourc = './img/' + productToView[2].imageUrl;
  showImage1.src = firstSourc;
  showImage2.src = secSourc;
  showImage3.src = thdSourc;

}