async function fetchRecordings() {
    try {
        const response = await fetch('http://localhost:3000/RECORDINGS/');
        if (!response.ok) {
            throw new Error('Failed to fetch class recordings');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function deleteVideo(videoId) {
    try {
        const response = await fetch(`http://localhost:3000/RECORDINGS/${videoId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete the video');
        }
    } catch (error) {
        console.error(error);
    }
} 
// Function to add a new video to the API
async function addNewVideo(videoData) {
    try {
        const response = await fetch('http://localhost:3000/RECORDINGS/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(videoData)
        });
        if (!response.ok) {
            throw new Error('Failed to add the new video');
        }
    } catch (error) {
        console.error(error);
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
    
    const titleInput = document.getElementById('title');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const descriptionInput = document.getElementById('description');
    const videoLinkInput = document.getElementById('video-link');

    const newVideoData = {
        title: titleInput.value,
        date: dateInput.value,
        time: timeInput.value,
        description: descriptionInput.value,
        VideoLink: videoLinkInput.value
    };

    addNewVideo(newVideoData).then(() => {
       
        titleInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
        descriptionInput.value = '';
        videoLinkInput.value = '';

       
        displayRecordings();
    });
}


const newVideoForm = document.getElementById('new-video-form');
newVideoForm.addEventListener('submit', handleFormSubmit);



async function displayRecordings() {
    const recordingsList = document.getElementById('recordings-list');
    const recordings = await fetchRecordings();

    if (recordings.length === 0) {
        const errorMessage = document.createElement('li');
        errorMessage.textContent = 'Failed to load class recordings. Please try again later.';
        recordingsList.appendChild(errorMessage);
    } else {
        recordings.forEach(recording => {
            const listItem = document.createElement('li');

            const titleElement = document.createElement('h2');
            titleElement.textContent = recording.title;
            listItem.appendChild(titleElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = recording.description;
            listItem.appendChild(descriptionElement);

            const dateElement = document.createElement('p');
            dateElement.textContent = `Date: ${recording.date}`;
            listItem.appendChild(dateElement);

            const timeElement = document.createElement('p');
            timeElement.textContent = `Time: ${recording.time}`;
            listItem.appendChild(timeElement);

           
            const link = document.createElement('a');
            link.href = recording.VideoLink;
            link.textContent = 'Watch Video';
            link.target = '_blank'; 
            listItem.appendChild(link);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', async () => {
                await deleteVideo(recording.id); //hhhh
                listItem.remove();
            });
            listItem.appendChild(deleteButton);


            recordingsList.appendChild(listItem);
        });
    }
    // Function to update a video on the API
async function updateVideo(videoId, updatedData) {
    try {
        const response = await fetch(`http://localhost:3000/RECORDINGS/${videoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            throw new Error('Failed to update the video');
        }
    } catch (error) {
        console.error(error);
    }
}

}
// ... Your existing code ...

// Function to handle form submission for updating a video
function handleUpdateVideo(event, videoId) {
    event.preventDefault();

    const updatedData = {
        title: document.getElementById('updated-title').value,
        date: document.getElementById('updated-date').value,
        time: document.getElementById('updated-time').value,
        description: document.getElementById('updated-description').value,
        VideoLink: document.getElementById('updated-video-link').value,
    };

    updateVideo(videoId, updatedData).then(() => {
        // Clear form fields after successful update
        document.getElementById('updated-title').value = '';
        document.getElementById('updated-date').value = '';
        document.getElementById('updated-time').value = '';
        document.getElementById('updated-description').value = '';
        document.getElementById('updated-video-link').value = '';

        // Refresh the displayed recordings to show the updated video details
        displayRecordings();
    });
}

// ... Your existing code ...

// Function to display the recordings with all the information

    // ... Your existing code ...


// ... Your existing code ...

// Initial display of recordings without any search filter



displayRecordings();