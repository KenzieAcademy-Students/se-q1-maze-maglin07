let P = document.getElementById("player")
const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
]

function mazeboard() {
  let maze = document.getElementById("maze")
  for (let column = 0; column < map.length; column++) {
    let columnBox = map[column]
    let columnDiv = document.createElement("div")
    columnDiv.classList.add("column")
    columnDiv.dataset.column = column
    maze.appendChild(columnDiv)
    for (let row = 0; row < columnBox.length; row++) {
      let rowBox = columnBox[row]
      let rowDiv = document.createElement("div")
      rowDiv.dataset.yColumn = column
      rowDiv.dataset.xRow = row
      switch (rowBox) {
        case "W":
          rowDiv.classList.add("wall")
          break
        case " ":
          rowDiv.classList.add("path")
          break
        case "S":
          rowDiv.classList.add("starts")
          rowDiv.appendChild(P)
          break
        case "F":
          rowDiv.classList.add("finish")
          break
      }
      columnDiv.appendChild(rowDiv)
    }
  }
}
mazeboard()
