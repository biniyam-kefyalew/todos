# To-Do List App Frontend

A feature-rich To-Do List application built with React, Mantine UI, Zustand (with an option to use Redux), and Django as the backend API. This app enables users to manage tasks effectively with advanced functionalities like authentication, drag-and-drop, notifications, dark mode, and recurring tasks.

## Features (v1.2.1)

- **User Authentication**: Users can register and log in to manage their own task lists.
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
- **Drag and Drop**: Reorder tasks using a simple drag-and-drop interface.
- **Notifications**: Receive alerts when a task is due or has an upcoming deadline.
- **Dark Mode**: Users can toggle between light and dark themes.
- **Recurring Tasks**: Create tasks that repeat periodically (daily, weekly, etc.).
- **Responsive UI**: Built with Mantine UI for a clean, adaptable interface.

## Project Structure

```bash
├── todos/
│   ├── frontend/          # Frontend folder for React
│   │   ├── node_modules/  # Dependencies for the project
│   │   ├── public/        # Public assets (favicon, index.html, etc.)
│   │   ├── src/
│   │   │   ├── assets/    # Static assets like images, fonts, etc.
│   │   │   ├── components/ # Reusable React components
│   │   │   ├── features/  # Feature-specific logic
│   │   │   │   ├── auth/  # User authentication logic
│   │   │   │   ├── taskSlice.js
│   │   │   │   ├── notifications.js
│   │   │   │   ├── dragAndDrop.js
│   │   │   ├── layout/    # Layout-related components
│   │   │   ├── pages/     # Application pages
│   │   │   ├── store/     # State management
│   │   │   ├── utils/     # Utility functions
│   │   ├── App.jsx        # Main application component
│   │   ├── main.jsx       # Entry point for rendering the app
│   │   ├── index.css      # Global CSS styles
│   │   ├── package.json   # Project dependencies and scripts
│   │   ├── vite.config.js # Vite configuration
```

## Installation

### Frontend Setup (React)

1. Navigate to the frontend directory:

```bash
cd todos/frontend
```

2. Install the required dependencies:

```bash
npm install zustand react-router-dom @mantine/core @mantine/hooks @mantine/dates dayjs react-icons react-dnd react-toastify react-calendar
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
- `/task/:taskId` - Displays task details.
- `/add` - Add a new task.
- `/login` - User login.
- `/register` - User registration.

### Task Features

- **User Authentication**: Secure login and registration system.
- **Task Prioritization**: Assign priority levels (Low, Medium, High).
- **Due Dates**: Set and view task due dates.
- **Task Categories**: Categorize tasks into custom groups.
- **Search Functionality**: Quickly find tasks by name or description.
- **Task Sorting**: Organize tasks by priority or due date.
- **Drag and Drop**: Easily reorder tasks.
- **Notifications**: Get reminders about upcoming or due tasks.
- **Dark Mode**: Switch between light and dark themes.
- **Recurring Tasks**: Set tasks to repeat daily, weekly, or at custom intervals.

### State Management

- Uses **Zustand** for state management by default.
- Can be switched to **Redux** by modifying `taskSlice.js`.

### Task Operations

- **Add Task**: Create a new task.
- **Toggle Task Completion**: Mark tasks as done or pending.
- **Delete Task**: Remove unwanted tasks.
- **Reorder Tasks**: Use drag-and-drop to change task positions.
- **Search and Filter**: Locate and organize tasks easily.
- **Notifications**: Receive due date alerts.

## Tech Stack

- **Frontend**:
  - React
  - Mantine UI Library
  - Zustand (or Redux for state management)
  - React Router
  - React DnD (for drag-and-drop functionality)
  - React Toastify (for notifications)

## Development

1. Ensure both frontend and backend servers are running.
2. The frontend communicates with the backend API for user authentication and task management.
3. Uses Zustand for global state management and React Router for navigation.
4. Supports Redux integration if preferred.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -am 'Add feature'`).
4. Push changes (`git push origin feature-name`).
5. Submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
