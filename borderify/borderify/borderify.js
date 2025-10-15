{
  "manifest_version": 3,
  "name": "Proteção Contra Sites Suspeitos",
  "version": "1.0",
  "description": "Extensão para detectar sites maliciosos e proteger o usuário.",
  "permissions": [
    "storage",
    "activeTab"
  ],
  "host_permissions": [
    "<all_urls>"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icons/icon.p_
