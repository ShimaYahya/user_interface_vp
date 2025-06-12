document.addEventListener("DOMContentLoaded", function () {
  // Get all project elements
  const projects = document.querySelectorAll(".projects-list-item");

  // Filter form submission
  document
    .getElementById("projectFilterForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      filterProjects();
    });

  // Reset filters
  document
    .getElementById("resetFilters")
    .addEventListener("click", function () {
      document.getElementById("categoryFilter").value = "all";
      document.getElementById("executionFilter").value = "all";
      document.getElementById("cityFilter").value = "all";
      filterProjects();
    });

  // Filter function
  function filterProjects() {
    const category = document.getElementById("categoryFilter").value;
    const execution = document.getElementById("executionFilter").value;
    const city = document.getElementById("cityFilter").value;

    projects.forEach((project) => {
      const projectCategory = project.dataset.category;
      const projectExecution = project.dataset.execution;
      const projectCity = project.dataset.city;

      const categoryMatch = category === "all" || projectCategory === category;
      const executionMatch = execution === "all" || projectExecution === execution;
      const cityMatch = city === "all" || projectCity === city;

      project.closest(".col-lg-4").style.display =
        categoryMatch && executionMatch && cityMatch ? "block" : "none";
    });
  }

  // Show all on load
  filterProjects();
});
