const configs = {
  env: {
    socketApiUrl: `${process.env.REACT_APP_SOCKET_API_URL}`,
  },
  eventMessages: {
    room: {
      joinBase: "join_game",
      joinSucces: "join_game_success",
      joinError: "join_game_error",
    },
  },
} as const;

export default configs;
