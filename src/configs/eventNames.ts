const eventNames = {
  room: {
    joinBase: "room:join",
    joinSucces: "room:join_success",
    joinError: "room:join_error",
  },
  hand: {
    update: "hand:update",
    updated: "hand:updated",
  },
  move: {
    starts: "move:starts",
    uploadUserWaiting: "move:upload_user_waiting",
    uploadUserWaitingError: "move:upload_user_waiting_error",
    uploadUserWaitingSuccess: "move:upload_user_waiting_success",
  },
  predefined: {
    connect: "connect",
    connectError: "connect_error",
  },
} as const;

export default eventNames;
