const container = document.querySelector(".container");

const gridSizeSlider = document.querySelector(".slider");

const sliderValue = document.querySelector(".slider-value");

const reset = document.querySelector(".resetBtn");

function createGrid(gridSize) {
  container.innerHTML = "";

  const size = 600 / gridSize;

  for (let i = 0; i < gridSize; i++) {
    const boxCont = document.createElement("div");
    boxCont.style.height = `${size}px`;
    boxCont.style.width = "100%";
    boxCont.classList.add("BoxC");
    container.appendChild(boxCont);

    for (let j = 0; j < gridSize; j++) {
      const elementCont = document.createElement("div");
      elementCont.style.width = `${size}px`;
      elementCont.classList.add("box");
      boxCont.appendChild(elementCont);
    }
  }

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.addEventListener("mouseover", (event) => {
      const randomHex = Math.floor(Math.random() * 16777215).toString(16);
      event.target.style.backgroundColor = `#${randomHex}`;
    })
  );
}

createGrid(16);

reset.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => (box.style.backgroundColor = "black"));
});

gridSizeSlider.addEventListener("input", () => {
  let gridSize = gridSizeSlider.value;
  sliderValue.textContent = gridSize;
  createGrid(gridSize);
});
