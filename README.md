## Setting Up

Followed ['docker-compose svelte'](https://jenyus.web.app/blog/2021-05-30-setting-up-a-development-environment-for-sveltekit-with-docker-and-compose) to create dockerized skeleton app that hot reloads with Vite HMR.

### Pre-requisites
```
$ brew install pnpm
```

### Created a new client app
```
$ pnpm create svelte <app_name>
```

### Install modules
```
$ cd <app_name>
$ pnpm install -S yup
$ pnpm install
```

### Build
```
# need to be on project root since docker-compose.dev.yml is in project root
$ cd ..  
$ docker-compose -f docker-compose.dev.yml up --build
```

### Run
```
$ docker-compose -f docker-compose.dev.yml up --build 
```

## References
* A library for managing complex stores, shows a concept of how it can be done: https://github.com/PixievoltNo1/svelte-writable-derived#making-an-object-store-from-several-single-value-stores
