/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState, useCallback } from "react";

const useToggle = () => {
    const [isOpen, setToggle] = useState(false);

    const toggle = useCallback(() => {
        setToggle((prev) => !prev);
    }, []);

    return [isOpen, toggle];
};

export { useToggle };