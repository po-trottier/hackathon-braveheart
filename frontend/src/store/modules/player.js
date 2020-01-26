import firebase from 'firebase';
import app from '@/plugins/firebase';
import placeholder from '@/assets/cover.png';

const state = {
  playing: false,
  index: -1,
  playlist: {
    name: 'No playlist selected',
    songs: [],
  },
  song: {
    title: 'No song selected',
    artistName: 'No artist selected',
    album: 'No album selected',
    url: '',
    cover: placeholder,
    thumbnail: placeholder,
  },
};


const getters = {
  playing: s => s.playing,
  index: s => s.index,
  playlist: s => s.playlist,
  song: s => s.song,
};

const mutations = {
  mutatePlaying: (s) => {
    s.playing = !s.playing;
  },
  mutateIndex: (s, d) => {
    console.log(d);
    s.index = d;
    if (s.playlistSongs.length > 0) {
      s.song = s.playlistSongs[d];
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
    const index = context.state.index < 0
      ? -1 : (context.state.index + 1) % context.state.playlistSongs.length;
    context.commit('mutateIndex', index);
  },
  backward: (context) => {
    const index = context.state.index < 0
      ? context.state.playlistSongs.length - 1 : context.state.index - 1;
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
