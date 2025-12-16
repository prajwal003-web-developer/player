export default function handler(req, res) {
  // Array of numbers to send
  const numbers =  3;

  res.status(200).json({ numbers });
}
