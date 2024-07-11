const Employee = require("../models/employeeSchema.js");

const addEmployee = async (req, res) => {

    try {
        let empObj = await req.body;
        empObj = new Employee(empObj);
        empObj = await empObj.save();
        
        return res.status(201).json({message:"Employee Added sucessfully", data: empObj });
        
    } catch (error) {
        console.error('Error adding employees:', error);
        res.status(500).json({ message: 'Error adding employees',data : error.message } ); 
    }

}

const readAllEpm = async (req, res) => {
    try {
        let employees = await Employee.find(); 

        if (!employees) {
          return res.status(404).send({ message: 'No employees found' }); 
        }

        return res.status(200).json({message:"Employees data sucessfully read", data: employees });
      } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).send({ message: 'Error fetching employees', data:error.message });
      }
}


const readEmployee = async (req, res) => {
  try {
      let empId = await req.params.empId
      let employee = await Employee.findOne({"empId":`${empId}`}); 

      if (!employee) {
        return res.status(404).send({ message: `No employee found on that ${empId} ` }); 
      }

      return res.status(200).json({message:"Employee data sucessfully fetched", data: employee });
    } catch (error) {
      console.error('Error fetching employees:', error);
      res.status(500).send({ message: 'Error fetching employees', data:error.message });
    }
}

const updateEmployee = async (req, res) => {
  try {
      let empId = await req.params.empId;
      let changes = await req.body;

      console.log(typeof(changes), 'changes')
      let employee = await Employee.findOneAndUpdate({"empId":`${empId}`},{$set:changes}); 
      let upadtedEmployee = await Employee.findOne({"empId":`${empId}`});

      if (!employee) {
        return res.status(404).send({ message: `No employee found on that ${empId} ` }); 
      }

      return res.status(200).json({message:"Employee data sucessfully updated", data: `${employee}  Upadted Employee data is ${upadtedEmployee} `});
    } catch (error) {
      console.error('Error in updating employees:', error);
      res.status(500).send({ message: 'Error in updating employees', data:error.message });
    }
}

const removeEmployee = async (req, res) => {
  try {
      let empId = await req.params.empId
      let employee = await Employee.findOneAndDelete({"empId":`${empId}`}); 

      if (!employee) {
        return res.status(404).send({ message: `No employee found on that ${empId} ` }); 
      }

      return res.status(200).json({message:"Employee data has been  sucessfully deleted", data: employee });
    } catch (error) {
      console.error('Error fetching employee to delete:', error);
      res.status(500).send({ message: 'Error fetching employee to delete', data:error.message });
    }
}


module.exports = {
  addEmployee,
  readAllEpm,
  readEmployee,
  updateEmployee,
  removeEmployee
};