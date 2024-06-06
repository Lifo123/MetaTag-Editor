let resizeHandler;
let clearHandler

export const Resizer = (event) => {
    let type = event.target.classList.contains('vertical') ? 'vertical' : 'horizontal';
    resizeHandler = (e) => Resize(e, event.target, type);
    clearHandler = () => Clear(event.target);
    document.addEventListener("mousemove", resizeHandler);
    event.target.parentElement.addEventListener("mouseup", clearHandler);
    event.target.parentElement.addEventListener("mouseleave", clearHandler);
}

const Resize = (e, element, type) => {
    const container = element.parentElement.getBoundingClientRect();
    const relativeX = Math.max(Math.min(e.clientX - container.left, container.width - 3), 2)
    const relativeY = e.clientY - container.top;

    if (type === 'horizontal') {
        element.previousSibling.style.width = `${relativeX}px`;
        element.nextSibling.style.width = `${container.width - relativeX}px`
        element.style.left = `${relativeX}px`;
    } else {
        element.previousSibling.style.height = `${relativeY}px`;
        element.nextSibling.style.height = `${container.height - relativeY}px`
        element.style.top = `${relativeY}px`;
    }
}

const Clear = (element) => {
    document.removeEventListener("mousemove", resizeHandler);
    element.parentElement.removeEventListener("mouseup", clearHandler);
    element.parentElement.removeEventListener("mouseleave", clearHandler);
}