/* eslint-disable prefer-destructuring */
import firebase from 'firebase';
import app from '@/plugins/firebase';
import placeholder from '@/assets/cover.png';

const state = {
  playing: false,
  progress: 0,
  index: -1,
  playlist: {
    name: 'No playlist selected',
    songs: [],
  },
  song: {
    title: 'No song selected',
    artistName: 'No artist selected',
    albumName: 'No album selected',
    duration: 1,
    url: '',
    cover: placeholder,
    thumbnail: placeholder,
  },
};

const getters = {
  playing: s => s.playing,
  progress: s => s.progress,
  index: s => s.index,
  playlist: s => s.playlist,
  song: s => s.song,
};

const mutations = {
  mutatePlaying: (s) => {
    s.playing = !s.playing;
  },
  mutateIndex: (s, d) => {
    s.index = d;
    s.progress = 0;
    if (s.playlist.songs.length > 0) {
      s.song = s.playlist.songs[d];
    }
  },
  mutateProgress: (s, d) => {
    s.progress = d;
  },
  mutatePlaylist: (s, d) => {
    s.playlist = d;
    s.song = s.playlist.songs[0];
  },
};

const actions = {
  play: (context) => {
    if (context.state.song.url === '') {
      return;
    }
    context.commit('mutatePlaying');
  },
  forward: (context) => {
    const i = context.state.index < 0
      ? -1 : (context.state.index + 1) % context.state.playlist.songs.length;
    context.commit('mutateIndex', i);
  },
  backward: (context) => {
    const i = context.state.index < 0
      ? context.state.playlist.songs.length - 1 : context.state.index - 1;
    context.commit('mutateIndex', i);
  },
  setSeek: (context, payload) => {
    context.commit('mutateProgress', payload);
  },
  setPlaylist: (context, payload) => {
    if (payload === '0') {
      return;
    }
    const db = firebase.firestore(app);
    db.collection('playlists').doc(payload).collection('songs').get()
      .then((res) => {
        const data = res.docs.map(doc => doc.data());
        if (data.length === 0) {
          return;
        }
        context.commit('mutateIndex', 0);
        context.commit('mutatePlaylist', {
          name: payload,
          songs: data,
        });
      })
      .catch((err) => {
        console.error(err);
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
