/* CONSEGNA
 * Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
 * Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 *
 * Consigli del giorno:
 * Pensate prima in italiano.
 * Dividete in piccoli problemi la consegna.
 * Individuate gli elementi di cui avete bisogno per realizzare il programma.
 *
 * Bonus:
 * Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato. */

// ===== VARIABLE ==================================================== //
const MIN = 1;
const MAX = 99;
const N_NUM = 5;
const T_SHOW = 5;
const el_randomCells = document.querySelectorAll(".random_array .cell");
const el_inputCells = document.querySelectorAll(".input_array .cell");
const el_check = document.querySelector(".check");
const el_btnCoinfirm = document.querySelector(".btn_confirm");
el_randomCells[1].classList

// ===== MAIN ======================================================== //
resetAll();
const randomArray = generateRandomArray(N_NUM, MIN, MAX);
popolateCells(el_randomCells, randomArray)
hideCells(el_inputCells);
setTimeout(disappearCells, T_SHOW * 1000, el_randomCells);
setTimeout(appearCells, (T_SHOW + 1) * 1000, el_inputCells);


// ===== EVENT ======================================================= //
el_btnCoinfirm.addEventListener("click", function () {
    const arrayInput = readCells(el_inputCells);
    console.log(arrayInput);
    const check = checkArray(randomArray, arrayInput);
    appearCells(el_randomCells);
    if (check) {
        showCheck("Sono Uguali");
    } else {
        showCheck("Sono Diversi");
    }
})


// ===== FUNCTION ==================================================== //
function generateRandomArray(count, min, max) {
    let randomArray = [];
    for (let i = 0; i < count; i++) {
        const r = Math.floor((Math.random() * max) + min);
        randomArray.push(r);
    }
    return randomArray;
}

function popolateCells(el_cells, array) {
    for (let i = 0; i < array.length; i++) {
        el_cells[i].innerText = array[i];
    }
}

function showCells(el_cells) {
    for (let i = 0; i < el_randomCells.length; i++) {
        el_cells[i].classList.remove("hide");
    }
}

function hideCells(el_cells) {
    for (let i = 0; i < el_randomCells.length; i++) {
        el_cells[i].classList.add("hide");
    }
}

function convertToArray(string) {
    const arrayChar = string.split(" ");
    const arrayNumber = [];
    for (let i = 0; i < arrayChar.length; i++) {
        arrayNumber[i] = parseInt(arrayChar[i]);
    }
    return arrayNumber;
}

function checkArray(arrayRandom, arrayInput) {
    let isEqual = true;
    for (let i = 0; i < arrayRandom.length; i++) {
        console.log(`${arrayRandom[i]} - ${arrayInput[i]}`);
        if (arrayRandom[i] != arrayInput[i]) {
            isEqual = false;
        }
    }
    return isEqual;
}

function showCheck(string) {
    el_check.classList.remove("hide");
    el_check.innerText = string;
}

function resetAll() {
    el_check.innerText = "";
    el_check.classList.add("hide");
}

function readCells(el_cells) {
    let array = [];
    for (let i = 0; i < el_cells.length; i++) {
        n = parseInt(el_cells[i].value);
        array.push(n);
    }
    return array;
}

function disappearCells(el_cells) {
    for (let i = 0; i < el_randomCells.length; i++) {
        el_cells[i].classList.remove("appear");
        el_cells[i].classList.add("disappear");
    }
}

function appearCells(el_cells) {
    showCells(el_cells);
    for (let i = 0; i < el_randomCells.length; i++) {
        el_cells[i].classList.remove("disappear");
        el_cells[i].classList.add("appear");
    }
}



