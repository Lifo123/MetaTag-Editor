
export function useSplit(splitRef, Type) {

    const Split = () => {
        splitRef.current.parentElement.addEventListener('mousemove', MouseMove);
        splitRef.current.parentElement.addEventListener('mouseup', Clear);
        splitRef.current.parentElement.addEventListener('mouseleave', Clear);
    };

    const MouseMove = (e) => {
        const parentElement = splitRef.current.parentElement.getBoundingClientRect();
        const relativeX = Math.max(Math.min(e.clientX - parentElement.left, parentElement.width - 1), 1);
        const relativeY = Math.max(Math.min(e.clientY - parentElement.top, parentElement.height - 1), 1);

        if (Type === 'horizontal') {
            splitRef.current.style.left = `${relativeX}px`;
            splitRef.current.previousSibling.style.width = `${relativeX}px`;
            splitRef.current.nextSibling.style.width = `${parentElement.width - relativeX}px`;
        } else {
            splitRef.current.style.top = `${relativeY}px`;
            splitRef.current.previousSibling.style.height = `${relativeY}px`;
            splitRef.current.nextSibling.style.height = `${parentElement.height - relativeY}px`;
        }

    }

    const Clear = () => {
        splitRef.current.parentElement.removeEventListener('mousemove', MouseMove);
        splitRef.current.parentElement.removeEventListener('mouseup', Clear);
        splitRef.current.parentElement.removeEventListener("mouseleave", Clear);
    }


    return { Split }
}