const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question){

    question.addEventListener("click", function(){

        this.parentElement.classList.toggle("active");

    });

});