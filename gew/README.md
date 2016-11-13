# The Geneva Emotion Wheel

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)
[![Dependency Status](https://david-dm.org/kwarpechowski/The-Geneva-Emotion-Wheel/status.svg)](https://david-dm.org/kwarpechowski/The-Geneva-Emotion-Wheel#info=dependencies)
[![devDependency Status](https://david-dm.org/kwarpechowski/The-Geneva-Emotion-Wheel/dev-status.svg)](https://david-dm.org/kwarpechowski/The-Geneva-Emotion-Wheel#info=devDependencies)

##Examples
<a href="https://kwarpechowski.github.io/The-Geneva-Emotion-Wheel/samples/simple/index.html"><img src="https://github.com/kwarpechowski/The-Geneva-Emotion-Wheel/blob/master/sample.png" width="500"/></a>

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
| `showLines` | boolean | false | |
| `showBorder` | boolean | true | |
| `classes`   | Object  | [click](#classes) ||
| `showHeader`| boolean | true | |
| `headerTop`| string | No emotion | |
| `headerBottom`| string | Other emotion | |
| `maxElements`| number | 20 | |
| `checkedElements`| Array<number> | [] | Predefined selected indexes (example: [1,2,3,4,5] - defined first five lines |

###labels<a name="labels"></a>
```javascript
[
   "Involvement\nInterest",
   "Amusement\nLaughter",
   "Pride\nElation",
   "Happiness\nJoy",
   "Enjoyment\nPleasure",
   "Tenderness\nFeeling love",
   "Wonderment\nFeeling awe",
   "Feeling disburdened\nRelief",
   "Astonishment\nSuprise",
   "Longing\nNostalgia",
   "Pity\nCompassion",
   "Sadness\nDespair",
   "Worry\nFear",
   "Embarrassment\nShame",
   "Guilt\nRemorse",
   "Disappointment\nRegreat",
   "Envy\nJealousy",
   "Disgust\nRepulsion",
   "Contempt\nScorn",
   "Irritation\nAnger"
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
