const backgroundImage = ["지중해.jpeg"];

const todayBgimg =
  backgroundImage[Math.floor(Math.random() * backgroundImage.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("background-image");

bgImage.src = `img/${todayBgimg}`;

document.body.appendChild(bgImage);
// window.appendChild(bgImage);