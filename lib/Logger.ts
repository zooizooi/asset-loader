type Log = string | object;
type Listener = (log: Log) => void;

class Logger {
    public logs: Log[] = [];
    public listeners: Listener[] = [];

    public add(log: Log) {
        this.logs.push(log);
        this.listeners.forEach((listener) => listener(log));
    }

    public listen(callback: (log: Log) => void) {
        this.listeners.push(callback);
    }
}

export default new Logger();