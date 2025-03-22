# 專案簡介

主要 Vue3 + TailwindCSS + Vite 開發的 Line 訂單系統，利用 shadcn/vue 套件來建立 UI 元件，讓使用者可以在 Line 上進行訂單的建立及查看。

使用 https://lin.ee/vaRItr4 加入 Line 好友，並傳送關鍵字「訂單」、「查詢」及「查詢訂單」，會收到 LIFF 連結，點擊連結後，即可進入訂單系統。

## 專案架構

```sh
my-vue-app/
├── node_modules/
├── public/
│   ├── b.jpg
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   └── icons
│   │   └── ui
│   ├── lib/
│   │   └── utils.js
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   └── user.js
│   ├── utils/
│   │   └── api.js
│   ├── views/
│   │   └── AddOrderView.vue
│   │   └── OrderView.vue
│   │   └── HomeView.vue
│   ├── App.vue
│   ├── main.js
├── .gitignore
├── .env
├── .prettierrc.json
├── eslint.config.js
├── components.json
├── index.html
├── jsonconfig.json
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm ci
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## env 設定

```sh
VITE_API_URL=https://buybuy-be-production.up.railway.app
VITE_LIFF_ID=2007085677-AY2mR3rN
```
