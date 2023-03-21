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
const MAX = 100;
const N_NUM = 5;
const T_SHOW = 2;
const el_cells = document.querySelectorAll(".cell");
el_cells[1].classList

// ===== MAIN ======================================================== //
generateRandomArray(el_cells, N_NUM, MIN, MAX);
showRandomArray(el_cells);
/* setTimeout(hideRandomArray, T_SHOW * 1000, el_cells);
setTimeout(showRandomArray, T_SHOW * 1000 * 5, el_cells); */

setTimeout(function () {
    const arrayInput = convertToArray(prompt("Dammi i numeri"));
    console.log(arrayInput);
    const check = checkArray(el_cells, arrayInput);
    if (check) {
        console.log("SONO UGUALI");
    } else {
        console.log("SONO DIVERSI");
    }
}, 1 * 1000);


// ===== EVENT ======================================================= //


// ===== FUNCTION ==================================================== //
function generateRandomArray(el_cells, count, min, max) {
    for (let i = 0; i < count; i++) {
        const r = Math.floor((Math.random() * max) + min);
        el_cells[i].innerText = r;
    }
}

function showRandomArray(el_cells) {
    for (let i = 0; i < el_cells.length; i++) {
        el_cells[i].classList.remove("hide");
    }
}
function hideRandomArray(el_cells) {
    for (let i = 0; i < el_cells.length; i++) {
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

function checkArray(el_cells, arrayInput) {
    let isEqual = true;
    for (let i = 0; i < el_cells.length; i++) {
        console.log(`${el_cells[i].innerText} - ${arrayInput[i]}`);
        if (el_cells[i].innerText != arrayInput[i]) {
            isEqual = false;
        }
    }
    return isEqual;
}


