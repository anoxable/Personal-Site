let button = document.getElementById('back')
let arrow = document.querySelector('#back i')
const logo = document.getElementsByClassName('logo')
var windowa = lottie.loadAnimation(
  windowa = {
    container: document.querySelector('.window'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './design/design.json'
  })
var house = lottie.loadAnimation(
  house = {
    container: document.querySelector('.animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './house/house.json' // the path to the animation json
  })
var windowd = lottie.loadAnimation(
  windowd = {
    container: document.querySelector('.windows'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/marketing/marketing.json'
  })
var media = lottie.loadAnimation(
  media = {
    container: document.querySelector('.media'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/media/data.json'
  })

back.addEventListener('mouseenter', mouseEnter)
back.addEventListener('mouseleave', mouseLeave)
function mouseEnter () {
  button.style.backgroundColor = '#282840'
  arrow.style.color = 'white'
}
function mouseLeave () {
  button.style.backgroundColor = '#c84c3c'
  arrow.style.color = 'black'
}
// document.getElementById("back").style.display = "none"//
function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('navv').style.backgroundColor = '#282840'
    document.getElementById('logo').className += ' bab'
    button.style.display = 'flex'
  } else {
    document.getElementById('navv').style.backgroundColor = ''
    document.getElementById('logo').classList.remove('bab')
    button.style.display = 'none'
  }
}
function toTop () {
  window.scrollTo(0, 0)
}
button.addEventListener('click', toTop)
document.addEventListener('scroll', scrollFunction)
// Get the modal
var modal = document.getElementById('myModal')
var modal2 = document.getElementById('myModal2')
var modal3 = document.getElementById('myModal3')
// Get the button that opens the modal
var btn = document.getElementById('myBtn')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]
var closeModal = document.getElementsByClassName('closeModal')[0]
var closeModal2 = document.getElementsByClassName('closeModal')[1]
var closeModal3 = document.getElementsByClassName('closeModal')[2]

var btn2 = document.getElementById('myBtn2')
var btn3 = document.getElementById('myBtn3')
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block'
}
btn2.onclick = function () {
  modal2.style.display = 'block'
}
btn3.onclick = function () {
  modal3.style.display = 'block'
}
// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
  modal.style.display = 'none'
}
closeModal2.onclick = function () {
  modal2.style.display = 'none'
}
closeModal3.onclick = function () {
  modal3.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = 'none'
    modal2.style.display = 'none'
  }
}
/*
var myHeaders = new Headers();
var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};
var myRequest = new Request('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139', myInit);
fetch(myRequest)
    .then(res => res.json())
    .then(myJson => console.log(myJson.main.humidity));
*/
