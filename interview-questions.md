# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: In this case, in order to add the missing foreign key to the Cohort model, we can create a migration file to add a column to the Students table. That will reference the Cohorts table. We could name the foreign key "cohort_id." That foreign key should be added to the Student model because it belongs to the Cohort model. 

Researched answer: To incorporate the absent foreign key in the Cohort model, we will generate a migration file to supplement a column in the Students table. This column will point to the Cohorts table and be labeled as "cohort_id." We have to include this foreign key in the Student model as it pertains to the Cohort model. An example of creating the migration file would be this command: rails generate migration AddCohortRefToStudents cohort:references
and then rails db:migrate 

2. Which RESTful routes must always be passed params? Why?

Your answer: 
GET requires the 'id' parameter to be passed in order to identify the specific user that should be returned.
PUT requires the 'id' parameter to identify the specific user to be updated. This will contain the updated user information.
DELETE requires the 'id' paramter to identify the specific user that should be deleted.
POST requires the 'id' parameter to identify the specific user whose order should be created and the request body to contain the order information.
Any route that requires us to idenitfy a specific resource requires a parameter to be passed. 

Researched answer: Any route that operates on a specific resource or set of resources will require a parameter to identify those resources. This allows us the necessary information to complete any request.  

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generator commands are the following:
    'rails generate model (name of model): This command generates and creates a new ActiveRecord model file with the specified name and actions. It creates a migration file that defines a database table. We have to use 'db/migrate' for this.
    'rail generate migration': this command generates a new migration file in the db/migrate directory with the specified name and fields. Migrations are used to make changes to the schema file in the database. The fields we type in this command will be used to define new columns our table.
    'rails generate resource': creates a full set of CRUD routes. Each file that is created is empty. If we run 'rails generate resource Book title:string author:string', it will create a table named 'books', a model file named 'Book' that defines the 'title' and the 'author' attributes. It will also create a 'BooksController' with empty CRUD actions.

Researched answer: 
    'rails generate scaffold': This command generates a full set of files for a resource, including a model, controller, views, and migration. For example, running 'rails generate scaffold Post title:string body:text' would generate a Post model, a PostsController, and views for listing, creating, editing, and deleting posts. It would also generate a migration to create a posts table in the database.
    'rails generate controller': This command generates a new controller, which is responsible for handling requests and rendering views. For example, running rails generate controller Pages home contact would generate a PagesController with home and contact actions, as well as corresponding view templates.
    'rails generate model': This command generates a new ActiveRecord model, along with a migration to create the corresponding database table. For example, running rails generate model User name:string email:string would generate a new User model with name and email attributes, as well as a migration to create a users table in the database.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
    The controller method would be 'index'. This route would call the 'index' method in the 'StudentsController'. The 'index' method would be used to show the list of all students.

action: "POST" location: /students
    The controller method would be 'create'. This route would call the 'create' method in the 'StudentsController'. The 'create' method would be used to create a new student in the database.

action: "GET" location: /students/new
    The controller method would be 'new'. This route would call the 'new' method in the 'StudentsController'. The 'new' method would be used to show a form for creating a new student.

action: "GET" location: /students/2
    The controller method would be 'show'. This route would call the 'show' method in the 'StudentsController'. The 'show' method would be used to show us the record of a single student.

action: "GET" location: /students/2/edit
    The controller method would be 'edit'. This route would call the 'edit' method in the 'StudentsController'. The 'edit' method would be used to used to display a form for editing an existing student.

action: "PATCH" location: /students/2
    The controller method would be 'update'. This route would call the 'update' method in the 'StudentsController'. The 'update' method would be used to used to update an exisiting student record in the database.

action: "DELETE" location: /students/2
    The controller method would be 'destroy'.  This route would call the destroy method in the StudentsController. The destroy method is typically used to delete an existing student record from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    1. As a user, I want to be able to create a new to-do item, so that I can keep track of tasks that I need to complete.
    2. As a user, I want to be able to mark a to-do item as complete, so that I can track my progress and see what tasks I have left to do.
    3. As a user, I want to be able to edit a to-do item, so that I can update the details or change the due date.
    4. As a user, I want to be able to delete a to-do item, so that I can remove items from my list when they are no longer relevant.
    5. As a user, I want to be able to prioritize my to-do items, so that I can see the most important tasks at the top of my list.
    6. As a user, I want to be able to filter my to-do list by date or priority, so that I can focus on specific tasks that are due soon or are particularly important.
    7. As a user, I want to be able to add notes or comments to a to-do item, so that I can provide additional context or details about the task.
    8. As a user, I want to be able to categorize my to-do items by project or category, so that I can keep related tasks organized together.
    9. As a user, I want to be able to search my to-do list for specific keywords or phrases, so that I can quickly find relevant tasks.
    10. As a user, I want to be able to set reminders for specific to-do items, so that I can receive notifications when tasks are due or need attention.
