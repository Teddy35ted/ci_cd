document.getElementById("submitComment").addEventListener("click", function () {
    const comment = document.getElementById("comment").value;
  
    // Vulnérabilité XSS : Injection directe du contenu utilisateur dans le DOM sans échapper les caractères dangereux.
    const commentElement = `<p>${comment}</p>`;
    document.getElementById("commentsSection").innerHTML += commentElement;
  
    // Réinitialisation de la zone de commentaire
    document.getElementById("comment").value = "";
  });
  