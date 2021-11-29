export const getFormattedTime = (time) => {
  return time
    ? +time.split(":").join("")
    : +`${new Date().getHours()}${new Date().getMinutes()}`;
};
