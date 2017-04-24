export const ADD_TO_TOP_OF_QUEUE = 'ADD_TO_TOP_OF_QUEUE';
export const ADD_COLLECTION_TO_QUEUE = 'ADD_COLLECTION_TO_QUEUE';

export const addSongToTopOfQueue = (song) => ({
  type: ADD_TO_TOP_OF_QUEUE,
  song
});

export const addCollectionToQueue = (collection) => ({
  type: ADD_COLLECTION_TO_QUEUE,
  collection
});
