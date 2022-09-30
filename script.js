let grid = 16
const container = document.querySelector('.container');
const button = document.querySelector('#button')
let gridDivs;

button.addEventListener('click', e=>{
    do {
        grid = parseInt(prompt('Please enter the number of squares per side between 16 and 100'))
        
    } while (grid < 16 || grid > 100 || /^\d+$/.test(grid) == false);
    
    setCanvas()
})

const setCanvas = () =>{
    container.style.display = 'grid'
    container.style.gridTemplateColumns = `repeat(${grid}, auto)`
    container.style.gridTemplateRows = `repeat(${grid}, auto)`
    container.innerHTML = ''
    /* const div = document.createElement('div') */
    fillCanvas()
}
const fillCanvas = () =>{
    const arrayDiv = []
    for (let i = 0; i < (grid*grid); i++) {
        arrayDiv[i] = document.createElement('div')
    }
    arrayDiv.forEach(div => {
        container.append(div);
    });
    
    gridDivs = document.querySelectorAll('.container div')
    gridDivs.forEach(div => div.addEventListener('mouseover', e=>{
        if(e.target.style.backgroundColor == ''){
            let color1 = randomColor();
            let color2 = randomColor();
            let color3 = randomColor();
    
            e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
            console.log(e.target.style.backgroundColor);

        }else{
            let colors = e.target.style.backgroundColor.substring(4, (e.target.style.backgroundColor.length - 1));
            let colorsArray = colors.split(', ')
            let color1 = colorsArray[0];
            let color2 = colorsArray[1];
            let color3 = colorsArray[2];
            e.target.style.backgroundColor = `rgb(${color1 - 25.5},${color2 - 25.5},${color3 - 25.5})`;
            console.log(colors, colorsArray);
        }
    }));
}

const randomColor = ()=>{
    number = Math.floor(Math.random()*256);
    return number
}
setCanvas()
