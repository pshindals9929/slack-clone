export const loadState = () => {
  try {
    const seralizedState = localStorage.getItem("state");
    if (seralizedState == null) {
      return undefined;
    } else {
      return JSON.parse(seralizedState);
    }
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const seralizedState = JSON.stringify(state);
    localStorage.setItem("state", seralizedState);
  } catch (err) {
    //
  }
};
