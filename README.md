Here's the modified README with a note about using Redux for state management if preferred:

````markdown
# To-Do List App

A simple To-Do List application built with React, Mantine UI library, Zustand for state management (with an option to use Redux instead), and Django as the backend API. This app allows users to manage tasks by marking them as pending or completed.

## Features

- **List of Tasks**: Display all tasks.
- **Pending Tasks**: View tasks that are not yet completed.
- **Completed Tasks**: View tasks that are completed.
- **Add Tasks**: Add new tasks to the list.
- **Task Completion**: Toggle task completion status.
- **Delete Tasks**: Remove tasks from the list.
- **Responsive UI**: Built with Mantine UI library for a clean, responsive interface.

## Project Structure

```bash
├── todos/
│   ├── README.md          # Project documentation
│   ├── backend/           # Backend folder for Django
│   │   ├── manage.py      # Django project entry point
│   │   ├── todos/         # Django app to manage tasks
│   │   │   ├── __pycache__/
│   │   │   ├── __init__.py
│   │   │   ├── asgi.py
│   │   │   ├── settings.py
│   │   │   ├── urls.py
│   │   │   ├── views.py
│   │   │   ├── wsgi.py
│   │   ├── tasks/
│   │   │   ├── __pycache__/
│   │   │   ├── migrations/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── admin.py
│   │   │   │   ├── apps.py
│   │   │   │   ├── models.py
│   │   │   │   ├── serializers.py
│   │   │   │   ├── tests.py
│   │   │   │   ├── urls.py
│   │   │   │   ├── views.py
│   │   ├── requirements.txt   # List of dependencies for backend
│   ├── frontend/          # Frontend folder for React
│   │   ├── node_modules/  # Dependencies for the project
│   │   ├── public/        # Public assets (favicon, index.html, etc.)
│   │   ├── src/
│   │   │   ├── assets/    # Static assets like images, fonts, etc.
│   │   │   ├── components/ # Reusable React components
│   │   │   │   ├── NavBar.jsx
│   │   │   │   ├── TaskCard.jsx
│   │   │   ├── features/  # Feature-specific logic
│   │   │   │   ├── taskSlice.js
│   │   │   │   ├── taskSlice.test.js
│   │   │   ├── layout/    # Layout-related components
│   │   │   │   ├── Layout.jsx
│   │   │   ├── pages/     # Application pages
│   │   │   │   ├── Completed.jsx
│   │   │   │   ├── Pending.jsx
│   │   │   │   ├── TaskDetails.jsx
│   │   │   │   ├── TaskList.jsx
│   │   │   ├── store/     # State management
│   │   │   │   ├── store.jsx
│   │   │   │   ├── useTaskStore.js
│   │   │   ├── utils/     # Utility functions
│   │   ├── App copy.jsx   # A backup or experimental App component
│   │   ├── App.jsx        # Main application component
│   │   ├── main.jsx       # Entry point for rendering the app
│   │   ├── index.css      # Global CSS styles
│   │   ├── index.html     # HTML template in public/
│   │   ├── .gitignore     # Git ignored files
│   │   ├── eslint.config.js # ESLint configuration
│   │   ├── package-lock.json  # Dependency lock file
│   │   ├── package.json   # Project dependencies and scripts
│   │   ├── README.md      # Frontend documentation
│   │   ├── vite.config.js # Vite configuration
```
````

## Installation

### Backend Setup (Django)

1. Clone the repository:

```bash
git clone https://github.com/biniyam-kefyalew/todos.git
cd todos/backend
```

2. Install the required Python dependencies:

```bash
pip install -r requirements.txt
```

3. Run the Django server:

```bash
python manage.py runserver
```

The backend will be available at `http://127.0.0.1:8000/`.

### Frontend Setup (React)

1. Navigate to the frontend directory:

```bash
cd todos/frontend
```

2. Install the required Node.js dependencies:

```bash
npm install zustand react-router-dom @mantine/core @mantine/hooks
```

3. Start the React development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173/`.

## Usage

### Routes

- `/` - Displays all tasks (both completed and pending).
- `/pending` - Displays only tasks that are still pending.
- `/completed` - Displays only tasks that have been completed.

### State Management

- The app uses **Zustand** for state management by default. However, if you prefer to use **Redux** for state management, you can easily replace Zustand by integrating Redux with the `taskSlice.js` file for managing tasks globally. The project structure is designed to allow for easy switching between the two state management solutions.

### Task Operations

- **Add Task**: A new task can be added through the input form.
- **Toggle Task Completion**: Click on a task to toggle its completion status.
- **Delete Task**: Tasks can be deleted from the list by clicking the delete button.

## Tech Stack

- **Frontend**:

  - React
  - Mantine UI Library (for styling and components)
  - Zustand (state management, but Redux can be used if preferred)
  - React Router (for routing)

- **Backend**:
  - Django (REST API)
  - Django REST Framework (for API endpoints)

## Development

1. Make sure both the frontend and backend servers are running.
2. The frontend communicates with the backend API to fetch, add, delete, and toggle tasks.
3. The app uses Zustand for global state management and React Router for navigation between different views (All Tasks, Pending, and Completed). If you prefer Redux, you can integrate it by replacing the Zustand store in the `store/` directory.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Changes made:
1. **State Management** section updated to mention the option to use Redux instead of Zustand.
2. A note is included on how developers can replace Zustand with Redux if they prefer.

This should give developers flexibility with the state management choice while maintaining clarity on how to use both options.
```
