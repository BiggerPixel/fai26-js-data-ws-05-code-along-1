const fruits = [
  { name: "Äpple", price: 5 },
  { name: "Banan", price: 4 },
  { name: "Päron", price: 6 },
  { name: "Apelsin", price: 7 },
  { name: "Kiwi", price: 3 },
];

const list = document.querySelector("#list");

const showFruits = (items) => {
  const rows = items.map((fruit) => {
    return `<li>${fruit.name} – ${fruit.price} kr</li>`;
  });

  list.innerHTML = rows.join("");
};

showFruits(fruits);
