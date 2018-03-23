# The Geneva Emotion Wheel
## Examples
<p align="center"> 
<a href="https://kwarpechowski.github.io/Components-for-psychological-research/app/gew/samples/simple/index.html"><img src="https://raw.githubusercontent.com/kwarpechowski/Components-for-psychological-research/master/app/gew/sample.png" width="500"/></a>
</p>

All examples are localized in [this link](https://kwarpechowski.github.io/Components-for-psychological-research/app/gew/samples/?style=centerme)


## Usage
```html
<div id="drawing"></div>

<script type="text/javascript" src="dist/core-gew.js"></script>
<script>
    GEW({
      element: 'drawing'
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
