function goToStep(current, next, stepNumber) {
  current.classList.add("hidden");
  next.classList.remove("hidden");
  updateStepIndicator(stepNumber);
}

function updateStepIndicator(step) {
  const el = document.getElementById("step-indicator");
  if (el) el.innerText = step;
}

function setLoading(element, message) {
  element.innerHTML = `<span class="loading"></span> ${message}`;
}

function showError(element, message) {
  element.innerHTML = `<span class="error">${message}</span>`;
}

function renderResult(text) {
  const output = document.getElementById("output");

  output.innerHTML = `
    <div class="result-content">
      <p>${text}</p>
      <div class="tips">
        <strong>Dica:</strong> Nunca compartilhe sua senha.
      </div>
    </div>
  `;
}

function resetFlow() {
  document.getElementById("step1").classList.remove("hidden");
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");

  updateStepIndicator(1);
}