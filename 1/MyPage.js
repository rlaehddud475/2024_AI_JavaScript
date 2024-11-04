function viewPokedex() {
  // 포켓몬 도감 보기 로직
}

function playGame() {
  // 게임 시작 로직
}

function updateProfile() {
  // 프로필 수정 로직
}

function deleteAccount() {
  // 회원 탈퇴 로직
}

function viewWinRate() {
  // 게임 승률 보기 로직
  document.getElementById("profileSection").style.display = "none";
  document.getElementById("winRateSection").style.display = "block";
}

function viewPokemonCollection() {
  // 포켓몬 수집 목록 조회 로직
  document.getElementById("profileSection").style.display = "none";
  document.getElementById("pokemonListSection").style.display = "block";
}

function backToProfile() {
  // 프로필로 돌아가기 로직
  document.getElementById("winRateSection").style.display = "none";
  document.getElementById("pokemonListSection").style.display = "none";
  document.getElementById("profileSection").style.display = "block";
}
