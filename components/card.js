//arrow function o funcion de flecha
export default function Card(albums){
const btnClass = (stock) => {
    return stock > 5 ? "btn-primary" : "btn-danger disabled";
    }
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
    `;
}
//Para algo en especifico