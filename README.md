# Brutalist Buildings

This is a React app, bootstrapped with Vite and deployed to Netlify.

## Building

- After the success of my Brutalist Map project, I wanted to build a game using the same data, to test user's on their knowledge of the buildings. E.g. Photo, what building is this, user inputs their answer.
- During production, it became obvious that i could make a multi-page site with the data - presenting it in different ways. This would allow different users to engage with it in different ways.
- Seeing as much of the functionality of the (old Brutalist map project)[github.com/jones58/brutalist-map] was in JavaScript, I wanted to rebuild it in React, as it was hard to navigate the codebase, something a component based architecture would solve.
- I realised that this would allow me to use the mapbox NPM package rather than the CDN method I was previously using, which would allow me to host the geojson data myself - making it much easier to edit.
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
- Added details of the buildings on hovering over them on the map. I tried using the example [in the React-map-gl docs](http://visgl.github.io/react-map-gl/examples/geojson) but unfortunately couldn't get it to work. A workaround was to create a custom marker, since React Map GL wasn't letting me add onMouseEnter events to the marker that comes with the NPM package. I then used State management, to set whether each marker was hovered over. This caused some flickering which I resolved by binding the onMouseEnter and onMouseLeave events to the div displaying the information on hover.
- Added click event on marker, similar to the hover event above. Used borrowed html and css from the index page.

## Running on your machine

Clone the project and run the development server:

```bash
npm run dev
```

## Things I'd like to implement later / Useful contributions

- see maps folder -https://www.pinballmap.com/ for inspo of tech stack and how the app runs
- see nearby wiki, could maybe use wiki pages. Look at how they made it a mobile app running in chrome
- Maybe data like: https://www.crimesofsolidarity.org/data using Airtable, including way for users to add their own data.
- Improve SEO.
- Dynamic Routes so a page is generated for each building.
- More info links for the buildings - there are some really good websites out there about these buildings which I'd like to signpost to users of the map.
- Make suggestions button, link to contact page...
- Index page
  - order by name/architect/date built.
  - Filter by Architect.
  - Shuffle button.
  - Search bar.
- Game page
  - Fix the game so it works - commented out in header atm.
  - add more steps to game - atm just says correct or incorrect. Score counter etc. Add places already got right to local storage.
