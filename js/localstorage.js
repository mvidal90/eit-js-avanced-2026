
localStorage.setItem("address", "Calle falsa 123")

const address = localStorage.getItem("address")

console.log(address)

localStorage.removeItem("address")

const user = {
    name: "Javier",
    lasname: "Lopez",
    phonenumber: 12312322,
    address: "Calle verdadera 789",
    age: 34
}

// JSON => JavaScript Object Notation
localStorage.setItem("user", JSON.stringify(user))

const getUser = JSON.parse(localStorage.getItem("user"))

console.log(getUser)