# Plutchik Emotion Wheel

## Examples
<p align="center"> 
<a href="https://kwarpechowski.github.io/Components-for-psychological-research/app/plutchik/samples/simple/index.html"><img src="https://github.com/kwarpechowski/Components-for-psychological-research/blob/master/app/plutchik/sample.png" width="500"/></a>
</p>

All examples are localized in [this link](https://kwarpechowski.github.io/Components-for-psychological-research/app/plutchik/samples/?style=centerme)

## Usage
```html
<div id="drawer"></div>

<script type="text/javascript" src="dist/core-plutchik.js"></script>
<script>
    Plutchik({
      element: '#drawer'
    });
</script>
```

## Parameters

| Name        | Type            | Default Value  | Description |
| ----------- |:---------------:| --------------:|------------:|
| `element`   | string  | #drawer | DOM element for component rendering |
| `isMobile`   | boolean  | false | Flag for render mobile version (without white spaces) |
| `lang` | string | en | available: 'en', 'pl'|
| `labels`    | ``Array<Array<string>> ``  | [] |  [example](#labels) |
| `checkedElements` |  ``Array <string> ``  | [] | Array of checked elements|
| `maxElements`| number | 32 | Number of max checked elements |


### labels<a name="labels"></a>
```javascript
[
   ["ecstasy", "admiration", "terror", "amazement", "grief", "loathing", "rage", "vigilance"],
   ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"],
   ["serenity", "acceptance", "apprehension", "distraction", "pensiveness", "boredom", "annoyance", "interest"],
   ["optimistm", "love", "submission", "awe", "disapproval", "emorse", "contempt", "aggressiveness"]
 ];
```

## API
### elementClick
