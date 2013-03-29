var FacesApp = function() {
    
    var thankYouNode;
    
    function hookEvents() {
        var happyButton = document.getElementById("happyButton");
        var neutralButton = document.getElementById("neutralButton");
        var sadButton = document.getElementById("sadButton");
        
        happyButton.addEventListener("click", happyClicked);
        neutralButton.addEventListener("click", neutralClicked);
        sadButton.addEventListener("click", sadClicked);
        
        thankYouNode = document.getElementById("thankyou");
    }
    
    function sayThankYou() {
        thankYouNode.classList.remove("hidden");
        thankYouNode.classList.add("visible");
        setTimeout(hideThankYou, 1200);
    }
    
    function hideThankYou() {
        thankYouNode.classList.remove("visible");
        thankYouNode.classList.add("hidden");
    }
    
    function happyClicked() {
        sayThankYou();
    }
    
    function neutralClicked() {
        sayThankYou();
    }

    function sadClicked() {
        sayThankYou();
    }
    
    return {
        initialize: function() {
            document.addEventListener("DOMContentLoaded", function() {
                hookEvents();
            });
        }
    }    
}();

FacesApp.initialize(); 



                          