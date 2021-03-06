var bookshelf = require('../config');
var Coder = require('./coder');

var Language = bookshelf.Model.extend({
  tableName: 'languages',
  hasTimestamps: true,

  coders: function() {
    return this.belongsToMany(Coder, 'coder_id');
  }
});

module.exports = Language;