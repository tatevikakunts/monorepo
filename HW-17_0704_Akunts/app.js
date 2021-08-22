const assort = [
  {
    id: 0,
    name: "Skincare",
  },
  {
    id: 1,
    name: "Makeup",
  },
];

const catalogue = [
  {
    id: 0,
    name: "Eye Cream",
    type: 0,
    src: "https://images-na.ssl-images-amazon.com/images/I/41z71nQQGyL.jpg",
    descr:
      "Our fabulous range of puffy eyes cream refreshes and tackles the signs of ageing. ",
    weight: 15,
    quantity: 30,
    price: "25 EUR",
  },
  {
    id: 1,
    name: "Moisturiser",
    type: 0,
    src:
      "https://www.darphin.eu/media/images/products/540x540/da_sku_D75W01_56192_540x540_0.jpg",
    descr:
      "Use a cooling moisturiser to gradually reduce fine lines, and leave your complexion feeling fresher and more youthful.",
    weight: 40,
    quantity: 50,
    price: "35 EUR",
  },
  {
    id: 2,
    name: "Cleanser",
    type: 0,
    src:
      "https://feelunique.com/cdn-cgi/image/quality=90,format=auto,metadata=none,dpr=1/img/products/126513/cerave_hydrating_cream_to_foam_cleanser_236ml_1599648403_main.jpg",
    descr:
      "Discover the route to radiance with our selection of cleansers. Pick the perfect product to match your skin type, such as a specially formulated cleanser or toner for oily skin.",
    weight: 200,
    quantity: 40,
    price: "20 EUR",
  },
  {
    id: 3,
    name: "Lip Balm",
    type: 0,
    src:
      "https://www.drhauschka.de/media/image/b3/ba/a8/lippenbalsam-lippenkosmetikum-01-429000087_350x350.jpg",
    descr:
      "Our amazing range of lip balms and lip scrubs will turn your lips into a blossoming flowers",
    weight: 10,
    quantity: 20,
    price: "15 EUR",
  },
  {
    id: 4,
    name: "Face Mask",
    type: 0,
    src:
      "https://cdn.flaconi.de/media/catalog/300x/g/l/glamglow-thirstymud-hydrating-treatment-gesichtsmaske-50-g-0889809001407.jpg",
    descr:
      "Try our new range of clay masks with the mud of the Dead Sea and the pore cleansing complex",
    weight: 50,
    quantity: 10,
    price: "30 EUR",
  },
  {
    id: 5,
    name: "Foundation",
    type: 1,
    src:
      "https://www.narscosmetics.de/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw9620a42a/hi-res/B_SGF_16.5_pampelune_c2000x2000.jpg?sw=856&sh=750&sm=fit",
    descr:
      "Our foundations are designed to fulfill all the dreams of our customers ",
    weight: 30,
    quantity: 30,
    price: "25 EUR",
  },
  {
    id: 6,
    name: "Blush",
    type: 1,
    src:
      "https://www.maccosmetics.de/media/export/cms/products/640x600/mac_sku_M22013_640x600_0.jpg",
    descr:
      "The new trend of a flawless complexion with a hint of a blush will make you fabulous",
    weight: 10,
    quantity: 20,
    price: "25 EUR",
  },
  {
    id: 7,
    name: "Mascara",
    type: 1,
    src:
      "https://media.douglas.de/medias/GqVWu9147168-0-dgl-DE.jpg?context=bWFzdGVyfGltYWdlc3w0OTgxMXxpbWFnZS9qcGVnfGg5YS9oM2QvODgwNTU3NjQwOTExOC9HcVZXdTkxNDcxNjhfMF9kZ2wtREUuanBnfDA1Y2FlN2ZiYmIwNDhjYWE5ZDRmNTM5MGE2NGFjNTlkOWFmNjA2NzNlNmRjZWViYzA0ZWJlZThiZmM2NjFlZWU",
    descr: "Eyelashes like a doll? Sure! The answer is our mascara",
    weight: 8,
    quantity: 40,
    price: "20 EUR",
  },
  {
    id: 8,
    name: "Lipstick",
    type: 1,
    src:
      "https://www.narscosmetics.de/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw773e6329/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Raw_Seduction_Satin_GLBL_B_square.jpg?sw=856&sh=750&sm=fit",
    descr: "From red to peach. Choose the color you wish",
    weight: 4,
    quantity: 20,
    price: "20 EUR",
  },
  {
    id: 9,
    name: "Powder",
    type: 1,
    src:
      "https://www.narscosmetics.de/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw9a2ad31d/hi-res/0607845014201.jpg?sw=856&sh=750&sm=fit",
    descr: "Mattified skin for all day long",
    weight: 15,
    quantity: 10,
    price: "30 EUR",
  },
];

assort.forEach((element) => {
  const div = document.createElement("div");
  div.id = "type_" + element.id;
  const h2 = document.createElement("h2");
  h2.innerText = element.name;
  div.appendChild(h2);
  document.querySelector("#left").appendChild(div);
});

const types = document.querySelectorAll("#left > div");

for (element of types) {
  element.addEventListener("click", (event) => {
    const id = +event.currentTarget.id.split("_")[1];
    const found = catalogue.filter((typ) => typ.type === id);
    const right = document.querySelector("#right");
    right.innerHTML = "";
    found.forEach((element) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = element.src;
      const h3 = document.createElement("h3");
      h3.innerText = element.name;
      const h4 = document.createElement("h4");
      h4.innerText = element.price;
      const button = document.createElement("button");
      button.innerHTML = "BUY";
      div.appendChild(img);
      div.appendChild(h3);
      div.appendChild(h4);
      div.appendChild(button);
      document.querySelector("#right").appendChild(div);
    });
  });
}
