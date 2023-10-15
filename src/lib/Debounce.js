export const debounce = (fn, timeout = 100) => {
    let timer;
    return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(fn, timeout);
    };
};