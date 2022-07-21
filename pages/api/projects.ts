import { NextApiRequest, NextApiResponse } from "next";
const DUMMY_PROJECTS = [
  {
    id: "1",
    name: "Web Application",
    clientName: "Jacob Rodriguez",
    hourlyRate: 80,
    description: "A web application that does a lot of stuff",
  },
  {
    id: "2",
    name: "Website",
    clientName: "Samantha Arce",
    hourlyRate: 86,
    description: "A website that cums on you when you click the cum button.",
  },
  {
    id: "3",
    name: "Mobile Application",
    clientName: "James Bonde",
    hourlyRate: 120,
    description: "A mobile app with lots of features.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ DUMMY_PROJECTS });
}
