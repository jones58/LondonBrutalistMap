// Add event listener when click on a brutalist building marker to open popup //
const popup = document.getElementById("popup");

const onClick = (event) => {
  hideBrutalistPopup();
  hideNewPopup();
  // find if a feature was clicked //
  const [feature] = map.queryRenderedFeatures(event.point, {
    layers: ["brutalistmap"],
  });
  console.log(feature);

  // if a feature was clicked, open a custom popup at the location of the feature with HTML from its properties //

  if (feature) {
    popup.innerHTML = `
    <h1>${feature.properties.Title}</h1>
    <div><p>Designed by: ${feature.properties.Designer}</p><p>Completed: ${feature.properties.Completed}</p><p><a href="${feature.properties.URL}" target="_blank">Get Directions</a></div>
    <img src="${feature.properties.Image}" alt="a photo of ${feature.properties.Title}"/>

    <svg id="3540 "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 579.85 580.86" onclick="hidePopup()">
      <defs>
        <style>
          .cls-4 {
            fill: #fff;
            stroke: #000;
            stroke-width: 0px;
          }
          .cls-5 {
            stroke: #fff;
            stroke-width: 0px;
          }
        </style>
      </defs>
      <g id="g3561">
        <path id="path3563" class="cls-5" d="M66.27,1.77C24.94,1.77,1.7,23.14,1.7,66.8v450.12c0,40.84,20.89,62.23,62.19,62.23h452.03c41.3,0,62.22-20.32,62.22-62.23V66.8c0-42.6-20.92-65.04-63.52-65.04,0,0-448.49-.14-448.35,0h0Z"/>
        <path id="path3565" class="cls-4" d="M244.24,458.97L64.04,278.77,244.24,98.58h118.85L226.02,235.64H495.36v87.23H226.98l136.32,136.32-119.06-.22Z"/>
      </g>
    </svg>

    <div id="checkbox-container"></div>
    `;
    // check the checkbox state for the current feature //
    const checkboxContainer = document.getElementById(
      "checkbox-container"
    );

    if (localStorage.getItem(feature.properties.Title)) {
      checkboxContainer.innerHTML = `
      <?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560.88 561.84">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
      }
    </style>
  </defs>
  <path d="M0,507.14c0-149.86,0-299.71,0-449.57,.3-1.38,.74-2.75,.87-4.14,.49-5.35,1.44-10.61,3.02-15.73C8.26,23.55,16.73,12.85,30.3,6.48,37.98,2.87,46.14,1.1,54.57,.45,55.58,.37,56.57,.15,57.58,0c134.66,0,269.32,0,403.99,0,.85,.12,1.7,.34,2.54,.35,11.51,.02,23.03,.05,34.54,0,7.71-.03,15.33,.58,22.8,2.56,18.04,4.78,30.06,15.91,35.68,33.8,2.39,7.62,3.44,15.42,3.4,23.39,0,.76,.23,1.52,.35,2.28V501.87c-.12,.85-.35,1.69-.35,2.54,.04,6.83-.74,13.55-2.57,20.13-4.18,15.09-13.06,26.11-27.82,32-5.97,2.39-12.2,3.71-18.58,4.38-2.28,.24-4.55,.61-6.82,.92H56.62c-.76-.15-1.52-.36-2.3-.43-5.8-.57-11.57-1.29-17.2-2.93-14.92-4.36-25.76-13.35-31.7-27.89-2.46-6.03-3.8-12.33-4.51-18.79-.17-1.57-.6-3.11-.91-4.66ZM433.32,140.72c-67.57,67.53-134.91,134.83-202.37,202.25-34.87-34.87-69.51-69.51-103.83-103.83-19.74,19.74-39.31,39.31-58.56,58.56,52.83,52.83,105.9,105.9,158.99,158.99,86.74-86.88,173.67-173.96,260.79-261.23-18.1-18.02-36.45-36.27-55.01-54.74Z"/>
  <path class="cls-1" d="M433.32,140.72c18.56,18.47,36.91,36.73,55.01,54.74-87.12,87.27-174.05,174.34-260.79,261.23-53.09-53.09-106.16-106.16-158.99-158.99,19.25-19.25,38.82-38.82,58.56-58.56,34.33,34.33,68.97,68.97,103.83,103.83,67.46-67.42,134.8-134.72,202.37-202.25Z"/>
</svg>
`;
    } else {
      checkboxContainer.innerHTML = `
      <?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560.88 561.84">
  <defs>
    <style>
      .cls-1 {
        fill: #2a2a2a;
      }
    </style>
  </defs>
  <path d="M0,507.14c0-149.86,0-299.71,0-449.57,.3-1.38,.74-2.75,.87-4.14,.49-5.35,1.44-10.61,3.02-15.73C8.26,23.55,16.73,12.85,30.3,6.48,37.98,2.87,46.14,1.1,54.57,.45,55.58,.37,56.57,.15,57.58,0c134.66,0,269.32,0,403.99,0,.85,.12,1.7,.34,2.54,.35,11.51,.02,23.03,.05,34.54,0,7.71-.03,15.33,.58,22.8,2.56,18.04,4.78,30.06,15.91,35.68,33.8,2.39,7.62,3.44,15.42,3.4,23.39,0,.76,.23,1.52,.35,2.28V501.87c-.12,.85-.35,1.69-.35,2.54,.04,6.83-.74,13.55-2.57,20.13-4.18,15.09-13.06,26.11-27.82,32-5.97,2.39-12.2,3.71-18.58,4.38-2.28,.24-4.55,.61-6.82,.92H56.62c-.76-.15-1.52-.36-2.3-.43-5.8-.57-11.57-1.29-17.2-2.93-14.92-4.36-25.76-13.35-31.7-27.89-2.46-6.03-3.8-12.33-4.51-18.79-.17-1.57-.6-3.11-.91-4.66ZM433.32,140.72c-67.57,67.53-134.91,134.83-202.37,202.25-34.87-34.87-69.51-69.51-103.83-103.83-19.74,19.74-39.31,39.31-58.56,58.56,52.83,52.83,105.9,105.9,158.99,158.99,86.74-86.88,173.67-173.96,260.79-261.23-18.1-18.02-36.45-36.27-55.01-54.74Z"/>
  <path class="cls-1" d="M433.32,140.72c18.56,18.47,36.91,36.73,55.01,54.74-87.12,87.27-174.05,174.34-260.79,261.23-53.09-53.09-106.16-106.16-158.99-158.99,19.25-19.25,38.82-38.82,58.56-58.56,34.33,34.33,68.97,68.97,103.83,103.83,67.46-67.42,134.8-134.72,202.37-202.25Z"/>
</svg>`;
    }

    // add a click event listener to the checkbox container, and set whether feature has been visited or not //
    checkboxContainer.addEventListener("click", () => {
      if (localStorage.getItem(feature.properties.Title)) {
        localStorage.removeItem(feature.properties.Title);
        checkboxContainer.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560.88 561.84">
          <defs>
            <style>
              .cls-1 {
                fill: #2a2a2a;
              }
            </style>
          </defs>
          <path d="M0,507.14c0-149.86,0-299.71,0-449.57,.3-1.38,.74-2.75,.87-4.14,.49-5.35,1.44-10.61,3.02-15.73C8.26,23.55,16.73,12.85,30.3,6.48,37.98,2.87,46.14,1.1,54.57,.45,55.58,.37,56.57,.15,57.58,0c134.66,0,269.32,0,403.99,0,.85,.12,1.7,.34,2.54,.35,11.51,.02,23.03,.05,34.54,0,7.71-.03,15.33,.58,22.8,2.56,18.04,4.78,30.06,15.91,35.68,33.8,2.39,7.62,3.44,15.42,3.4,23.39,0,.76,.23,1.52,.35,2.28V501.87c-.12,.85-.35,1.69-.35,2.54,.04,6.83-.74,13.55-2.57,20.13-4.18,15.09-13.06,26.11-27.82,32-5.97,2.39-12.2,3.71-18.58,4.38-2.28,.24-4.55,.61-6.82,.92H56.62c-.76-.15-1.52-.36-2.3-.43-5.8-.57-11.57-1.29-17.2-2.93-14.92-4.36-25.76-13.35-31.7-27.89-2.46-6.03-3.8-12.33-4.51-18.79-.17-1.57-.6-3.11-.91-4.66ZM433.32,140.72c-67.57,67.53-134.91,134.83-202.37,202.25-34.87-34.87-69.51-69.51-103.83-103.83-19.74,19.74-39.31,39.31-58.56,58.56,52.83,52.83,105.9,105.9,158.99,158.99,86.74-86.88,173.67-173.96,260.79-261.23-18.1-18.02-36.45-36.27-55.01-54.74Z"/>
          <path class="cls-1" d="M433.32,140.72c18.56,18.47,36.91,36.73,55.01,54.74-87.12,87.27-174.05,174.34-260.79,261.23-53.09-53.09-106.16-106.16-158.99-158.99,19.25-19.25,38.82-38.82,58.56-58.56,34.33,34.33,68.97,68.97,103.83,103.83,67.46-67.42,134.8-134.72,202.37-202.25Z"/>
        </svg>`;
        setCounter();
      } else {
        localStorage.setItem(feature.properties.Title, true);
        checkboxContainer.innerHTML = `
        <?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560.88 561.84">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
      }
    </style>
  </defs>
  <path d="M0,507.14c0-149.86,0-299.71,0-449.57,.3-1.38,.74-2.75,.87-4.14,.49-5.35,1.44-10.61,3.02-15.73C8.26,23.55,16.73,12.85,30.3,6.48,37.98,2.87,46.14,1.1,54.57,.45,55.58,.37,56.57,.15,57.58,0c134.66,0,269.32,0,403.99,0,.85,.12,1.7,.34,2.54,.35,11.51,.02,23.03,.05,34.54,0,7.71-.03,15.33,.58,22.8,2.56,18.04,4.78,30.06,15.91,35.68,33.8,2.39,7.62,3.44,15.42,3.4,23.39,0,.76,.23,1.52,.35,2.28V501.87c-.12,.85-.35,1.69-.35,2.54,.04,6.83-.74,13.55-2.57,20.13-4.18,15.09-13.06,26.11-27.82,32-5.97,2.39-12.2,3.71-18.58,4.38-2.28,.24-4.55,.61-6.82,.92H56.62c-.76-.15-1.52-.36-2.3-.43-5.8-.57-11.57-1.29-17.2-2.93-14.92-4.36-25.76-13.35-31.7-27.89-2.46-6.03-3.8-12.33-4.51-18.79-.17-1.57-.6-3.11-.91-4.66ZM433.32,140.72c-67.57,67.53-134.91,134.83-202.37,202.25-34.87-34.87-69.51-69.51-103.83-103.83-19.74,19.74-39.31,39.31-58.56,58.56,52.83,52.83,105.9,105.9,158.99,158.99,86.74-86.88,173.67-173.96,260.79-261.23-18.1-18.02-36.45-36.27-55.01-54.74Z"/>
  <path class="cls-1" d="M433.32,140.72c18.56,18.47,36.91,36.73,55.01,54.74-87.12,87.27-174.05,174.34-260.79,261.23-53.09-53.09-106.16-106.16-158.99-158.99,19.25-19.25,38.82-38.82,58.56-58.56,34.33,34.33,68.97,68.97,103.83,103.83,67.46-67.42,134.8-134.72,202.37-202.25Z"/>
</svg>
  `;
        setCounter();
      }
    });

    popup.classList.remove("hidden");
  }
};

// linking event listener to map's built-in click function //
map.on("click", onClick);

function hidePopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
}

// display how many values in  local storage in html number - using a regex here because mapbox adds two keys to local storage which we don't want to count.//

function setCounter() {
  const buildingsVisited = Object.keys(localStorage).filter(
    (key) => !/mapbox/.test(key)
  ).length;
  console.log(buildingsVisited);
  document.getElementById("counter").innerHTML =
    "Visited: " + buildingsVisited + "/102";
}

setCounter();

// listing all places visited in the popup //

const clickCounter = document.getElementById("click-counter");
clickCounter.addEventListener("click", () => {
  hideBrutalistPopup();
  hidePopup();
  const newPopup = document.getElementById("new-popup");
  newPopup.innerHTML = `<h1>Places Visited:</h1>
  <svg id="3541" "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 579.85 580.86" onclick="hideNewPopup()">
      <defs>
        <style>
          .cls-4 {
            fill: #fff;
            stroke: #000;
            stroke-width: 0px;
          }
          .cls-5 {
            stroke: #fff;
            stroke-width: 0px;
          }
        </style>
      </defs>
      <g id="g3561">
        <path id="path3563" class="cls-5" d="M66.27,1.77C24.94,1.77,1.7,23.14,1.7,66.8v450.12c0,40.84,20.89,62.23,62.19,62.23h452.03c41.3,0,62.22-20.32,62.22-62.23V66.8c0-42.6-20.92-65.04-63.52-65.04,0,0-448.49-.14-448.35,0h0Z"/>
        <path id="path3565" class="cls-4" d="M244.24,458.97L64.04,278.77,244.24,98.58h118.85L226.02,235.64H495.36v87.23H226.98l136.32,136.32-119.06-.22Z"/>
      </g>
    </svg>`;
  // getting the local storage keys for list of places//
  const buildingsVisited = Object.keys(localStorage).filter(
    (key) => !/mapbox/.test(key)
  );
  const placesInPopup = newPopup.querySelectorAll(".places-list p");
  placesInPopup.forEach((place) => {
    place.remove();
  });
  for (let i = 0; i < buildingsVisited.length; i++) {
    newPopup.innerHTML += `<div class="places-list"><p>${buildingsVisited[i]}</p></div>`;
  }
  newPopup.classList.remove("hidden");
});

//clicking on new popup back button closes it//
function hideNewPopup() {
  const newPopup = document.getElementById("new-popup");
  newPopup.classList.add("hidden");
}

// adding description of what brutalism is in popup //

const description = document.getElementById("description");
description.addEventListener("click", () => {
  hideNewPopup();
  hidePopup();
  const brutalistPopup = document.getElementById("brutalist-popup");
  brutalistPopup.innerHTML = `<h1>What is Brutalism? </h1>
  <div><p>Brutalism is an architectural style that emerged in the 1950s. It is characterized by its use of raw, unfinished concrete, bold geometric shapes, and an expressive design approach. The term "brutalism" originates from Le Corbusier's phrase in French : "béton brut," which means "raw concrete." <p></div> <h1>Why London?</h1> <div><p>London has some of the best examples of Brutalism in the world. After World War II, a group of idealists began to rebuild the city in concrete. What remain are some of the most striking civic and housing buildings ever built. </p></div>
  <svg id="3541" "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 579.85 580.86" onclick="hideBrutalistPopup()">
      <defs>
        <style>
          .cls-4 {
            fill: #fff;
            stroke: #000;
            stroke-width: 0px;
          }
          .cls-5 {
            stroke: #fff;
            stroke-width: 0px;
          }
        </style>
      </defs>
      <g id="g3561">
        <path id="path3563" class="cls-5" d="M66.27,1.77C24.94,1.77,1.7,23.14,1.7,66.8v450.12c0,40.84,20.89,62.23,62.19,62.23h452.03c41.3,0,62.22-20.32,62.22-62.23V66.8c0-42.6-20.92-65.04-63.52-65.04,0,0-448.49-.14-448.35,0h0Z"/>
        <path id="path3565" class="cls-4" d="M244.24,458.97L64.04,278.77,244.24,98.58h118.85L226.02,235.64H495.36v87.23H226.98l136.32,136.32-119.06-.22Z"/>
      </g>
    </svg>`;
  brutalistPopup.classList.remove("hidden");
});

function hideBrutalistPopup() {
  const BrutalistPopup = document.getElementById("brutalist-popup");
  BrutalistPopup.classList.add("hidden");
}
