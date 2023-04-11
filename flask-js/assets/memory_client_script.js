function updateMemory(){
    fetch('/memory-client-json')
    .then(response => response.json())
    .then(data => {

       const percentMem = data.percent;
        document.getElementsByClassName('data').item('width').innerHTML = percentMem + "%";
        document.querySelector('.bar').style.transform = `translate(${percentMem}%, 0)`;
    })
}

function refresh(){
    setInterval(updateMemory, 5000);
}
refresh();