/**
 * @file useDropdown.tsx
 * @description 
 * 
 * @hook
 * @returns 
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