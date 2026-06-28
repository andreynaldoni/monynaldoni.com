# Mony Naldoni Fotografia

Site portfólio da fotógrafa Mony Naldoni, especializada em newborn, gestante, acompanhamento, família e smash the cake em Praia Grande, SP.

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Estilização:** TailwindCSS 4
- **Roteamento:** React Router DOM
- **Linting/Formatting:** Biome.js
- **Deploy:** GitHub Pages (via GitHub Actions)

## 📦 Estrutura do Projeto

```
├── public/
│   └── images/albums/     ← Fotos organizadas por categoria
├── src/
│   ├── components/        ← Componentes React reutilizáveis
│   ├── pages/             ← Páginas do site
│   ├── data/              ← Dados gerados automaticamente
│   ├── lib/               ← Utilitários (cn)
│   └── utils/             ← Funções auxiliares
├── scripts/               ← Scripts de build
└── .github/workflows/     ← CI/CD para deploy
```

## 🛠️ Setup

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📸 Gerenciamento de Álbuns

### Adicionar novo álbum

1. Crie uma pasta dentro de `public/images/albums/<categoria>/`
2. Adicione as fotos (nomeie a capa como `capa.jpg`)
3. Execute o scan:
```bash
npm run scan-albums
```
4. Faça commit e push

### Categorias disponíveis

| Categoria | Slug | Pasta |
|-----------|------|-------|
| Newborn | `newborn` | `public/images/albums/newborn/` |
| Gestante | `gestante` | `public/images/albums/gestante/` |
| Acompanhamento | `acompanhamento` | `public/images/albums/acompanhamento/` |
| Família | `familia` | `public/images/albums/familia/` |
| Smash the Cake | `smash-the-cake` | `public/images/albums/smash-the-cake/` |

### Estrutura de pastas

```
public/images/albums/newborn/
├── alice/
│   ├── capa.jpg      ← Foto de capa (obrigatório)
│   ├── 1.jpg
│   └── 2.jpg
└── bernardo/
    ├── capa.jpg
    └── ...
```

## 📱 Instagram Feed

Para mostrar posts do Instagram na home page:

1. Abra um post no Instagram
2. Clique nos 3 pontinhos → **Incorporar**
3. Copie a URL
4. Adicione em `src/data/instagram.ts`:

```typescript
export const instagramPosts = [
  'https://www.instagram.com/p/ABC123xyz/',
  'https://www.instagram.com/p/DEF456uvw/',
]
```

## 🔧 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run lint` | Verifica erros de código |
| `npm run lint:fix` | Corrige erros automaticamente |
| `npm run format` | Formata o código |
| `npm run scan-albums` | Escaneia álbuns e gera dados |
| `npm run generate-sitemap` | Gera sitemap.xml |

## 🚀 Deploy

O deploy é automático via GitHub Actions. A cada push no branch `main`:

1. Os álbuns são escaneados
2. O sitemap é gerado
3. O site é buildado
4. É feito deploy no GitHub Pages

### Configuração necessária

No GitHub, vá em **Settings → Pages → Build and deployment** e selecione **GitHub Actions** como source.

## 🎨 Customização

### Cores

Edite `src/index.css` para mudar as cores:

```css
@theme {
  --color-primary: #ccb78f;    ← Cor principal (dourado)
  --color-secondary: #fffb37;  ← Cor secundária
}
```

### Contato

Atualize os dados de contato em `src/components/Layout.tsx` e `src/pages/Home.tsx`.

### Instagram

Edite `src/data/instagram.ts` para adicionar posts.
