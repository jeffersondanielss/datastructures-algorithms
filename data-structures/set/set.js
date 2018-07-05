function Set() {
  let itens = {}

  this.has = function(record) {
    return record in itens
  }

  this.add = function(item) {
    if( !this.has(item) ) {
      itens[item] = item
      return true
    }

    return false
  }

  this.delete = function(item) {
    if( this.has(item) ) {
      delete itens[item]
      return true
    }

    return false
  }

  this.size = function() {
    let count = 0;

    for( let key in itens ) {
      if( itens.hasOwnProperty(key) ) {
        count++
      }
    }

    return count
  }

  this.clear = function() {
    itens = {}
  }

  this.values = function() {
    let values = []

    for( let i = 0, keys = Object.keys(itens); i < keys.length; i++ ) {
      values.push( itens[keys[i]] )
    }

    return values;
  }

  /**
   * Union two sets
   * 
   * @param {Set} setToUnion - Set data structure to union
   * @returns {Set} - new Set data structure with all data
   */

  this.union = function(setToUnion) {
    const newSet = new Set();
    let values = this.values();

    for( let i = 0; i < values.length; i++ ) {
      newSet.add(values[i]);
    }

    values = setToUnion.values();

    for( let i = 0; i < values.length; i++ ) {
      newSet.add(values[i]);
    }

    return newSet;
  }
}

module.exports = Set