const express = require('express');
const { connectToFolder, writeFile, readFile, updateFile, deleteFile, listFiles } = require('../controllers/index.js');


const router = express.Router();

router.get('/connectFile', async (req, res) => {
  try{
        const result = await connectToFolder();
        res.status(200).send(result);;
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

  router.post('/write-file', async (req, res) => {
    try {
        const result = await writeFile(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  });

  router.post('/read-file', async (req, res) => {
    try {
      const { filename } = req.body; 
      const content = await readFile(filename);
      res.status(200).json({ content });
    } catch (error) {
      console.error('Error handling read-file request:', error);
      res.status(400).json({ error: error.message });
    }
  });

  router.put('/update-file', async (req, res) => {
    try {
      const { filename, newData } = req.body;
      const result = await updateFile(filename, newData);
      res.status(200).json({ message: result }); 
    } catch (error) {
      console.error('Error handling update-file request:', error);
      res.status(400).json({ error: error.message }); 
    }
  });

  router.delete('/delete-file', async (req, res) => {
    try {
      const { filename } = req.body;
      const result = await deleteFile(filename);
      res.status(200).json({ message: result });
    } catch (error) {
      console.error('Error handling delete-file request:', error);
      res.status(400).json({ error: error.message }); 
    }
  });

  router.get('/ls-file', async (req, res) => {
    try {
      const files = await listFiles();
      res.status(200).json({ files });
    } catch (error) {
      console.error('Error handling ls-file request:', error);
      res.status(400).json({ error: error.message });
    }
  });


  

 module.exports = router;