# Este es un ejemplo en JS para let y const
## A continucaion variable let y variable cont

```js
console.log('Hola mundosqui');
//Ejemplo let
let contador = 0;
contador = contador + 1;
console.log('La variable vale: ' + contador);

//Ejemplo cont
const conta = 0;
conta = conta + 1;
console.log('La variable vale: ' + conta);
```
## Arrglos, Objetos literales y opcional operador 
```js
const frutas = ["pera", "manzana", "pina"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
```

## Objetos literales, no indexados 
```js
const animal = {
    color: "cafe",
    nombre: "simba",
    corriendo: true
}
console.log(animal.color);
console.log(animal.nombre);
console.log(animal["corriendo"]);

const tareas = {
    "2359-9lk8274":{
        title: "tarea #01"
        desc: "comprar cafe"
    }
}
console.log(tareas[2359-9lk274].title);
console.log(tareas[2359-9lk274].desc);
```

# Objetos literales y destructuring
```js
const animal = {
    color: "cafe",
    nombre: "simba",
    corriendo: true,
    favoritos: {
        dia: {
            ok: false,
        },
        noche:{
            ok: true,
        }
    }
}
console.log(animal.favoritos?.tarde?.ok);

const aves = {
    color: "azul",
    nombre: "Torogoz",
    volando: true
}

const {color, nombre, volando} = aves;
console.log('Hola soy un ' + nombre + ' de color ' + color);

const frutas = ["pera", "manzana", "uvas"];
const [fruta0, fruta1, fruta2] = frutas;
console.log(fruta0);
console.log(fruta1);
console.log(fruta2);
```
```js
const cardPrincipal = document.getElementById('card-principal');
 
//cardPrincipal.innerHTML = `<h1>hello world!</h1>`;
 
function Card(){
    return `
    <div class="card mb-2" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
;
}
 
cardPrincipal.innerHTML = Card();
cardPrincipal.innerHTML += Card();
```