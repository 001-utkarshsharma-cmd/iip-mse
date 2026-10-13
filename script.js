
function changeHeading() {
    document.getElementById("mainHeading").textContent =
        "Welcome to the World of Books!";
    
}

function changeCardColor() {
    document.getElementById("book1").classList.toggle("highlight");
    document.getElementById("book2").classList.toggle("highlight");
    document.getElementById("book3").classList.toggle("highlight");
}

function toggleBooks() {
    let section = document.getElementById("featuredSection");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function requestBook(button) {
    button.textContent = "Request Sent";

    document.getElementById("requestMessage").textContent =
        "Your book request has been submitted successfully!";
}
function showBook() {
    let title = document.getElementById("bookTitle").value;

    if (title.trim() === "") {
        document.getElementById("titleMessage").textContent =
            "Please enter a book title.";

        document.getElementById("displayTitle").textContent = "";
    } else {
        document.getElementById("displayTitle").textContent =
            "Book Title: " + title;

        document.getElementById("titleMessage").textContent =
            "Book title submitted successfully!";
    }
}
function changeBookAppearance() {
    document.getElementById("book1").classList.toggle("changed-card");
}
function submitBook(event) {
    event.preventDefault();
    let name = document.getElementById("studentName").value.trim();
    let title = document.getElementById("newBookTitle").value.trim();
    let author = document.getElementById("author").value.trim();
    let category = document.getElementById("category").value.trim();
    let condition = document.getElementById("condition").value;

    let message = document.getElementById("formMessage");

    if (
        name === "" ||
        title === "" ||
        author === "" ||
        category === "" ||
        condition === ""
    ) {
        message.textContent =
            "Error: Please fill in all required fields.";

        message.style.color = "red";
    } else {

        message.textContent =
            "Thank you, " + name +
            "! Your book '" + title +
            "' has been listed successfully.";

        message.style.color = "green";
    }
}

function changeFormHeadingSize() {

    let heading = document.getElementById("formHeading");

    if (heading.style.fontSize === "30px") {
        heading.style.fontSize = "24px";
    } else {
        heading.style.fontSize = "30px";
    }
}

function toggleForm() {

    let form = document.getElementById("bookForm");

    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
