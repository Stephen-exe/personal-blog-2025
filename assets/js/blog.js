// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backBtnEl = document.querySelector('back');

// TODO: Create a function that builds an element and appends it to the DOM
const buildElement = function (type, text, parent) {
  const tag = document.createElement(type);
  tag.textContent = text;
  parent.appendChild(tag);

  return tag;
}
// TODO: Create a function that handles the case where there are no blog posts to display
const ifEmpty = function () {
  buildElement('h2', 'Nothing has been posted..', mainEl);
  const a = buildElement('a', 'Write something down..', mainEl);

  a.href = '.index.html';
};
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
