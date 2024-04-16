document.addEventListener("DOMContentLoaded", function(event) { 

    //Local & Global Variables
    const logo = document.getElementsByClassName("logo"), ham = document.getElementById("ham");

    //OnClick event for Class named 'logo'
    for (let i=0; i<logo.length; i++){
        logo[i].addEventListener("click", function(){
            window.location.href="#";
        });
    }


    //Hamburger OnClick event
    ham.addEventListener("click", function(){
        switch (this.classList.contains("ham_active")){
            case false:
                this.classList.add("ham_active");
                nav(false);
            break;
            case true:
                this.classList.remove("ham_active");
                nav(true);
        }
    });


    //Nav ES6 function
    const nav = (condition) => {
        //something here
    }
});
