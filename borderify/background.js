chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg === "isProtectionEnabled") {
    chrome.storage.local.get("protectionEnabled", (data) => {
      sendResponse(data.protectionEnabled !== false); // ativado por padrão
    });
    return true;
  }
});
