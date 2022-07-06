# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Setting Up

Followed ['docker-compose svelte'](https://jenyus.web.app/blog/2021-05-30-setting-up-a-development-environment-for-sveltekit-with-docker-and-compose) to create dockerized skeleton app that hot reloads with Vite HMR.

Created a new client app
```
$ npm create svelte client
```

Create package-lock.json
```
$ cd client
$ npm i --package-lock-only
```

Build
```
# need to be on project root since docker-compose.dev.yml is in project root
$ cd ..  
$ docker-compose -f docker-compose.dev.yml up --build
```

Run
```
$ docker-compose -f docker-compose.dev.yml up --build 
```
## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
