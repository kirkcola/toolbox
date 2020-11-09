import '../src/hacks/array';

import { encode, decode } from "../src/hacks/uuid";

describe("UUID", () => {
  it("UUID compress", () => {
    expect(encode("5817e070-e522-11ea-9077-7d93f1cbd5dc")).toBe(
      "WBfgcOUiEeqQd32T8cvV3A"
    );
    expect(decode(encode("5817e070-e522-11ea-9077-7d93f1cbd5dc"))).toBe(
      "5817e070-e522-11ea-9077-7d93f1cbd5dc"
    );
  });
});
