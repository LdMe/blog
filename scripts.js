const posts = [
    {
      id: 1,
      title: "Introducción a JavaScript",
      content: "JavaScript es un lenguaje de programación usado para hacer páginas web interactivas."
    },
    {
      id: 2,
      title: "Funciones en JavaScript",
      content: "Las funciones permiten reutilizar código y organizar mejor los programas."
    },
    {
      id: 3,
      title: "Arrays en JavaScript",
      content: "Los arrays son estructuras de datos que permiten almacenar múltiples valores en una sola variable."
    },
    {
      id: 4,
      title: "DOM y manipulación de elementos",
      content: "El DOM permite acceder y modificar los elementos de una página web mediante JavaScript."
    },
    {
      id: 5,
      title: "Eventos en JavaScript",
      content: "Los eventos permiten ejecutar funciones cuando el usuario interactúa con la página."
    }
];
  
// función para crear un post nuevo
function createPost(title,content){
    // crear los elementos
    const article = document.createElement("article");
    const header = document.createElement("h3");
    const paragraph = document.createElement("p");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // rellenar los elementos
    article.classList.add("post"); // añadimos la clase post al articulo
    header.textContent = title; // añadimos el contenido del titulo
    paragraph.textContent = content; // añadimos contenido del párrafo
    editButton.textContent ="Editar";
    deleteButton.textContent ="Borrar";

    // añadir listeners a los botones
    deleteButton.addEventListener("click",()=>{
        if(confirm("Seguro que quieres borrar el post?"))
        {
            article.remove();
        }
    })

    // relacionar los elementos
    article.append(header,paragraph,editButton,deleteButton);
    const postSection = document.getElementById("posts");
    postSection.appendChild(article);

}

// bucle para crear posts iniciales
for(let i = 0; i < posts.length; i++){
    createPost(posts[i].title,posts[i].content);
}

// listener para formulario de post nuevo
const form = document.getElementById("new-post-form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(form.title.value);
    console.log(form.content.value);
    createPost(form.title.value,form.content.value);
    form.reset();
})

// listener para input de busqueda
const searchBar = document.getElementById("searchbar"); // conseguimos el input de busqueda

searchBar.addEventListener("input",(e)=>{ // añadimos un listener para cuando escribimos algo
    const searchTerm = e.target.value; // el texto que estamos buscando
    const posts = document.getElementsByClassName("post"); // sacamos todos los posts
    for(let i = 0; i < posts.length; i++){ // para cada post miramos si contiene el texto escrito
        const post = posts[i]; // guardamos el post en una variable para simplificar
        const title = post.querySelector("h3"); // buscamos un h3 dentro del post
        const paragraph = post.querySelector("p"); // buscamos un p dentro del post
        
        if(title.innerText.includes(searchTerm) || paragraph.innerText.includes(searchTerm)){ // si el contenido del titulo o del texto contienen lo que buscamos
             post.classList.remove("hidden"); // quitamos la clase hidden
        }else{
            post.classList.add("hidden"); // añadimos la clase hidden
        }

    }

})