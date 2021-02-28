export const promiseTimeout = (callback, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback(resolve, reject);
    }, time);
  });
};
