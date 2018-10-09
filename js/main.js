$(document).ready(function() {
	$(".admin-box").hide();
	$("#show").click(function() {
		$(".attendant-box").hide();
		$(".admin-box").fadeIn(200);
	});
	$("#hide").click(function() {
		$(".attendant-box").fadeIn(200);
		$(".admin-box").hide();
	});
});
