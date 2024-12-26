To-Do List Application
This is a simple to-do list application implemented using HTML and JavaScript. It allows users to add and delete tasks dynamically.

Features
Add Tasks:
Users can input a task in the text field and click the "Add" button to add it to the list.
Delete Tasks:
Each task has a "Delete" button. Clicking it removes the corresponding task from the list.
Event Delegation for Deletion:
Event delegation is used to handle the dynamically added delete buttons, ensuring seamless functionality.
Code Explanation
Adding Tasks
When the "Add" button is clicked:

A new list item (<li>) is created.
A "Delete" button is appended to the list item.
The list item is then added to the <ul>.
Deleting Tasks
To handle dynamically added delete buttons:

Event delegation is used by attaching a single event listener to the <ul> element.
The listener checks if the clicked target is a button and, if so, removes the corresponding list item.
