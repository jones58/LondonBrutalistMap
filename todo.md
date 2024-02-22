## To do:

- Rewrite Readme to reflect change from NextJS to just React.

- deploy to netlify.

- improve readme with [this](https://www.youtube.com/watch?v=1wKtKFY_ueM)

Map page

- Add markers - something like https://docs.mapbox.com/mapbox-gl-js/example/geojson-markers/
  similar to but not same as this:

```tsx
const features = FeaturesData.features;
{
  features.map((feature: any) => (
    <Marker
      key={feature.id}
      longitude={feature.geometry.coordinates[0]}
      latitude={feature.geometry.coordinates[1]}
    ></Marker>
  ));
}
```

- Add controls - see [docs](http://visgl.github.io/react-map-gl/examples/controls)

- Use markers on hover - see [react map gl examples](http://visgl.github.io/react-map-gl/examples/geojson)

Game

- add more steps to game - atm just says correct or incorrect. Score counter etc. Add places already got right to local storage.

Index page

- order by name
- order by date
- shuffle button
- search
- back to top floating button/fixed footer
- visited state on building index.

About page

- make more interesting

Contact

- Connect contact form with db.

Sitewide

- Add realtext pro as font- instead of [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

- Make suggestions button maybe
- Use state management - like Redux or Zustand maybe.
- use React libraries: https://www.freecodecamp.org/news/react-libraries-to-use-in-your-projects/?trk=feed_main-feed-card_feed-article-content maybe.
- load images quicker on vercel.
- view on github and visited at bottom/footer like on brutalist map.

- Brutalist map move over when done other features
  - see to do list in that repo
  - see maps folder -https://www.pinballmap.com/ for inspo of tech stack and how the app runs
    -See nearby wiki, could maybe use wiki pages. Look at how they made it a mobile app running in chrome
  - I want to add my brutalist map to this project, to make it into one complete project. This will make editing the map significantly eeasier. See [this guide for help](https://recodebrain.com/how-to-use-mapbox-in-next-js) or [this site for inspiration](https://www.crimesofsolidarity.org/).
  - Maybe data like: https://www.crimesofsolidarity.org/data, including way for users to add their own data.
  - use similar cards as building index for popups.

From old brutalist map repo to add in here:

- Seeing as much of the functionality of the project is in JavaScript, I think the whole project could do with being rebuilt in React, as it is hard to navigate the codebase at the moment, something a component based architecture would solve.
  - Also allows: npm install mapbox gl js rather than cdn/mapbox studio method, which would mean can edit geojson much more easily etc.
- split css files
- It would be good if I could close the information for a building and see the entire map again. (currently the arrow does this but not very intuitive)
- filter by option, e.g. architect, area, material
- material type: brick etc. with the designed and completed labels.
- Add more info url to json and add to popup with js.
- Get photos with google places api: https://developers.google.com/maps/documentation/places/web-service/place-photos.
- Edit mapbox studio data so highlights whole building not just dot.
  - Change color when hover/click on it.
- Add css bootstrap.
- Move to custom domain like: londonbrutalistmap.com
- intro page like on https://www.get-into-gizz.com/
- images local for faster loading
- Name on hover over.
- Improve SEO.

- hamburger navbar on mobile

maybe use geolib get center to get center of map for initial loading.

work out why favicon isn't loading properly - see console.

Image with src "https://www.modernism-in-metroland.co.uk/uploads/1/0/2/5/10257505/img-3146_orig.jpg" has legacy prop "objectFit". Did you forget to run the codemod?

[dynamic routes](https://www.youtube.com/watch?v=WPdJaBFquNc)
