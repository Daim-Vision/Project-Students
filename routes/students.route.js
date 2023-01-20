const { Router } = require('express');
const { studentsController } = require('../controllers/students.controller');

const router = Router();

router.get('/student',  studentsController.getStudents);
router.post('/student', studentsController.createStudent);
router.delete('/students/:id', studentsController.deleteStudentById);
router.patch('/students/:id', studentsController.changeStudentById);

module.exports = router