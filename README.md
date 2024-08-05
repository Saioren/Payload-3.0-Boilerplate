# Payload 3.0 Boilerplate

This is a boilerplate for Payload 3.0 made by Evan Mikrut. It includes basic dependencies, grids, and structural components to get you started quickly and efficiently.

# How to initialize

So how do I get this going? Good question. This project preferably uses yarn 4.3.1, so I'd run "yarn set version 4.3.1". You may have to remove the package manager specification in the package.json. Once the version of yarn is good to go, make sure your .yarnrc.yml file has this as its contents =>

nodeLinker: node-modules
yarnPath: .yarn/releases/yarn-4.3.1.cjs

then running yarn install or just yarn should put you in the green. Yarn dev should fire the project right up.

# Taking advantage of the boilerplate

This boilerplate comes with most of the groundwork scaffolded for you, and of course edit it all however you'd like. The general idea is to make your collections and blocks, add them to the payload config and blocks folder index.ts respectively, and follow the terminal warnings from there.

You'll see a gutter and padding component has been typed and implemented already, so to add padding to each of your blocks just follow the padding options in the component and include it in your block objects.

A CSS grid is already made for you as well, and I highly reccomend using it and learning about it from the [official documentation](https://facelessui.com/docs/css-grid).

# Sidenotes

If you're not familiar with Payload or the 3.0 version, definitely learn it and read the documentation [here](https://payloadcms.com/docs/getting-started/what-is-payload). The docs for 3.0 haven't been released officially yet because it's still in beta, but most of the information is identical and relevant, so you'll be alright.

Below is the default readme information that came with the template.

# Payload Blank Template

A blank template for [Payload](https://github.com/payloadcms/payload) to help you get up and running quickly. This repo may have been created by running `npx create-payload-app@latest` and selecting the "blank" template or by cloning this template on [Payload Cloud](https://payloadcms.com/new/clone/blank).

See the official [Examples Directory](https://github.com/payloadcms/payload/tree/main/examples) for details on how to use Payload in a variety of different ways.

## Development

To spin up the project locally, follow these steps:

1. First clone the repo
1. Then `cd YOUR_PROJECT_REPO && cp .env.example .env`
1. Next `yarn && yarn dev` (or `docker-compose up`, see [Docker](#docker))
1. Now `open http://localhost:3000/admin` to access the admin panel
1. Create your first admin user using the form on the page

That's it! Changes made in `./src` will be reflected in your app.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this project locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

## Production

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:

1. First invoke the `payload build` script by running `yarn build` or `npm run build` in your project root. This creates a `./build` directory with a production-ready admin bundle.
1. Then run `yarn serve` or `npm run serve` to run Node in production and serve Payload from the `./build` directory.

### Deployment

The easiest way to deploy your project is to use [Payload Cloud](https://payloadcms.com/new/import), a one-click hosting solution to deploy production-ready instances of your Payload apps directly from your GitHub repo. You can also deploy your app manually, check out the [deployment documentation](https://payloadcms.com/docs/production/deployment) for full details.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
