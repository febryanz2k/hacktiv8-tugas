const jwt = require('jsonwebtoken');
const fs = require('fs');
const users = JSON.parse(fs.readFileSync('models/users.json'));

const secretKey = 's3cr3tK3y';

exports.login = (req, res) => {

  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {

    const token = jwt.sign({ username: user.username }, secretKey);
    res.json({ token });
  } else {

    res.status(401).json({ message: 'Username atau password salah.' });
  }
};
