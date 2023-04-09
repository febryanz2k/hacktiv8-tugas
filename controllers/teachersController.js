const fs = require('fs');
const teachers = JSON.parse(fs.readFileSync('models/teachers.json'));

exports.getAllTeachers = (req, res) => {
  res.json(teachers);
};
