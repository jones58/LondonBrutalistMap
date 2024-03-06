## To do:

Map page

- popup on click - fix so it works better. Needs back button, tick button etc. just like on the brutalist map site. See from old map to add folder, for icons to add in. Need to add back button and tick. Also tick for visited on the index page for each building. On mobile too.

- Change colour of marker based on visited - fix this.
  - see maps folder -https://www.pinballmap.com/ for inspo of tech stack and how the app runs
    -See nearby wiki, could maybe use wiki pages. Look at how they made it a mobile app running in chrome
  - Maybe data like: https://www.crimesofsolidarity.org/data, including way for users to add their own data.

Game

- add features to game and using them to get images - look through previous versions on github if need to.
- add more steps to game - atm just says correct or incorrect. Score counter etc. Add places already got right to local storage.

Index page

- order by name
- filter to see ones you've visited / unvisited
- order by date
- shuffle button
- search
- back to top floating button/fixed footer
- visited state on building index.
- space at bottom

Header

- hamburger navbar on mobile

Contact

- Connect contact form with db or use Netlify forms.

Sitewide

- fix deploy to netlify, check on [here](https://brutalistmap2.netlify.app/)
- improve readme with [this](https://www.youtube.com/watch?v=1wKtKFY_ueM)
- Make suggestions button maybe, link to contact page...
- Use state management - like Redux or Zustand maybe.
- use React libraries: https://www.freecodecamp.org/news/react-libraries-to-use-in-your-projects/?trk=feed_main-feed-card_feed-article-content maybe.
- load images quicker on vercel.
- view on github and visited at bottom/footer like on brutalist map.

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

maybe use geolib get center to get center of map for initial loading.

Image with src "https://www.modernism-in-metroland.co.uk/uploads/1/0/2/5/10257505/img-3146_orig.jpg" has legacy prop "objectFit". Did you forget to run the codemod?

[dynamic routes](https://www.youtube.com/watch?v=WPdJaBFquNc)
