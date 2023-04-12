const users = [
  { nome: 'Mario', cognome: 'Rossi', eta: 30 },
  { nome: 'Luca', cognome: 'Verdi', eta: 18 },
  { nome: 'Paolo', cognome: 'Bianchi', eta: 50 },
  { nome: 'Giuseppe', cognome: 'Neri', eta: 70 },
];

const minori = users.filter((user) => user.eta < 18);
const over65 = users.filter((user) => user.eta > 65);

console.log(minori); // [{ nome: 'Luca', cognome: 'Verdi', eta: 18 }]
console.log(over65); // [{ nome: 'Giuseppe', cognome: 'Neri', eta: 70 }]
