import "./App.css";
import { useState } from "react";
import classnames from "classnames";
import { getEmptyXY, canMoveItem, genRandomArr, correctArr } from "./util";

function App() {
  const [state, setState] = useState(genRandomArr());

  const moveItem = (x: number, y: number, item: number) => {
    const [emptyX, emptyY] = getEmptyXY(state, 16);
    if (canMoveItem(emptyX, emptyY, x, y)) {
      setState(() => {
        const newState = new Array(...state);
        newState[y][x] = 16;
        newState[emptyY][emptyX] = item;
        return newState;
      });
    }
  };

  return (
    <>
      <div className="game">
        {state.map((line, y) =>
          line.map((item, x) => {
            return (
              <div
                className={classnames(
                  "game-item",
                  correctArr[y][x] === item && "success",
                  item === 16 && "empty"
                )}
                style={{ top: y * 25 + "%", left: x * 25 + "%" }}
                key={item}
                onClick={() => moveItem(x, y, item)}
              >
                {item}
              </div>
            );
          })
        )}
      </div>
      <button className="reset-button" onClick={() => setState(genRandomArr())}>
        reset
      </button>
    </>
  );
}

export default App;
