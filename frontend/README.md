# To-Do List App - Frontend

A React-based frontend for the To-Do List application that allows users to manage tasks, with features like task prioritization, due dates, categories, search functionality, and sorting. Built with Mantine UI library for styling and Zustand for state management (Redux is optional).

## Features (v0.1.0)

- **List of Tasks**: Displays all tasks (both completed and pending).
- **Pending Tasks**: View tasks that are still pending.
- **Completed Tasks**: View tasks that have been completed.
- **Add Tasks**: Add new tasks to the list.
- **Task Completion**: Toggle task completion status.
- **Delete Tasks**: Remove tasks from the list.
- **Priority Levels**: Set task priority levels (Low, Medium, High).
- **Due Dates**: Set and view due dates for tasks.
- **Task Categories**: Categorize tasks (e.g., Work, Personal, Shopping).
- **Search Functionality**: Search for tasks by name or description.
- **Task Sorting**: Sort tasks by priority or due date.
- **Responsive UI**: Built with Mantine UI library for a clean, responsive interface.

## Project Structure

```bash
├── node_modules/           # Project dependencies
├── public/                 # Public assets (favicon, index.html, etc.)
├── src/
│   ├── assets/             # Static assets like images, fonts, etc.
│   ├── components/         # Reusable React components
│   │   ├── NavBar.jsx      # Navigation bar component
│   │   ├── TaskCard.jsx    # Task card component
│   ├── features/           # Feature-specific logic
│   │   ├── taskSlice.js    # Zustand state management for tasks
│   │   ├── taskSlice.test.js # Tests for taskSlice
│   ├── layout/             # Layout-related components
│   │   ├── Layout.jsx      # Main layout component
│   ├── pages/              # Application pages
│   │   ├── Completed.jsx   # Completed tasks page
│   │   ├── Pending.jsx     # Pending tasks page
│   │   ├── TaskDetails.jsx # Task details page
│   │   ├── TaskList.jsx    # Task list page
│   ├── store/              # State management
│   │   ├── store.jsx       # Zustand store
│   │   ├── useTaskStore.js # Hook to access the task store
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point for rendering the app
│   ├── index.css           # Global CSS styles
│   ├── index.html          # HTML template
│   ├── package.json        # Project dependencies and scripts
│   ├── README.md           # Frontend documentation
│   ├── vite.config.js      # Vite configuration
```

## Installation

### Frontend Setup (React)

1. Clone the repository and navigate to the `frontend` directory:

```bash
git clone <repository-url>
cd todos/frontend
```

2. Install the required Node.js dependencies:

```bash
npm install zustand react-router-dom @mantine/core @mantine/hooks react-icons @mantine/dates dayjs

```

3. Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173/`.

## Features Details

### Task Operations

- **Add Task**: Add a task using the provided form, which includes fields for task name, description, priority, due date, and category.
- **Task Completion**: Click on a task to toggle its completion status between "Pending" and "Completed".
- **Delete Task**: Remove a task from the list by clicking the delete button on each task card.
- **Priority Levels**: Assign tasks a priority of **Low**, **Medium**, or **High**.
- **Due Dates**: Set a due date for each task and view them in the task details.
- **Task Categories**: Organize tasks into categories such as **Work**, **Personal**, **Shopping**, etc.
- **Search Tasks**: Search for tasks by their name or description in the search bar.
- **Task Sorting**: Sort tasks based on **priority** or **due date** using the sorting dropdown.

### State Management

- The app uses **Zustand** for state management by default. Zustand simplifies the global state handling for tasks across the application.
- If you prefer **Redux** for state management, you can easily integrate Redux by replacing the `taskSlice.js` in the `features/` directory with Redux slices.

### Routes

- `/` - Displays all tasks (completed and pending).
- `/pending` - Displays tasks that are still pending.
- `/completed` - Displays tasks that have been completed.

### Responsive UI

The app is designed to be responsive, providing a smooth experience on both desktop and mobile devices. Mantine UI is used to create a clean and user-friendly interface.

## Tech Stack

- **Frontend**:
  - React (for the UI)
  - Mantine UI (for components and styling)
  - Zustand (for state management, with optional Redux integration)
  - React Router (for routing)

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
