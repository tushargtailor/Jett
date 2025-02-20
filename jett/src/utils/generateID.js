/**
 * @copyright 2024 tushar
 * @license Apache-2.0
 */

/**
 * @returns {string} A unique identifier string.
 */

export default function generateID() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
