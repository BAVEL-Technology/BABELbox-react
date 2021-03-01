import { io } from "socket.io-client";

class Sockets {
  constructor () {
    this.socket = io('https://babelboxdb.herokuapp.com');
  }

  on(key, callback) {
    this.socket.on(key, callback);
    return this;
  }

  ping(callback) {
    this.on('room updated', callback);
    return this;
  }

  emit(key, data) {
    this.socket.emit(key, data);
    return this;
  }

  join(room, callback) {
    this.socket.emit('room', room);
    this.ping(callback);
    return this;
  }
}

const babelBellow = () => {
return new Sockets();
};

export default babelBellow;
