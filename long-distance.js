AOS.init();

messenger = document.getElementsByClassName("messenger")[0];

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
