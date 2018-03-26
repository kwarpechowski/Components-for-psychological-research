# The Geneva Emotion Wheel

## Examples
<p align="center"> 
<img src="https://raw.githubusercontent.com/kwarpechowski/Components-for-psychological-research/master/packages/gew/sample.png" width="500"/></a>
</p>

* [simple example written in ES6](https://codesandbox.io/s/n568w5w2p4)
* [simple example written in ES5 - usage CDN](https://codesandbox.io/s/mm9v4ww7zj)
* [events subscribe](https://codesandbox.io/s/z783vv8lm)
* [custom labels](https://codesandbox.io/s/8l1q938qo0)

## Usage
```html
<div id="drawing"></div>

<script type="text/javascript" src="dist/core-gew.js"></script>
<script>
    GEW({
      element: '#drawing'
    });
</script>
```

## Parameters

| Name        | Type            | Default Value  | Description |
| ----------- |:---------------:| --------------:|------------:|
| `element`   | string  | drawer | DOM reference for render component |
| `maxElements`| number | 20 |  Number of max checked elements |
| `checkedElements`| ``Array<number>`` | [] | Predefined selected indexes (example: [1,2,3,4,5] - defined first five lines |
| `labels`    | ``Array <string>``  | [click](#labels) | |
| `R`         | number | 80 | |
| `showLines` | boolean | false | |
| `showBorder` | boolean | true | |
| `showHeader`| boolean | true | |
| `classes`   | Object  | [click](#classes) |CSS classes for custom styling|
| `headerTop`| string | No emotion | Label for top part of white circle |
| `headerBottom`| string | Other emotion |  Label for bottom part of white circle |

### labels<a name="labels"></a>
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

### clases<a name="classes"></a>
```javascript
{
    mainGroup: "main_group",
    lineAxis: "line_axis",
    lineBorder: "line_border",
    line: "line",
    circlePrefix: "row_"
}
```
## API
### circleClick
### isAllChecked
