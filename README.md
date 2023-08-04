# myproject
fetchRecordings(): This function makes an HTTP GET request to http://localhost:3000/RECORDINGS/ to retrieve a list of class recordings. It returns the response data as a JSON object.
deleteVideo(videoId): This function makes an HTTP DELETE request to http://localhost:3000/RECORDINGS/${videoId} to delete a class recording with the given videoId. It handles any errors that might occur during the deletion process.
addNewVideo(videoData): This function makes an HTTP POST request to http://localhost:3000/RECORDINGS/ to add a new class recording. The videoData parameter is expected to contain properties like title, date, time, description, and VideoLink. It handles any errors that might occur during the addition process.
handleFormSubmit(event): This function is called when the new video submission form is submitted. It prevents the default form submission behavior, gathers the form input values, calls addNewVideo() to add the new video to the API, and then clears the form fields and updates the displayed recordings.
updateVideo(videoId, updatedData): This function makes an HTTP PUT request to http://localhost:3000/RECORDINGS/${videoId} to update a class recording with the given videoId. It takes updatedData as a parameter, containing the updated properties for the video (title, date, time, description, VideoLink).

handleUpdateVideo(event, videoId): This function is called when the update video form is submitted. It prevents the default form submission behavior, gathers the updated form input values, calls updateVideo() to update the video in the API, clears the form fields, and updates the displayed recordings.

newVideoForm Event Listener: An event listener is added to the new video submission form to call handleFormSubmit() when the form is submitted.

Initial Display: The script starts by calling displayRecordings() to initially show the list of recordings without any search filters.


# How to use 
To use this web application, you'll need to have a local server running at http://localhost:3000 that handles API requests for class recordings. The API endpoints should be set up to support GET, POST, PUT, and DELETE methods for managing recordings.

The web application provides a form to add new class recordings. When you submit the form, the recording is added to the API, and the list of recordings is updated accordingly. Each recording is displayed with its title, description, date, time, and a link to watch the video. There is also a "Delete" button for each recording that allows you to remove the recording from the API and update the displayed list.

Additionally, the application supports updating existing recordings. When you click the "Update" button for a specific recording, a form will appear where you can enter the updated details for that recording. Upon submission, the video is updated in the API, and the displayed list is refreshed to reflect the changes.

Make sure to include the necessary HTML elements for the form and the list of recordings in your web page, and ensure that the script is properly loaded. The displayRecordings() function will handle displaying the recordings on the page.

Please note that this code assumes you have already set up a backend server and API to handle the data operations for class recordings. If you haven't done that, this code won't work as expected. Also, consider implementing security measures like authentication and authorization for the API if the application is meant for production use.




