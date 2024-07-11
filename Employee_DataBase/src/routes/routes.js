const express = require('express');
const { addEmployee, readAllEpm, readEmployee, removeEmployee, updateEmployee } = require('../controllers/index.js');

const router = express.Router();

router.post('/addEmp', async (req, res) => {
    try {
      await addEmployee(req, res);
    } catch (error) {
      console.error('Error adding employee:', error);
      res.status(500).json({ message: 'Error adding employee' }); // More specific error messages if possible
    }
  });


  router.get('/readAllEpm', async (req, res) => {
    try {
      await readAllEpm(req, res);
    } catch (error) {
      console.error('Error reading all employee:', error);
      res.status(500).json({ message: 'Error reading all employees data' });
    }
  });

  router.get('/readEpm/:empId', async (req, res) => {
    try {
      await readEmployee(req, res);
    } catch (error) {
      console.error('Error reading employee:', error);
      res.status(500).json({ message: 'Error reading employees data' });
    }
  });

  router.put('/updateEmp/:empId', async (req, res) => {
    try {
      await updateEmployee(req, res);
    } catch (error) {
      console.error('Error in upadte employee data:', error);
      res.status(500).json({ message: 'Error updating employees data' });
    }
  });

  router.delete('/deleteEmp/:empId', async (req, res) => {
    try {
      await removeEmployee(req, res);
    } catch (error) {
      console.error('Error in deleting employee data:', error);
      res.status(500).json({ message: 'Error deleting employees data' });
    }
  });


  module.exports = router;