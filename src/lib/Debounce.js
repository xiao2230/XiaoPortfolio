export const debounce = (fn, timer = 100) => {
    let reTimes;
    return () => {
        if (reTimes) clearTimeout(reTimes);
        reTimes = setTimeout(fn, timer);
    };
};