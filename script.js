class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
      if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }

    const eventListeners = this.listeners.get(eventName);
    if (!eventListeners.includes(callback)) {
      eventListeners.push(callback);
    }
    }
  
    removeEventListener(event, callback) {
      if (this.listeners.has(eventName)) {
      const eventListeners = this.listeners.get(eventName);
      const index = eventListeners.indexOf(callback);

      if (index !== -1) {
        eventListeners.splice(index, 1);
      }
    }
    }
  
    dispatchEvent(event) {
    if (this.listeners.has(eventName)) {
      const eventListeners = this.listeners.get(eventName);
      for (const callback of eventListeners) {
        callback();
      }
    }
    }
    
  }
  const target = new EventTarget();
const logHello = () => console.log('hello');
const logWorld = () => console.log('world');

target.addEventListener('hello', logHello);
target.addEventListener('world', logWorld);

target.dispatchEvent('hello');
target.dispatchEvent('world');

target.removeEventListener('hello', logHello);
target.dispatchEvent('hello');

target.dispatchEvent('world');
