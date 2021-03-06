import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
const FETCHING = 'FETCHING';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

const removePlaylist = playlistId => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

export const receiveUserPlaylists = playlists => ({
  type: RECEIVE_USER_PLAYLISTS,
  playlists
});

export const fetchPlaylists = () => dispatch => {
  dispatch({ type: FETCHING });
  return PlaylistApiUtil.fetchPlaylists()
    .then(playlists => dispatch(receiveUserPlaylists(playlists)));
};

export const createPlaylist = playlist => dispatch => {
  return PlaylistApiUtil.createPlaylist(playlist)
    .then(newPlaylist => {
      dispatch(receivePlaylist(newPlaylist));
      return newPlaylist;
    });
};

export const updatePlaylist = playlist => dispatch => {
  return PlaylistApiUtil.updatePlaylist(playlist)
    .then(updatedPlaylist => {
      dispatch(receivePlaylist(updatedPlaylist));
      return updatedPlaylist;
    });
};

export const deletePlaylist = playlistId => dispatch => {
  return PlaylistApiUtil.deletePlaylist(playlistId)
    .then(deletedPlaylist => dispatch(removePlaylist(deletedPlaylist.id)));
};

export const fetchPlaylist = playlistId => dispatch => {
  dispatch({ type: FETCHING });
  return PlaylistApiUtil.fetchPlaylist(playlistId)
    .then(playlist => dispatch(receivePlaylist(playlist)));
};
