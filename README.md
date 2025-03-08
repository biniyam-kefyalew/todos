# To-Do List App (v0.1.0)

A simple To-Do List application built with React, Mantine UI library, Zustand for state management (with an option to use Redux instead), and Django as the backend API. This app allows users to manage tasks with features such as priority levels, due dates, categories, search functionality, and sorting.

## Features (v0.1.0)

- **List of Tasks**: Displays all tasks.
- **Pending Tasks**: View tasks that are not yet completed.
- **Completed Tasks**: View tasks that have been completed.
- **Add Tasks**: Add new tasks to the list.
- **Task Completion**: Toggle task completion status.
- **Delete Tasks**: Remove tasks from the list.
- **Priority Levels**: Set task priority levels (Low, Medium, High).
- **Due Dates**: Set and view due dates for tasks.
- **Task Categories**: Categorize tasks (Work, Personal, Shopping, etc.).
- **Search Functionality**: Search for tasks by name or description.
- **Task Sorting**: Sort tasks by priority or due date.
- **Responsive UI**: Built with Mantine UI library for a clean, responsive interface.

## Project Structure

```bash
├── todos/
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

## Installation

### Frontend Setup (React)

1. Navigate to the frontend directory:

```bash
cd todos/frontend
```

2. Install the required Node.js dependencies:

```bash
npm install zustand react-router-dom @mantine/core @mantine/hooks @mantine/dates dayjs
 react-icons
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
- `/search` - Search tasks using title.
- `/task:taskId` - Displays task detail.
- `/add` - Add new task.

### Task Features

- **Task Prioritization**: Users can assign a priority level to tasks (Low, Medium, High).
- **Due Dates**: Tasks can have a due date, and users can view them.
- **Task Categories**: Categorize tasks as Work, Personal, Shopping, or any custom category.
- **Search Functionality**: Easily search for tasks by name or description.
- **Task Sorting**: Sort tasks by priority or due date to organize them better.

### State Management

- The app uses **Zustand** for state management by default. However, if you prefer to use **Redux** for state management, you can easily replace Zustand by integrating Redux with the `taskSlice.js` file for managing tasks globally. The project structure is designed to allow for easy switching between the two state management solutions.

### Task Operations

- **Add Task**: A new task can be added through the input form.
- **Toggle Task Completion**: Click on a task to toggle its completion status.
- **Delete Task**: Tasks can be deleted from the list by clicking the delete button.
- **Search Tasks**: Use the search bar to filter tasks by name or description.
- **Sort Tasks**: Sort tasks by priority (Low, Medium, High) or by due date.

## Tech Stack

- **Frontend**:
  - React
  - Mantine UI Library (for styling and components)
  - Zustand (state management, but Redux can be used if preferred)
  - React Router (for routing)

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
