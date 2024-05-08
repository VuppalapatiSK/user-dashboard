**TITLE**
Simple User Management dashboard Project

**Description**
This project is a simple CRUD (Create, Read, Update, Delete) operations implementation. This project provides a clear and concise example of how to perform CRUD operations.

**Key Features**
* Create new records.
* Read existing records.
* Update records.
* Delete records.

  **Project Setup**
# install project
$ git clone https://github.com/rahulfaujdar/react-crud-application.git
# open app directory
$ cd react-crud-application
# install dependencies
$ npm i || npm install
# start
$ npm start

**Implementation Details**
1. Setting Up React Components  
Created separate components for each CRUD operation (Create, Read, Update, Delete).
Used functional components,

2. Managing State
Utilize React-redux tool state to manage data.
Maintain state for storing records or items to be manipulated.

3. Create (Add) Operation
Implement a form component to capture input data.
Handle form submission to create new records.
Update state with the newly created record.

4. Read Operation
Display existing records in a table format.
Fetch data from state and render it within the component.

5. Update Operation
Can be edited by clicking on the record
Implemented an edit feature to modify existing records.
Display an editable form populated with record details.
Update state with the edited record upon submission.

6. Delete Operation
Provided button on every record to delete records.
Implemented a confirmation dialog for deletion.
can be removed the deleted record from the state.

7. Routing
Used React Router for client-side routing .
Defined routes for each CRUD operation and manage navigation.

8. Styling and UI
Applied styling frameworks ( Bootstrap) for a visually appealing UI.
