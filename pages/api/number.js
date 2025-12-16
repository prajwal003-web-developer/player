import { servers } from "../player";

export default function handler(req, res) {
  // Array of numbers to send
  const numbers =  servers.length;

  res.status(200).json({ numbers });
}
