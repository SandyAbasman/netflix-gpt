/* eslint-disable no-undef */
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/74963378?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const BG_url =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/GB-en-20250707-TRIFECTA-perspective_34ffe37e-49d5-4f26-89ef-9d197202348e_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifer: "en", name: "English" },
  { identifer: "dutch", name: "Dutch" },
  { identifer: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
