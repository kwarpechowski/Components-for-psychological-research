# The Geneva Emotion Wheel

##Project status
Draft

##Examples
<img src="https://github.com/kwarpechowski/The-Geneva-Emotion-Wheel/blob/master/sample.png" width="500"/>

All examples are localized in [this link](https://kwarpechowski.github.io/The-Geneva-Emotion-Wheel/samples?style=centerme)

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
