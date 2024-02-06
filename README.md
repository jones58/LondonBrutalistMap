# Brutalist Buildings

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To do:

- initial functionality
  - fix about page - will need to work out how to fetch data in NextJS - see the docs.
- add realtext pro as font.
- click on name - home page
- click on about - about page etc.
- make suggestions

## Later:

    - I want to add my brutalist map to this project, to make it into one complete project. This will make editing the map significantly eeasier. See [this guide for help](https://recodebrain.com/how-to-use-mapbox-in-next-js) or [this site for inspiration](https://www.crimesofsolidarity.org/).
    - Maybe data like:  https://www.crimesofsolidarity.org/data, including way for users to add their own data.

## Building

- After the success of my Brutalist Map project, I wanted to build a game using the same data, to test user's on their knowledge of the buildings. E.g. Photo, what building is this, user inputs their answer.
- During production, using Next JS, it became obvious that i could make a multi-page site with the data - presenting it in different ways. This would allow different users to engage with it in different ways.
- First, I set up the app using `create-next-app`.
- Then I worked on each of the pages in the app, using Tailwind CSS to rapidly design them in a similar style to my Brutalist Map project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
