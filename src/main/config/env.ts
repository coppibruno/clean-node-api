export default {
  // mongodb+srv://mongodb:mXAEpBDM9e1A700A@cluster0.alj9b.mongodb.net/?retryWrites=true&w=majority
  // mXAEpBDM9e1A700A
  // mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  // mongoUrl: process.env.MONGO_URL || 'mongodb+srv://mongodb-larissa-teste:mXAEpBDM9e1A700A@cluster0.alj9b.mongodb.net/?retryWrites=true&w=majority',
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5H'
}
