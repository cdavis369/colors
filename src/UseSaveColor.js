import { useEffect } from "react";

// function UseSaveColor(selectedColor) {
//     useEffect(() => {
//         const saveColor = () => {
//             const [name, hex] = selectedColor.split(":");
//             const locallyStoredColors = localStorage.getItem('storedColors');
//             const storedColors = locallyStoredColors ? JSON.parse(locallyStoredColors) : {};
//             if (!storedColors[name]) {
//                 storedColors[name] = hex;
//                 localStorage.setItem('storedColors', JSON.stringify(storedColors));
//             }
//         };

//         if (selectedColor) {
//             saveColor();
//         }
//         return saveColor;
//     }, [selectedColor]);
// }

function useSaveColor(selectedColor) {
    useEffect(() => {
        console.log(selectedColor)
        if (selectedColor) {
            const [name, hex] = selectedColor.split(":");
            const locallyStoredColors = localStorage.getItem('storedColors');
            const storedColors = locallyStoredColors ? JSON.parse(locallyStoredColors) : {};
            if (!storedColors[name]) {
                const newColors = { [name]: hex,
                    ...storedColors
                }
                localStorage.setItem('storedColors', JSON.stringify(newColors));
            }
        }
    }, [selectedColor]);
}

export default useSaveColor;