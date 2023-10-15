export const throttle = (fn, timeout = 100) => {
    let timer;
    return () => {
        if (timer) return;
        timer = setTimeout(() => { fn(); timer = null; }, timeout);
    };
};