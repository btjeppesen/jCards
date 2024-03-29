//     jCards-1.0.js
//     (c) 2012-2013 Brian Jeppesen
//     jCards-1.0.js may be freely distributed under the MIT license.
(function() {

  (function(jQuery) {
    jQuery.fn.jCards = function(o) {
      this.defaults = {
        'redrawThrottleTime': 300
      };
      if (!(this.opts != null)) {
        this.opts = jQuery.extend(true, {}, this.defaults, o);
      } else if (o != null) {
        this.opts = jQuery.extend(true, {}, this.opts, o);
      }
      this.storedCard = null;
      this.draw = function() {
        var items,
          _this = this;
        items = jQuery('.jcard', this);
        jQuery.each(items, function(key, item) {
          return _this.setupCard(item);
        });
        if (this.storedCard != null) {
          jQuery(this.storedCard).removeClass('card-left');
          jQuery(this.storedCard).addClass('card-full');
          return this.storedCard = null;
        }
      };
      this.redraw = function() {
        var redrawThrottle;
        clearTimeout(redrawThrottle);
        return redrawThrottle = setTimeout(this.draw, this.opts.redrawThrottleTime);
      };
      this.setupCard = function(item) {
        if (item != null) {
          if (jQuery(item).hasClass('tacked')) {
            if (this.storedCard != null) {
              jQuery(this.storedCard).removeClass('card-left');
              jQuery(this.storedCard).addClass('card-full');
              this.storedCard = null;
            }
            return jQuery(item).addClass('card-full');
          } else {
            if (!(this.storedCard != null)) {
              jQuery(item).removeClass('card-right');
              jQuery(item).addClass('card-left');
              return this.storedCard = item;
            } else {
              jQuery(item).removeClass('card-left');
              jQuery(item).addClass('card-right');
              return this.storedCard = null;
            }
          }
        }
      };
      return this;
    };
    jQuery.fn.drawCards = function(o) {
      this.jCards(o).draw();
      return this;
    };
    jQuery.fn.redrawCards = function(o) {
      this.jCards(o).redraw();
      return this;
    };
  })(jQuery);

}).call(this);
