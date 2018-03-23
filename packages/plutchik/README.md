# Plutchik Emotion Wheel

## Examples
<p align="center"> 
<a href="https://kwarpechowski.github.io/Components-for-psychological-research/app/plutchik/samples/simple/index.html"><img src="https://github.com/kwarpechowski/Components-for-psychological-research/blob/master/packages/plutchik/sample.png" width="500"/></a>
</p>

* [simple example written in ES6](https://codesandbox.io/s/ml6zw30ox)
* [simple example written in ES5 - usage CDN](https://codesandbox.io/s/yv24vyl4rv)
* [dark theme](https://codesandbox.io/s/vvz83o6j1l)

## Usage
```html
<script type="text/javascript" src="https://unpkg.com/@psychological-components/plutchik/umd/plutchik.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@psychological-components/plutchik/lib/theme-core.css">
<div id="drawer"></div>
<script>
    Plutchik.default({
      element: '#drawer'
    });
</script>
```

## Parameters

| Name        | Type            | Default Value  | Description |
| ----------- |:---------------:| --------------:|------------:|
| `element`   | string  | #drawer | DOM element for component rendering |
| `maxElements`| number | 32 | Number of max checked elements |
| `checkedElements` |  ``Array <string> ``  | [] | Array of checked elements |
| `labels`    | ``Array<Array<string>> ``  | [] |  [example](#labels) |
| `isMobile`   | boolean  | false | Flag for render mobile version (without white spaces) |
| `lang` | string | en | available: 'en', 'pl'|


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
