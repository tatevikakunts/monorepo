const catalog = [
  {
    id: 0,
    src:
      "https://automobile-zip.ru/wp-content/uploads/2/5/2/2526e5f7208c799b04cc500d38867f19.jpg",
    brand: "Audi",
    model: "A3",
    year: "2019",
    color: "Red",
    price: "20000 Euro",
  },
  {
    id: 1,
    src:
      "https://goldwallpapers.com/uploads/posts/bmw-m5-wallpaper/bmw_m5_wallpaper_027.jpg",
    brand: "BMW",
    model: "M5",
    year: "2020",
    color: "Blue",
    price: "40000 Euro",
  },
  {
    id: 2,
    src: "https://a.d-cd.net/JAAAAgNxBuA-960.jpg",
    brand: "LADA",
    model: "Priora",
    year: "2021",
    color: "Silver",
    price: "7000 Euro",
  },
  {
    id: 3,
    src:
      "https://www.blogcdn.com/www.autoblog.com/media/2013/02/03-2014-mercedes-benz-e-class-fd.jpg",
    brand: "Mercedes",
    model: "E214",
    year: "2018",
    color: "Silver",
    price: "55000 Euro",
  },
];

catalog.forEach((element) => {
  const div = document.createElement("div");
  div.id = "car_" + element.id;

  const h3 = document.createElement("h3");
  h3.innerText = element.brand + " " + element.model;
  div.appendChild(h3);
  const h4 = document.createElement("h4");
  h4.innerText = element.price;
  div.appendChild(h4);
  document.querySelector("#left").appendChild(div);
});

const blocks = document.querySelectorAll("#left > div");
for (element of blocks) {
  element.addEventListener("click", (event) => {
    const id = +event.currentTarget.id.split("_")[1];
    const found = catalog.filter((car) => car.id === id);
    if (!found.length) {
      return;
    }
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerText = found[0].brand + " " + found[0].model;
    div.appendChild(h3);
    const pYear = document.createElement("p");
    pYear.innerText = found[0].year;
    div.appendChild(pYear);
    const pColor = document.createElement("p");
    pColor.innerText = found[0].color;
    div.appendChild(pColor);
    const pPrice = document.createElement("p");
    pPrice.innerText = found[0].price;
    div.appendChild(pPrice);
    const right = document.querySelector("#right");
    right.innerHTML = "";
    right.appendChild(div);
  });
}



const sc = catalogue.filter((elem) => elem.type === 0);
const mu = catalogue.filter((elem) => elem.type === 1);


if (id === 0) {
      sc.forEach((element) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = element.src;
        const h3 = document.createElement("h3");
        h3.innerText = element.name;
        const h4 = document.createElement("h4");
        h4.innerText = element.price;
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(img);

        document.querySelector("#right").appendChild(div);

      });
    } else {
      mu.forEach((element) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = element.src;
        const h3 = document.createElement("h3");
        h3.innerText = element.name;
        const h4 = document.createElement("h4");
        h4.innerText = element.price;
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(img);

        document.querySelector("#right").appendChild(div);
      });
    }
  });
}
