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
    var hash = 5381;

    for(let char of key) {
      hash += 33 * char.charCodeAt();
    }

    return hash % 1013;
  }

  /**
   * Insert a item in hash table
   * 
   * @param {any} key
   * @param {any} value
   * @returns {void}
   */

  put(key, value) {
    let position = this.hashCode(key);

    if( this.table[position] === undefined ) {
      this.table[position] = new ValuePair(key, value);
    } else {
      let index = ++position;
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
    let position = this.hashCode(key);

    if ( this.table[position] !== undefined ) {
      if( this.table[position].key === key ) {
        return this.table[position].value;
      } else {
        let index = ++position;
        while( this.table[index] !== undefined && ( this.table[index] && this.table[index].key !== key ) ) {
          index++;
        }
        if( this.table[index] && this.table[index].key === key ) {
          return this.table[index].value;
        }
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
    let position = this.hashCode(key);

    if ( this.table[position] !== undefined ) {
      if( this.table[position].key === key ) {
        return this.table[position] = undefined;
      } else {
        let index = ++position;
        while( this.table[index] !== undefined && ( this.table[index] && this.table[index].key !== key ) ) {
          index++;
        }
        if( this.table[index] && this.table[index].key === key ) {
          return this.table[index] = undefined;
        }
      }
    }

    return undefined;
  }
}

module.exports = hashTable