# Brutalist Buildings

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Building

- After the success of my Brutalist Map project, I wanted to build a game using the same data, to test user's on their knowledge of the buildings. E.g. Photo, what building is this, user inputs their answer.
- During production, using Next JS, it became obvious that i could make a multi-page site with the data - presenting it in different ways. This would allow different users to engage with it in different ways.
- First, I set up the app using `create-next-app`.
- Then I worked on each of the pages in the app, using Tailwind CSS to rapidly design them in a similar style to my Brutalist Map project.
- Taught myself how to use APIs in Javascript with fetch() and then applied this to Nextjs, using the [docs](https://nextjs.org/docs/app/api-reference/functions/fetch).
  - I spent a long time trying to get this to work - it was relatively simple with the Mapbox URL but I also wanted to use local geojson data where possible (easier to edit and reference). I spent a long time trying to debug this, but eventually I found what I needed in the NextJS[docs](https://vercel.com/guides/loading-static-file-nextjs-api-route) - the Node Promises library.


- Added Brutalist Map into the page
  - [React-map-gl](https://github.com/visgl/react-map-gl) as an API wrapper for [mapbox-gl](https://github.com/mapbox/mapbox-gl-js), with [mapbox studio](https://www.mapbox.com/studio/) staying as the source.
  -

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
