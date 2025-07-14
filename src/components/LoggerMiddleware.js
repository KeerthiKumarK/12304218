// src/components/LoggerMiddleware.js
const Logger = {
  logs: [],
  log(message, context = {}) {
    this.logs.push({ timestamp: new Date().toISOString(), message, context });
  },
  getLogs() {
    return this.logs;
  }
};
export default Logger;
