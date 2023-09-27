let textTask = document.querySelector('#textTask');
let btnResult = document.querySelector('#btnResult');
let getDivTasks = document.querySelector('#divTasks');

let counterTaks = 0;

btnResult.addEventListener('click', () => {

    if(textTask.value.length === 0){

        alert('Please, add any work !');
    }else{


    if(counterTaks >= 5){

        alert('Please, delete any task');
        btnResult.disabled = true;
    }else{
        counterTaks++;

    let createDivTask = document.createElement('div');
    createDivTask.id = 'createDivTask';

    let createP = document.createElement('p');
    createP.innerHTML = textTask.value;
    createP.id = 'pTask';

    let createBtnDeleteTask = document.createElement('button');
    createBtnDeleteTask.innerHTML = 'X';
    createBtnDeleteTask.id = 'btnDeleteTask';

    createBtnDeleteTask.addEventListener('click', () => {

        createDivTask.remove();
        counterTaks--;
        console.log(counterTaks);

        if(counterTaks <= 6){
            btnResult.disabled = false;
        }
    })


    createDivTask.appendChild(createP);
    createDivTask.appendChild(createBtnDeleteTask);

    getDivTasks.appendChild(createDivTask);

    textTask.value = '';

        }

    }

    console.log(counterTaks);
})
