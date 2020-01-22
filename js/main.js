// Selecting Elements
const date = document.getElementById('date');
const inputBox = document.getElementById('inputBox');
const theList = document.getElementById('theList');

// Styling Classes
const COMPLETED = 'fas fa-check-circle icon';
const NOTCOMPLETED = 'far fa-circle icon';
const LINE_THROUGH = 'lineThrough icon';


// Function to add a to-do //
function addToDo(newItemInput) {
    // Defining Variables for the method
	const position = 'beforeend';
	let text = `
        <li class="listItem">
            <i class="${NOTCOMPLETED}" job="complete"></i> 
            <p>${newItemInput}</p>
            <i class="fas fa-trash-alt" job="trash"></i>
        </li>`;

    // Method to insert the HTML
	theList.insertAdjacentHTML(position, text);

    // Clears the input box after each entry
	inputBox.value = '';
}


// Listen for that enter key //
document.addEventListener('keyup', function(event) {
    // Defining variables
	const todo = inputBox.value;

    //If the enter key (#13) is pressed, and there is a todo in the box, run the addToDo function above.
	if (event.keyCode == 13) {
		if (todo) {
			addToDo(todo);
		}
	}
});

// Check which item was clicked and either check, uncheck, or delete //
theList.addEventListener('click', function(event) {
    // Defining Variables
	const element = event.target;
	let job = element.attributes.job.value;

    // Removes the list item whose "trash button" was clicked //
    if (job == 'trash') {
        element.parentElement.parentElement.removeChild(element.parentElement);
    };

// Changes the styling of the list item if the "complete button" is pushed. If the current class of the button is NOT COMPLETED, then it will change to COMPLETED and vice versa. Also, if the styling is currently LINE THROUGH, it will change to no styling or vice versa.
	if (job == 'complete') {
		switch (element.className) {
            case NOTCOMPLETED:
            element.className = COMPLETED;
            element.nextElementSibling.className = LINE_THROUGH;
            break;
        case COMPLETED:
            element.className = NOTCOMPLETED;
            element.nextElementSibling.className = "";
            break;
        }
	};


});