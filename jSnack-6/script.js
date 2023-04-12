// Array di oggetti di squadre di calcio
const squadre = [
  { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
  { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
];

// Generazione numeri random per punti fatti e falli subiti
for (let squadra of squadre) {
  squadra.puntiFatti = Math.floor(Math.random() * 101);
  squadra.falliSubiti = Math.floor(Math.random() * 51);
}

// Creazione di un nuovo array con solo nomi e falli subiti utilizzando la destructuring
const squadreNomiEFalli = [];
for (let { nome, falliSubiti } of squadre) {
  squadreNomiEFalli.push({ nome, falliSubiti });
}

// Stampa in console dell'array di squadre originale e dell'array di squadre con solo nomi e falli subiti
console.log('Array di squadre di calcio:', squadre);
console.log('Array di squadre con solo nomi e falli subiti:', squadreNomiEFalli);
