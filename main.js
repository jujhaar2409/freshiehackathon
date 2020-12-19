let navbar = document.getElementById("navbar");
let mainContainer = document.getElementById("main-container");
let mainContainerHeading = document.getElementById("main-container-heading");
let cardContainer = document.getElementById("card-container");
let menuBtn = document.getElementById("menu-btn");
let dropdownItems = document.getElementById("dropdown-items");
let bodyContainer = document.getElementById("body-container");
let dropdownBtns = document.getElementsByClassName("dropdown-button");
let navicon3 = document.getElementById("nav-icon3");

// navicon3.addEventListener("click", toggleHamburger);
window.addEventListener("scroll", navbarChange);
menuBtn.addEventListener("click", menuClick);
bodyContainer.addEventListener("touchstart", focusOut);
bodyContainer.addEventListener("click", focusOut);

for (let i = 0; i < dropdownBtns.length; i++) {
	dropdownBtns[i].addEventListener("click", focusOut);
}

let trigger = 0.6;

function toggleHamburger() {
	if (navicon3.classList == "open") {
		navicon3.classList = "";
	} else {
		navicon3.classList = "open";
	}
}

function navbarChange(event) {
	console.log("scrolled, pageYoffset: " + window.pageYOffset);
	if (window.pageYOffset / window.innerHeight > trigger) {
		navbar.classList = "navbar scrolled-down";
	} else {
		navbar.classList = "navbar";
	}

	if (window.pageYOffset >= 290) {
		mainContainerHeading.style.opacity = "100%";
		cardContainer.style.opacity = "100%";
	} else {
		mainContainerHeading.style.opacity = "0%";
		cardContainer.style.opacity = "0%";
	}
	focusOut();
}

function toggleClassOfDropdown() {
	if (dropdownItems.classList == "") {
		dropdownItems.classList = "show";
	} else {
		dropdownItems.classList = "";
	}
}
function invisibleDropdown() {
	dropdownItems.classList = "";
	navicon3.classList = "";
	// toggleHamburger();
}

function menuClick(event) {
	event.preventDefault();

	toggleClassOfDropdown();

	toggleHamburger();
}

function focusOut() {
	invisibleDropdown();
}

// Define selector for selecting
// anchor links with the hash
let anchorSelector = 'a[href^="#"]';

// Collect all such anchor links
let anchorList = document.querySelectorAll(anchorSelector);

// Iterate through each of the links
anchorList.forEach(link => {
	link.onclick = function(e) {
		// Prevent scrolling if the
		// hash value is blank
		e.preventDefault();

		// Get the destination to scroll to
		// using the hash property
		let destination = document.querySelector(this.hash);

		// Scroll to the destination using
		// scrollIntoView method
		destination.scrollIntoView({
			behavior: "smooth"
		});
	};
});
