# NOTES FOR FLEX PANEL

## JS:

### !!Don't add '.' to classList.add('class');
---
### Event Listner : transitionend 
    What is the transitionend event?
The transitionend event happens when a CSS transition finishes — meaning when a property (like size, color, etc.) completes its smooth change.

When does it happen?
Example:
``` css

.box {
  transition: width 1s;
}
```
``` js

box.addEventListener('transitionend', () => {
  console.log('Transition finished!');
});
```

If you change .box's width (like from 100px to 300px), after 1 second, the event fires and you’ll see the message in the console.

 

---