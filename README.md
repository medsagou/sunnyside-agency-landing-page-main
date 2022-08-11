## Welcome! 👋

Thanks for checking out this front-end coding challenge.

# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [Modern css reset](https://piccalil.li/blog/a-modern-css-reset/) - piccalil



### What I learned

how to use grid, manipulation them between the desktop screen and mobile.

```html
        <div class="theird-grid-container">
            <img class="desktop" src="./images/desktop/image-gallery-milkbottles.jpg" alt="">
            <img class="desktop" src="./images/desktop/image-gallery-orange.jpg" alt="">
            <img class="desktop" src="./images/desktop/image-gallery-cone.jpg" alt="">
            <img class="desktop" src="./images/desktop/image-gallery-sugarcubes.jpg" alt="">

            <img class="mobile" src="./images/mobile/image-gallery-milkbottles.jpg" alt="">
            <img class="mobile" src="./images/mobile/image-gallery-orange.jpg" alt="">
            <img class="mobile" src="./images/mobile/image-gallery-cone.jpg" alt="">
            <img class="mobile" src="./images/mobile/image-gallery-sugar-cubes.jpg" alt="">
        </div><!-- theird-grid-container -->
```

```css
/* changin grid */
    .first-grid-container{
        display: grid;
        grid-template-areas:
        'a'
        'b'
        'c'
        'd'
        'e'
        'f'
        'g';
        grid-template-columns: repeat(1, 1fr);
        max-width: 80rem;
        align-items: center;
    }
    .grid-two-container{
        grid-area: c;
    }
    .grid-one-container{
        background-image: url('./images/mobile/image-header.jpg');
        grid-column: span 1;
        padding-bottom: 10rem;
        background-position: 0 0;
    }
    .person-grid-comment-container {
        display: grid;
        grid-template-columns: repeat(1,1fr);
        max-width: 80%;
        grid-gap: 1.5rem;
    }
    .title-second-grid-container{
        grid-column: span 1;
        display: flex;
        justify-content: center;
    }
    .theird-grid-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
```

```js
const menuBtn = document.getElementById('menuBtn');
const menuContent = document.getElementById('mobile-menu-container');

menuBtn.addEventListener('click',function (){
    const state = menuContent.getAttribute('state');
    if (state == 'not-active'){
        menuContent.setAttribute('state','active');
    } else if (state == 'active'){
        menuContent.setAttribute('state','not-active');
    }
})

window.addEventListener('click',function(e){
    if (!menuBtn.contains(e.target) & !menuContent.contains(e.target)){
        menuContent.setAttribute('state','not-active');
    }
})
```


### Continued development

My first project with full grid usage, Im so glad for finishing this work. Specialy the mobile version with the transition between the 2 columnn grid and 1 column grid.


### Useful resources

- [W3schools](https://www.w3schools.com/) - This helped me for javaScript eventListener. I really liked this pattern and will use it going forward.
- [stackoverflow](https://stackoverflow.com/) - this website help me on the javascript when i get stock.
## Author

- Website - [Mohamed Sagou](https://github.com/medsagou)
- Frontend Mentor - [@medsagou](https://www.frontendmentor.io/profile/medsagou)
- Twitter - [@sagoumohamed](https://www.twitter.com/sagoumohamed)

## Acknowledgments

nothing for this project.
