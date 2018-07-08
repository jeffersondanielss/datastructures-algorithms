function Set() {
  let items = {}

  this.has = function(record) {
    return record in items
  }

  this.add = function(item) {
    if( !this.has(item) ) {
      items[item] = item
      return true
    }

    return false
  }

  this.delete = function(item) {
    if( this.has(item) ) {
      delete items[item]
      return true
    }

    return false
  }

  this.size = function() {
    let count = 0;

    for( let key in items ) {
      if( items.hasOwnProperty(key) ) {
        count++
      }
    }

    return count
  }

  this.clear = function() {
    items = {}
  }

  this.values = function() {
    let values = []

    for( let i = 0, keys = Object.keys(items); i < keys.length; i++ ) {
      values.push( items[keys[i]] )
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

    for( let value of this.values() ) {
      newSet.add(value);
    }

    for( let value of setToUnion.values() ) {
      newSet.add(value);
    }

    return newSet;
  }

  /**
   * return just items that there in both structures
   * 
   * @param {Set} setToIntersect - Structure to be intersect with current Set
   * @returns {Set} - new Set with commom items
   */

   this.intersection = function(setToIntersect) {
     const newSet = new Set();

     for( let value of this.values() ) {
      if( setToIntersect.has(value) ) {
        newSet.add(value);
      }
     }

    return newSet;
   }

   /**
    * Get different items in Sets
    * 
    * @param {Set} differenceSet
    * @returns {Set}
    */

   this.difference = function(differenceSet) {
    const newSet = new Set();

     for( let value of this.values() ) {
      if( !differenceSet.has(value) ) {
        newSet.add(value);
      }
     }

    return newSet;
   }

   /**
    * Check if current set is a subset of other Set
    * 
    * @param {Set} otherSet
    * @returns {Boolean}
    */

   this.subset = function(otherSet) {
    if( this.size() > otherSet.size() ) {
      return false;
    }
    
    for( let value of this.values() ) {
      if( !otherSet.has(value) ) {
        return false;
      }
    }

    return true;
   }
}

module.exports = Set