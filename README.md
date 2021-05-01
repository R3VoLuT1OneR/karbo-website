# Karbo Website
The Karbo it is people's electronic cash, not connected to government or officials.

This repository contain the code of the Karbo main website.

  * [https://karbo.io]()
  * [https://karbo.network]()

## Development
Website is build with [Nuxt](https://nuxtjs.org/) Vue JS framework and TypeScript.

### Running Locally
You need to have [NPM](https://www.npmjs.com/) installed locally, so you can generate or run the website on your computer.

Then you need to install dependencies using NPM.
```bash
npm install
```

After dependency installed run next command to start the development serve:
```bash
npm run dev
```

After generation, you can open next link in browser: [http://localhost:3000/]()

You can do change to the files and website in browser will be reloaded with new changes automatically.

## Deployment
Current application optimized to be deployed as static website.

You need to run next command in order to generate the static website.
```
npm run generate
```

Static website will be generated in the `./dist` folder.

### Docker
We may use docker image for deploying the website to production.

```shell
docker build . -t krbweb
```

Run image locally to test production build
```shell
docker run -it -p 8080:80 krbweb
```

Website will be availabe at [http://localhost:8080]()

## Contributing
Feel free to contribute to the project, but make sure to discuss big changes before vie issue or Karbo community channels.

Read how to create new Merge Request in official GitHub documentation:
[https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html]()

### Translations
Website translated with the use of [Nuxt/i18n](https://i18n.nuxtjs.org/) module.

In order to translate you need to edit the language file in the `./lang` folder.

#### Adding new language
You need to create the language file in `./lang` folder.
The filename must be in locale ISO format and have TS extension, for example: `ru-RU.ts`.
The best way to create new language file is to copy the default english one `en-US.ts` and do the translations.

Then you need to add new language config in `i18n.locales` section in the `nuxt.config.js` file.

