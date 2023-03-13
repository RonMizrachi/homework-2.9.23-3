let hello = {
  name: "Eli",
  nameLast: "Rot",
  dog: "Rose",
};

hello.name = "Nadav";
let rot = "Last";
hello["name" + rot] = "Yoav";
function getRandomDrink() {
  return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
    (response) => response.json()
  );
}

function getDescription(ingredient) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + ingredient
  ).then((response) => response.json());
}

function displayIngs(desc) {
  let htmlDescriptions = document.getElementById("cocktailIngridients");
  desc.forEach((des) => {
    let newPar = document.createElement("p");
    newPar.innerText = des;
    htmlDescriptions.appendChild(newPar);
  });
}

async function displayThings() {
  let randomDrink = await getRandomDrink();
  let drinkScreen = document.getElementById("cocktailName");
  drinkScreen.innerText = randomDrink.drinks[0].strDrink;

  let ingredients = [];
  for (let i = 0; i < 15; i++) {
    if (randomDrink.drinks[0]["strIngredient" + i] != null) {
      ingredients.push(randomDrink.drinks[0]["strIngredient" + i]);
    }
  }
}
