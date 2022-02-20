const backgroundImage = ["MediterraneanSea.jpeg", "newyork.jpeg", "seoul.jpeg"];

const todayBgimg =
  backgroundImage[Math.floor(Math.random() * backgroundImage.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("background-image");

bgImage.src = `img/${todayBgimg}`;

document.body.appendChild(bgImage);
