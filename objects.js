var playlist = {
  'kanye': 'golddigger'
};

function updatePlaylist(obj,key,value) {
  return Object.assign(obj, {[key]:value})
}

function removeFromPlaylist(obj2,key2)  {
  delete obj2.key2;

  return playlist;
}
