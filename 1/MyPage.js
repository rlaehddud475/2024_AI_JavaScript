const userInfo = {
  userId: "hong123",
  email: "hong@example.com",
  wins: 10,
  losses: 5,
  pokemon: ["피카츄", "이상해꽃", "리자몽"],
};

function renderProfile() {
  document.getElementById("userId").value = userInfo.userId;
  document.getElementById("email").value = userInfo.email;
  document.getElementById("wins").innerText = userInfo.wins;
  document.getElementById("losses").innerText = userInfo.losses;
  document.getElementById("winRate").innerText =
    ((userInfo.wins / (userInfo.wins + userInfo.losses)) * 100).toFixed(2) +
    "%";

  const pokemonList = document.getElementById("pokemonCollection");
  pokemonList.innerHTML = "";
  userInfo.pokemon.forEach((pokemon) => {
    const li = document.createElement("li");
    li.innerText = pokemon;
    pokemonList.appendChild(li);
  });
}

function updateProfile() {
  const newUserId = document.getElementById("userId").value;
  const newEmail = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  userInfo.userId = newUserId;
  userInfo.email = newEmail;
  alert("프로필이 업데이트되었습니다.");
  renderProfile();
}

function deleteAccount() {
  if (confirm("정말로 회원 탈퇴하시겠습니까?")) {
    alert("회원 탈퇴가 완료되었습니다.");
    // 추가적인 탈퇴 처리 로직을 여기에 구현할 수 있습니다.
  }
}

function viewPokedex() {
  alert("포켓몬 도감이 열립니다.");
  // 도감 보기 로직을 여기에 추가
}

function playGame() {
  alert("게임이 시작됩니다.");
  // 게임 시작 로직을 여기에 추가
}

function viewWinRate() {
  document.getElementById("profileSection").style.display = "none";
  document.getElementById("winRateSection").style.display = "block";
}

function viewPokemonCollection() {
  document.getElementById("profileSection").style.display = "none";
  document.getElementById("pokemonListSection").style.display = "block";
}

function backToProfile() {
  document.getElementById("winRateSection").style.display = "none";
  document.getElementById("pokemonListSection").style.display = "none";
  document.getElementById("profileSection").style.display = "block";
}

window.onload = function () {
  renderProfile();
};
