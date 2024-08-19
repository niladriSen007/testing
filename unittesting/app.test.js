const sortByAge = require("./app")

test("First name should be Elon", () => {
  const sortedData = sortByAge()

  expect(sortedData[0]?.name).toBe("Elon")
})

test("Last name should be Sachin", () => {
  const sortedData = sortByAge()

  expect(sortedData[sortedData.length - 1]?.name).toBe("Sachin")
})

test("Length of the array should be 4", () => {
  const sortedData = sortByAge()

  expect(sortedData).toHaveLength(4)
})
