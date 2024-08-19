const users = [
  {
    name: "Simran",
    age: 30,
  },
  {
    name: "Akshay",
    age: 28,
  },
  {
    name: "Sachin",
    age: 50,
  },
  {
    name: "Elon",
    age: 8,
  },
]

function sortByAge() {
  return users.sort((a, b) => a.age - b.age)
}

console.log(sortByAge())

module.exports = sortByAge
