import Employee from "../model/Employe.js";
import { validateEmployee } from "../plugin/validatore.js";

// create employee
export const createEmployee = async (req, res) => {
  try {
    // validate body
    const { error } = await validateEmployee(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const newEmployee = new Employee(req.body);
    const employee = await newEmployee.save();
    return res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// fetch employee
export const fetchEmployee = async (req, res) => {
  let where = {
    deleted: false,
  };
  const employeId = req.params.employeeId;
  if (employeId) {
    where = {
      _id: req.params.employeeId,
      deleted: false,
    };
  }

  const employee = await Employee.find(where);
  res.status(200).json(employee);

  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update employee
export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { _id: req.params.employeeId, deleted: false },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// soft delete employee
export const softDeleteEmployee = async (req, res) => {
  const employee = await Employee.findOneAndUpdate(
    { _id: req.params.employeeId, deleted: false },
    { deleted: true },
    { new: true }
  );
  res.status(200).json(`Employee ${employee.name} has been deleted`);
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
