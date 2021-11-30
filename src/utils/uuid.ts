import "../shims/array";

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
  if (!/^[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}$/gi.test(uuid)) {
    throw new TypeError('Please provide a valid UUID!');
  }
  return btoa(
    String.fromCharCode.apply(
      null,
      // Remove dashes
      uuid.replace(/-/g, "")
        // Seperate hex digits in pairs
        .match(/[\da-f]{2}/gi)
        // Parse stringified hex into decimal
        .map((h) => parseInt(h, 16))
    ))
    // Make the generated base64 string URL-safe
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

/**
 * Decode compressed UUID
 */
export function decode(b64: string) {
  if (!/^[a-zA-Z0-9\_\-]{22}$/gi.test(b64)) {
    throw new TypeError('Please provide a valid encoded UUID!');
  }
  return Array.from(atob(b64.replace(/-/g, "+").replace(/_/g, "/")))
    .map((s) =>
      s.charCodeAt(0)
        .toString(16)
        .padStart(2, "0")
    )
    .insert(4, "-")
    .insert(7, "-")
    .insert(10, "-")
    .insert(13, "-")
    .join("");
}
