// Edit this file by hand. The app reads `window.APP_CONFIG` at boot.
//
// To turn on the shared leaderboard, create a Firebase Realtime Database
// (https://console.firebase.google.com → Build → Realtime Database → Test mode),
// then set mode to 'firebase' and paste the database URL below.
//
//   window.APP_CONFIG = {
//     mode: 'firebase',
//     databaseURL: 'https://<project-id>-default-rtdb.<region>.firebasedatabase.app'
//   };
//
// While mode is 'local', each device only sees its own learner on the board.
window.APP_CONFIG = {
  mode: 'firebase',
  databaseURL: 'https://aha-quick-mandarin-default-rtdb.asia-southeast1.firebasedatabase.app/'
};
