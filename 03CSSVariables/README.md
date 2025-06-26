# NOTES FOR THIS PROJECT

## EVENT LISTENER
- Want to update value while dragging slider: `input`
- Want to react to someone hovering over an element: `mouseover`
- Want to react when someone clicks away after changing: `change`

## DATA ATTRIBUTE
- A `data-*` attribute is a custom attribute that lets you store extra information on an HTML element — without using classes or ids.
- These are not used by browsers for rendering — they’re meant for a developer.

- Accessing `data-*` in JavaScript via `.dataset`:
  You use the `.dataset` property on the DOM element to access all `data-*` attributes.

## DOCUMENT ELEMENT 
- `.documentElement` is a property of the `document` object in JavaScript that gives you the top-level `<html>` element of your page.

```js
document.documentElement === <html> element
```

- It's how you access the `<html>` tag in the DOM.

### Why use `document.documentElement`?
You normally use it when you want to:

- Change global CSS variables:
```js
document.documentElement.style.setProperty('--main-color', '#ff0');
```

- Access or change document-wide settings, like scrolling:
```js
document.documentElement.scrollTop = 0;  // Scroll to top
```

- Apply styles at the root level:
```css
html {
  --main-color: blue;
}
```
Then update it in JS like:
```js
document.documentElement.style.setProperty('--main-color', 'red');
```

### Example DOM:
```html
<html>
  <head></head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

```js
console.log(document.documentElement.tagName);  // "HTML"
console.log(document.body.tagName);             // "BODY"
```