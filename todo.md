# Todo Now

## Improve Styling

- extract tailwind into scss docs.
- apply default colours consistently.
  -Consistent colors, search with % for white gray black neutral etc and replace. Use lighten thing if need to
- Check mobile styling
  - No layout shift on mobile header.

## Other

- when click another marker, it should close the other one.
- visited count should just show local storage items visited, not other stuff in local storage. ie should be 3 not 5 now.

# Later

## Other

- get directions, make into button
- edit readme so other people can use/edit. Write contributing.md maybe.

- Improve SEO so it shows up on google.
- More info links for the buildings - there are some really good websites out there about these buildings which I'd like to signpost to users of the map.

## Buildings page

- order by name/architect/date built.
- Filter by Architect.
- Shuffle button.
- Search bar.
- filter to see ones you've visited / unvisited
- back to top floating button
- Instead of get directions, should say "View on map".

## Game page

- I wanted to build a game using the same data, to test user's on their knowledge of the buildings. E.g. Photo, what building is this, user inputs their answer.
- add more steps to game - atm just says correct or incorrect. Score counter etc.

const headerRef = useRef<HTMLElement>(null);
