// Function to get element by ID, for shorter code
const id = (id) => document.getElementById(id);

document.addEventListener('DOMContentLoaded', clearInputs);


// Event listener for save button
id("saveBtn").addEventListener("click", saveData);

// Function to save data to localStorage and sessionStorage
function saveData() {
    // Get the values from the input fields
    let authorName = id("author").value;
    let email = id("email").value;
    let bookTitle = id("book").value;
    let pageCount = id("pageCount").value;

    // Simple validation to check if any of the fields are empty
    if (!authorName || !email || !bookTitle || !pageCount) {
        alert("Please fill out all fields before saving.");
        return;  // Stop execution if any field is empty
    }

    // Create an object to store the data for localStorage and sessionStorage
    let weekTwoLocal = {
        author: authorName,
        email: email,
    };

    let weekTwoSession = {
        bookTitle: bookTitle,
        pageCount: pageCount
    };

    // Store the whole object in both sessionStorage and localStorage as a string instead of storing each value separately
    localStorage.setItem("weekTwoLocal", JSON.stringify(weekTwoLocal));
    sessionStorage.setItem("weekTwoSession", JSON.stringify(weekTwoSession));

    // Notify the user that the data has been successfully saved
    alert("Data saved successfully!");

    // Clear the input fields after saving 
    clearInputs();
    
    

}

// Function to clear input fields
clearInputs(){
    id("author").value = "";
    id("email").value = "";
    id("book").value = "";
    id("pageCount").value = "";
}

// Event listener for fetch button
id("fetchBtn").addEventListener("click", fetchData);

function fetchData(){
    // Retrieve the saved object from localStorage and sessionStorage 
    let localData = JSON.parse(localStorage.getItem("weekTwoLocal")) || {};
    let sessionData = JSON.parse(sessionStorage.getItem("weekTwoSession")) || {};

    let author = localData.author 
    let email = localData.email 
    let book = sessionData.bookTitle 
    let pageCount = sessionData.pageCount 

    // Load data back into the input box
    id("author").value = author;
    id("email").value = email;
    id("book").value = book;
    id("pageCount").value = pageCount;

    // Display welcome message if book title is available
    if (book) {
        id("welcomeMessage").innerText = `Welcome back to the writer’s desk, ${author}. How is your work on "${book}" going?`;
    } else {
        id("welcomeMessage").innerText = "";
    }
}


