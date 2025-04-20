document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamicText');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const toggleStyleBtn = document.getElementById('toggleStyleBtn');
    const addElementBtn = document.getElementById('addElementBtn');
    const removeElementBtn = document.getElementById('removeElementBtn');
    const elementContainer = document.getElementById('elementContainer');
    let elementCount = 0;

    // Function to change text content
    changeTextBtn.addEventListener('click', () => {
        dynamicText.textContent = `Text changed at ${new Date().toLocaleTimeString()}`;
    });

    // Function to toggle CSS style
    toggleStyleBtn.addEventListener('click', () => {
        dynamicText.classList.toggle('highlight');
    });

    // Function to add new element
    addElementBtn.addEventListener('click', () => {
        const newElement = document.createElement('p');
        newElement.textContent = `New element ${++elementCount}`;
        newElement.classList.add('dynamic-element');
        elementContainer.appendChild(newElement);
    });

    // Function to remove last element
    removeElementBtn.addEventListener('click', () => {
        const lastElement = elementContainer.querySelector('p.dynamic-element:last-child');
        if (lastElement) {
            lastElement.remove();
            elementCount--;
        }
    });
});