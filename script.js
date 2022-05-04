let column = ""
let columnContent = ""

$(document).ready(function() {
	$(".column").hover (
		function() {
			console.log("Hovering over column " + this.id);
			column = "#" + this.id;
			columnContent = "#" + this.id + "-content";

			console.log(column + " " + columnContent);

			$(columnContent).fadeIn(500);
		}, function() {
			$(columnContent).fadeOut(500);
		}
	);
});
