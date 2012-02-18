Unveil-jQuery-Plugin
--------------

Unveil is a jQuery plugin that allows you to 'unveil' an element with a radial swipe (it's pretty). It does this using HTML canvas (and should therefore degrade nicely).

I needed this for an analytics page, to unveil some pie charts. Maybe I'll upload a video of that.

#### DEMO:
You can check it out here: http://skattyadz.github.com/Unveil-jQuery-Plugin/example.html

#### TODO:
* Don't assume that page background is white. Traverse up the DOM to guess the background-colour, maybe.
* Take user options (duration, direction, background colour, callback, etc)

#### Problems:
* This isn't particularly clever. It will only work if your content has a flat background colour (no gradients, images, or textures I'm afraid)
* There might be a better way of doing this. This is the way I did it. Please let me know if that's the case.