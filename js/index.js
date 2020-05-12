// Your code goes here
 
//  01. click addEventListener 
document.getElementById('myBtn').addEventListener('click', function () {
  document.getElementById('myBtn').innerHTML = 'Email Sent';
});


// 02. click for loop 
const buttons = document.querySelectorAll(".btn");

buttons.forEach((buttonEl) =>{
  buttonEl.addEventListener("click", () => {
    buttonEl.style.color = "#ffc04d";
  })
});

// 03. click changing background
const content = document.querySelectorAll('.text-content')

content.forEach((contentEl) => {
	contentEl.addEventListener('click', (event) => {
		event.target.style.backgroundColor = '#e4d2e4';
	});
});


// 04. mouseenter
const busImage = document.querySelector('.bus-image')

busImage.addEventListener('mouseenter', (element) => {
  busImage.style.transform = "scale(1.8)";
  busImage.style.transition = "all 0.8s";
});

const boatImage = document.querySelector('.boat');

boatImage.addEventListener('mouseenter', (element) => {
	boatImage.style.transform = 'scale(1.8)';
	boatImage.style.transition = 'all 0.8s';
});

// 05. mouseleave 
busImage.addEventListener('mouseleave', () => {
	busImage.style.transform = 'scale(1)';
});

boatImage.addEventListener('mouseleave', () => {
	boatImage.style.transform = 'scale(1)';
});


// 06. mouseover
let test = document.getElementById('test');

test.addEventListener(
	'mouseover',
	function (event) {
		event.target.style.color = '#a2c8c8';

		setTimeout(function () {
			event.target.style.color = '';
		}, 500);
	},
	false
);

// 07. select
 function logSelection(event) {
		const log = document.getElementById('log');
		const selection = event.target.value.substring(
			event.target.selectionStart,
			event.target.selectionEnd
		);
		log.textContent = `You selected: ${selection}`;
 }

 const input = document.querySelector('#test1');
 input.addEventListener('select', logSelection);


 // 08. Double-Click
const changeImage = document.querySelector('.map');

changeImage.addEventListener('dblclick', (event) => {
	console.log(event.target);
	event.target.src =
		'https://i.postimg.cc/vZpXDvfd/andrew-neel-1-29wyvv-LJA-unsplash.jpg';
});


// 09. Stop Propagation
document.querySelector('#id-checkbox').addEventListener(
	'click',
	function (event) {
		document.getElementById('output-box').innerHTML +=
			"Sorry! <code>preventDefault()</code> won't let you check this!<br>";
		event.preventDefault();
	},
	false
);


// 10. Stop Navigation from refreshing
document.querySelector("#test").addEventListener(
  'click',
  function(e){
    e.preventDefault();
  }
);

