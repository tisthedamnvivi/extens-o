let protectionEnabled = true;

document.getElementById("toggleProtection").addEventListener("click", () => {
  protectionEnabled = !protectionEnabled;
  chrome.storage.local.set({ protectionEnabled });
  updateButton();
});

function updateButton() {
  const button = document.getElementById("toggleProtection");
  if (protectionEnabled) {
    button.textContent = "Desativar Proteção";
    button.classList.remove("off");
  } else {
    button.textContent = "Ativar Proteção";
    button.classList.add("off");
  }
}

chrome.storage.local.get("protectionEnabled", (data) => {
  if (typeof data.protectionEnabled !== "undefined") {
    protectionEnabled = data.protectionEnabled;
  }
  updateButton();
});

chrome.storage.local.get("amenazas", (data) => {
  document.getElementById("contagem").textContent = `Ameaças bloqueadas: ${data.amenazas || 0}`;
});
