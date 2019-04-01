// @flow

function pad(number) {
  return String(number).length > 1 ? number : `0${number}`;
}

export function timeToString(time: number) {
  const hrs = Math.floor(time / 60 / 60);
  const min = Math.floor(time / 60 - hrs * 60);
  const sec = Math.floor(time - min * 60 - hrs * 60 * 60);
  return `${pad(hrs)}:${pad(min)}:${pad(sec)}`;
}
