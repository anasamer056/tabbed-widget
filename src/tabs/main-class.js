export default class Tab{
    constructor(title, svgIcon, contentImg, contentTitle, content){
        this.title = title;
        this.svgIcon = svgIcon;
        this.contentImg = contentImg;
        this.contentTitle = contentTitle;
        this.content = content;
    }
    createTabHead() {
        const icons = document.querySelector('.icons');
        const iconBtn = document.createElement('button');
        iconBtn.innerHTML = this.svgIcon + `<div>${this.title}</div>`; 
        iconBtn.classList.add('icon-btn')
        iconBtn.addEventListener('click', this.renderContent.bind(this))
        icons.appendChild(iconBtn);
    }
    renderContent (){
        const contentWrapper = document.querySelector(".content");
        contentWrapper.innerHTML = `
        <div class="img-wrapper"><img src="${this.contentImg}" alt=""></div>
        <div class="text">
            <h2>${this.contentTitle}</h2>
            <p>${this.content}</p>
            <button>Details</button>
        </div>
        `
    }
}