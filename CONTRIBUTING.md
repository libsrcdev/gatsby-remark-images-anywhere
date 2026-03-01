# Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

To report issues, please use the issue tracker.

## Environment

Make sure you have Node.js and npm installed on your machine. You can check your versions with:

```
node -v
npm -v
```

This project has been tested with Node.js v25.x and npm v11.x.

## Development Setup

- Fork the repository and clone it to your local machine.
- Install dependencies using `npm install`.
- Setup yalc in your local machine and publish this repo (locally with yalc).
- Create a new Gatsby host project with `gatsby-transformer-remark`.
- Install the project with `yalc add @libsrcdev/gatsby-remark-images-anywhere`.
- Run `yarn dev` in the Gatsby host project.
- Whenever you change your package project, `yalc push` will update the contents at `<Gatsby host project>/.yalc/@libsrcdev/gatsby-remark-images-anywhere`. This is required because in order to locally test in your host project, the package project must resolve `gatsby-plugin-sharp` of your host project, not the library one. Otherwise it will fail with a Gatsby build-time error (https://stackoverflow.com/questions/70376012/gatsby-plugin-sharp-wasnt-setup-correctly-in-gatsby-config-js-make-sure-you-a).
- Commit your changes and push them to your fork.
- Open a pull request against the main repository.
