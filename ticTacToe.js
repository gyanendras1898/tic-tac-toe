const btn = document.querySelectorAll(".btn");
let player = 0;
let flag = false;
let gameBoard = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function clk(e) {
  if (btn[e - 1].classList[1] === undefined) {
    btn[e - 1].classList.add(`player${player % 2}`);
    gameBoard[e - 1] = player % 2;
    if (player >= 4) check(e - 1);
    player++;
  }
}

function check(e) {
  winning.forEach((ele) => {
    if (ele.includes(e)) {
      console.log(ele);
      if (
        gameBoard[ele[0]] == gameBoard[ele[1]] &&
        gameBoard[ele[0]] == gameBoard[ele[2]]
      ) {
        alert(`Congratulations! Player${(player % 2) + 1} wins`);
        flag = true;
      }
    }
  });
  if (player == 8 && flag == false) alert("Draw");
}
