document.addEventListener("DOMContentLoaded", () => {
  function capitalizeFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function formatDate(userFriendlyDate) {
    const date = new Date(userFriendlyDate);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return date.toLocaleDateString("en-GB", options);
  }

  // membuat instance baru dari Task untuk mengakses method getTasks
  const myTasks = new Task();

  // membuat variabel untuk mengambil data task yang sudah ada di localStorage
  const existingTasks = myTasks.getTasks();
  const taskWrapper = document.getElementById("taskWrapper");

  const taskWrapperEmpty = document.getElementById("taskWrapperEmpty");

  function displayAllTasks(tasks = existingTasks) {
    if (tasks.length === 0) {
      taskWrapperEmpty.className = "flex justify-center items-center mx-auto";
      taskWrapper.className = "hidden";
      console.log("Tidak ada task yang ditemukan");
    } else {
      taskWrapper.innerHTML = "";
      taskWrapperEmpty.className = "hidden";
      console.log(
        "task tersedia - rendering " + existingTasks.length + " tasks",
      );

      tasks.forEach((task) => {
        const userFriendlyDate = formatDate(task.createdAt);
        const itemTask = document.createElement("div");
        itemTask.className =
          "flex justify-between bg-white p-5 w-full rounded-3xl";
        itemTask.innerHTML = `
                <div class="task-card flex flex-col gap-5">
                    <div class="flex items-center gap-3">
                        <div class="w-[50px] [h-50px] flex shrink-0 items-center justify-center bg-[#BDEBFF] rounded-full">
                            <img src="img/icons/ghost.svg" alt="icon">
                        </div>
                        <div class="flex flex-col">
                            <h3 class="font-bold text-lg leading-[27px]">${capitalizeFirstLetter(task.taskName) || "Untitled Task"}</h3>
                            <p class="text-sm leading-[21px] text-taskia-grey">Created at ${userFriendlyDate || "2026-03-09"}</p>
                        </div>
                    </div>
                    <div class="flex gap-4 font-semibold text-sm leading-[21px]">
                        <div class="flex gap-1 items-center">
                            <div class="flex shrink-0 w-5 h-5">
                                <img src="img/icons/layer.svg" alt="icon">
                            </div>
                            <p>${task.taskPriority || "Normal"}</p>
                        </div>
                        ${
                          task.isCompleted === false
                            ? `<div class="flex gap-1 items-center">
                                <div class="flex shrink-0 w-5 h-5">
                                    <img src="img/icons/clock.svg" alt="icon">
                                </div>
                                <p>In Progress</p>
                            </div>`
                            : `<div class="flex gap-1 items-center">
                                <div class="flex shrink-0 w-5 h-5">
                                    <img src="img/icons/tick-circle.svg" alt="icon">
                                </div>
                                <p>Completed</p>
                            </div>`
                        }
                    </div>
                </div>
                <div class="flex flex-row items-center gap-x-3">

                    <a href="#" id="deleteTask-${task.id}" class="my-auto font-semibold text-taskia-red border border-taskia-red p-[12px_20px] h-12 rounded-full">Delete</a>

                    ${
                      task.isCompleted === false
                        ? `<a href="#" id="completeTask-${task.id}" class="flex gap-[10px] justify-center items-center text-white p-[12px_20px] h-12 font-semibold bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full w-full border border-taskia-background-grey">Complete</a>`
                        : `<a href="#" id="completeTask-${task.id}" class="hidden"></a>`
                    }
                </div>
            `;
        taskWrapper.appendChild(itemTask);

        itemTask
          .querySelector(`#completeTask-${task.id}`)
          .addEventListener("click", (e) => {
            e.preventDefault();
            myTasks.completeTask(task.id);
            const updateTasks = myTasks.getTasks();
            displayAllTasks(updateTasks);
          });

        itemTask
          .querySelector(`#deleteTask-${task.id}`)
          .addEventListener("click", (e) => {
            e.preventDefault();
            myTasks.deleteTask(task.id);
            const updateTasks = myTasks.getTasks();
            displayAllTasks(updateTasks);
          });
      });
    }
  }

  displayAllTasks();
});
