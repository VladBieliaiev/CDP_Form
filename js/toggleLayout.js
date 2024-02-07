const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");

function toggleForm(removeClass, addClass, text) {
  form.classList.remove(removeClass);
  form.classList.add(addClass);

  submitBtn.innerText = text;
}
