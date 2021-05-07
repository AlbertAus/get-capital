import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import "../App.css";

// This is the App file, adding all the containers in the App

const App = () => (
  <div className="App">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <h3>
      1. Click the "Delete" icon to delete the Todo. (marked with line through
      and red color)
      <br />
      2. Click the first column to toggle Todo to Completed/Active. (Completed
      is marked with line through)
    </h3>
  </div>
);

export default App;
