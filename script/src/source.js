const videoList = [];
const RENDER_VIDEOS = 'render-sammhub';
const SAVED_VIDEOS = 'saved-vudeos';
const STORAGE_KEY = 'SAMMHUB';

function generateId () {
    return +new Date();
}

function generateSammhubObject(id, title, titleClass, genre, link, isComplete) {
    return {
        id,
        title,
        titleClass,
        genre,
        link,
        isComplete
    }
}



