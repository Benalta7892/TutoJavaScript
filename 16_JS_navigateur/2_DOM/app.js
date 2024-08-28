/**
 * Crée un élément HTML représentant un article
 * @param {{title: string, body: string}} post
 * @returns {HTMLElement}
 */
function createArticle(post) {
  const article = document.createElement("article");
  article.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    `;
  return article;
}

async function main() {
  const wrapper = document.querySelector("#lastPosts");
  const loader = document.createElement("p");
  loader.innerText = "Chargement en cours...";
  wrapper.append(loader);
  try {
    const r = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    if (!r.ok) {
      throw new Error("Erreur serveur");
    }

    const posts = await r.json();
    loader.remove();
    for (let post of posts) {
      wrapper.append(createArticle(post));
    }
  } catch (e) {
    loader.innerText = "Erreur lors du chargement";
    loader.style.color = "red";
    return;
  }
}

main();
