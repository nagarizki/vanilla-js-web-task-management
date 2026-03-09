// file ini untuk penghubung antara UI HTML dan model User

document.addEventListener('DOMContentLoaded', () => {

    // membuat tanggal format 'yyyy-mm-dd'
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const taskForm = document.getElementById('taskForm')
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
            createdAt: formattedDate,
        }

        const result = taskManager.saveTask(taskData);

        if(result.success) {
            return window.location.href = '../tasks.html';
        } else {
            alert('Gagal menambahkan task!');
        }
    });
});
