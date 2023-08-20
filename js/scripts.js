// FancyBox
Fancybox.bind('[data-fancybox]', {
	// Your custom options
	Thumbs : {
	  type: "modern"
	}
});

// AOS
AOS.init();


// Dark Mode
// Select the button
const toggleButton = document.querySelector(".btn-toggle");

let sunIcon = document.querySelector(".fa-sun");
let moonIcon = document.querySelector(".fa-moon");

// Listen for a click on the button
toggleButton.addEventListener("click", function () {
  document.querySelector('html').toggleAttribute('data-dark-mode')

  
  //toggle the sun and moon icon
  sunIcon.classList.toggle('hide-sun')
  moonIcon.classList.toggle('hide-moon')
});


let burgerBtn = document.querySelector("#burger-btn");
let navContainer = document.querySelector("#nav-container");

let canISeeTheMenu = false;

// click function
burgerBtn.addEventListener("click", () => {
	// console.log("Button is working!!!");

	burgerBtn.classList.toggle("open");
	navContainer.classList.toggle("showNavContainer");
	canISeeTheMenu.toggle();

	// if(canISeeTheMenu == false){
	//     console.log("Show Menu");
	//     // adds showNavContainer display block class
	//     navContainer.classList.add("showNavContainer");

	//     // adds the open class to the burger icon
	//     // burgerBtn.classList.add("open");

	//     // sets canISeeTheMenu var to true
	//     canISeeTheMenu = true;
	// } else {
	//    // removes showNavContainer display block class
	// //    navContainer.classList.remove("showNavContainer");

	//     // removes the open class to the burger icon
	//     // burgerBtn.classList.remove("open");

	//    // sets canISeeTheMenu var to false
	//    canISeeTheMenu = false;
	// }
});

navContainer.addEventListener("click", () => {
	// removes showNavContainer display block class
	navContainer.classList.remove("showNavContainer");

	burgerBtn.classList.remove("open");

	// sets canISeeTheMenu var to false
	canISeeTheMenu = false;
});
