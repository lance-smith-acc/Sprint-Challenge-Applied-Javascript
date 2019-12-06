// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

function createCard (data) {
    // Add Elements
    const cardShell = document.createElement('div');
            cardHeadline = document.createElement('div');
            cardAuthor = document.createElement('div');
             imgShell = document.createElement('div');
                authorImg = document.createElement('img');
            authorName = document.createElement('span')
    
    // Set Classes
    cardShell.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    imgShell.classList.add('img-container');

    // Add content
    cardHeadline.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    authorName.textContent = data.authorName;

    // set structure
    cardShell.appendChild(cardHeadline);
    cardShell.appendChild(cardAuthor);
        cardAuthor.appendChild(imgShell);
            imgShell.appendChild(authorImg);
            cardAuthor.appendChild(authorName);

    return cardShell;
}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        
        const javascriptArticles = Object.entries(response.data.articles.javascript);
        const bootstrapArticles = Object.entries(response.data.articles.bootstrap);
        const technologyArticles = Object.entries(response.data.articles.technology);
        const jqueryArticles = Object.entries(response.data.articles.jquery);
        const nodeArticles = Object.entries(response.data.articles.node);

        javascriptArticles.forEach(element => {
            cardsContainer.appendChild(createCard(element[1]));
        });
        bootstrapArticles.forEach(element => {
            cardsContainer.appendChild(createCard(element[1]));
        });
        technologyArticles.forEach(element => {
            cardsContainer.appendChild(createCard(element[1]));
        });
        jqueryArticles.forEach(element => {
            cardsContainer.appendChild(createCard(element[1]));
        });
        nodeArticles.forEach(element => {
            cardsContainer.appendChild(createCard(element[1]));
        });


    })
    // .then(reponse => {
    //     console.log(reponse);
    // })