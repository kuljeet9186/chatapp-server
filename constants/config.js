const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://chatapp-server-1gne.onrender.com",
    "https://chat-sphere-three.vercel.app/",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
