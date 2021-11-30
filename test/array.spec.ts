import "../src/shims/array";

describe("array", () => {
  it("Array.prototype.insert", () => {
    const foo = [],
      bar = [2, 3, 5];
    // Empty input processing
    expect(bar.insert(null, 1)).toEqual([1, 2, 3, 5]);
    expect(bar.insert(undefined, 1)).toEqual([1, 2, 3, 5]);
    // Array input
    expect(foo.insert(0, [1, 2, 3])).toEqual([1, 2, 3]);
    // Look backward
    expect(bar.insert(-1, 4)).toEqual([2, 3, 4, 5]);
    expect(foo.insert(0, 0)).toEqual([0]);
    // Simulate `Array.prototype.unshift`
    expect(foo.insert(-Infinity, 0)).toEqual([0]);
    // Simulate `Array.prototype.push`
    expect(foo.insert(Infinity, 0)).toEqual([0]);
  });
  it("Array.prototype.remove", () => {
    const foo = [1, 2, 3];
    expect(foo.remove(0)).toEqual([2, 3]);
    expect(foo.remove(0, 2)).toEqual([3]);
    expect(foo.remove(0, Infinity)).toEqual([]);
    // Simulate `Array.prototype.shift`
    expect(foo.remove(-Infinity)).toEqual([2, 3]);
    // Simulate `Array.prototype.pop`
    expect(foo.remove(Infinity)).toEqual([1, 2]);
  });

  it("Array.prototype.unique", () => {
    expect([].unique()).toEqual([]);
    expect([1].unique()).toEqual([1]);
    expect([1, 2].unique()).toEqual([1, 2]);
    expect([1, 1, 1].unique()).toEqual([1]);
    expect([1, 2, 1].unique()).toEqual([1, 2]);
    expect([1, 2, 2, 1].unique()).toEqual([1, 2]);
    expect([1, 2, 2, 3].unique()).toEqual([1, 2, 3]);
    expect([, , , ,].unique()).toEqual([]);
    expect([].unique(false)).toEqual([]);
    expect([1].unique(false)).toEqual([1]);
    expect([1, 2].unique(false)).toEqual([1, 2]);
    expect([1, 1, 1].unique(false)).toEqual([1]);
    expect([1, 2, 1].unique(false)).toEqual([2, 1]);
    expect([1, 2, 2, 1].unique(false)).toEqual([2, 1]);
    expect([1, 2, 2, 3].unique(false)).toEqual([1, 2, 3]);
  });
});
