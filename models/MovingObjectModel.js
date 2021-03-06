var Backbone = require('backbone')

module.exports = Backbone.Model.extend({

  offScreen: function()
  {
    if (this.get('pos_x') > window.innerWidth || this.get('pos_x') < 0) {
      return true;
    } else if (this.get('pos_y') > window.innerHeight || this.get('pos_y') < 0) {
      return true;
    }
    return false;
  },

  fixOffScreen: function()
  {
    if (this.get('pos_x') < 0) {
      this.set('pos_x', this.get('pos_x') + window.innerWidth);
    } else if (this.get('pos_x') > window.innerWidth) {
      this.set('pos_x', this.get('pos_x') - window.innerWidth);
    }
    if (this.get('pos_y') < 0) {
      this.set('pos_y', this.get('pos_y') + window.innerHeight);
    } else if (this.get('pos_y') > window.innerHeight) {
      this.set('pos_y', this.get('pos_y') - window.innerHeight);
    }
  }
});
