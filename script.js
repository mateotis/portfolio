let column = "";
let columnContent = "";
let thingsLearned = ["web development", "video editing", "image manipulation", "sound mixing", "comic principles", "wireframing", "responsive design", "digital storytelling"];
let skill = "";

let iamStatus = 0; // How many parts of the "I am" line are displayed

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

$(document).ready(function() { // Show column content on hover
	$("#iam-part-2").hover ( // Instead of having a separate hover event for each column, I made it so that this one works for all of them
		function() { // Hover on
			$("#iam-part-2").html("C0mput3r Sc13nc3 major");
		}, function() { // Hover off
			$("#iam-part-2").html("Computer Science major");
		}
	);
});

$(document).ready(function() { // Click title screen, transition to panel 2
	$(".arrows").click(function() {
		if(iamStatus < 3) {
			iamStatus += 1;
			console.log("#iam-part-" + iamStatus);
			$(".arrows").eq(iamStatus).fadeIn(1000);
			$(".iam-part").eq(iamStatus - 1).fadeIn(1000);
		}


	});
});
