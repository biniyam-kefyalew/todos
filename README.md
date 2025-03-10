# To-Do List App

A feature-rich To-Do List application built with **React (Frontend)** and **Django (Backend)**. This app enables users to manage tasks efficiently with features like authentication, drag-and-drop, notifications, dark mode, and recurring tasks.

---

## Features (v1.2.1)

### Frontend

- **User Authentication**: Register and log in to manage tasks.
- **Task Management**: Add, edit, complete, and delete tasks.
- **Task Prioritization**: Assign priority levels (Low, Medium, High).
- **Due Dates & Categories**: Set and view deadlines & categorize tasks.
- **Search & Sort**: Find tasks easily by name, priority, or due date.
- **Drag and Drop**: Reorder tasks with a simple interface.
- **Notifications**: Get reminders for due or upcoming tasks.
- **Dark Mode**: Switch between light and dark themes.
- **Recurring Tasks**: Set tasks to repeat daily, weekly, etc.
- **Responsive UI**: Built with **Mantine UI** for a modern look.

### Backend

- **User Authentication**: Secure login & registration using Django.
- **Task Management API**: CRUD operations for managing tasks.
- **Priority & Due Date Management**: Store and fetch task details.
- **Category & Sorting API**: Filter tasks based on priority, due dates, etc.
- **Recurring Task Support**: Handle repeated task schedules.
- **RESTful API**: Built with Django REST Framework (DRF).

---

## Project Structure

```
├── todos/
│   ├── frontend/          # React Frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── features/
│   │   │   ├── layout/
│   │   │   ├── pages/
│   │   │   ├── store/
│   │   │   ├── utils/
│   │   │   ├── App.jsx
│   │   │   ├── main.jsx
│   │   ├── package.json
│   │   ├── vite.config.js
│   ├── backend/          # Django Backend
│   │   ├── api/
│   │   │   ├── models.py
│   │   │   ├── views.py
│   │   │   ├── serializers.py
│   │   │   ├── urls.py
│   │   ├── todos/
│   │   │   ├── settings.py
│   │   │   ├── urls.py
│   │   ├── manage.py
```

---

## Installation & Setup

### Frontend (React)

1. Navigate to the frontend directory:

```bash
cd todos/frontend
```

2. Install dependencies:

```bash
npm install zustand react-router-dom @mantine/core @mantine/hooks @mantine/dates dayjs react-icons react-dnd react-toastify react-calendar
```

3. Start the development server:

```bash
npm run dev
```

The frontend runs at `http://localhost:5173/`.

### Backend (Django)

1. Navigate to the backend directory:

```bash
cd todos/backend
```

2. Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install django djangorestframework django-cors-headers djangorestframework-simplejwt
```

4. Apply database migrations:

```bash
python manage.py migrate
```

5. Create a superuser:

```bash
python manage.py createsuperuser
```

6. Start the Django server:

```bash
python manage.py runserver
```

The backend runs at `http://localhost:8000/`.

---

## API Endpoints (Backend)

### Authentication

- `POST /api/auth/register/` – Register new users.
- `POST /api/auth/login/` – Login and receive a token.
- `POST /api/auth/logout/` – Logout the user.

### Task Management

- `GET /api/tasks/` – Fetch all tasks.
- `POST /api/tasks/` – Create a new task.
- `GET /api/tasks/<task_id>/` – Retrieve a task.
- `PUT /api/tasks/<task_id>/` – Update a task.
- `DELETE /api/tasks/<task_id>/` – Delete a task.

### Task Filters

- `GET /api/tasks/?status=pending` – Fetch pending tasks.
- `GET /api/tasks/?status=completed` – Fetch completed tasks.
- `GET /api/tasks/?priority=high` – Fetch high-priority tasks.
- `GET /api/tasks/?due_today=true` – Fetch tasks due today.

---

## Routes (Frontend)

- `/` - View all tasks.
- `/pending` - View pending tasks.
- `/completed` - View completed tasks.
- `/add` - Add a new task.
- `/task/:taskId` - View task details.
- `/login` - User login.
- `/register` - User registration.

---

## State Management (Frontend)

- **Uses Zustand** for state management.
- Optionally, can be switched to **Redux** by modifying `taskSlice.js`.

---

## Development Notes

1. Ensure both frontend and backend servers are running.
2. The frontend communicates with the backend API for authentication and task management.
3. Uses **Zustand** for global state management and **React Router** for navigation.

---

## Contributing

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature-name
```

3. Commit changes:

```bash
git commit -am 'Add feature'
```

4. Push changes:

```bash
git push origin feature-name
```

5. Submit a Pull Request.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
