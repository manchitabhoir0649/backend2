const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

// IMPORTANT ROUTES
router.post("/", auth, createStudent);
router.get("/", auth, getStudents);
router.get("/:id", auth, getStudent);
router.put("/:id", auth, updateStudent);
router.delete("/:id", auth, deleteStudent);

module.exports = router;