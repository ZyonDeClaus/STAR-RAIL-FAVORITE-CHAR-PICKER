// Data Karakter HSR

const characters = [
  {
    name: "Archer",
    image: "images/Character Splash Art/Archer Splash Art.png",
  },
  {
    name: "Phainon",
    image: "images3/Character Splash Art/Phainon Splash Art.png",
  },
  { name: "Saber", image: "images/Character Splash Art/Saber Splash Art.png" },
  {
    name: "Acheron",
    image: "images/Character Splash Art/Acheron Splash Art.png",
  },
  {
    name: "Aglaea",
    image: "images/Character Splash Art/Aglaea Splash Art.png",
  },
  { name: "Anaxa", image: "images/Character Splash Art/Anaxa Splash Art.png" },
  {
    name: "Argenti",
    image: "images/Character Splash Art/Argenti Splash Art.png",
  },
  {
    name: "Aventurine",
    image: "images2/Character Splash Art/Aventurine Splash Art_full.png",
  },
  { name: "Bailu", image: "images2/Character Splash Art/Bailu Splash Art.png" },
  {
    name: "Black Swan",
    image: "images2/Character Splash Art/Black Swan Splash Art.png",
  },
  { name: "Blade", image: "images2/Character Splash Art/Blade Splash Art.png" },
  {
    name: "Boothill",
    image: "images2/Character Splash Art/Boothill Splash Art.png",
  },
  {
    name: "Bronya",
    image: "images2/Character Splash Art/Bronya Splash Art.png",
  },
  {
    name: "Castorice",
    image: "images2/Character Splash Art/Castorice Splash Art.png",
  },
  {
    name: "Cipher",
    image: "images2/Character Splash Art/Cipher Splash Art.png",
  },
  { name: "Clara", image: "images2/Character Splash Art/Clara Splash Art.png" },
  {
    name: "Dan Heng Imbibitor Lunae",
    image:
      "images2/Character Splash Art/Dan Heng - Imbibitor Lunae Splash Art.png",
  },
  {
    name: "Dr. Ratio",
    image: "images2/Character Splash Art/Dr. Ratio Splash Art.png",
  },
  {
    name: "Feixiao",
    image: "images2/Character Splash Art/Feixiao Splash Art.png",
  },
  {
    name: "Firefly",
    image: "images2/Character Splash Art/Firefly Splash Art.png",
  },
  {
    name: "Fu Xuan",
    image: "images2/Character Splash Art/Fu Xuan Splash Art.png",
  },
  { name: "Fugue", image: "images2/Character Splash Art/Fugue Splash Art.png" },
  {
    name: "Gepard",
    image: "images2/Character Splash Art/Gepard Splash Art.png",
  },
  {
    name: "Himeko",
    image: "images/Character Splash Art/Himeko Splash Art.png",
  },
  {
    name: "Huohuo",
    image: "images/Character Splash Art/Huohuo Splash Art.png",
  },
  {
    name: "Hyacine",
    image: "images/Character Splash Art/Hyacine Splash Art.png",
  },
  { name: "Jade", image: "images3/Character Splash Art/Jade Splash Art.png" },
  {
    name: "Jiaoqiu",
    image: "images3/Character Splash Art/Jiaoqiu Splash Art.png",
  },
  {
    name: "Jing Yuan",
    image: "images3/Character Splash Art/Jing Yuan Splash Art.png",
  },
  {
    name: "Jingliu",
    image: "images3/Character Splash Art/Jingliu Splash Art.png",
  },
  { name: "Kafka", image: "images3/Character Splash Art/Kafka Splash Art.png" },
  {
    name: "Lingsha",
    image: "images3/Character Splash Art/Lingsha Splash Art.png",
  },
  {
    name: "Luocha",
    image: "images3/Character Splash Art/Luocha Splash Art.png",
  },
  { name: "Mydei", image: "images3/Character Splash Art/Mydei Splash Art.png" },
  { name: "Rappa", image: "images3/Character Splash Art/Rappa Splash Art.png" },
  {
    name: "Robin",
    image: "images3/Character Splash Art/Robin Splash Art_full.png",
  },
  {
    name: "Ruan Mei",
    image: "images3/Character Splash Art/Ruan Mei Splash Art.png",
  },
  { name: "Seele", image: "images3/Character Splash Art/Seele Splash Art.png" },
  {
    name: "Silver Wolf",
    image: "images/Character Splash Art/Silver Wolf Splash Art.png",
  },
  {
    name: "Sparkle",
    image: "images/Character Splash Art/Sparkle Splash Art.png",
  },
  {
    name: "Sunday",
    image: "images/Character Splash Art/Sunday Splash Art.png",
  },
  {
    name: "The Herta",
    image: "images/Character Splash Art/The Herta Splash Art.png",
  },
  {
    name: "Topaz and Numby",
    image: "images/Character Splash Art/Topaz & Numby Splash Art.png",
  },
  {
    name: "Trailblazer (Destruction)",
    image: "images/Character Splash Art/Trailblazer - the Destruction.gif",
  },
  {
    name: "Trailblazer (Preservation)",
    image:
      "images/Character Splash Art/Trailblazer - the Preservation Splash Art.gif",
  },
  {
    name: "Trailblazer (Harmony)",
    image: "images/Character Splash Art/Trailblazer - The Harmony.gif",
  },
  {
    name: "Tribbie",
    image: "images/Character Splash Art/Tribbie Splash Art.png",
  },
  { name: "Welt", image: "images/Character Splash Art/Welt Splash Art.png" },
  {
    name: "Yanqing",
    image: "images/Character Splash Art/Yanqing Splash Art.png",
  },
  { name: "Yunli", image: "images/Character Splash Art/Yunli Splash Art.png" },
  { name: "Arlan", image: "images/Character Splash Art/Arlan Splash Art.png" },
  { name: "Asta", image: "images/Character Splash Art/Asta Splash Art.png" },
  {
    name: "Dan Heng",
    image: "images2/Character Splash Art/Dan Heng Splash Art.png",
  },
  {
    name: "Gallagher",
    image: "images2/Character Splash Art/Gallagher Splash Art.png",
  },
  {
    name: "Guinaifen",
    image: "images2/Character Splash Art/Guinaifen Splash Art.png",
  },
  { name: "Hanya", image: "images2/Character Splash Art/Hanya Splash Art.png" },
  { name: "Herta", image: "images2/Character Splash Art/Herta Splash Art.png" },
  { name: "Hook", image: "images/Character Splash Art/Hook Splash Art.png" },
  { name: "Luka", image: "images3/Character Splash Art/Luka Splash Art.png" },
  { name: "Lynx", image: "images3/Character Splash Art/Lynx Splash Art.png" },
  {
    name: "March 7th",
    image: "images3/Character Splash Art/March 7th Splash Art.png",
  },
  {
    name: "March 7th (Hunt)",
    image: "images3/Character Splash Art/March 7th - The Hunt Splash Art.png",
  },
  { name: "Misha", image: "images3/Character Splash Art/Misha Splash Art.png" },
  { name: "Moze", image: "images3/Character Splash Art/Moze Splash Art.png" },
  {
    name: "Natasha",
    image: "images3/Character Splash Art/Natasha Splash Art.png",
  },
  { name: "Pela", image: "images3/Character Splash Art/Pela Splash Art.png" },
  {
    name: "Qingque",
    image: "images3/Character Splash Art/Qingque Splash Art.png",
  },
  { name: "Sampo", image: "images3/Character Splash Art/Sampo Splash Art.png" },
  {
    name: "Serval",
    image: "images/Character Splash Art/Serval Splash Art.png",
  },
  {
    name: "Sushang",
    image: "images/Character Splash Art/Sushang Splash Art.png",
  },
  {
    name: "Tingyun",
    image: "images/Character Splash Art/Tingyun Splash Art.png",
  },
  { name: "Xueyi", image: "images/Character Splash Art/Xueyi Splash Art.png" },
  {
    name: "Yukong",
    image: "images/Character Splash Art/Yukong Splash Art.png",
  },
];

// Ambil data favorite dari localStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const grid = document.getElementById("characterGrid");

characters.forEach((char) => {
  const card = document.createElement("div");
  card.classList.add("card");
  if (favorites.includes(char.name)) {
    card.classList.add("favorite");
  }

  card.innerHTML = `
        <span class="favorite-icon">★</span>
        <img src="${char.image}" alt="${char.name}">
        <div class="card-name">${char.name}</div>
    `;

  card.addEventListener("click", () => {
    card.classList.toggle("favorite");
    if (favorites.includes(char.name)) {
      favorites = favorites.filter((fav) => fav !== char.name);
    } else {
      favorites.push(char.name);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  grid.appendChild(card);
});
