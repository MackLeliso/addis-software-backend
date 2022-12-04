import express from "express";
import {
  createEmployee,
  fetchEmployee,
  softDeleteEmployee,
  updateEmployee,
} from "../controller/employee.js";

const router = express.Router();

//CREATE
router.post("/", createEmployee);

// READ
router.get("/", fetchEmployee);
router.get("/:employeeId", fetchEmployee);

// UPDATE
router.patch("/:employeeId", updateEmployee);

// DELETE
router.delete("/:employeeId", softDeleteEmployee);

export default router;
