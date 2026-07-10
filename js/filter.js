const filterButtons = document.querySelectorAll(".categories button");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(function(button){

    button.addEventListener("click", function(){

        // Remove active class from all buttons
        filterButtons.forEach(function(btn){
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        projects.forEach(function(project){

            if(filter === "all" || project.getAttribute("data-category") === filter){

                project.style.display = "block";

            }
            else{

                project.style.display = "none";

            }

        });

    });

});