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
    this.table[this.hashCode(key)] = value;
  }

  /**
   * Fetch a item in hash table
   * 
   * @param {any} key 
   * @returns {any}
   */
  
  get(key) {
    return this.table[this.hashCode(key)];
  }

  /**
   * delete a item in hash table
   * 
   * @param {any} key 
   */
  
  remove(key) {
    this.table[this.hashCode(key)] = undefined;
  }
}

module.exports = hashTable