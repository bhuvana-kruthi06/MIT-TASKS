const colors = ['#FFD54F', '#4DD0E1', '#AED581', '#FF8A65', '#BA68C8', '#81D4FA'];
let colorIndex = 0;

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const board = document.getElementById("taskBoard");
  const note = document.createElement("div");
  note.className = "note";
  note.style.backgroundColor = colors[colorIndex];
  note.textContent = taskText;

  // Rotate color
  colorIndex = (colorIndex + 1) % colors.length;

  // Delete on click (X)
  note.addEventListener("click", () => {
    board.removeChild(note);
  });

  board.appendChild(note);
  input.value = "";
}
