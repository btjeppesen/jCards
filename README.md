[Thomas Amaro]: http://www.thomasamaro.com "Thomas Amaro's Official Site"
[Brian Jeppesen]: http://www.thomasamaro.com "Thomas Amaro's Official Site"

# jCards Framework #

*jCards* enumerates a collection of jQuery elements, or Cards as we'll call them here, assigning to each a class that indicates whether it belongs on the left side, right side, or on a line by itself. Various options can be set to customize the way that this happens.

## Detailed Description ##

When *jCards* is called on a wrapper element, it enumerates all elements that have the ```.jcard``` class. To each, it assigns a class describing how this card should appear. This can be ```.card-left```, ```.card-right```, or ```.card-full```.

### How the classes are assigned ###

There are several rules that *jCards* uses to determine what class to give to a card.

1. In general, *jCards* alternates between setting cards as ```.card-left``` and ```.card-right```.
2. Any card that has the ```.tacked``` class is set as ```.card-full``` instead.
3. If the last card before a ```.tacked``` card or the last card on the page would normally be set as ```.card-left```, *jCards* sets it to ```.card-full``` to fill the entire row.

Much of the above behavior can be changed by passing *jCards* special options.

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



&copy; [Brian Jeppesen][]