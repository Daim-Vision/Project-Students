const Student = require("../models/Student.model")

module.exports.studentsController = {
    createStudent: (req, res) => {
        Student.create({
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age
        }).then((student) => {
            res.json(student)
        })
    },

    deleteStudentById: (req, res) => {
        Student.findByIdAndDelete(req.params.id).then((student) => {
            res.json(student)
        })
    },

    changeStudentById: (req, res) => {
        Student.findByIdAndUpdate(req.params.id, { name: req.body.name }).then((student) => {
            res.json(student)
        })
    },

    getStudents: (req, res) => {
        Student.find().then((student) => {
            res.json(student)
        }
        )
    }


}
