
- astro
https://docs.astro.build/en/getting-started/
- astro tailwind
https://benborgers.com/posts/astro-tailwind
npm run astro add tailwind
-tailwind docs
https://tailwindcss.com/docs/installation
https://tailwindcomponents.com/
https://tailwindcomponents.com/cheatsheet/


- add svelte, react, vue
https://docs.astro.build/en/guides/integrations-guide/svelte/#installation
npx astro add svelte
react
vue


-astro in netlify
https://docs.astro.build/en/guides/deploy/netlify/
npx astro add netlify


-tutorial
-adding react, vue, svelte in astro
https://dev.to/fabiobiondi/astro-build-how-to-use-react-vue-and-svelte-in-the-same-page-using-islands-1il4













-----

# Astro Starter Kit: Minimal

```
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/withastro/astro/tree/latest/examples/minimal)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
