# Karbo Website
The Karbo (Karbovanets) is cryptocurrency of Ukrainian origin, just like Bitcoin but more anonymous and privacy centric with opaque and more analysis resistant blockchain. It is people's electronic cash, not connected to government or officials.

  * [https://karbo.io]()
  * [https://karbo.network]()

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate
```

## Docker
We may use docker image for deploying the website to production.

```shell
docker build . -t krbweb
```

Run image locally to test production build
```shell
docker run -it -p 8080:80 krbweb
```

Website will be availabe at [http://localhost:8080]()

## Development
Website is build with [Nuxt](https://nuxtjs.org/) Vue JS framework and TypeScript.

It is optimized to be deployed as static website.
