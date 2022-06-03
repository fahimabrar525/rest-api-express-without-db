const {v4: uuidv4} = require("uuid");
 
const users = [
    {
        id: uuidv4(),
        name: "Fahim",
        email: "fahim@aiub.edu"
    },
    {
        id: uuidv4(),
        name: "Abrar",
        email: "abrar@aiub.edu"
    },
    {
        id: uuidv4(),
        name: "Mimon",
        email: "mimon@aiub.edu"
    }
]

module.exports = users;