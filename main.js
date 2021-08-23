var icon = document.querySelector(".icon");
	var menu = document.querySelector(".menu");

	icon.addEventListener("click", function(){
		menu.classList.toggle("active");
	})