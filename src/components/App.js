
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import React, { Component } from "react"
import { CATEGORIES, TASKS } from "../data";


class App extends Component {
  state = {
    tasks: TASKS,
    categories: CATEGORIES,
    currentCategory: "All",
  };

  // Function to update the current category filter
  updateCategory = (category) => {
    this.setState({ currentCategory: category });
  };

  // Function to add a new task to the list
  addTask = (newTask) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilter
          categories={this.state.categories}
          currentCategory={this.state.currentCategory}
          updateCategory={this.updateCategory}
        />
        <NewTaskForm
          categories={this.state.categories}
          addTask={this.addTask}
        />
        <TaskList
          tasks={this.state.tasks}
          currentCategory={this.state.currentCategory}
        />
      </div>
    );
  }
}

export default App;
