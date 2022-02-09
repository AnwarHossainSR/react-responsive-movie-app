const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "2db92f88283c813938b1b9712460210c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
