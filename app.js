document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `${taskText} <button class="delete-button">삭제</button>`;
            taskList.appendChild(li);
            taskInput.value = "";

            // 삭제 버튼에 클릭 이벤트 추가
            const deleteButton = li.querySelector(".delete-button");
            deleteButton.addEventListener("click", function() {
                taskList.removeChild(li);
            });
        }
    });
});
