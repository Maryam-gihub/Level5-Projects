Level 5 Projects

This repository contains four mini React projects built as part of a Level 5 assignment.
Each project demonstrates the use of a core data structure (Queue, Stack, Set, Map) and how it can be applied in real-world web applications using React.

All projects are contained in one React app, with separate component files for each question.

Project 1: Task Scheduler (Queue-Based)
Description

A simple task scheduler where tasks are added and processed in First-In-First-Out (FIFO) order.

Logic

Tasks are stored in an array acting as a queue.

New tasks are added to the end of the queue.

Only the first task can be processed at a time.

When processing starts, a temporary “Processing…” message is displayed.

After processing, the task is removed from the queue.

Data Structure Used

Queue (FIFO)

Project 2: Undo–Redo System (Stack-Based)
Description

Simulates an undo and redo feature similar to what is found in text editors.

Logic

Two stacks are used:

Undo stack stores performed actions.

Redo stack stores undone actions.

Adding a new action pushes it to the undo stack and clears the redo stack.

Undo pops the last action from undo and pushes it to redo.

Redo pops from redo and pushes back to undo.

Data Structure Used

Stack (LIFO)

Project 3: Unique Visitor Tracker (Set-Based)
Description

Tracks unique visitors by storing their IDs or emails and preventing duplicates.

Logic

Visitors are stored in a Set, which automatically prevents duplicates.

When a visitor is added:

If they already exist, they are ignored.

If they are new, they are added to the set.

The total number of unique visitors is displayed.

All visitor IDs/emails are listed on the screen.

Data Structure Used

Set

Project 4: Contact Manager (Map-Based)
Description

A contact management app that stores, searches, and displays contact information.

Logic

Contacts are stored as key–value pairs using a Map:

Key → Contact name

Value → Phone number

Users can:

Add new contacts

View all saved contacts

Contacts are saved to localStorage, so data persists after page refresh.

Data Structure Used

Map

Folder Structure
level5-projects/
├─ src/
│  ├─ components/
│  │  ├─ TaskScheduler.jsx
│  │  ├─ UndoRedo.jsx
│  │  ├─ VisitorTracker.jsx
│  │  └─ ContactManager.jsx
│  │
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
│
├─ package.json
├─ vite.config.js
└─ README.md

Technologies Used

React (Functional Components & Hooks)

JavaScript

Tailwind CSS

LocalStorage

React Router

Deployment

The project is hosted on GitHub and deployed using Vercel.

Most Significant Feature Implemented

The most significant feature implemented is the use of core data structures (Queue, Stack, Set, Map) to solve real-world problems, such as task scheduling, undo–redo functionality, duplicate prevention, and contact management, all within a single React application.