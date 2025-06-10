const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const noteRoutes = require('./routes/noteRoutes');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/notes', noteRoutes);

app.get("/", async (req,res)=>{
    res.status(200).
    send("<H1>Welcome to the server of Note App</H1>")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port \x1b[4mhttp://localhost:${PORT}\x1b[0m`);
});
