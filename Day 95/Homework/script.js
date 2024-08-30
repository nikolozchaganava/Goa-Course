const addBox = document.querySelector('.form-container label');
const bgValue = document.getElementById('color');
const mainContainer = document.querySelector('.box-container');

let oldX = 0, oldY = 0, newX = 0, newY = 0;

addBox.addEventListener('click', (e) => handleAdd(e));

const handleAdd = (e) => {
    e.preventDefault();
    const newElement = document.createElement('div');

    newElement.innerHTML = `
    <form class="form-box-container">
        <div class="exit-box">
            <span>&#10008;</span>
            <input type="color" id="textColor" value="#000000" title="Choose Text Color">
        </div>
        
        <textarea name="box" id="box" placeholder="Enter text...."></textarea>
    </form>`;
    
    const mainBoxContainer = newElement.querySelector('.form-box-container');
    const textarea = newElement.querySelector('textarea');
    const grabBox = newElement.querySelector('.exit-box');
    const closeBox = newElement.querySelector('.exit-box span');
    const textColorPicker = newElement.querySelector('#textColor');

    mainContainer.appendChild(newElement);

    textarea.style.backgroundColor = bgValue.value;

    textColorPicker.addEventListener('input', () => {
        updatePlaceholderColor(textarea, textColorPicker.value);
        updateTextColor(textarea, textColorPicker.value);
    });

    closeBox.onclick = () => handleRemoveElement();
    grabBox.onmousedown = (e) => handleDown(e);

    const handleRemoveElement = () => {
        mainBoxContainer.parentElement.remove();
    }

    const handleDown = (e) => {
        e.preventDefault();

        oldX = e.clientX;
        oldY = e.clientY;

        // Set cursor to grabbing when the drag starts
        mainBoxContainer.style.cursor = 'grabbing';

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleUp);
    }

    const handleMove = (e) => {
        newX = oldX - e.clientX;
        newY = oldY - e.clientY;

        oldX = e.clientX;
        oldY = e.clientY;

        mainBoxContainer.style.top = (mainBoxContainer.offsetTop - newY) + 'px';
        mainBoxContainer.style.left = (mainBoxContainer.offsetLeft - newX) + 'px';
    };

    const handleUp = () => {
        // Reset cursor to grab when the drag ends
        mainBoxContainer.style.cursor = 'grab';

        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
    }
};

const updatePlaceholderColor = (textarea, color) => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        .box-container textarea::placeholder {
            color: ${color};
        }
    `;
    document.head.appendChild(styleElement);
};

const updateTextColor = (textarea, color) => {
    textarea.style.color = color;
}
    