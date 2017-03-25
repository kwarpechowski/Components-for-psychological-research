# Plutchik Emotion Wheel

## Examples
<a href="https://kwarpechowski.github.io/The-Geneva-Emotion-Wheel/plutchik/samples/simple/index.html"><img src="https://github.com/kwarpechowski/The-Geneva-Emotion-Wheel/blob/master/plutchik/sample.png" width="500"/></a>

All examples are localized in [this link](https://kwarpechowski.github.io/Components-for-psychological-research/plutchik/samples?style=centerme)

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
| `element`   | string  | #drawer | |
| `isMobile`   | boolean  | false | |
| `lang` | string | en | available: 'en', 'pl'|
| `labels`    | ``Array<Array<string>> ``  | [] |  [example](#labels) |
| `checkedElements` |  ``Array <string> ``  | [] | |
| `maxElements`| number | 32 | |


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
