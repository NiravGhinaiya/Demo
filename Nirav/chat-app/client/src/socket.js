import io from "socket.io-client";

const endPoint = process.env.REACT_APP_SOCKET_API_KEY;

export const socket = io(endPoint);