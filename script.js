const grid = 16
const container = document.querySelector('.container');

container.style.display = 'grid'
container.style.gridTemplateColumns = `repeat(${grid}, auto)`
container.style.gridTemplateRows = `repeat(${grid}, auto)`
/* const div = document.createElement('div') */
const arrayDiv = []
for (let i = 0; i < (grid*grid); i++) {
    arrayDiv[i] = document.createElement('div')
}
arrayDiv.forEach(div => {
    container.append(div);
});


const gridDivs = document.querySelectorAll('.container div')

gridDivs.forEach(div => div.addEventListener('mouseover', e=>{
    e.target.style.backgroundColor = 'blue';
}));