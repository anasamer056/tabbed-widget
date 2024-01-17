export default class Tab{
    constructor(title, svgIcon){
        this.title = title,
        this.svgIcon = svgIcon;
    }
    createTabHead() {
        const icons = document.querySelector('.icons');
        const iconBtn = document.createElement('button');
        iconBtn.innerHTML = this.svgIcon + `<div>${this.title}</div>`; 
        iconBtn.classList.add('icon-btn')
        icons.appendChild(iconBtn);
    }
}