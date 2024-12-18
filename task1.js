function callLimiter(func, limit) {
  let callQueue = []; // Queue to store delayed calls
  let callCount = 0;  // Number of calls in the current second

  // Function to process the queue
  const processQueue = () => {
    if (callQueue.length > 0 && callCount < limit) {
      callCount++;
      const { context, args } = callQueue.shift();
      func.apply(context, args);
      setTimeout(() => {
        callCount--;
        processQueue(); // Try to process the queue again
      }, 1000);
    }
  };

  // Return the limited function
  return function (...args) {
    callQueue.push({ context: this, args });
    processQueue();
  };
}

// Usage examples:

// Example 1: Element click handler
const handler = () => console.log("Clicked!");
const limitedHandler = callLimiter(handler, 3);

document.body.onclick = limitedHandler;

// Example 2: Limited console.log
const limitedLog = callLimiter(console.log, 10);

for (let i = 0; i < 100; ++i) {
  limitedLog("i=", i);
}
