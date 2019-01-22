const newsletter = newsletter || {};

newsletter.init = () => {
    document.querySelector('h1').addEventListener('click', () => {
        document.querySelector('h1').insertAdjacentHTML('afterend', '<p>YOOO</p>')
    })
}

newsletter.init()