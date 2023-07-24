import './toast.css';
function Toast(content, type, container){
    this.content = content;
    this.type = type;
    const toast = document.createElement('div');
    const toastContent = document.createElement('span');
    const toastClose = document.createElement('button');
    toastClose.textContent = 'x';
    toast.appendChild(toastContent);
    toast.appendChild(toastClose);
    toast.classList.add('toast');
    toast.classList.add(type);
    toastContent.textContent = content;
    this.node = toast;
    this.show = () => {
        container.appendChild(toast);
        toast.classList.add('visible');
    }
    this.remove = () => {
        toast.classList.remove('visible');
    }
    toastClose.addEventListener('click', this.remove);
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const deplyToast = (content,type) => {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer){
        toastContainer = document.createElement('div');
        toastContainer.classList.add('toast-container');
        document.body.appendChild(toastContainer);
    }
    const toast = new Toast(content,type,toastContainer);
    toast.show();
    sleep(3000).then(() => {
        toast.remove();
        sleep(250).then(() => {
            toast.node.remove();
        });
        sleep(3000).then(() => {
            if (toastContainer.childElementCount == 0){
                toastContainer.remove();
            }
        });
    });
}

export {deplyToast};