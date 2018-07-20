const ValuePair = require('../valuePair');

class hashTable {
  constructor() {
    this.table = [];
  }

  /**
   * Generate code for the key received
   * 
   * @param {any} key 
   * @returns {number}
   */

  hashCode(key) {
    var hash = 0;

    for(let char of key) {
      hash += char.charCodeAt();
    }

    return hash % 37;
  }

  /**
   * Insert a item in hash table
   * 
   * @param {any} key
   * @param {any} value
   * @returns {void}
   */

  put(key, value) {
    var position = this.hashCode(key);

    if( this.table[position] == undefined ) {
      this.table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while( this.table[index] != undefined ) {
        index++
      }

      this.table[index] = new ValuePair(key, value);
    }
  }

  /**
   * Fetch a item in hash table
   * 
   * @param {any} key 
   * @returns {any}
   */
  
  get(key) {
    var position = this.hashCode(key);

    if( this.table[position] !== undefined ) {
      if ( this.table[position].key === key ) {
        return this.table[position].value;
      }

      var index = ++position;
      while( this.table[index] !== undefined && (this.table[index] && this.table[index].key !== key) ) {
        index++
      }

      if( this.table[index] && this.table[index].key === key ) {
        return this.table[index].value
      }
    }

    return undefined;
  }

  /**
   * delete a item in hash table
   * 
   * @param {any} key 
   */
  
  remove(key) {
    var position = this.hashCode(key);

    if( this.table[position] !== undefined ) {
      if ( this.table[position].key === key ) {
        this.table[position] = undefined
      }

      var index = ++position;
      while( this.table[index] !== undefined && (this.table[index] && this.table[index].key !== key) ) {
        index++
      }

      if( this.table[index] && this.table[index].key === key ) {
        this.table[index] = undefined
      }
    }

    return undefined;
  }
}

module.exports = hashTable