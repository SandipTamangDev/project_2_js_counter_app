# **Counter App (Vanilla JavaScript) — README**

## **📌 Overview**

This is a simple Counter App built with **pure JavaScript, HTML, and CSS**.
The goal is to help beginners strengthen their fundamentals before moving to bigger projects like Todo Lists or Habit Trackers.

The app has three actions:

* **Increase**
* **Decrease**
* **Reset**

It teaches core concepts that every JavaScript developer must master.

---

# **📚 Before You Start — What You Must Learn**

## **1. Basic HTML Structure**

You should understand:

* What `<div>`, `<button>`, and `<script>` tags do
* How to link a CSS file
* How to link a JS file

This helps you create the UI container for the counter.

---

## **2. DOM Selection**

Learn how to grab elements from the page using:

* `document.querySelector()`
* `document.getElementById()`

Example understanding (no code needed here):
“You need to pick the counter value element and the three buttons.”

---

## **3. Events in JavaScript**

Know how to respond when a user clicks a button.
Concepts to understand:

* What is an event listener?
* What is a callback function?
* How to connect button clicks to functions

This allows the counter to actually change numbers.

---

## **4. Variables & State**

Understand:

* What a variable is
* How to store a number in it
* How to update that number

This is the core of your counter: the **current count** is stored in a variable.

---

## **5. Updating the DOM**

Know how to change text on the page using JavaScript.
Concept:

* “When state changes → update the displayed number.”

This teaches the fundamental “state → UI” pattern used everywhere (React, Vue, etc.).

---

# **🎯 What This Project Teaches You**

* How to structure a small app
* How to use a state variable
* How to connect buttons to JavaScript logic
* How to update the UI with clean functions
* How to avoid `NaN` or broken values
* How to think in small, modular functions
* How to build something simple but polished

This project is the perfect warm-up before:

* Todo App
* Theme Switcher
* Habit Tracker
* Any CRUD project

---

# **🧪 Testing Checklist**

Make sure these work:

### **Functional**

* Increase button raises the number
* Decrease reduces the number
* Reset brings it back to 0

### **No bugs**

* Value never becomes NaN
* Buttons always respond
* UI updates immediately

---

# **📂 Folder Structure**

```
counter/
│
├── index.html     # Page layout
├── style.css      # Basic styles
└── app.js         # JavaScript logic
```

---

# **🚀 How to Run**

1. Download the folder
2. Open **index.html** in any browser
3. Start clicking the buttons — no setup required

---

# **🤝 Contributions**

Beginner-friendly.
Anyone can improve:

* Design
* Button animations
* Layout
* Accessibility