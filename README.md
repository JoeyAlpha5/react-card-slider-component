# react-card-slider-component

Easy to use card slider component

## installation
```javascript
npm i react-card-slider-component
```

# Usage

### import package and and pass along a slides property
```javascript
import ReactCardSlider from 'react-card-slider-component';
// a slide object contains the image link, title and function/click event for when a user clicks on a card
const slides = [
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
]

<ReactCardSlider slides={slides}/>
```

# Preview

![Alt text](https://raw.githubusercontent.com/JoeyAlpha5/react-card-slider-component/main/src/assets/slide-image.png?raw=true "react-card-slider-component")