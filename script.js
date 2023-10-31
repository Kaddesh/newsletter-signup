const form = document.querySelector("form");
const card = document.querySelector('.container');
const block = document.querySelector('.block-2');
form.addEventListener("submit", function (e) {
	e.preventDefault();
	card.classList.add("hide");
	block.classList.remove("hide");
});