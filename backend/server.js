const express = require('express');
const cors = require('cors');
const multer = require('multer');
const detectRoute = require('./routes/detect');



const app = express();
app.use(cors());
app.use(express.json());

//file upload
const upload = multer({dest:'uploads/'});

// Routes
app.use('/api/detect', upload.single('image'), detectRoute);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));