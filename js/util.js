const debounce = (cb, delay = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      cb(...args);
    }, delay)
  }
}

export {debounce};
