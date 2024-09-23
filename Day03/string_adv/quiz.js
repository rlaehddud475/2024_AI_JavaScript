// const password = prompt("password를 입력하세요");
// const hasIT1 = password.includes("it");
// const hasIT2 = password.includes("IT");
// const setting = hasIT1 || hasIT2 ? "비밀번호 설정완료" : "비밀번호 설정오류";
// alert(setting);

/* const food = prompt("좋아 하는 음식");
food.repeat(5);
alert(food);

const food2 = prompt("좋아하는 음식 및 반복");
const ar = food2.split(" ");
alert(ar[0].repeat(Number(ar[1])));

const al = prompt("알파벳 입력하세요");
al.length > 6 ? alert(al.toUpperCase()) : alert(al.toLowerCase());

const news = `Former President Donald Trump has said he does not expect to run for election again in 2028 if he is defeated in this November's US presidential poll.
Trump, 78, has been the Republican candidate for three national elections in a row and has reshaped the party greatly over the last eight years.
In an interview with Sinclair Media Group, he was asked if he could foresee another run in the event that he loses to Democratic Vice-President Kamala Harris. "No, I don't. I think... that will be it," Trump said. "I don't see that at all."
But he added that "hopefully, we're going to be very successful".

US law bars presidents from serving more than two terms, and so Trump is not expected to run in 2028 if he wins, either.
In the past, the real estate mogul has rarely acknowledged the possibility of losing the election, more often firing up supporters with speeches and social media posts pledging victory at the polls.
But this is the second time in four days he has mentioned a chance of defeat.
During an event held by the Israeli-American Council on Thursday, he brought up losing, and suggested that any such loss would partly be the fault of Jewish voters.`;

news.split(" ");
 */
const word = prompt("단어 입력하쇼");
trans = word == word.toLowerCase();

const setting = trans ? word.toUpperCase() : word.toLowerCase();
alert(setting);

const password = prompt("비밀번호 설정하셈");

const le = password.length >= 8 && password.length <= 20;
const hasit = password.startsWith("it") || password.startsWith("IT");

const sp =
  password.includes("&") ||
  password.includes("#") ||
  password.includes("@") ||
  password.includes("!");

if (!le) {
  alert("비밀번호 길이 오류");
} else if (!hasit) {
  alert("비밀번호 시작은 it,IT로 해야함");
} else if (!sp) {
  alert("비밀번호는 반드시 특수문자 포함해야함");
} else {
  alert("비밀번호 설정 완료");
}
