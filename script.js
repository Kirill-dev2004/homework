

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 700;


const palette = document.getElementById('palette')
const btn = document.getElementById('clear');
const buttons = document.getElementById('buttons')


const settings = {
    clear: false,
    color: 'black',
    size: 10,
}

const getSettings = () => {
    return settings
}

function cursorMove(e){ 
    let settings = getSettings()
    ctx.beginPath()
    let x = e.offsetX;
    let y = e.offsetY;
    ctx.fillRect(x, y, settings.size, settings.size);
    ctx.fillStyle = settings.color;
    ctx.fill()
    ctx.closePath()
}

function cursorUp(e){
    ctx.beginPath()
    let x = e.offsetX;
    let y = e.offsetY;
    ctx.clearRect(x, y, 40, 40);
    ctx.closePath()
}

btn.addEventListener('click', () => {
    canvas.addEventListener('mousedown', () => {
        canvas.addEventListener('mousemove', cursorUp)
    })
    
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', cursorUp)
    })
})



buttons.addEventListener('click', (event) => {

    let currentSize = event.target.id

    if(currentSize !== 'buttons'){

        settings.clear = false

        Array.from(event.target.parentElement.children).forEach((elem) => {
            elem.classList.remove('currentBorder')
        })

        event.target.classList.add('currentBorder')

        switch(currentSize){
            case 'small':
                settings.size = 5;
                break;
            case 'medium':
                settings.size = 10;
                break;
            case 'big':
                settings.size = 15;
                break;
        }
    }
})


palette.addEventListener('click', (event) => {

    canvas.addEventListener('mousedown', () => {
        canvas.addEventListener('mousemove', cursorMove)
    })
    
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', cursorMove)
    })

    let currentColor = event.target.id

    if(currentColor !== 'palette'){

        settings.clear = false

        Array.from(event.target.parentElement.children).forEach((elem) => {
            elem.classList.remove('currentBorder')
        })

        event.target.classList.add('currentBorder')

        switch(currentColor){
            case 'palette-red':
                settings.color = 'red'
                break;
            case 'palette-green':
                settings.color = 'green'
                break;
            case 'palette-blue':
                settings.color = 'blue'
                break;
            case 'palette-yellow':
                settings.color = 'yellow'
                break;
            case 'palette-black':
                settings.color = 'black'
                break;
           }
    }

})





