// // // Select the "Add Task" button by its id
// const addTaskButton = document.getElementById("but");

// // Add an event listener to the button
// addTaskButton.addEventListener("click", addNote);

// // Define the addNote function
// function addNote() {
//     var noteInput = document.getElementById("noteInput");
//     var noteText = noteInput.value.trim();

//     if (noteText !== "") {
//         var span = document.createElement("span");
//         span.textContent = noteText;
//         span.contentEditable = "true"; // Make span editable

//         var noteList = document.getElementById("noteList");
//         var li = document.createElement("li");
//         li.appendChild(span);

//         var deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.className = "delete-btn";
//         deleteBtn.onclick = function() {
//             noteList.removeChild(li);
//         };

//         li.appendChild(deleteBtn);
//         noteList.appendChild(li);

//         noteInput.value = "";
//     } else {
//         alert("Please enter a note!");
//     }
// }




// // Select the "Add Task" button by its id
// const addTaskButton = document.getElementById("but");

// // Add an event listener to the button
// addTaskButton.addEventListener("click", addNote);

// // Define the addNote function
// function addNote() {
//     var noteInput = document.getElementById("noteInput");
//     var noteText = noteInput.value.trim();

//     if (noteText !== "") {
//         var span = document.createElement("span");
//         span.textContent = noteText;
//         span.contentEditable = "true"; // Make span editable

//         var noteList = document.getElementById("noteList");
//         var li = document.createElement("li");
//         li.appendChild(span);

//         var deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.className = "delete-btn";
//         deleteBtn.onclick = function() {
//             noteList.removeChild(li);
//             updateLocalStorage(); // Remove from local storage when deleted
//         };

//         li.appendChild(deleteBtn);
//         noteList.appendChild(li);

//         // Store task in local storage
//         storeTaskInLocalStorage(noteText);

//         noteInput.value = "";
//     } else {
//         alert("Please enter a note!");
//     }
// }

// // Function to store task in local storage
// function storeTaskInLocalStorage(task) {
//     let tasks;
//     if (localStorage.getItem("tasks") === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     tasks.push(task);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // Function to get tasks from local storage and display them
// function getTasksFromLocalStorage() {
//     let tasks;
//     if (localStorage.getItem("tasks") === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     tasks.forEach(function(task) {
//         var span = document.createElement("span");
//         span.textContent = task;
//         span.contentEditable = "true"; // Make span editable

//         var noteList = document.getElementById("noteList");
//         var li = document.createElement("li");
//         li.appendChild(span);

//         var deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.className = "delete-btn";
//         deleteBtn.onclick = function() {
//             noteList.removeChild(li);
//             updateLocalStorage(); // Update local storage when deleted
//         };

//         li.appendChild(deleteBtn);
//         noteList.appendChild(li);
//     });
// }

// // Function to remove task from local storage when deleted
// function updateLocalStorage() {
//     let tasks = JSON.parse(localStorage.getItem("tasks"));

//     // Get the index of the task being deleted
//     const index = tasks.indexOf(task);

//     // Remove the task from the array
//     tasks.splice(index, 1);

//     // Update local storage
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // Load tasks from local storage when the page loads
// document.addEventListener("DOMContentLoaded", getTasksFromLocalStorage);
// Select the "Add Task" button by its id
const addTaskButton = document.getElementById("but");
// Select the "Clear All" button by its id
const clearAllButton = document.getElementById("clearAllBtn");

// Add event listeners to the buttons
addTaskButton.addEventListener("click", addNote);
clearAllButton.addEventListener("click", clearAllNotes);

// Define the addNote function
function addNote() {
    var noteInput = document.getElementById("noteInput");
    var noteText = noteInput.value.trim();

    if (noteText !== "") {
        var span = document.createElement("span");
        span.textContent = noteText;
        span.contentEditable = "true"; // Make span editable

        var noteList = document.getElementById("noteList");
        var li = document.createElement("li");
        li.appendChild(span);

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            noteList.removeChild(li);
            updateLocalStorage(); // Remove from local storage when deleted
        };

        li.appendChild(deleteBtn);
        noteList.appendChild(li);

        // Store task in local storage
        storeTaskInLocalStorage(noteText);

        noteInput.value = "";
    } else {
        alert("Please enter a note!");
    }
}

// Function to store task in local storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to get tasks from local storage and display them
function getTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task) {
        var span = document.createElement("span");
        span.textContent = task;
        span.contentEditable = "true"; // Make span editable

        var noteList = document.getElementById("noteList");
        var li = document.createElement("li");
        li.appendChild(span);

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            noteList.removeChild(li);
            updateLocalStorage(); // Update local storage when deleted
        };

        li.appendChild(deleteBtn);
        noteList.appendChild(li);
    });
}

// Function to remove task from local storage when deleted
function updateLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    // Get the index of the task being deleted
    const index = tasks.indexOf(task);

    // Remove the task from the array
    tasks.splice(index, 1);

    // Update local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to clear all tasks from local storage and UI
function clearAllNotes() {
    // Clear local storage
    localStorage.removeItem("tasks");

    // Clear UI
    document.getElementById("noteList").innerHTML = "";
}

// Load tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", getTasksFromLocalStorage);
