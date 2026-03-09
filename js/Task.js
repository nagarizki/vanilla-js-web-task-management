class Task {
  constructor() {
    this.tasks = this.getTasks();
  }

  getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  saveTask(taskData) {
    const newTaskData = {
      id: Date.now(),
      isCompleted: false,
      ...taskData,
    };

    this.tasks.push(newTaskData);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));

    return {
      success: true,
    };
  }

  completeTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      this.tasks[taskIndex].isCompleted = true;
      this.updateLocalStorage();
    }
  }

  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
