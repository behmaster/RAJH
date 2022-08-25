import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Robbie Behm',
    email: 'Robbie@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Andrew Carter',
    email: 'Andrew@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jenni Ferguson',
    email: 'Jenni@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Hunter Estes',
    email: 'Hunter@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
