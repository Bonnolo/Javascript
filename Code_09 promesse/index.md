Esercizio 1: Le promises spiegate usando il mio compleanno

La mia amica Kayo promette di fare una torta per il mio compleanno in due settimane.

Se tutto va bene e Kayo non si ammala, avremo un certo numero di torte. (Le torte sono numerabili in questo tutorial). Altrimenti, se Kayo si ammala, non avremo torte.

Ad ogni modo, faremo comunque una festa.

Tradurre la storia in codice.

Bonus: generare randomicamente il boolean che determina se Kayo è ammalata o meno

Esercizio 2: Costruisci un gioco di indovinelli
I requisiti:

User story: un utente può inserire un numero
User story: il sistema seleziona un numero casuale da 1 a 6
User story: se il numero dell'utente è uguale a un numero casuale, assegna all'utente 2 punti
User story: se il numero dell'utente è diverso dal numero casuale di 1, dare all'utente 1 punto. Altrimenti, dai all'utente 0 punti
User story: l'utente può giocare per tutto il tempo che desidera

Bonus: uso di async/await per rendere più elegante il codice

Esercizio 3: Recupera le informazioni sul paese da un'API

Bonus: creare la funzione fetchCountry che accetta come argomento il paese/nazione e ritorna una promise al chiamante

Esercizio 4: Recupera i paesi confinanti di un paese
Dato il bonus dell'esercizio 3, riutilizza la funzione fetchCountry, che recupera i dati dall'endpoint: https://restcountries.eu/rest/v2/alpha/${alpha3Code} (dove alpha3code è il codice del paese).

Per ogni "border" dei "borders" nella response recupera (con successive chiamate asincrone all'endpoint precedente) i dati dei paesi confinanti

Gestisci qualsiasi errore che potrebbe verificarsi durante il recupero dei dati.
