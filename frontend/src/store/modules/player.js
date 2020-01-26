import firebase from 'firebase';
import app from '@/plugins/firebase';
import placeholder from '@/assets/cover.png';

const state = {
  playing: false,
  currentIndex: -1,
  playlist: {
    name: 'No playlist selected',
    songs: [],
  },
  currentSong: {
    title: 'No song selected',
    artist: 'No artist selected',
    album: 'No album selected',
    url: '',
    cover: placeholder,
  },
};


const getters = {
  playing: s => s.playing,
  currentIndex: s => s.currentIndex,
  playlist: s => s.playlist,
  currentSong: s => s.currentSong,
};

const mutations = {
  mutatePlaying: (s) => {
    s.playing = !s.playing;
  },
  mutateIndex: (s, d) => {
    console.log(d);
    s.currentIndex = d;
    if (s.playlistSongs.length > 0) {
      s.currentSong = s.playlistSongs[d];
    }
  },
  mutatePlaylist: (s, d) => {
    s.playlist = d;
  },
};

const actions = {
  play: (context) => {
    context.commit('mutatePlaying');
  },
  forward: (context) => {
    const index = context.state.currentIndex < 0
      ? -1 : (context.state.currentIndex + 1) % context.state.playlistSongs.length;
    context.commit('mutateIndex', index);
  },
  backward: (context) => {
    const index = context.state.currentIndex < 0
      ? context.state.playlistSongs.length - 1 : context.state.currentIndex - 1;
    context.commit('mutateIndex', index);
  },
  setPlaylist: (context, payload) => {
    const db = firebase.firestore(app);
    db.collection('playlists').where('name', '==', payload).limit(1).get()
      .then((res) => {
        console.log(res);
        context.commit('mutatePlaylist', res);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
