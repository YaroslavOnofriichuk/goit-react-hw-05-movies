
export const replaceGenres = (genres) => {
  return genres.map(genre => genre.name).join(" ");
};