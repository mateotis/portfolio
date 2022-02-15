console.log('hello!');

let button1 = document.getElementById("button1");

button1.addEventListener('click', () => {

	let line = document.getElementsByClassName("promo promo2")[0];
	line.style.visibility = 'visible';
});

let button2 = document.getElementById("button2");

button2.addEventListener('click', () => {

	let line = document.getElementsByClassName("promo promo3")[0];
	line.style.visibility = 'visible';
});

let button3 = document.getElementById("button3");

button3.addEventListener('click', () => {

	let line = document.getElementsByClassName("vid-title")[0];
	line.style.visibility = 'visible';

	document.getElementsByClassName("content")[0].style.visibility = 'visible';
});
