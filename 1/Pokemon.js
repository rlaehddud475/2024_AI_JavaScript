const pokemonData = {
  pikachu: {
    image: "images/pikachu.png",
    hint: "전기 타입 포켓몬입니다.",
  },
  bulbasaur: {
    image: "images/bulbasaur.png",
    hint: "풀과 독 타입 포켓몬입니다.",
  },
  charmander: {
    image: "images/charmander.png",
    hint: "불꽃 타입 포켓몬입니다.",
  },
  squirtle: {
    image: "images/squirtle.png",
    hint: "물 타입 포켓몬입니다.",
  },
};

let currentPokemon;

function getRandomPokemon() {
  const pokemonNames = Object.keys(pokemonData);
  return pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
}

function updateImage() {
  currentPokemon = getRandomPokemon();
  document.getElementById("pokemonImage").src =
    pokemonData[currentPokemon].image;
  document.getElementById("hint").classList.add("hidden"); // 힌트 숨김
}

document.getElementById("submitBtn").addEventListener("click", () => {
  const userInput = document
    .getElementById("pokemonInput")
    .value.trim()
    .toLowerCase();
  const resultDiv = document.getElementById("result");

  if (userInput === currentPokemon) {
    resultDiv.textContent = "정답입니다: " + currentPokemon + "!";
    resultDiv.classList.remove("hidden");
  } else {
    resultDiv.textContent = "틀렸습니다. 다시 시도하세요.";
    resultDiv.classList.remove("hidden");
  }

  // 다음 포켓몬으로 업데이트
  updateImage();
  document.getElementById("pokemonInput").value = ""; // 입력 필드 초기화
});

// 힌트 버튼 클릭 시
document.getElementById("hintBtn").addEventListener("click", () => {
  const hintDiv = document.getElementById("hint");
  hintDiv.textContent = pokemonData[currentPokemon].hint;
  hintDiv.classList.remove("hidden"); // 힌트 표시
});

// 페이지 로드 시 첫 번째 포켓몬 이미지 업데이트
window.onload = updateImage;
