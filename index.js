document.addEventListener("DOMContentLoaded", function() {
    const projectContainer = document.getElementById("project-carousel");
    const projects = document.querySelectorAll(".project");
    const expandbtns = document.querySelectorAll(".expand");

    // projects.forEach(project => {
    //     project.addEventListener("click", function() {
    //         projectContainer.classList.toggle("expanded");
    //         project.classList.toggle("expanded");
    //     });
    // });

    expandbtns.forEach(expandbtn => {
        expandbtn.addEventListener("click", function() {
            project = expandbtn.parentElement;
            project.classList.toggle("expanded");
            projectContainer.classList.toggle("expanded");
            if (project.classList.contains("expanded")) {
                expandbtn.innerText = "Back to Projects";
            } else {
                expandbtn.innerText = "View Project";
            }
        })
    })

});