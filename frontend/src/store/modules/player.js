/* eslint-disable prefer-destructuring,no-console */
import firebase from 'firebase';
import axios from 'axios';
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
    id: 0,
    title: 'No song selected',
    artistName: 'No artist selected',
    albumName: 'No album selected',
    duration: 1,
    URL: '',
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
    const player = window.document.getElementById('audio-player');
    if (!player) {
      return;
    }
    if (s.playing) {
      player.play();
    } else {
      player.pause();
    }
  },
  mutateIndex: (s, d) => {
    s.index = d;
    s.progress = 0;
    if (s.playlist.songs.length > 0) {
      s.song = s.playlist.songs[d];
      const player = window.document.getElementById('audio-player');
      if (!player || !s.song.URL) {
        return;
      }
      axios.get(`https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/${s.song.id}`, {
        headers: {
          Authorization: '5c0cs7j4b9zqs4lol5w3g7eze6gd2nah',
        },
      }).then((res) => {
        // console.log(s.song.URL);
        s.song.URL = res.data.playUrl;
        player.src = s.song.URL;
        player.load();
      }).catch((err) => {
        console.error(err);
      });
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
    if (context.state.song.URL === '') {
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
        context.commit('mutatePlaylist', {
          name: payload,
          songs: data,
        });
        context.commit('mutateIndex', 0);
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
