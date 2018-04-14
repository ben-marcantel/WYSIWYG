let peeps = [
  {
    title: "Musician",
    name: "David Bowie",
    bio: "Bowie studied art, music, and design, including layout and typesetting..",
    image:  "https://classicrock945.ca/files/2017/10/Bowie.jpg",
    lifespan:{  
      birth: 1947,
      death: 2016
    }
  },
  {
    title: "Comedian",
    name: "David Cross",
    bio: "Lacking a plan, he drifted, working briefly for a lawn care company on Long Island. ",
    image: "https://media.gq.com/photos/59e78fa7855d3303830d1557/3:2/w_560/david-cross-apology.jpg",
    lifespan: {
      birth: 1964,
      death: "??"
    }
  },
  {
    title: "Athlete",
    name: "David Beckham",
    bio: "At the beginning of the 1996–97 season, Beckham was given the number 10 shirt that had most recently been worn by Mark Hughes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/David_Beckham.jpg/220px-David_Beckham.jpg",
    lifespan: {
      birth: 1975,
      death: "??"
    }
  },
  {
    title: "Sculpture",
    name: "Michelangelo's David",
    bio: "n 1991, a mentally disturbed artist named Piero Cannata attacked the statue with a hammer he had concealed beneath his jacket;in the process of damaging the toes of the left foot, he was restrained.",
    image: "https://www.walkaboutflorence.com/sites/default/files/Michelangelo_David_Florence_Italy.jpg",
    lifespan: {
      birth: 1504,
      death: "??"
    }
  }
]

let counter;

for (let i = 0; i < peeps.length; i++) {

  //variables for card sections
  let currentCard;
  let cardContainer = document.getElementById("card-container");
  let card = document.createElement("card");
  
  //card layout
  let header = document.createElement("header");
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let section = document.createElement("section");
  let bioElement = document.createElement("p");
  let footer = document.createElement("footer");
  let footerElement = document.createElement("p");
  
  //card info
  let name = document.createTextNode(`${peeps[i].name}`);
  let title = document.createTextNode(`${peeps[i].title}`);
  let bioInfo = document.createTextNode(`${peeps[i].bio}`);
  let footerInfo = document.createTextNode(`${peeps[i].lifespan.birth} - ${peeps[i].lifespan.death}`);

//add info to card
    counter += 1;
    card.setAttribute("id", `person-${counter}`);
    card.setAttribute("class", "david-card");

    cardContainer.appendChild(card);
    card.appendChild(header);
    cardContainer.appendChild(section);
    cardContainer.appendChild(footer);  

    h2.appendChild(name);
    h3.appendChild(title);
    header.appendChild(h2);
    header.appendChild(h3);
    
    section.innerHTML = `<img src="${peeps[i].image}">`;
    bioElement.appendChild(bioInfo);
    section.appendChild(bioElement);
    card.appendChild(section);
    footer.appendChild(footerInfo);   
    card.appendChild(footer); 
}

//Add event listeners to card
let articles = document.getElementsByClassName("david-card");
for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener("click", () => {
        textInput.value = "";
        event.target.classList.toggle("dotted-border");
        textInput.focus();
        currentCard = event.currentTarget;
        })
    }

//bio to input text
let textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", () => {
    currentCard.childNodes[1].childNodes[1].innerHTML = textInput.value;
    if (event.keyCode === 13) {
        textInput.value = "";
    }
})  