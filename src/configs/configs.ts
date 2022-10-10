const configs = {
  env: {
    socketApiUrl: `${process.env.REACT_APP_SOCKET_API_URL}`,
  },
  eventNames: {
    room: {
      joinBase: "room:join",
      joinSucces: "room:join_success",
      joinError: "room:join_error",
    },
    hand: {
      update: "hand:update",
      updated: "hand:updated",
    },
    predefined: {
      connect: "connect",
      connectError: "connect_error",
    },
  },
  game: {
    handNames: ["scissors", "paper", "rock"],
    results: ["victory", "draw", "defeat"],
  },
} as const;

export default configs;
