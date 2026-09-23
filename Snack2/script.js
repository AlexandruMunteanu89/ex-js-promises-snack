// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".
const creaLanciaDado = () => {
    let ultimoLancio = null;
    return function(){
        return new Promise((resolve, reject) => {
            console.log(' Sto lanciando il dado...');
            setTimeout(() => {
                if(Math.random() < 0.2){
                    ultimoLancio = null;
                    reject("Dado incastrato! Lancia di nuovo.")
                }else{
                    const risultato = Math.floor(Math.random() * 6) + 1;
                    if(risultato === ultimoLancio){
                        console.log('Incredibile');
                        
                    }
                    ultimoLancio = risultato;
                    resolve(risultato);
                }
            }, 3000);
        });
    }
}
  

const lanciaDadoMemorizzato = creaLanciaDado();

lanciaDadoMemorizzato()
    .then(risultato => {
        console.log(`Il tuo numero e:`, risultato)
    lanciaDadoMemorizzato()
    .then(risultato => console.log(`Il tuo numero e:`, risultato))
    .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
    