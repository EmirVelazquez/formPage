document.addEventListener("DOMContentLoaded", function () {
    // ==================================================
    // References to elements or Global variables
    // ==================================================
    const form = document.getElementById("survey-form");
    const submitMsg = document.getElementById("formSubmitted");

    // ==================================================
    // Main Web Page Executions
    // ==================================================
    submitMsg.style.display = "none";
    userSubmit();
    clearSubmittMsg()

    // ==================================================
    // Helper Functions
    // ==================================================
    function userSubmit() {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            submitMsg.style.display = "block";
            form.reset();
        });
    };

    function clearSubmittMsg() {
        form.addEventListener("keydown", function () {
            submitMsg.style.display = "none";
        });
    };
});