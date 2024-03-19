import Card from "./components/card.js";
import { cardPrincipal } from "./components/elements.js";
spinner.innerHTML =`
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
`;
//ahora usamos la funcion await
 const getAlbums = async () => {
    try{
        const res = await fetch ("./public/data.json");

        if(!res.ok){
            throw{ ok: false, msg: "error 404"}
        }
        const data = await res.json();
        //console.log(data);
        data.forEach((item) =>{
            cardPrincipal.innerHTML += Card(item);
        })
    } catch (error){
        cardPrincipal.innerHTML += "<p style='color: red;'> Error 404 </p>"
    }finally{
        setTimeout(() => {
            spinner.innerHTML= "";
        }, 400)
    }

 }
 getAlbums();
//Destructuring
//const [album1, album2, album3, album4] = albums;

// cardPrincipal.innerHTML = Card(album1);
// cardPrincipal.innerHTML += Card(album2);
// cardPrincipal.innerHTML += Card(album3);
// cardPrincipal.innerHTML += Card(album4);
// const albumOne = albums[0];
// const albumtwo = albums[1];
// console.log(albumOne);
// console.log(albumtwo);

/**tendríamos que utilizar el indice,
 * lo que no nos es factible porque si tuvieramos 100 albums,
 * eso sería caótico, entonces
 * aquí es donde entra "destructuring" */