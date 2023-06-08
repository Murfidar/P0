const RENDER_VIDEOS = 'render-video';

const videoList = [{
    id: 123456789,
    title: 'James Bond',
    titleClass: 'JamesBond',
    genre: 'Humour',
    link: 'https://www.youtube.com/watch?v=oKIkvEjI2WE',
    isComplete: false
}]

function makeVideo(videoObject) {
    const undo = 'Not Yet Watched';
    const alreadyWatched = 'Already Watched'
    const deletes = 'Delete Video'

    const videoTitle = document.createElement('h3');
    videoTitle.innerText = videoObject.title;

    const videoGenre = document.createElement('p');
    videoGenre.innerText = videoObject.genre;

    const videoLink = document.createElement('button');
    videoLink.setAttribute('id', 'playButton');
    videoLink.innerHTML = `
        <i class="fa-solid fa-play">
        </i>`

    const videoContainer = document.createElement('div');
    videoContainer.classList.add(`book-${videoObject.id}`);
    videoContainer.append(videoTitle, videoGenre, videoLink);

    const container = document.createElement('article');
    container.classList.add('video-item');
    container.classList.add('active');

    container.append(videoContainer);

    if (videoObject.isComplete) {
        const actionDiv = document.createElement('div');
        actionDiv.classList.add('action');

        const undoButton = document.createElement('button');
        undoButton.classList.add('green');
        undoButton.innerHTML = undo;


        const deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.innerHTML = deletes;

        actionDiv.append(undoButton, deleteButton)
        videoContainer.append(actionDiv);
    } else {
        const actionDiv = document.createElement('div');
        actionDiv.classList.add('action');

        const alreadyButton = document.createElement('button');
        alreadyButton.classList.add('green');
        alreadyButton.innerHTML = alreadyWatched;


        const deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.innerHTML = deletes;


        actionDiv.append(alreadyButton, deleteButton)
        videoContainer.append(actionDiv);
    }

    // document.dispatchEvent(new Event(RENDER_VIDEOS)) ;

    return container;
}



document.addEventListener('DOMContentLoaded', function () {

    const uncompleteVideoList = document.getElementById('unwatchedList');

    const completeVideoList = document.getElementById('watchedList');

    uncompleteVideoList.innerHTML = '';
    completeVideoList.innerHTML = '';

    for (const videoItem of videoList) {
        const videoElement = makeVideo(videoItem);
        // console.log(videoItem)
        if(!videoItem.isComplete) {
            uncompleteVideoList.append(videoElement)
        } else {
            completeVideoList.append(videoElement)
        }
    }
})