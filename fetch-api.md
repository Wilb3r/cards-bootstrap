```js
const cardPrincipal = document.getElementById('card-principal');
 
//Destructuring
const [album1, album2, album3, album4] = albums;
//arrow function o funcion de flecha
const btnClass = (stock) => {
    return stock > 0 ? "btn-primary" : "btn-danger disabled";
}
function Card(albums){
    const { album, artista, genero, stock} = albums;
    return `
    <div class="card mb-2" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${album}</h4>
    <p class="card-text m-0 fs-5">${artista} - ${genero}</p>
    <p class="fs-6"> disp ${stock}</p>
    <a href="#" class="btn ${btnClass(stock)}">Comprar</a>
  </div>
</div>
    `
}
cardPrincipal.innerHTML = Card(album1);
cardPrincipal.innerHTML += Card(album2);
cardPrincipal.innerHTML += Card(album3);
cardPrincipal.innerHTML += Card(album4);
// const albumOne = albums[0];
// const albumtwo = albums[1];
// console.log(albumOne);
// console.log(albumtwo);

/**tendríamos que utilizar el indice,
 * lo que no nos es factible porque si tuvieramos 100 albums,
 * eso sería caótico, entonces
 * aquí es donde entra "destructuring" */
```