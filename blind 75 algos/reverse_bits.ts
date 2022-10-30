/**
 * Question 190
 * https://leetcode.com/problems/reverse-bits/
 * Reverse Bits
 */

function reverseBits(n: number): number {
  const padded_uint32: string = n.toString(2).padStart(32, "0");
  const reversed_uint32: string = [...padded_uint32].reverse().join("");
  return Number.parseInt(reversed_uint32, 2);
}
