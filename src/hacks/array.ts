declare global {
  interface Array<T> {
    /**
     * Insert an element into an arrray, returns a new arry
     *
     * **This is an unofficial implementation, use it at your own risk**
     *
     * e.g:
     *
     * ```ts
     * [1, 2, 3].insert(3, 4) === [1,2,3,4]
     * ```
     */
    insert(index: number, element: T): T[];
    /**
     * Remove elements from an array, returns a new array
     *
     * **This is an unofficial implementation, use it at your own risk**
     *
     * e.g:
     *
     * ```ts
     * [1, 2, 3].remove(0) === [2, 3]
     * [1, 2, 3, 4, 5].remove(2, 2) === [1, 2, 5]
     * ```
     */
    remove(index: number, length?: number): T[];
  }
}

export default (function () {
  Array.prototype.insert = function <T>(index: number, element: T) {
    return [...this.slice(0, Number(index)), element, ...this.slice(Number(index))];
  };

  Array.prototype.remove = function (index: number, length?: number) {
    const clone = this.slice(0);
    clone.splice(Number(index), length || 1);
    return clone;
  };
})();
