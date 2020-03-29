import React from "react";
import LeaderBoard from "./leaderBoard";

class Board extends React.Component {
  state = {
    xorzero: "X",
    squares: Array(9).fill(null),
    player: 1,
    wins1: 0,
    wins2: 0,
    reload: false,
    player1: "",
    player2: ""
  };
  constructor(props) {
    super(props);
  }
  names() {
    var player1 = prompt('Enter name for player 1')
    var player2 = prompt('Enter name for player 2')
    this.setState({ player1: player1, player2: player2 })
  }
  handleClick(i, val) {
    if (this.state.squares[i] == null) {
      let a = this.state.squares.slice();
      a[i] = this.state.xorzero;
      this.setState({ squares: a });

      this.isGameOver(a);
      const ch = this.state.xorzero == "X" ? "O" : "X";
      this.setState({ xorzero: ch });
      let p = this.state.player == 1 ? 2 : 1;
      this.setState({ player: p });
    }
  }
  isSameRow(one, two, three) {
    if (one && two && three) {
      if (one == two && one == three) {
        return true;
      }
    }
  }
  isGameOver(arr) {
    if (
      this.isSameRow(arr[0], arr[1], arr[2]) ||
      this.isSameRow(arr[0], arr[3], arr[6]) ||
      this.isSameRow(arr[0], arr[4], arr[8]) ||
      this.isSameRow(arr[1], arr[4], arr[7]) ||
      this.isSameRow(arr[2], arr[5], arr[8]) ||
      this.isSameRow(arr[2], arr[4], arr[6]) ||
      this.isSameRow(arr[3], arr[4], arr[5]) ||
      this.isSameRow(arr[6], arr[7], arr[8])
    ) {
      alert(`Player ${this.state.player} wins the game`);
      if (this.state.player == 1) {
        this.setState({ wins1: this.state.wins1 + 1 });
      } else {
        this.setState({ wins2: this.state.wins2 + 1 });
      }
      this.reload();
    } else {
      let flag = true;
      for (let i = 0; i < 9; i++) {
        if (arr[i] == null) {
          // console.log("game not over", flag, i, arr[i]);
          flag = false;
          break;
        }
      }
      if (flag) {
        alert("Oops! GameOver");
        this.reload()
      }
    }
  }
  renderSquare(i) {
    return (
      <button onClick={() => this.handleClick(i, this.state.xorzero)}>
        {this.state.squares[i]}
      </button>
    );
  }
  reload() {
    this.setState({
      //   xorzero: "X",
      squares: Array(9).fill(null),
      //   player: 1
    });
    this.setState({ reload: true })

  }
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div className="game">
        <h4>
          Player {this.state.player} turn : {this.state.xorzero}
        </h4>
        <table>
          <tbody>
            <tr>
              <td>{this.renderSquare(0)}</td>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(3)}</td>
              <td>{this.renderSquare(4)}</td>
              <td>{this.renderSquare(5)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(6)}</td>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
            </tr>
          </tbody>
        </table>

        </div>
        {/* <button onClick={() => this.reload()}>Reload</button> */}
      <div className="board">
      <LeaderBoard player1={this.state.wins1} player2={this.state.wins2} ></LeaderBoard>

      </div>

      </div>
    );
  }
}

export default Board;
