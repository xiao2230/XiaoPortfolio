const getStored = key => localStorage.getItem(key);
const setStored = (key, val) => localStorage.setItem(key, val);

export { getStored, setStored };