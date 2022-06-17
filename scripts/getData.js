export const getData = () => {
  return fetch('data.json').then(data => data.json());
};
