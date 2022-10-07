const configs = {
  env: {
    socketApiUrl: `${process.env.REACT_APP_SOCKET_API_URL}`,
  },
} as const;

export default configs;
