


function time() {
    let hour = document.querySelector('#hours');
    let date = document.querySelector('#date');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let year = document.querySelector('#year');
    let hr = new Date().getHours()


    if (hr > 12) {
        hr = hr - 12;
    }
    hr = (hr < 10) ? "0" + hr : hr;
    hours.innerHTML = hr;


    let min = new Date().getMinutes();
    min = (min < 10) ? "0" + min : min;
    minutes.innerHTML = min

    let sec = new Date().getSeconds()

    sec = (sec < 10) ? "0" + sec : sec;
    seconds.innerHTML = sec;


    let dt = new Date().getDate()
    date.innerHTML = dt
    let yr = new Date().getFullYear()
    year.innerHTML = yr
}
setInterval(time, 1000)








const tbodyel = document.querySelector('tbody')
const tableEl = document.querySelector('table')


Array.from(document.getElementsByClassName('button')).forEach((element) => {
    element.addEventListener('click', (e) => {

        console.log(e.target)

        const name = document.querySelector('.name').innerHTML;
        const price = document.querySelector('.price').innerHTML;
        tbodyel.innerHTML += `
       <tr>
       <td>${name}</td>
       <td style="display: flex;justify-content:space-between;" >
       <button id="plus" style="cursor: pointer; width: 15px;border-radius: 100px;font-weight: bolder;text-align: center;background:black;color:white;font-size:1.3rem;">+</button>
       <span id="num"> 01 </span> 
       <button id="minus" style="cursor: pointer; width: 15px;border-radius: 100px;font-weight: bolder;text-align: center;background:black;color:white;font-size:1.2rem;">-</button></td>
       <td>${price}</td>
       <td><button class="deletebtn">Delete</button></td>
       </tr>
       
       `

    });


});




function plus(e) {
    let a = 1;
    if (a == 1) {
        a++;
        a = (a < 10) ? "0" + a : a;

        num.innerHTML = a;
    }

}
tableEl.addEventListener('click', plus);

function minus(e) {
 
    let a = 1;
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerHTML = a;
    }


}
tableEl.addEventListener('click', minus)

function ondeleterow(e) {
    if (!e.target.classList.contains('deletebtn')) {
        return;
    }
    const btn = e.target;
    
    btn.closest('tr').remove();
}

tableEl.addEventListener('click', ondeleterow);






// const plus = document.querySelector('.plus');
// minuss = document.querySelector('.minus');
// num = document.querySelector('.num')
// let a = 1;
// plus.addEventListener('click', () => {
//     a++;
//     a = (a < 10) ? "0" + a : a;

//     num.innerText = a;

// })
// minuss.addEventListener('click', () => {
//     if (a > 1) {
//         a--;
//         a = (a < 10) ? "0" + a : a;
//         num.innerText = a;
//     }

// })














