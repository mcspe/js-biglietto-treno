const tripKM = parseFloat(prompt('quanti km hai intenzione di percorrere? (inserire un valore numerico)'));

const userAge = parseInt(prompt('quanti anni hai? (inserire un valore numerico)'));

const priceFull = 0.21;

//const priceExample = Math.round(0.3654 * 100) / 100;

const priceUnderAge = priceFull - ((priceFull * 20) / 100);

const priceOverAge = priceFull - ((priceFull * 40) / 100);

let ticketPrice;

console.log(`
  lunghezza viaggio: ${tripKM}
  età passeggero: ${userAge}
  prezzo intero: €${priceFull}
  prezzo under 18: €${priceUnderAge}
  prezzo over 65: €${priceOverAge}
`);

if (userAge < 18){
  ticketPrice = tripKM * priceUnderAge;
} else if (userAge > 64){
  ticketPrice = tripKM * priceOverAge;
} else{
  ticketPrice = tripKM * priceFull;
}

ticketPrice = Math.round((ticketPrice + Number.EPSILON)*100) / 100;

console.log(`
  prezzo del biglietto: ${ticketPrice}
`);