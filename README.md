# myproject
fetchRecordings(): This function makes an HTTP GET request to http://localhost:3000/RECORDINGS/ to retrieve a list of class recordings. It returns the response data as a JSON object.
deleteVideo(videoId): This function makes an HTTP DELETE request to http://localhost:3000/RECORDINGS/${videoId} to delete a class recording with the given videoId. It handles any errors that might occur during the deletion process.
addNewVideo(videoData): This function makes an HTTP POST request to http://localhost:3000/RECORDINGS/ to add a new class recording. The videoData parameter is expected to contain properties like title, date, time, description, and VideoLink. It handles any errors that might occur during the addition process.
handleFormSubmit(event): This function is called when the new video submission form is submitted. It prevents the default form submission behavior, gathers the form input values, calls addNewVideo() to add the new video to the API, and then clears the form fields and updates the displayed recordings.
updateVideo(videoId, updatedData): This function makes an HTTP PUT request to http://localhost:3000/RECORDINGS/${videoId} to update a class recording with the given videoId. It takes updatedData as a parameter, containing the updated properties for the video (title, date, time, description, VideoLink).

handleUpdateVideo(event, videoId): This function is called when the update video form is submitted. It prevents the default form submission behavior, gathers the updated form input values, calls updateVideo() to update the video in the API, clears the form fields, and updates the displayed recordings.

newVideoForm Event Listener: An event listener is added to the new video submission form to call handleFormSubmit() when the form is submitted.

Initial Display: The script starts by calling displayRecordings() to initially show the list of recordings without any search filters.