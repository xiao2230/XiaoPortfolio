export const debounce = (fn = () => { }, timer = 300) => {
    let reTimes = null;
    return () => {
        if (reTimes) {
            clearTimeout(reTimes);
        }
        reTimes = setTimeout(() => {
            fn();
        }, timer);
    };
};