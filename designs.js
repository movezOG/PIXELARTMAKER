// Select color input
// Select size input


var gridHeight = document.querySelector('#inputHeight');
var gridWidth = document.querySelector('#inputWeight');
var gridCanvas = document.querySelector('#pixelCanvas');
var colorSelector = document.querySelector("#colorPicker");

function click(box) {
  const color = colorSelector.value;
  box.target.style.backgroundColor = color;
}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  gridCanvas.innerHTML = '';
  var canvas = document.createElement('tr','td');
  for (let h = 0; h < gridHeight.value; h++) {
        const tr = document.createElement('tr');
  for (let w = 0; w < gridWidth.value; w++) {
        const td = document.createElement('td');
      tr.appendChild(td);
    }

    tr.addEventListener('click', click);
    canvas.appendChild(tr);
  }
  gridCanvas.appendChild(canvas);
};
document.querySelector('form').addEventListener('submit', function(box){
  box.preventDefault();
  makeGrid();
});
