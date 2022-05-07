let column = "";
let columnContent = "";
let thingsLearned = ["web development", "video editing", "image manipulation", "sound mixing", "comic principles", "wireframing", "responsive design", "digital storytelling"]; // There's probably stuff I missed...
let skill = "";

let iamCount = 0; // How many parts of the "I am" line are displayed

$(document).ready(function() { // Show column content on hover
	$(".column").hover ( // Instead of having a separate hover event for each column, I made it so that this one works for all of them
		function() { // Hover on
			column = "#" + this.id; // Get the specific column by ID
			columnContent = "#" + this.id + "-content"; // The content divs in the DOM are named uniformly with only the number being different, so we can easily construct this string
			$(columnContent).fadeIn(500);
		}, function() { // Hover off
			$(columnContent).fadeOut(500);
		}
	);
});

function changeSkill() {
	$( "#learned" ).html(function() {
		skill = thingsLearned[Math.floor(Math.random() * thingsLearned.length)]; // Select a random skill I've learned from the above-defined array
		return skill;
	});
	setTimeout(changeSkill, 3000); // Recursive function: calls itself again after three secondsr
}

$(document).ready(function() {
	changeSkill(); // Start the recursion
});

$(document).ready(function() { // Change from l33t speak to normal and back on hover
	$("#iam-part-2").hover ( // This is why I gave each content span an ID
		function() { // Hover on
			$("#iam-part-2").html("C0mput3r Sc13nc3 major");
		}, function() { // Hover off
			$("#iam-part-2").html("Computer Science major");
		}
	);
});

$(document).ready(function() {
	$(".arrows").click(function() { // Fade in the next part of the "I am" line on the click of the arrow
		if(iamCount < 3) { // There are only three parts, so don't run this any more than that
			iamCount += 1;
			$(".arrows").eq(iamCount).fadeIn(1000); // eq() lets us select a specific object from an array made up of objects sharing this class
			$(".iam-part").eq(iamCount - 1).fadeIn(1000); // iamCount serves as the index for both the arrow and content spans - means that we don't need a bunch of if/elses to cover all three parts
		}
	});
});
