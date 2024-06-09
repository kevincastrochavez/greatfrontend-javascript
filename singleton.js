// The Singleton pattern is used when you want to ensure that a class has only one instance and provide a global point of access to that instance. The Singleton pattern is useful for:

// Single point of control: When you need a single point of control for actions, such as managing a configuration object, logging, or controlling access to a shared resource.
// Global state: When you want to maintain a global state that should be accessible from different parts of your application. This is especially useful when sharing common data across various components.
// Preventing duplicate initialization: To ensure that only one instance of a class is created, preventing duplicate initialization and avoiding potential issues related to multiple instances.
// Caching: For implementing a caching mechanism where you want to maintain a single cache instance throughout the application.
// Implement the GlobalMap module in JavaScript using the Singleton pattern. The GlobalMap module exports an object that has a single getInstance() method which returns a Map object that can be used as a key/value store for global caching/memoization.

let instance;
let counter = 0;

class GlobalMap {
  constructor() {
    if (!instance) {
      throw new Error('You can only create one instance!');
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const globalMap = new GlobalMap();

export default globalMap;
