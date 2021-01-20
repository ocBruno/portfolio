This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) which integrates NYtimes Most Popular API and is aimed at having reusable structures, patterns, components, screens and helpers for future test driven React or Next.js projects.

## TODO

☒ Integrate NY times news api with custom hook

☒ Add Eslint and babel

☒ Fix up home page content and responsive design

☒ Update test readme

☐ Research necessary topics react/next testing with jest, define types of tests to be completed

☐ Add jest and create initial tests for MostPopularArticles

☐ Improve Home page and News design

☐ Test following components and files, useApi.js, news.js, index.js, ImageArticle.jsx, TextArticle.jsx, input.js

☐ Brainstorm other functionalities with high chance of reusal in the future

☐ .....

## Getting Started

Set up necessary api keys:

- NY times most popular news api with custom hook (https://developer.nytimes.com/)

Take a good look through this file and remember to read the code comments!

First, use npm or yarn to install project dependencies and dev to run the development server:

```bash
npm install
# or
yarn
# then
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

To run tests use:

```bash
yarn run test
```

For linting download eslint extension if available in your code editor

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

At the moment i'm using Vercel for CI/CD and the following link http://brunos-portfolio.vercel.app/

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
