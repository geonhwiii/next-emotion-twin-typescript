<div align="center">
<img src="https://user-images.githubusercontent.com/44767362/212044505-03e425c3-2849-46ab-94bd-52007e52a015.png" alt="dan-avatar" width="300" />
</div>
<div align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/geonhwiii/next-emotion-twin-typescript" target="_blank"><img src="https://vercel.com/button" alt="Deploy with Vercel" /></a> <a href="https://app.netlify.com/start/deploy?repository=https://github.com/geonhwiii/next-emotion-twin-typescript" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a>
</div>
<br />

<p align="center">
  <a href="https://nextjs.org">
    <img alt="nextjs" src="https://user-images.githubusercontent.com/44767362/212047356-ff462675-3e79-485c-9c31-8f56f443b199.svg" height="50" />
  </a>
  <a href="https://emotion.sh">
    <img alt="emotion.js" src="https://user-images.githubusercontent.com/44767362/212047328-82ab7691-9b66-49e3-a7b5-afa8968ad349.png" height="50" />
  </a>
  <a href="https://tailwindcss.com">
    <img alt="tailwindcss" src="https://user-images.githubusercontent.com/44767362/212047344-ece46365-7399-47ed-a342-b7471ecf429e.svg" height="50" />
  </a>
  <a href="https://github.com/ben-rogerson/twin.macro">
    <img alt="twin.macro" src="https://user-images.githubusercontent.com/44767362/212047307-5cef6d45-7e4a-4dc1-b8df-65757509abf5.svg" height="50" />
  </a>
</p>
<br />
<p align="center">
  <img src="https://img.shields.io/badge/React-v18.2.0-61DAFB?style=flat&logo=React&logoColor=white&style=for-the-badge"/> 
  <img src="https://img.shields.io/badge/Typescript-v4.9.4-3178C6?style=flat&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Next.JS-v13.1.1-000000?style=flat&logo=Next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind-v3.2.4-06B6D4?style=flat&logo=TailwindCSS&logoColor=white"/>
</p>
<br />

## 🚀 Getting Started

1. Clone Project with `CLI`

```bash
# 1. with npx degit
npx degit geonhwiii/next-emotion-twin-typescript %{PROJECT_NAME}%

# 2. with npx example
npx create-next-app %{PROJECT_NAME}% -e https://github.com/geonhwiii/next-emotion-twin-typescript

# 3. with yarn example
yarn create next-app %{PROJECT_NAME}% -e https://github.com/geonhwiii/next-emotion-twin-typescript

```

2. After cloning, run this command: `yarn` or `yarn install`

```bash
# move to project
$ cd project_name

# install packages
$ yarn
or
$ npm istall
```

<br />

## 💡 Why should I use this project?

> When we start `NextJS` Proejct with `tailwindcss` & `emotion`, we need `twin.macro`.
>
> But `twin.macro` currently require custom `barbel`, which stops using the `SWC compiler`.
>
> So we can start the proejct with SWC compiler using `withTwin.js`.
>
> This project helps you get started most comfortably! 🔥

<br />

## 🗂️ Basic Folder

- `pages`
- `components`
- `configs`
- `styles`
- `types`
- `assets`
  - `icons`
  - `images`
- `libs`
- `utils`
- `constants`
- `public`

<br />

## ⭐️ Tip

1. In `tsconfig.json`, The paths is set to `"@/***/*"`.

```json
// you can customize it!
"baseUrl": ".",
"paths": {
  "@/pages/*": ["pages/*"],
  "@/components/*": ["components/*"],
  "@/utils/*": ["utils/*"],
  "@/common/*": ["common/*"],
  "@/styles/*": ["styles/*"],
  "@/configs/*": ["configs/*"],
  "@/constants/*": ["constants/*"],
  "@/assets/*": ["assets/*"],
  "@/types/*": ["types/*"]
}
```

```ts
//  you can import file like this
import GlobalStyles from '@/styles/GlobalStyles';
```

2. Use `tailwindcss` with `emotion`!

```tsx
<div css={tw`flex flex-col justify-center items-center`}>
  <div css={tw`text-center font-bold`}>Hello World!!!</div>
</div>
```

<br />

## 🧑🏻‍💻 Authors

🇰🇷 Dan (단님) ([@geonhwiii](https://github.com/geonhwiii))

<br />

### 🔗 References:

- [Nextjs](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [TailwindCSS](https://tailwindcss.com/)
- [EmotionJS](https://emotion.sh/)
- [Twin.macro](https://github.com/ben-rogerson/twin.macro)
- [Vercel](https://vercel.com/)
