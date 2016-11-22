# Plutchnik Emotion Wheel

##Usage
```html
<div id="drawing"></div>

<script type="text/javascript" src="dist/core-plutchik.js"></script>
<script>
    Plutchik({
      element: 'drawing'
    });
</script>
```

##Parameters

| Name        | Type            | Default Value  | Description |
| ----------- |:---------------:| --------------:|------------:|
| `element`   | string  | drawer | |
| `isMobile`   | boolean  | false | |
| `labels`    | Array <Array<string>>  | [click](#labels) | |


###labels<a name="labels"></a>
```javascript
[
   ["ecstasy", "admiration", "terror", "amazement", "grief", "loathing", "rage", "vigilance"],
   ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"],
   ["serenity", "acceptance", "apprehension", "distraction", "pensiveness", "boredom", "annoyance", "interest"],
   ["optimistm", "love", "submission", "awe", "disapproval", "emorse", "contempt", "aggressiveness"]
 ];
```

##API
###elementClick
