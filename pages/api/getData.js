import { servers } from "../player";

export default function handler(req, res) {
  // Array of numbers to send
  // const numbers =  servers.length;

  const data  = [
  {
    id: 1,
    name: "videasy",
    baseLink: "https://player.videasy.net/",
  },
  {
    id: 2,
    name: "vidzee",
    baseLink: "https://player.vidzee.wtf/embed/",
  },
  {
    id: 3,
    name: "vidsync",
    baseLink: "https://vidsync.xyz/embed/movie/",
  },
  {
    id: 4,
    name: "vidfast",
    baseLink: "https://vidfast.pro/",
  },
  {
    id: 5,
    name: "vidsrc",
    baseLink: "https://vidsrc-embed.ru/embed/",
  },
  {
    id: 6,
    name: "vidrock",
    baseLink: "https://vidrock.net/",
  },
  {
    id: 7,
    name: "primesrc",
    baseLink: "https://primesrc.me/embed/",
  },
  {
    id: 8,
    name: "vidnest",
    baseLink: "https://vidnest.fun/",
  },
  {
    id: 9,
    name: "111movies",
    baseLink: "https://111movies.com/",
  },
  {
    id: 10,
    name: "spencerdevs",
    baseLink: "https://spencerdevs.xyz/movie/",
  },
  {
    id: 11,
    name: "vidking",
    baseLink: "https://www.vidking.net/embed/",
  },
  {
    id: 12,
    name: "rivestream",
    baseLink: "https://rivestream.net/embed?",
  },
];


  res.status(200).json({ data });
}
