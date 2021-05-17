//Global
let productImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg']

let leftProImage = document.querySelector('#pro1img');
let rightProImage = document.querySelector('#pro2img');
let centerProImage = document.querySelector('#pro3img');
let groupImageSection = document.getElementById('all_Pro');
let product = [];
let noRepeat = [];
let totalClicks = 1

function Products(name) {
  this.name = name;
  this.urlImg = `img/${this.name}`;
  this.totalClickspro = 0;
  this.totalCountViews = 0;
  product.push(this);//this its refer to the object that im created
}

function randomImg() {
  let leftProRandom = product[randomNumber(0, product.length - 1)]
  let rightPro2Random = product[randomNumber(0, product.length - 1)]
  let centerPro3Random = product[randomNumber(0, product.length - 1)]
  leftProImage.setAttribute('src', leftProRandom.urlImg);
  leftProImage.setAttribute('alt', leftProRandom.name);
  rightProImage.setAttribute('src', rightPro2Random.urlImg);
  rightProImage.setAttribute('alt', rightPro2Random.name);
  centerProImage.setAttribute('src', centerPro3Random.urlImg);
  centerProImage.setAttribute('alt', centerPro3Random.name);
  while ((leftProRandom.name === rightPro2Random.name) ||
    (leftProRandom.name === centerPro3Random.name) ||
    (centerPro3Random.name === rightPro2Random.name) ||
    (noRepeat.includes(leftProRandom.name)) ||
    (noRepeat.includes(rightPro2Random.name)) ||
    (noRepeat.includes(centerPro3Random.name))) {
    //pick another random number
    let leftProRandom = product[randomNumber(0, product.length - 1)]
    let rightPro2Random = product[randomNumber(0, product.length - 1)]
    let centerPro3Random = product[randomNumber(0, product.length - 1)]
    leftProImage.setAttribute('src', leftProRandom.urlImg);
    leftProImage.setAttribute('alt', leftProRandom.name);
    rightProImage.setAttribute('src', rightPro2Random.urlImg);
    rightProImage.setAttribute('alt', rightPro2Random.name);
    centerProImage.setAttribute('src', centerPro3Random.urlImg);
    centerProImage.setAttribute('alt', centerPro3Random.name);

  }
  noRepeat = [];
  noRepeat.push(leftProRandom.name, rightPro2Random.name, centerPro3Random.name);
  leftProRandom.totalCountViews += 1;
  rightPro2Random.totalCountViews += 1;
  centerPro3Random.totalCountViews += 1;

}
for (let i = 0; i < productImg.length; i++) {
  new Products(productImg[i]);
}
randomImg();
console.log(product);
function clickImage(e) {
  for (let i = 0; i < product.length; i++) {
    if (product[i].name === e.target.alt) {
      product[i].totalClickspro += 1;
    }
  }
  if ((e.target.id === 'pro1img') || (e.target.id === 'pro2img') || (e.target.id === 'pro3img')) {
    randomImg();
    totalClicks = totalClicks + 1;
  }
  if (totalClicks === 25) {
    groupImageSection.removeEventListener('click', clickImage)
    leftProImage.remove()
    rightProImage.remove()
    centerProImage.remove()
    console.log('finished');
    renderFinsh()
    alert('finished')
    renderChartResults()
  }
}

groupImageSection.addEventListener('click', clickImage);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderFinsh() {
  let list = document.getElementById("list");
  let ulel = document.createElement('ul');
  list.appendChild(ulel);
  for (let i = 0; i < product.length; i++) {
    let liel = document.createElement('li');
    liel.textContent = `${product[i].name} had ${product[i].totalClickspro} votes and was shown ${product[i].totalCountViews} times`
    ulel.appendChild(liel)
  }
}


function renderChartResults() {
  let proNames = [];
  let proClicks = [];
  let proViews = [];
  for (let i = 0; i < product.length; i++) {
    let pronames = product[i].name;
    proNames.push(pronames);
    let pronlicks = product[i].totalClickspro;
    proClicks.push(pronlicks);
    let proviews = product[i].totalCountViews;
    proViews.push(proviews);
  }
  console.log(proNames)
  console.log(proClicks)
  console.log(proViews)
  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: proNames,
      datasets: [{
        label: '# of Votes',
        data: proClicks,
        backgroundColor: [
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
      }, {
        label: '# of Views',
        data: proViews,
        backgroundColor: [
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)'

        ],
        borderColor: [
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(153, 102, 255, 0.7)'

        ],
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