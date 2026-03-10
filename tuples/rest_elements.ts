function tokenize(input: string): [number, ...string[]] {

  const inputAsArray = input.split(" ")
  const tokenCost = inputAsArray.length / 10
  return [tokenCost, ...inputAsArray]
}

const input = "Dude! You got a tattoo!"

console.log
  (tokenize(input))

