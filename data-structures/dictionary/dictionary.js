function Dictionary() {
  let items = {};
  
  /**
   * Check if key exists in dictionary
   * 
   * @param {any} key - item to be searched
   * @returns {Boolean}
   */

  this.has = function(key) {
    return key in items;
  }

  /**
   * Add new item in dictionary
   * 
   * @param {any} key - key of item to be add
   * @param {any} value - value of item to be add
   * @returns {void}
   */

  this.set = function(key, value) {
    items[key] = value;
  }

  /**
   * Remove a record in dictionary
   * 
   * @param {any} key - key of element to be deleted
   * @returns {Boolean}
   */

  this.delete = function(key) {
    if(this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  }

  /**
   * fetch a record in dictionary
   * 
   * @param {any} key 
   * @returns {any}
   */
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined; 
  }

  /**
   * Count number of items in dictionary
   * 
   * @returns {number}
   */

  this.size = function() {
    let count = 0;

    for( let key in items ) {
      if( items.hasOwnProperty(key) ) {
        count++
      }
    }

    return count
  }

  /**
   * Remove all itens
   * 
   * @returns {void}
   */
  
  this.clear = function() {
    items = {}
  }

  /**
   * Get all keys of items in dictionary
   * 
   * @returns {array}
   */

  this.keys = function() {
    return Object.keys(items);
  }

  /**
   * Fetch all itens
   */

  this.getItems = function() {
    return items;
  }

  /**
   * Get all values in dictionary
   * 
   * @returns {array}
   */

  this.values = function() {
    var values = [];

    for( var item in items ) {
      if( this.has(item) ) {
        values.push(items[item]);
      }
    }

    return values;
  }
}

module.exports = Dictionary