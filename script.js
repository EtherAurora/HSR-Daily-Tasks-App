document.addEventListener('DOMContentLoaded', () => {
    const taskProgress = document.getElementById('task-progress p');

    // Click event for tasks
    document.querySelectorAll('.task button').forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = 'Completed';
            button.disabled = true;
            taskProgress.textContent = 'Progress 1 / 1';
        });
    });
});

document.querySelector('.kebab-menu').addEventListener('click', function(){
    document.getElementById("side-menu").style.left = '0';
    document.querySelector('.kebab-menu').style.display = 'none';
});

document.getElementById('close-menu').addEventListener('click', function(){
    document.getElementById("side-menu").style.left = '-800px';
    document.querySelector('.kebab-menu').style.display = 'flex';
});