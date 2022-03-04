AOS.init();

messenger = document.getElementsByClassName("messenger")[0];

// Courtesy of AOS, we can tie events to when specific divs animate in or out - I use it here to change the colour of the background 
document.addEventListener("aos:in:color-change-setup", ({detail}) => {
	messenger.style.backgroundColor = "lightgrey";
});

document.addEventListener("aos:in:color-change-box1", ({detail}) => {
	messenger.style.backgroundColor = "darkgrey";
});

document.addEventListener("aos:in:color-change-box2", ({detail}) => {
	messenger.style.backgroundColor = "#333";
});

document.addEventListener("aos:in:color-change-box3", ({detail}) => {
	messenger.style.backgroundColor = "white";
});
