# Colour Scheme Switcher

### Getting Started

1. Fork this repo and `git clone` it down to your computer
1. Open index.html in your browser
1. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request

---

Update the `js/main.js` file such that when a user clicks on one of the coloured dots the background colour of the entire page changes to match that dot. You do not need to change any HTML or CSS.

Study the `index.html` and `css/style.css` files first and figure out how to get the colour from the clicked dots and how to apply that colour to the whole page.

<details>
<summary>HINTS</summary>

- The coloured dots have their colours in a `data-color` attribute.
- The `css/style.css` file has styles for each colour using classes (`.red`, `.white`, `.blue`, `.yellow`). You need to apply that class to the `body` element.
- Instead of `classList`, it'll be easier to use the `body` element's [`className` property](https://www.w3schools.com/jsref/prop_html_classname.asp) instead. 

</details>

---

### Hungry For More?
- Do advanced reading on [event delegation](https://javascript.info/event-delegation) and refactor your `main.js` to only have **one** event listener set on a common ancestor.
