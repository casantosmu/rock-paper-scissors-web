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
    hand: {
      update: "move_hand_update",
      updated: "move_hand_updated",
    },
  },
  game: {
    handNames: ["scissors", "paper", "rock"],
    results: ["victory", "draw", "defeat"],
  },
} as const;

export default configs;
