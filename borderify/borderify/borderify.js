chrome.runtime.sendMessage("isProtectionEnabled", (enabled) => {
  if (!enabled) return;

  document.body.style.border = "5px solid red";

  const sitesSuspeitos = [
    "example-malicioso.com",
    "phishing-site.org",
    "sitefalso.net"
  ];

  const dominioAtual = window.location.hostname.replace("www.", "");
  if (sitesSuspeitos.some(site => window.location.href.includes(site))) {
    alert("⚠️ Este site pode ser perigoso! Navegue com cuidado.");
    document.body.style.border = "5px dashed red";
    registrarAmenaza();
  }

  document.addEventListener("click", function(e) {
    const link = e.target.closest("a");
    if (link && link.href.endsWith(".exe")) {
      e.preventDefault();
      alert("🚫 Download de arquivo .exe bloqueado por segurança.");
      registrarAmenaza();
    }
  });

  const numeroDeScripts = document.scripts.length;
  if (numeroDeScripts > 20) {
    alert("⚠️ Esta página contém muitos scripts. Pode ser perigosa.");
    registrarAmenaza();
  }

  const dominiosOficiais = ["facebook.com", "google.com", "bancodobrasil.com.br"];
  dominiosOficiais.forEach(dom => {
    const parecido = dominioAtual.includes(dom.replace(/[^a-z]/g, '').slice(0, 5));
    if (parecido && dominioAtual !== dom) {
      alert(`⚠️ Este site (${dominioAtual}) pode estar tentando se passar por ${dom}.`);
      registrarAmenaza();
    }
  });

  document.querySelectorAll('script').forEach(script => {
    const conteudo = script.innerText;
    if (conteudo.includes('eval') || conteudo.includes('document.write')) {
      script.remove();
      console.warn("🚫 Script perigoso removido.");
      registrarAmenaza();
    }
  });

  const palavrasProibidas = ["senha", "cartão", "número do cartão", "pix", "ganhe dinheiro rápido"];
  const textoPagina = document.body.innerText.toLowerCase();
  palavrasProibidas.forEach(palavra => {
    if (textoPagina.includes(palavra)) {
      alert(`⚠️ Atenção! A palavra "${palavra}" foi detectada nesta página.`);
      registrarAmenaza();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === "S") {
      alert("🔒 Modo Seguro ativado!");
      window.open = function() {
        alert("🚫 Pop-up bloqueado.");
      };
      document.querySelectorAll("script").forEach(script => script.remove());
      history.pushState(null, null, window.location.href);
      window.onbeforeunload = () => true;
    }
  });

  let score = 100;
  if (document.scripts.length > 30) score -= 30;
  if (window.location.protocol !== "https:") score -= 20;
  if (textoPagina.includes("ganhe dinheiro rápido")) score -= 50;

  if (score < 100) {
    alert(`🔎 Nota de segurança do site: ${score}/100`);
    document.body.style.border = "5px dashed orange";
  }
  if (score < 50) {
    alert("⚠️ Este site pode ser muito perigoso!");
    document.body.style.border = "5px dashed red";
    registrarAmenaza();
  }
});

function registrarAmenaza() {
  chrome.storage.local.get("amenazas", (data) => {
    const novaQtd = (data.amenazas || 0) + 1;
    chrome.storage.local.set({ amenazas: novaQtd });
  });
}
