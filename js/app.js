//Global
var productImg=['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg']
var leftProImage = document.querySelector('#pro1img');
var rightProImage = document.querySelector('#pro2img');
var centerProImage = document.querySelector('#pro3img');
var groupImageSection = document.getElementById('all_Pro');
var product=[];
var totalClicks = 1

function Products(name){
this.name = name;
this.urlImg = `img/${this.name}`;
this.totalClickspro = 0;
this.totalCount = 0 ;
product.push(this);//this its refer to the object that im created
}

function randomImg(){
    var leftProRandom = product[randomNumber(0,product.length - 1)]
    var righPro2Random = product[randomNumber(0,product.length - 1)]
    var centerPro3Random = product[randomNumber(0,product.length - 1)]
    leftProImage.setAttribute('src' , leftProRandom.urlImg);
    leftProImage.setAttribute('alt' , leftProRandom.name);
    rightProImage.setAttribute('src' , righPro2Random.urlImg);
    rightProImage.setAttribute('alt' ,righPro2Random.name);
    centerProImage.setAttribute('src' , centerPro3Random.urlImg);
    centerProImage.setAttribute('alt' ,centerPro3Random.name);
  while((leftProRandom.name === righPro2Random.name)||(leftProRandom.name === centerPro3Random.name)||(centerPro3Random.name === righPro2Random.name)){
    //pick another random number
    var leftProRandom = product[randomNumber(0,product.length- 1)]
    var righPro2Random = product[randomNumber(0,product.length- 1)]
    var centerPro3Random = product[randomNumber(0,product.length- 1)]
    leftProImage.setAttribute('src' , leftProRandom.urlImg);
    leftProImage.setAttribute('alt' , leftProRandom.name);
    rightProImage.setAttribute('src' , righPro2Random.urlImg);
    rightProImage.setAttribute('alt' ,righPro2Random.name);
    centerProImage.setAttribute('src' , centerPro3Random.urlImg);
    centerProImage.setAttribute('alt' ,centerPro3Random.name);
  }
  leftProRandom.totalCount += 1;
  righPro2Random.totalCount += 1;
  centerPro3Random.totalCount += 1;
}
for(var i = 0; i<productImg.length;i++ ){
  new Products(productImg[i]); 
}
randomImg();
console.log(product);
function clickImage(e){
  for (var i = 0 ; i < product.length ; i++){
    if (product[i].name === e.target.alt){
      product[i].totalClickspro += 1;
    }
  }
  if((e.target.id ==='pro1img')||(e.target.id ==='pro2img')||(e.target.id ==='pro3img')){
    randomImg();
    totalClicks = totalClicks +  1; 
  }
  if(totalClicks ===25){
    groupImageSection.removeEventListener('click' , clickImage)
    // leftProImage.remove()
    // rightProImage.remove()
    // centerProImage.remove()
    console.log('finished');
    renderFinsh()
    alert('finished')
  }
}

groupImageSection.addEventListener('click' , clickImage);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderFinsh(){
var list = document.getElementById("list");
var ulel = document.createElement('ul');
list.appendChild(ulel);
for(var i = 0 ; i < product.length ; i ++){
  var liel = document.createElement('li');
  liel.textContent = `${product[i].name} had ${product[i].totalClickspro} votes and was shown ${product[i].totalCount} times`
  ulel.appendChild(liel)
}
}

