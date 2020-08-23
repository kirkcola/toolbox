/**
 * Encode standard 36-char UUID to 22-char
 *
 * e.g:
 *
 * ```properties
 * original = 5817e070-e522-11ea-9077-7d93f1cbd5dc
 * encoded  = WBfgcOUiEeqQd32T8cvV3A
 * ```
 */
export function encode(uuid: string) {
  return btoa(
    String.fromCharCode(
      ...new Uint8Array(
        (uuid.replace(/-/g, "").match(/[\da-f]{2}/gi) || []).map(h =>
          parseInt(h, 16)
        )
      )
    )
  )
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

/**
 * Decode compressed UUID to the original
 */
export function decode(b64: string) {
  return atob(b64.replace(/-/g, "+").replace(/_/g, "/"))
    .split("")
    .map(s =>
      s
        .charCodeAt(0)
        .toString(16)
        .padStart(2, "0")
    )
    .insert(4, "-")
    .insert(7, "-")
    .insert(10, "-")
    .insert(13, "-")
    .join("");
}
