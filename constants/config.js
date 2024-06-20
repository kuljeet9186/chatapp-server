const corsOptions = {
  origin: [
    'https://chat-sphere-k82hq4o1j-kuljeets-projects.vercel.app',
    "http://localhost:5173",
    "https://chatapp-server-1gne.onrender.com",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };

