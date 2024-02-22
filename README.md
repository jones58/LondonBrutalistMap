# Brutalist Buildings

This is a React app, bootstrapped with Vite and deployed to Netlify.

## Building

- After the success of my Brutalist Map project, I wanted to build a game using the same data, to test user's on their knowledge of the buildings. E.g. Photo, what building is this, user inputs their answer.
- During production, it became obvious that i could make a multi-page site with the data - presenting it in different ways. This would allow different users to engage with it in different ways.
- First, I set up the app using Vite.
- Then I worked on each of the pages in the app, using Tailwind CSS to rapidly design them in a similar style to my Brutalist Map project.
- Taught myself how to use APIs in Javascript with fetch() and then applied this to React.

  - I spent a long time trying to get this to work - it was relatively simple with the Mapbox URL but I also wanted to use local geojson data where possible (easier to edit and reference).

- Added Brutalist Map into the page

  - [React-map-gl](https://github.com/visgl/react-map-gl) as an API wrapper for [mapbox-gl](https://github.com/mapbox/mapbox-gl-js), with [mapbox studio](https://www.mapbox.com/studio/) staying as the source.

- Added React Router to navigate between pages and serve a 404 page and Link elements to improve page load speed.
- Deployed to Netlify.
- Added markers to the map using a map function.
- Added controls to the map using the example [in the React-map-gl docs](https://github.com/visgl/react-map-gl/blob/7.1-release/examples/controls/src/app.tsx) as a guide.
-

## Running on your machine

Clone the project and run the development server:

```bash
npm run dev
```
