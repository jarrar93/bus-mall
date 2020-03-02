/* eslint-disable no-unused-vars */
'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats
  Let students participate by suggesting the steps needed to make the app run
  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler firesx
      - ? check if total clicks is 5 ?
      - stop letting the user click
    - if the user reach 5 tries remove image section for goats and display to the user you fininshed.
  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
  We need an Array to hold all image Objects
  function to randomly pick an image{
  }
  click on an image, targetted by id
  add event listener('click', function(){
  })
*/

var goatsImages = [
  'cruisin-goat',
  'goat-away',
  'float-your-goat',
  'goat-out-of-hand',
  'kissing-goat',
  'sassy-goat',
  'smiling-goat',
  'sweater-goat'
];

// Globals
var leftGoatImage = document.querySelector('#left_goat_img');
var rightGoatImage = document.querySelector('#right_goat_img');
var groupImageSection = document.getElementById('all_goats');
var goats = [];//an array to store all goats object
var totalClicks = 1;
var leftGoatThatIsOnThePage;
var rightGoatThatIsOnThePage;
// leftGoatImage.src = `images/${goatsImages[0]}.jpg`;
// leftGoatImage.alt = goatsImages[0];

// rightGoatImage.src = `images/${goatsImages[1]}.jpg`;
// rightGoatImage.alt = goatsImages[1];

//constructor function to generate dynamic goats objects
function Goat(name){
  this.name = name;
  this.urlImage = `images/${this.name}.jpg`;
  this.likes = 0;
  goats.push(this);//this its refer to the object that im created
}
function renderImages(leftImageRandom , rightImageRandom){
  leftGoatImage.setAttribute('src' , leftImageRandom.urlImage);
  leftGoatImage.setAttribute('alt' , leftImageRandom.name);
  rightGoatImage.setAttribute('src' , rightImageRandom.urlImage);
  rightGoatImage.setAttribute('alt' ,rightImageRandom.name);
}
function pickRandomImages(){
  leftGoatThatIsOnThePage = goats[randomNumber(0 , goats.length-1 )];
  rightGoatThatIsOnThePage = goats[randomNumber(0 , goats.length-1 )];
  while(leftGoatThatIsOnThePage === rightGoatThatIsOnThePage){
    leftGoatThatIsOnThePage = goats[randomNumber(0 , goats.length-1 )];
  }
  renderImages(leftGoatThatIsOnThePage , rightGoatThatIsOnThePage);
}

for(var i = 0; i < goatsImages.length ; i++){
  new Goat(goatsImages[i]);//we pass the name of the goats from the array
}
pickRandomImages();

// Variables to store the goats already on the page
// the allImages array is a property of the GoatPicture constructor
function clickImage(e){
  if( e.target.id === 'left_goat_img' || e.target.id === 'right_goat_img'){
    pickRandomImages();
    totalClicks++;
  }
  if(event.target.id === 'left_goat_img'){
    leftGoatThatIsOnThePage.likes++;
  }
  if(event.target.id === 'right_goat_img'){
    rightGoatThatIsOnThePage.likes++;
  }
  if(totalClicks === 6){
    //remove event listener
    groupImageSection.removeEventListener('click' , clickImage);
    rightGoatImage.remove();
    leftGoatImage.remove();
    renderChartResults();
  }
}

groupImageSection.addEventListener('click' , clickImage);

//when they reach total max clicks, remove the clicky function



// Instantiate my image objects
//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(goats);
function renderChartResults(){
  var goatsNames = [];
  var goatsClicks = [];
  for(var i = 0 ; i < goats.length ; i++){
    var goatName = goats[i].name;
    goatsNames.push(goatName);
    var goatLikes = goats[i].likes;
    goatsClicks.push(goatLikes);
  }
  console.log(goatLikes);
  var ctx = document.getElementById('myChart').getContext('2d');
  // eslint-disable-next-line no-undef
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: goatsNames,
      datasets: [{
        label: '# of Votes',
        data: goatsClicks,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}