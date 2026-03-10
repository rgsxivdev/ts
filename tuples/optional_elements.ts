type Ticket = readonly [id: number, comment: string, label?: string];

function formatTicket(ticket: Ticket): string {
  const [id, comment, label] = ticket;

  return `${id} ${comment}${label ? ` [${label}]` : ""}`
}


const testOne: Ticket = [1, "My cans of tuna fish are missing"]
const testTwo: Ticket = [2, "Cats are everywhere!", "WONTFIX"]

console.log(formatTicket(testTwo))
console.log(formatTicket(testOne))
