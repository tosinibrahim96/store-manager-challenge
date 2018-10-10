const togggleButton = document.querySelector(".toggle-btn");
const sidebar = document.getElementById("sidebar");

$(".admin-box").hide();
$("#show").click(function() {
	$(".attendant-box").hide();
	$(".admin-box").fadeIn(200);
});
$("#hide").click(function() {
	$(".attendant-box").fadeIn(200);
	$(".admin-box").hide();
});

toggleSidebar = () => {
	sidebar.classList.toggle("active");
	sidebar.classList.toggle("show");
};

togggleButton.addEventListener("click", toggleSidebar);
