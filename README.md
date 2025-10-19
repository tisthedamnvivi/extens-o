# Extensão antivírus

##  Descrição
É uma extensão de navegador simples criada para modificar o conteúdo de páginas web adicionando bordas, alterando elementos visuais e testando o funcionamento de scripts em extensões.  
Ela serve como um exemplo prático de como estruturar e desenvolver uma extensão de navegador compatível com navegadores baseados em Chrome e Firefox.


## Estrutura do Projeto

| Arquivo / Pasta | Função |
|------------------|--------|
| `manifest.json` | Arquivo de configuração principal da extensão (nome, versão, permissões, scripts, etc.). |
| `background.js` | Script de fundo responsável por lidar com eventos em segundo plano. |
| `borderify.js` | Script injetado nas páginas, adicionando bordas ou alterando estilos visuais. |
| `popup.html` | Interface da popup exibida ao clicar no ícone da extensão. |
| `popup.js` | Script que controla o comportamento da popup (interações, botões, etc.). |
| `icons/` | Pasta que contém os ícones da extensão em diferentes tamanhos. |


##  Como Instalar:

1. Baixe o projeto ou clone o repositório.
2. Acesse `chrome://extensions/` (ou `about:debugging` no Firefox).
3. Ative o Modo de desenvolvedor
4. Clique em Carregar sem compactação e selecione a pasta `borderify/`.
5. A extensão será adicionada ao navegador e poderá ser ativada/desativada manualmente.


##  Funcionamento

A extensão, ao ser ativada:
- Executa o script `borderify.js` nas páginas permitidas, adicionando bordas ao conteúdo ou modificando o estilo visual;
- Usa `background.js` para monitorar eventos e manter a extensão ativa;
- Exibe uma interface simples (`popup.html`) ao clicar no ícone da extensão, permitindo interações com o usuário.


##  Objetivo Educacional

O **Borderify** é um exemplo clássico utilizado em tutoriais de desenvolvimento de extensões, ideal para:
- Aprender a estrutura de uma extensão de navegador;
- Testar comunicação entre scripts (`popup`, `background` e `content`);
- Entender permissões e manifestos de extensões.


##  Tecnologias Utilizadas

- **HTML5**
- **JavaScript (ES6)**
- **JSON (Manifest V3/V2)**
- **APIs de Extensão do Chrome/Firefox**


## Licença
Este projeto é de uso livre para fins educacionais e de aprendizado sobre desenvolvimento de extensões.
