import DefaultImage from "../assets/images/default.jpg";

export const POSTS = [
  {
    id: "1",
    image: DefaultImage,
    name: "Крутий фотограф 1",
    comments: [],
    likes: 0,
    location: { name: "Київ", lat: 50.43767, lon: 30.2267262 },
  },
  {
    id: "2",
    image: DefaultImage,
    name: "Крутий фотограф 2",
    comments: ["Nice"],
    likes: 1,
    location: { name: "Київ", lat: 50.43767, lon: 30.2267262 },
  },
  {
    id: "3",
    image: DefaultImage,
    name: "Крутий фотограф 3",
    comments: ["Nice", "Cool", "Good"],
    likes: 21,
    location: { name: "Київ", lat: 50.43767, lon: 30.2267262 },
  },
];
