// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
const getPostTitle = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(obj => resolve(obj.title))
        .catch(reject);
    });
    return promessa;
}
getPostTitle(3)
.then(obj => console.log(obj))
.catch(error => console.error(error));
// 🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.