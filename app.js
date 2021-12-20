// "1-word list", "2-word list", "3-word list"
let cardValues = {
  title: [
    {
      name: "1-word list",
      words: "25-words",
    },
    {
      name: "2-word list",
      words: "24-words",
    },
    {
      name: "3-word list",
      words: "20-words",
    },
    {
      name: "4-word list",
      words: "20-words",
    },
    {
      name: "5-word list",
      words: "20-words",
    },
    {
      name: "6-word list",
      words: "20-words",
    },
    {
      name: "7-word list",
      words: "20-words",
    },
    {
      name: "8-word list",
      words: "20-words",
    },
    {
      name: "9-word list",
      words: "20-words",
    },
    {
      name: "10-word list",
      words: "20-words",
    },
    {
      name: "11-word list",
      words: "20-words",
    },
    {
      name: "12-word list",
      words: "20-words",
    },
    {
      name: "13-word list",
      words: "20-words",
    },
  ],
};
let cardNa = document.querySelector(".cards");
let sortFilter = document.querySelector(".sort__filter");

for (let i = 0; i < cardValues.title.length; i++) {
  let card = document.createElement("div");
  let cardNames = document.createElement("ul");
  let cardName = document.createElement("li");
  let cardWord = document.createElement("li");
  card.className = "card";
  cardNames.className = "card__content";
  cardName.className = "card__name";
  cardWord.className = "card__word";
  cardName.textContent = cardValues.title[i].name;
  cardWord.textContent = cardValues.title[i].words;
  cardNames.appendChild(cardName);
  card.appendChild(cardNames);
  cardNa.appendChild(card);
  cardNames.appendChild(cardWord);
  card.appendChild(cardNames);
  cardNa.appendChild(card);
}

let li = document.querySelectorAll(".card");
sortFilter.addEventListener("keyup", () => {
  for (let x = 0; x < li.length; x++) {
    filter = sortFilter.value.toUpperCase();
    txtValue = li[x].textContent || li[x].innerText;
    if (txtValue.toUpperCase().indexOf(filter)) {
      li[x].style.display = "none";
    } else {
      li[x].style.display = "";
    }
  }
});
