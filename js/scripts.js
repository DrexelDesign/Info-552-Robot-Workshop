let burgerBtn = document.querySelector("#burger-btn");
let navContainer = document.querySelector("#nav-container")

let canISeeTheMenu = false;

// click function
burgerBtn.addEventListener("click", () => {
    // console.log("Button is working!!!");
    if(canISeeTheMenu == false){
        console.log("Show Menu");
        // adds showNavContainer display block class
        navContainer.classList.add("showNavContainer");

        burgerBtn.classList.add("open");

        // sets canISeeTheMenu var to true
        canISeeTheMenu = true;
    } else {
       // removes showNavContainer display block class
       navContainer.classList.remove("showNavContainer");

       burgerBtn.classList.remove("open");

       // sets canISeeTheMenu var to false
       canISeeTheMenu = false;
    }
})

navContainer.addEventListener("click", () =>{
    // removes showNavContainer display block class
    navContainer.classList.remove("showNavContainer");

    burgerBtn.classList.remove("open");

    // sets canISeeTheMenu var to false
    canISeeTheMenu = false;
})


// $(document).ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });