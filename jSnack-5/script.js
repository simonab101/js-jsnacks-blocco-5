const biciclette = [
  { nome: 'Bici 1', peso: 10 },
  { nome: 'Bici 2', peso: 8 },
  { nome: 'Bici 3', peso: 12 },
  { nome: 'Bici 4', peso: 9 },
];

let biciLeggera = biciclette[0];
for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i];
  }
}

const { nome, peso } = biciLeggera;
console.log(`La bici più leggera è ${nome} con un peso di ${peso} kg.`);

