Esercizio 1: Creazione di oggetti


In questo esercizio utilizzerai concetti di programmazione orientata agli oggetti per definire e utilizzare un oggetto personalizzato in JavaScript.


Creare la classe che crea oggetti di tipo Video. 
La funzione costruttore dovrebbe accettare argomenti di title (una stringa che rappresenta il titolo), uploader (una stringa, la persona che ha caricato il video) e seconds(un numero, la durata) e dovrebbe salvarli come proprietà dell'oggetto.
Creare un metodo sull'oggetto Video chiamato watch(). 
Quando viene chiamato quel metodo, dovrebbe usare console.log per produrre una stringa come "Hai guardato tutti i 60 secondi di La vita è bella!"
Crea un'istanza di un nuovo oggetto Video e chiama il watch()metodo su di esso.
Crea un'istanza di un altro oggetto Video passando al costruttore gli argomenti previsti con valori diversi.
Bonus: usa un array di dati e un ciclo for per istanziare 5 oggetti Video.
Bonus: fai in modo che il metodo watch accetti quantità di secondi da guardare e chiamalo con diverse quantità di secondi.


Esercizio 2: estendere gli oggetti


In questo esercizio utilizzerai concetti di programmazione orientata agli oggetti per estendere un oggetto personalizzato in JavaScript.


Inizia con la soluzione dell'ultimo esercizio 1
Definire una nuova classe chiamata MusicVideo che estende Video. 
Il suo costruttore dovrebbe accettare un artista come argomento.
Crea un'istanza di un nuovo oggetto MusicVideoo e chiama il watch()metodo su di esso.
Aggiungi un metodo a MusicVideo chiamato play() che utilizza console.log per produrre una stringa come "Hai suonato Cenere di Lazza!.
Bonus: usa un array di dati e un ciclo for per istanziare 5 oggetti MusicVideo.
Bonus: crea una serie di dati video sia con video normali che con video musicali, passali in rassegna e decidi se trasformarli in un oggetto Video o in MusicVideo.


Esercizio 3: Costruttori


In questo esercizio utilizzerai i valori letterali oggetto per creare costruttori più chiari per gli oggetti.


Inizia con la soluzione dell'esercizio 2
Commenta il codice di MusicVideo, poiché lavorerai prima sulla modifica di Video.
Modificare il costruttore della classe Video in modo che accetti un singolo argomento letterale oggetto invece di più argomenti.
Crea un nuovo oggetto Video e chiama il metodo watch().
Rendi facoltativi gli argomenti assegnando loro valori predefiniti se non sono specificati.
Bonus: modifica il costruttore della classe MusicVideo per accettare anche un singolo argomento letterale oggetto invece di più argomenti. Provalo chiamandolo almeno una volta (creando un oggetto di tipo MusicVideo).
Super Bonus: assicurati che se all'oggetto letterale mancano alcuni valori, vengono utilizzati i valori predefiniti al posto di undefined
