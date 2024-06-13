// Event listener for the 'save-task' button click
document.getElementById('save-task').addEventListener('click', function createTask(){
    // Getting necessary elements from the DOM
    let container = document.getElementById('task-container');
    let taskName = document.getElementById('text-input').value;

    // Checking if task name is empty
    if(taskName.trim() === ""){
        alert("Please Enter a name for the Task.");
        return;
    }

    // Creates the task container container
    let taskContainerContainer = document.createElement('div');
    taskContainerContainer.classList.add('containerContainer');

    // Creates the Task Div
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task');

    // Creates the background image for the task
    let taskBG = document.createElement('img');
    taskBG.src = "Background/InfoPanel.png";

    // Creates the progress text container
    let taskProgressContainer = document.createElement("span");
    let taskProgressTXT = document.createElement('p');
    taskProgressTXT.innerHTML = 'Progress 0 / 1';
    taskProgressContainer.appendChild(taskProgressTXT);
    taskProgressContainer.id = 'task-progress';

    // Creates the task name text element
    let taskText = document.createElement('p');
    taskText.id = 'task-name';
    taskText.textContent = taskName;

    // Creates activity reward section
    let activityReward = document.createElement('div');
    activityReward.classList.add('activity-reward');

    let activityImg = document.createElement('img');
    activityImg.src = 'Icons/ActiveIcon.png';

    let activityRewardText1 = document.createElement('span');
    activityRewardText1.textContent = '+200'; //taskValue; 

    let activityRewardText2 = document.createElement('p');
    activityRewardText2.textContent = 'Activity';

    activityRewardText1.appendChild(activityRewardText2);

    // Creates the 'Completed' button
    let button = document.createElement('button');
    button.classList.add('task-button'); // Changed id to class
    button.innerHTML = 'Completed';

    // Creates the 'Claimed' text
    let claimedTxt = document.createElement('p');
    claimedTxt.id = 'claimed';
    claimedTxt.innerHTML = 'Claimed';

    // Creates the reward section for completed task
    let reward = document.createElement('div');
    reward.id = 'completed';
    reward.classList.add('completed');
    
    let checkmark = document.createElement('img');
    checkmark.classList.add('checkmark');
    checkmark.src = 'Icons/RewardClaimedCheckmark.png';

    let checkmarkBG = document.createElement('img');
    checkmarkBG.classList.add('checkmarkBG');
    checkmarkBG.src = 'Icons/RewardClaimedCheckmarkBG.png';

    let rewardDarkOver = document.createElement('img');
    rewardDarkOver.classList.add('darkOver');
    rewardDarkOver.src = 'Icons/RewardClaimedDarkOver.png';

    // Generate a unique ID for the task
    let taskId = 'task-' + Math.random().toString(36).substr(2, 9);

    // Add taskId as a data attribute to taskContainerContainer
    taskContainerContainer.setAttribute('data-task-id', taskId);
    
    // Add taskId as a data attribute to the button
    button.setAttribute('data-task-id', taskId);
    
    // Add taskId as a data attribute to completed section
    reward.setAttribute('data-task-id', taskId);

    reward.appendChild(rewardDarkOver);
    reward.appendChild(checkmarkBG);
    reward.appendChild(checkmark);

    // Appending elements to their respective containers
    activityReward.appendChild(activityImg);
    activityReward.appendChild(activityRewardText1);

    taskContainer.appendChild(taskBG);
    taskContainer.appendChild(taskProgressContainer);
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(activityReward);
    taskContainer.appendChild(button);
    taskContainer.appendChild(claimedTxt);

    // Appending the reward and task containers to the main container
    taskContainerContainer.appendChild(reward);
    taskContainerContainer.appendChild(taskContainer);
    container.appendChild(taskContainerContainer);
});

// Event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // When the page reloads resets the progress bar to 0.
    let progressBar = document.getElementById('progress');
    progressBar.value = 0;

    // Event listener for click event on task container
    document.getElementById('task-container').addEventListener('click', function(event) {
        // Check if the clicked element is the 'Completed' button
        if (event.target && event.target.classList.contains('task-button')) {
            // Find the task ID associated with the clicked button
            let taskId = event.target.getAttribute('data-task-id');

            // Find the relevant elements based on the task ID
            let completed = document.querySelector(`[data-task-id="${taskId}"] #completed`);
            let claimedTxt = document.querySelector(`[data-task-id="${taskId}"] #claimed`);

            // Adding 'done' class to the clicked button
            event.target.classList.add('done');
            // Displaying 'Completed' section and 'Claimed' text
            completed.style.display = 'block';
            claimedTxt.style.display = 'block';

            // Activating the function to add value to the progressbar
            addToProgress();
        }
    });
});

function addToProgress(){
    let progressBar = document.getElementById('progress');

    if(progressBar.value == 0){
        progressBar.value = 180;
    }
    else if(progressBar.value == 180){
        progressBar.value = 400;
    }
    else if(progressBar.value = 400){
        progressBar.value = 500;
    }
    else{
        progressBar.value = 0;
        return console.log("Error");
    }
    console.log(progressBar.value);
}

/*document.getElementById('study').addEventListener('click', function(){
    // When the image is clicked change menu.

    // First makes the Daily Training tab (and it's associated features) invisible.
    let DailyTrainingTab = document.querySelector('.daily-training');
    DailyTrainingTab.style.display = 'none';

    // For now this shall only make the task creator side menu appear, in the future it shall bring up the 'Study' tab in the app, and in there the user shall be able to create their tasks.
});

document.getElementById('explore').addEventListener('click', function(){
    let DailyTrainingTab = document.querySelector('.daily-training');
    DailyTrainingTab.style.display = 'block';
});*/
