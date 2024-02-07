function toggleForm(removeClass, addClass, text) {
  
  const form = document.getElementById("form");
  form.classList.remove(removeClass);
  form.classList.add(addClass);

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.innerText = text;
}
