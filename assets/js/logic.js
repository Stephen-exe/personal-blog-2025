// TODO: Create logic to toggle the light/dark mode styles for the page and circle. 
const lightAndDark = function (mode) {
  let icon, circleColor;

  if (mode === 'light') {
    icon = '☀️';
    circleColor = '#ffd000ff';
  } else {
    icon = '🌒';
    circleColor = '#9981bdff';
  }
  modeBtnEl.textContent = icon;
  document.body.classList = mode;
  document.documentElement.style.setProperty('--circle-color', circleColor);
}
//The mode should be saved to local storage.
const = whatModeIsIt = function () {
  const mode = getMode();

  let nextMode;

  if (mode === 'light') {
    nextMode = 'dark';
  } else {
    nextMode = 'light';
  }

  lightAndDark(nextMode);

}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

