let bridgeInside = document.getElementById("Inside")

bridgeInside.addEventListener('click', () => {
	document.getElementById("textbox").innerText = "You've clicked on the inside of Budapest's famous Chain Bridge!\n(and revealed my horrible SVG drawing)"
	document.getElementById("bridge").style.opacity = 1;
});
