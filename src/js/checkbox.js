const bodyStyle = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');

function onCheckboxChange (evt) {
    if (evt.target.checked) {
        bodyRef.classList.add(bodyStyle.DARK);
        bodyRef.classList.remove(bodyStyle.LIGHT);

        localStorage.setItem('bodyStyle', bodyStyle.DARK);
         
    } else if (!evt.target.checked) {
        bodyRef.classList.add(bodyStyle.LIGHT);
        bodyRef.classList.remove(bodyStyle.DARK);
        
        localStorage.setItem('bodyStyle', bodyStyle.LIGHT);
    };
}

export {onCheckboxChange};