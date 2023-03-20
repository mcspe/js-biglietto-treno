const userName = prompt('Benvenuto! Per iniziare inserisci il tuo nome:');

const tripKM = parseFloat(prompt('Quanti km hai intenzione di percorrere? (inserire un valore numerico)')); //chiede all'utente il numero di km che dovrà percorrere

const userAge = parseInt(prompt('Quanti anni hai? (inserire un valore numerico)')); //chiede all'utente l'età

const priceFull = 0.21; // prezzo unitario per km

//const priceExample = Math.round(0.3654 * 100) / 100; //arrotonda il numero moltiplicato per 100 cosìcche dividendolo in seguito per 100 sarà arrotondato al centesimo

const priceUnderAge = Math.round(((priceFull - ((priceFull * 20) / 100)) + Number.EPSILON)*100) / 100;// calcola il prezzo scontato del 20% per minorenni senza arrotondare

const priceOverAge = Math.round(((priceFull - ((priceFull * 40) / 100)) + Number.EPSILON)*100) / 100; // calcola il prezzo scontato del 40% per ultrea sessantacinquenni senza arrotondare

console.log(`
lunghezza viaggio: ${tripKM}
età passeggero: ${userAge}
prezzo intero: €${priceFull}
prezzo under 18: €${priceUnderAge}
prezzo over 65: €${priceOverAge}
`);

let ticketPrice = 0;

//console.log(typeof(ticketPrice));

if (userAge < 18){
  ticketPrice = tripKM * priceUnderAge;
} else if (userAge > 64){
  ticketPrice = tripKM * priceOverAge;
} else{
  ticketPrice = tripKM * priceFull;
} // stabilisce il prezzo del biglietto in base all'età fornita dall'utente

ticketPrice = Math.round((ticketPrice + Number.EPSILON)*100) / 100; // arrotonda il prezzo finale al centesimo

console.log(`prezzo del biglietto: ${ticketPrice}`);

document.getElementById('result').outerHTML = `
  <div class="container text-center my-5 py-5 bg-danger bg-opacity-50 rounded-5">

    <h1 class="mb-5">CALCOLA IL PREZZO DEL TUO BIGLIETTO</h1>

    <p class="fs-4 fst-italic">
      Ciao <span class="fw-bold">${userName}</span> in base alla tua età(<span class="fw-bold">${userAge}</span>) e ai km da percorrere(<span class="fw-bold">${tripKM}</span>) il prezzo del tuo biglietto sarà di:
    </p>

    <p class="fs-3 fw-bold mb-5">€ ${ticketPrice}*</p>

    <div class="small fst-italic">

      <p>
        *Il prezzo del biglietto viene calcolato arrotondando alla seconda cifra decimale.
        <ul class="list-unstyled">
          <li>Il prezzo unitario per km è di €${priceFull}</li>
          <li>Il prezzo per i minori di 18 anni è di €${priceUnderAge}, calcolato applicando uno sconto del 20% sul prezzo unitario</li>
          <li>Il prezzo per colore che hanno più di 65 anni è di €${priceOverAge}, calcolato applicando uno sconto del 40% sul prezzo unitario</li>
        </ul>        
      </p>
      
    </div>
  </div>
`;