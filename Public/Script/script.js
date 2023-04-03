//! Bouton "se connecter et ouverture/fermeture de la fenêtre de connexion"
//* On récupère le bouton de connexion et le formulaire
const connectButton = document.querySelector('.connect');
const formWrapper = document.querySelector('#login_form');

//* On récupère le bouton de fermeture du formulaire
const formClose = document.querySelector('#form-close');

//* On ajoute un gestionnaire d'événement au clic sur le bouton de connexion
connectButton.addEventListener('click', function(event){

    //* On empêche le comportement par défaut
    event.preventDefault();

    //* On rend visible l'élément
    formWrapper.style.display = 'flex';
    
});

//* On ajoute un gestionnaire d'événement au clic sur le bouton de fermeture du formulaire
formClose.addEventListener('click', function(event){

    //* On empêche le comportement par défaut
    event.preventDefault();

    //* On rend invisible l'élément
    formWrapper.style.display = 'none';
});
