var playlist = {
  'kanye': 'golddigger'
};

function updatePlaylist(obj,key,value) {
  return Object.assign(obj, {[key]:value})
}

function removeFromPlaylist(playlist,key2)  {
  delete playlist.key2;

  return playlist;
}
