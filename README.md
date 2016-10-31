# The Geneva Emotion Wheel

[![Dependency Status](https://david-dm.org/kwarpechowski/The-Geneva-Emotion-Wheel/status.svg)](https://david-dm.org/kwarpechowski/The-Geneva-Emotion-Wheel#info=dependencies) [![devDependency Status](https://david-dm.org/kwarpechowski/The-Geneva-Emotion-Wheel/dev-status.svg)](https://david-dm.org/kwarpechowski/The-Geneva-Emotion-Wheel#info=devDependencies)

##Examples
<a href="https://kwarpechowski.github.io/The-Geneva-Emotion-Wheel/samples/rainbow/index.html"><img src="https://github.com/kwarpechowski/The-Geneva-Emotion-Wheel/blob/master/sample.png" width="500"/></a>

All examples are localized in [this link](https://kwarpechowski.github.io/The-Geneva-Emotion-Wheel/samples?style=centerme)

##Instalation
```
npm i the-geneva-emotion-wheel
```
##Usage
```html
<div id="drawing"></div>

<script type="text/javascript" src="dist/core-gew.js"></script>
<script>
    GEW({
      element: 'drawing'
    });
</script>
```

##Parameters

| Name        | Type            | Default Value  | Description |
| ----------- |:---------------:| --------------:|------------:|
| `R`         | number | 80 | |
| `labels`    | Array <string>  | [click](#labels) | |
| `element`   | string  | drawer | |
| `showLines` | boolean | true | |
| `showBorder` | boolean | true | |
| `classes`   | Object  | [click](#classes) ||
| `showHeader`| boolean | true | |
| `headerTop`| string | No emotion | |
| `headerBottom`| string | Other emotion | |

###labels<a name="labels"></a>
```javascript
[
    "Interest",
    "Amusement",
    "Pride",
    "Joy",
    "Pleasure",
    "Contentment",
    "Love",
    "Admiration",
    "Relief",
    "Comassion",
    "Sadness",
    "Guilt",
    "Regret",
    "Shame",
    "Disappointment",
    "Fear",
    "Disgust",
    "Contempt",
    "Hate",
    "Anger"
  ];
```

###clases<a name="classes"></a>
```javascript
{
    mainGroup: "main_group",
    lineAxis: "line_axis",
    lineBorder: "line_border",
    line: "line",
    circlePrefix: "row_"
}
```
##Build
```
npm i webpack -g
npm run build
```
##API
###circleClick
###isAllChecked
