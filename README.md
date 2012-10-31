[Thomas Amaro]: http://www.thomasamaro.com "Thomas Amaro's Official Site"
[Brian Jeppesen]: http://www.thomasamaro.com "Thomas Amaro's Official Site"

# jCards Framework #

*jCards* enumerates a collection of jQuery elements, assigning to each a class that indicates whether it belongs on the left side, right side, or on a line by itself. Various options can be set to customize the way that this happens.

## Detailed Description ##

When *jCards* is called on a wrapper element, it enumerates all elements that have the ```.jcard``` class. To each, it assigns a class describing how this class should appear. This can be ```.card-left```, ```.card-right```, or ```.card-full```.

### How the classes are assigned ###

*jCards* alternates between setting cards as card-left and card-right, creating two distinct columns on the page. When *jCards* encounters a card that has be given the class ```.tacked```, it sets this card as ```.card-full```. Finally, by default, if the last card before a ```.tacked``` card, or the last card on the page, is a ```.card-left```, *jCards* sets it to ```.card-full```.

## Requirements ##

* jQuery

## Developer ##

* [Brian Jeppesen][]

## Installation ##

1. Download the latest *jCards* **js** file above.
2. Upload it to your server.
3. Link to it in your ```<head>``` like this:

```html
<script type="text/javascript" src="path-to-folder/jCards.1.0.min.js"></script>
```

## The Basics ##

The simplest setup for *jCards* requires only the following three lines:

```javascript
$(document).ready(function(){
  jQuery("#wrapper").drawCards();
});
```

## Advanced Features ##


&copy; [Brian Jeppesen][]