# HOMEWORK 2 - JS

Termin oddania pracy (pull request wykonany z Waszego brancha do brancha main) - 08.01.2023 (niedziela).

## Plan działania

1. Stworzyć swój branch od brancha "main" - `git checkout -b 'homework2/imienazwisko'`.
2. Zadania możecie wykonać w jednym pliku JS, albo stwórzcie pliki per każde zadanie, w taki sposób, żeby było wiadomo, która funkcja jest w którym pliku.
3. Po wykonaniu zadań spushować wszystkie zmiany do githuba, wystawić pull requesta i w tytule podać `Homework 2 - [Imie i nazwisko]`.

## Zadania

1. Stwórz funkcję, która jako argument będzie przyjmować obiekt, stworzy nowy obiekt, w którym zamieni klucze z wartościami i zwróci ten nowo stworzony obiekt.
Np. dla obiektu `{red: '#FF0000', green: '#00FF00', white: '#FFFFFF'}` wynikiem będzie obiekt: `{'#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white'}` - 2 pkt

2. Stwórz funkcję podającą liczbę dzieci w poszczególnych klasach szkolnych na podstawie wieku. Funkcja przyjmuje tablicę z numberami (wiek dziecka), a ma zwrócić obiekt, w którym kluczami są nazwy szkolnych klas, a wartościami liczba dzieci spełniająca warunek wiekowy dla danej klasy.

Wg wzoru:
```
Zerówka -> 5 lat
1 klasa -> 6 lat
2 klasa -> 7 lat
3 klasa -> 8 lat
4 klasa -> 9 lat
```

Czyli np. 
```
function selekcjaSzkolna([5, 7, 4, 9, 10, 5, 15, 9, 5]) -> { 
  'Zerówka': 3,
  '1 klasa': 0,
  '2 klasa': 1, 
  '3 klasa': 0, 
  '4 klasa': 2,
}
```

Jeżeli w tablicy pojawia się wiek dziecka zbyt duży lub zbyt mały, aby przyporządkować do którejś klasy, to po prostu pomijamy ten number. - 3 pkt

3. Stwórz funkcję, która w argumencie przyjmować będzie string, a zwracać będzie pierwszy niepowtarzający się znak tego stringa. Np. dla argumentu "abacabad" funkcja ma zwrócić "c".
Mogą przydać się funkcje indexOf i lastIndexOf. - 2 pkt.

4. Stwórz funkcję, która przyjmuje jako argument tablicę obiektów i zwróci ją posortowaną po wartości libraryID rosnąco. Np mając
```
const library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }]
```
Wynikiem wywołania funkcji ma być:
```
[ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   }
]
``` - 2 pkt
