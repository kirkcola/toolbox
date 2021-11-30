import "../src/shims/array";

import { encode, decode } from "../src/utils/uuid";

const UUID = `5817e070-e522-11ea-9077-7d93f1cbd5dc`;
const UUID_ENCODED = `WBfgcOUiEeqQd32T8cvV3A`;

describe("UUID", () => {
  it("UUID compress", () => {
    expect(() => encode("")).toThrow(TypeError);
    expect(() => encode(undefined)).toThrow(TypeError);
    expect(() => encode(null)).toThrow(TypeError);
    expect(() => encode(`${UUID}-aaaa`)).toThrow(TypeError);
    expect(() => decode("")).toThrow(TypeError);
    expect(() => decode(undefined)).toThrow(TypeError);
    expect(() => decode(null)).toThrow(TypeError);
    expect(() => decode("fooBarhahaha")).toThrow(TypeError);

    expect(encode(UUID)).toBe(UUID_ENCODED);
    expect(decode(encode(UUID))).toBe(UUID);
  });
});
