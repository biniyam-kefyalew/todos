# To-Do List App - Backend

A Django-based backend API for the To-Do List application. The backend handles the CRUD operations for tasks, including adding, updating, deleting, and fetching tasks with features like priority, due dates, categories, and more.

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
│   ├── manage.py            # Django project management file
│   ├── todos_backend/       # Django project folder
│   │   ├── __init__.py      # Package initialization
│   │   ├── settings.py      # Django settings (database, security, etc.)
│   │   ├── urls.py          # API URL routing
│   │   ├── asgi.py          # ASGI config for asynchronous server setup
│   │   ├── wsgi.py          # WSGI config for production deployment
│   ├── tasks/               # App for task management
│   │   ├── migrations/      # Database migrations for tasks app
│   │   ├── models.py        # Task model definitions (priority, due date, etc.)
│   │   ├── serializers.py   # Serializers for converting model data to JSON
│   │   ├── views.py         # API views to handle task CRUD operations
│   │   ├── urls.py          # URLs for task-related API routes
│   ├── requirements.txt     # List of project dependencies
│   ├── .gitignore           # Git ignored files
│   ├── README.md            # Backend documentation
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

4. Apply the migrations to set up the database:

```bash
python manage.py migrate
```

5. Start the Django development server:

```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000/`.

## API Endpoints

### Tasks

- **GET `/api/tasks/`**: Retrieve all tasks.
- **GET `/api/tasks/<task_id>/`**: Retrieve a specific task by ID.
- **POST `/api/tasks/`**: Add a new task. Requires `name`, `description`, `priority`, `due_date`, and `category`.
- **PUT `/api/tasks/<task_id>/`**: Update an existing task (e.g., mark as completed, change priority).
- **DELETE `/api/tasks/<task_id>/`**: Delete a task by ID.

### Task Data Structure

Tasks are stored in the database with the following fields:

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
  - SQLite (for the database, but can be configured to use other databases like PostgreSQL)

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
