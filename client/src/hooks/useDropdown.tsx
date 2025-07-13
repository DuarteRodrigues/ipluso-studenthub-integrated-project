/**
 * @file useDropdown.tsx
 * @description Custom hook for managing dropdown state and behavior.
 * 
 * @hook useDropdown
 * @template T - The type of the HTML element the dropdown is attached to.
 * @returns {[boolean, () => void, RefObject<T>, () => void]} An array containing:
 * - `open`: A boolean indicating if the dropdown is open.
 * - `toggle`: A function to toggle the dropdown open/close state.
 * - `ref`: A ref object to attach to the dropdown element.
 * - `close`: A function to close the dropdown.
 */

// Import packages
import { useRef, useState, useEffect, RefObject } from "react";

function useDropdown <T extends HTMLElement = HTMLElement>(): [
    boolean,
    () => void, 
    RefObject<T>,
    () => void
] {
    const [open, setOpen] = useState(false);
    const ref = useRef<T>(null);

    // Toggle open/close
    const toggle = () => setOpen(v => !v);

    // Close dropdown
    const close = () => setOpen(false);

    useEffect(() => {
        if (!open) return;
        function handleClickOutside (event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return [open, toggle, ref, close];
}

export default useDropdown;