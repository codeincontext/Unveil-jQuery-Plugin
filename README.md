Unveil-jQuery-Plugin
--------------

Unveil is a jQuery plugin that allows you to 'unveil' an element with a radial swipe (it's pretty). It does this using HTML canvas (and should therefore degrade nicely).

I needed this for an analytics page, to unveil some pie charts. Maybe I'll upload a video of that.

#### USAGE:
```javascript
  $(element).unveil(options, callback);
```

You can manually set `duration` and swipe `color` in the options object.
The defaults are sensible, and it is smart enough to work out what the color should be.

#### DEMO:
You can check it out here: http://skattyadz.github.com/Unveil-jQuery-Plugin/example.html

#### TODO:
[nothing at the moment, I'm pretty happy with it]

#### Problems:
* This isn't particularly clever. The swipe is a solid color, not transparent. It will only work if your content has a flat background colour (no gradients, images, or textures I'm afraid).
* There might be a better way of doing this. This is the way I did it. Please let me know if that's the case.