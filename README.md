# Atelier Planejados

Site vitrine do Atelier Planejados: móveis planejados sob medida.

Site estático (HTML, CSS e JavaScript puros), sem build. Funciona direto no GitHub Pages.

## Estrutura

```
index.html      Página única: início, sobre, ambientes, portfólio, como funciona e contato
css/style.css   Estilos (cores no topo do arquivo, em :root)
js/main.js      Menu mobile, filtro do portfólio, animações e formulário → WhatsApp
img/            Fotos e favicon
```

## Personalizar

1. **WhatsApp:** troque `5500000000000` pelo número real (DDI + DDD + número, só dígitos) em `js/main.js` e nos dois links `wa.me` do `index.html`.
2. **E-mail e Instagram:** edite a seção de contato no `index.html`.
3. **Fotos:** coloque na pasta `img/` com estes nomes (ou ajuste os caminhos no `index.html`):
   - `hero.jpg`: foto de capa (horizontal, ~1920px de largura)
   - `sobre.jpg`: foto da marcenaria/equipe (vertical)
   - `projeto-1.jpg` a `projeto-6.jpg`: portfólio
4. **Cores:** ajuste as variáveis em `:root` no `css/style.css`.

## Ver localmente

Abra o `index.html` no navegador, ou rode:

```bash
python3 -m http.server 8000
```

## Publicar no GitHub Pages

Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`.
