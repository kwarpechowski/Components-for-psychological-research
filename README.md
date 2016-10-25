# The Geneva Emotion Wheel

##Project status
Draft

##Usage
```html
<div id="drawing"></div>

<script type="text/javascript" src="dist/gew-min.js"></script>
<script>
    GEW({
      element: 'drawing'
    });
</script>
```

##Parameters

| Name        | Type            | Default Value  | Description |
| ----------- |:---------------:| --------------:|------------:|
| `R`         | number          | 80              |         |
| `labels`    | Array <string>  | [click](#labels) |            |
| `element`   | string  | drawer             |         |
| `showLines` | boolean | true |            |
| `classes`   | Object  | [click](#classes) |         |
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
