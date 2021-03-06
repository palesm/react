import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
      for (let i = 0; i < this.props.nrows; i++) {
          let row=[];
          for (let j = 0; j < this.props.ncols; j++) {
            row.push(Math.random() < this.props.chanceLightStartsOn)
          }
          board.push(row);
      }
      console.log(board)
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y,x)
    flipCell(y+1,x)
    flipCell(y-1,x)
    flipCell(y,x+1)
    flipCell(y,x-1)


    // win when every cell is turned off
    let hasWon = false;
    let counter =0;
    for (let i = 0; i < this.props.nrows; i++) {
      for (let j = 0; j < this.props.ncols; j++) {
        if (board[i][j]) {
          counter += 1
        }
      }
    }
    if (counter === nrows*ncols) {hasWon = true}

    this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    return (
      <div>
        <p>{this.state.hasWon && 'Congrats, you win!'}</p>
        {!this.state.hasWon &&
          <table className="Board">
          <tbody>
          {this.state.board.map((r, i) => {
            return (
              <tr key={i}>{
                r.map((c, j) => {
                  return <Cell isLit={(c)} key={`${i}-${j}`} flipCellsAroundMe={() => this.flipCellsAround(`${i}-${j}`)}/>
                })
              }
              </tr>
            )
          })}
          </tbody>
        </table>}
      </div>
      )
  }
}


export default Board;
