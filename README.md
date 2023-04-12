JSnacks
===

## Consegna 

jSnack 1

Abbiamo un elenco utenti (nome, cognome, età). Trovare i minorenni e gli over 65

jSnack 2

Abbiamo un elenco degli studenti di una facoltà. Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti. Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti

jSnack 4

Abbiamo un elenco degli studenti di una facoltà , identificati da id, Nome e somma totale dei loro voti di esame...

1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);

2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

jSnack 5

Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso. Stampare in console la bici con peso minore utilizzando destructuring e template literal

jSnack 6

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

BONUS

Aggiungere la foto o l’avatar dello studente e stampare tutti gli studenti con delle card HTML in ordine alfabetico per cognome.

BONUS 2

Stampare in pagina oltre che in console!


## Step da seguire: 
jSnack 1:
- In questo codice, utilizziamo il metodo filter() per filtrare gli utenti in base all'età e restituire gli utenti minori di 18 anni o maggiori di 65 anni.


jSnack 2:
- In questo codice, utilizziamo il metodo map() per creare un nuovo array con le informazioni richieste per ogni studente. Per ogni studente nell'array originale, estraiamo il nome, il cognome, la matricola e l'elenco dei voti. Calcoliamo la media dei voti utilizzando il metodo reduce(), quindi restituiamo un nuovo oggetto con le informazioni richieste.

jSnack 4:
- In questo codice, per la prima richiesta utilizziamo il metodo map() per creare un nuovo array con le targhe degli studenti, convertendo il loro nome in maiuscolo.

- Per la seconda richiesta utilizziamo il metodo filter() per filtrare gli studenti che hanno un totale di voti superiore a 70, utilizzando il metodo reduce() per calcolare il totale dei voti.

- Per la terza richiesta, applichiamo una condizione aggiuntiva alla funzione di filtro per controllare che l'id dello studente sia superiore a 120.

jSnack 5:
- In questo codice, ho creato l'array di oggetti "biciclette" con le proprietà "nome" e "peso". Successivamente, abbiamo utilizzato un ciclo for per confrontare i pesi di ogni bici e trovare quella più leggera. Dopo aver trovato la bici più leggera, abbiamo utilizzato la destructuring assignment per estrarre il nome e il peso della bici e li abbiamo stampati in console utilizzando un template literal.

