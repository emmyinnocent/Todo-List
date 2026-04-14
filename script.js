const DUE_DATE = new Date("2026-04-16T18:00:00Z");

const checkbox = document.querySelector(".todo-complete");
const card = document.querySelector(".todo-card");
const statusText = document.getElementById("status-text");

function computeTimeRemaining() {
  const diff = DUE_DATE.getTime() - Date.now();
  const absDiff = Math.abs(diff);
  const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (absDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((absDiff % (1000 * 60 * 60)) / (1000 * 60));

  let text;
  if (diff > 0) {
    if (days > 1) text = `Due in ${days} days`;
    else if (days === 1) text = "Due tomorrow";
    else if (hours > 0) text = `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
    else if (minutes > 0)
      text = `Due in ${minutes} minute${minutes > 1 ? "s" : ""}`;
    else text = "Due now!";
  } else {
    if (days > 0) text = `Overdue by ${days} day${days > 1 ? "s" : ""}`;
    else if (hours > 0)
      text = `Overdue by ${hours} hour${hours > 1 ? "s" : ""}`;
    else if (minutes > 0)
      text = `Overdue by ${minutes} minute${minutes > 1 ? "s" : ""}`;
    else text = "Overdue now!";
  }

  return { text, state: diff > 0 ? "future" : "past" };
}

function updateTimeRemaining() {
  const { text } = computeTimeRemaining();
  document.getElementById("time-remaining").textContent = text;
}

function handleEdit() {
  console.log("Edit clicked");
}

function handleDelete() {
  alert("Delete clicked");
}

updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);

checkbox.addEventListener("change", function () {
  if (this.checked) {
    card.classList.add("is-done");
    statusText.textContent = "Done";
  } else {
    card.classList.remove("is-done");
    statusText.textContent = "In Progress";
  }
});
