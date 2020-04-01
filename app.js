function changeColor() {
    const headers = document.querySelectorAll('.libelle-anchor');
    for(let i = 0; i < headers.length; i++) {
        headers[i].style.color = "red";
    };
}

function deleteBanner() {
    const image = document.querySelector('[alt="2 cwiczenia z ab wheel"]');
    if(image) {
        const banner = document.querySelector('[alt="2 cwiczenia z ab wheel"]').parentElement.parentElement;
        banner.innerHTML = "";

        createTimer(banner);
    }
}

function createTimer(parent) {
    // 20.11.2020
    const endDate = new Date("Nov 20, 2020").getTime();

    const timer = setInterval(function() {
        let now = new Date().getTime(); 
        let diff = endDate - now; 

        parent.style.textAlign = "center";

        if (diff >= 0) {

            parent.innerHTML = "";

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((diff % (1000 * 60)) / 1000);

            const innerHTML = `<div id="timer">${days} : ${("0" + hours).slice(-2)} : ${("0" + mins).slice(-2)} : ${("0" + secs).slice(-2)}</div>`;

            parent.innerHTML = innerHTML;
        } else {
            timer.clearInterval();
        }
    }, 1000);

}

function completeTasks() {
    changeColor();
    deleteBanner();
}

completeTasks();