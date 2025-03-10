# To-Do List App - Backend

A Django-based backend API for the To-Do List application. The backend handles the CRUD operations for tasks, including adding, updating, deleting, and fetching tasks with features like priority, due dates, categories, and more. MongoDB is used for data storage.

## Features (v0.1.0)

- **List of Tasks**: Retrieve all tasks, including pending and completed tasks.
- **Add Task**: Add new tasks with details like name, description, priority, due date, and category.
- **Update Task**: Update existing task details, including task completion status, priority, due date, and category.
- **Delete Task**: Delete a task from the list.
- **Task Priority**: Set priority levels (Low, Medium, High) for each task.
- **Task Due Dates**: Set and retrieve due dates for tasks.
- **Task Categories**: Categorize tasks (e.g., Work, Personal, Shopping).

## Project Structure

```bash
todos/
├── backend/
│   ├── manage.py
│   ├── todos_backend/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   ├── wsgi.py
│   ├── tasks/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   ├── users/               # User authentication app
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py   # Handles user authentication data
│   │   ├── views.py         # User login & registration logic
│   │   ├── urls.py          # Authentication API routes
│   ├── requirements.txt
│   ├── .gitignore
│   ├── README.md
```

## Installation

### Backend Setup (Django)

1. Clone the repository and navigate to the `backend` directory:

```bash
git clone <repository-url>
cd todos/backend
```

2. Set up a virtual environment (recommended):

```bash
python -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate     # For Windows
```

3. Install the required Python dependencies:

```bash
pip install -r requirements.txt
```

4. Configure MongoDB as your database:

   - Install the `djongo` package, which allows Django to work with MongoDB:
     ```bash
     pip install djongo
     ```
   - In `settings.py`, update the `DATABASES` setting as follows:
     ```python
     DATABASES = {
         'default': {
             'ENGINE': 'djongo',
             'NAME': 'todos_db',  # Replace with your MongoDB database name
         }
     }
     ```

5. Apply the migrations to set up the database:

```bash
python manage.py migrate
```

6. Start the Django development server:

```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000/`.

## API Endpoints

### User Authentication

- **POST /api/auth/login**: Logs in a user. Requires `email` and `password`.
- **POST /api/auth/register**: Registers a new user. Requires `name`, `email`, and `password`.

### Task Management

- **GET /api/tasks/**: Retrieve all tasks for the authenticated user.
  - Returns an array of all tasks assigned to the currently logged-in user.
- **GET /api/tasks/<task_id>/**: Retrieve a specific task by its ID.

  - Requires a valid task ID.
  - Returns the task with the specified ID.

- **POST /api/tasks/**: Add a new task for the authenticated user.

  - Requires `name`, `description`, `priority`, `due_date`, and `category`.
  - Creates a new task associated with the logged-in user.

- **PUT /api/tasks/<task_id>/**: Update an existing task (e.g., mark as completed or change priority).

  - Requires `task_id` and any fields you want to update (e.g., `status`, `priority`, `due_date`).

- **DELETE /api/tasks/<task_id>/**: Delete a task by its ID.
  - Requires a valid task ID.
  - Deletes the specified task from the database.

### Task Data Structure

Tasks are stored in MongoDB with the following fields:

- `id`: Unique task ID
- `name`: Task name
- `description`: Task description
- `priority`: Task priority (Low, Medium, High)
- `due_date`: Task due date
- `category`: Task category (e.g., Work, Personal, Shopping)
- `completed`: Boolean to mark whether the task is completed

## Tech Stack

- **Backend**:
  - Django (Web framework)
  - Django REST Framework (for API endpoints)
  - MongoDB (for data storage, using Djongo as a connector)

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
