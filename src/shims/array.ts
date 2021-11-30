declare global {
  interface Array<T> {
    /**
     * Insert an element into an arrray, returns a new arry
     *
     * @param index index to insert the element(s)
     * @param insertee element(s) to be inserted, element or array accepted.
     *
     * e.g:
     *
     * ```ts
     * [1, 2, 3].insert(3, 4) // [1, 2, 3, 4]
     * [1, 2, 3].insert(3, [4, 5, 6]) // [1, 2, 3, 4, 5, 6]
     * ```
     */
    insert(index: number, insertee: T | T[]): Array<T>;
    /**
     * Remove elements from an array, returns a new array
     *
     * @param index index of the element to be removed
     * @param length If provided, elements at index to index + length will all be removed
     *
     * e.g:
     *
     * ```ts
     * [1, 2, 3].remove(0) // [2, 3]
     * [1, 2, 3, 4, 5].remove(2, 2) // [1, 2, 5]
     * ```
     */
    remove(index: number, length?: number): Array<T>;

    /**
     * Remove all the redundant values in the array, returns a new array
     *
     * @param keepFirst If true, the first redundant value will be kept, else the last, default true.
     *
     * e.g:
     *
     * ```ts
     * [1, 2, 3, 1].unique() // [1, 2, 3]
     * [1, 0, 0, 1].unique(false) // [0, 1]
     * ```
     */
    unique(keepFirst?: boolean): Array<T>;
  }
}

const ArrayExt = () => {
  Array.prototype.insert = function <T>(
    this: T[],
    index: number,
    insertee: T | T[]
  ) {
    return [
      ...this.slice(0, Number(index)),
      ...[].concat(insertee),
      ...this.slice(Number(index)),
    ];
  };

  Array.prototype.remove = function <T>(
    this: T[],
    index: number,
    length?: number
  ) {
    const $index = Number(index);
    const $arrMaxPos = this.length - 1;
    const clone = this.slice();
    clone.splice($index <= $arrMaxPos ? $index : $arrMaxPos, length || 1);
    return clone;
  };

  Array.prototype.unique = function <T>(this: T[], keepFirst = true) {
    return this.filter(
      keepFirst
        ? (num, idx, arr) => arr.lastIndexOf(num, -(arr.length - idx + 1)) < 0
        : (num, idx, arr) => arr.indexOf(num, idx + 1) < 0
    );
  };
};

export default ArrayExt();
