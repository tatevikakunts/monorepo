const catalogue = [
  {
    id: 0,
    name: "Eye Cream",
    descr:
      "Our fabulous range of puffy eyes cream refreshes and tackles the signs of ageing. ",
    weight: 15,
    quantity: 30,
    price: "25 EUR",
  },
  {
    id: 1,
    name: "Moisturiser",
    descr:
      "Use a cooling moisturiser to gradually reduce fine lines, and leave your complexion feeling fresher and more youthful.",
    weight: 40,
    quantity: 50,
    price: "35 EUR",
  },
  {
    id: 2,
    name: "Cleanser & Toner",
    descr:
      "Discover the route to radiance with our selection of cleansers. Pick the perfect product to match your skin type, such as a specially formulated cleanser or toner for oily skin.",
    weight: 200,
    quantity: 40,
    price: "20 EUR",
  },
  {
    id: 3,
    name: "Lip Balm",
    descr:
      "Our amazing range of lip balms and lip scrubs will turn your lips into a blossoming flowers",
    weight: 10,
    quantity: 20,
    price: "15 EUR",
  },
  {
    id: 4,
    name: "Face Mask",
    descr:
      "Try our new range of clay masks with the mud of the Dead Sea and the pore cleansing complex",
    weight: 50,
    quantity: 10,
    price: "30 EUR",
  },
];

const renderUl = () => {
  const ul = document.createElement("ul");
  catalogue.forEach((elem) => {
    const li = document.createElement("li");
    li.id = "product_" + elem.id;
    li.addEventListener("click", (event) => {
      event.preventDefault();
      renderProductDescr(event.target.id);
    });
    const h3 = document.createElement("h3");
    h3.innerText = elem.name;
    const p = document.createElement("p");
    p.innerText = elem.price;
    li.appendChild(h3);
    li.appendChild(p);
    ul.appendChild(li);
  });
  const div = document.querySelector("#list");
  div.innerHTML = "";
  div.appendChild(ul);
};

// const getProduct = (id) => {
//   const product = catalogue.filter((product) => {
//     return product.id === id;
//   });
// };

const renderProductDescr = (elementId) => {
  let id = +elementId.split("_")[1];
  //   const selection = catalogue.filter((elem) => {
  //     elem.id === id;
  //   });
  console.log(
    catalogue.filter((elem) => {
      elem.id === id;
    })
  );

    const full = document.querySelector("#details");
    const h2 = document.createElement("h2");
    h2.innerText = selection[0].name;
    const h3 = document.createElement("h3");
    h3.innerText = `PRICE + ${selection[0].price}`;
    const h4_1 = document.createElement("h4");
    h4_1.innerText = `WEIGHT + ${selection[0].weight}`;
    const h4_2 = document.createElement("h4");
    h4_2.innerText = `QUANTITY + ${selection[0].quantity}`;
    const p = document.createElement("p");
    p.innerText = selection[0].descr;
    full.innerHTML = "";
    full.appendChild(h2);
    full.appendChild(h3);
    full.appendChild(h4_1);
    full.appendChild(h4_2);
    full.appendChild(p);
};
renderUl();
