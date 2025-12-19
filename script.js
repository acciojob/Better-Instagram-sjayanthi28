//your code here

const images = document.querySelectorAll(".image");
let draggedDiv = null;

images.forEach(img => {
  img.addEventListener("dragstart", dragStart);
  img.addEventListener("dragover", dragOver);
  img.addEventListener("drop", drop);
});

function dragStart() {
  draggedDiv = this;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  if (draggedDiv === this) return;

  
  const draggedBg = getComputedStyle(draggedDiv).backgroundImage;
  const targetBg = getComputedStyle(this).backgroundImage;

  
  draggedDiv.style.backgroundImage = targetBg;
  this.style.backgroundImage = draggedBg;
}
