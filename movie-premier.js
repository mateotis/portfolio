// Click-through code to gradually reveal the page through use of the 'visibility' attribute
let button1 = document.getElementById("button1");
button1.addEventListener('click', () => {

	let line = document.getElementsByClassName("promo promo2")[0]; // Since getElementsByClassName() returns a list, we have to specify which element we pick (there should only be one in this case)
	line.style.visibility = 'visible';
});

let button2 = document.getElementById("button2");
button2.addEventListener('click', () => {

	let line = document.getElementsByClassName("promo promo3")[0];
	line.style.visibility = 'visible';
});

let button3 = document.getElementById("button3");
button3.addEventListener('click', () => {

	let content = document.getElementsByClassName("content")[0];
	content.style.visibility = 'visible';
});
