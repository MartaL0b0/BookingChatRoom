function tableBooking(td) {
    if (td.innerHTML == 'Available') {
        td.innerHTML = 'Booked';
        td.style.backgroundColor = "#FF6464";
    } else {
        td.innerHTML = 'Available';
        td.style.backgroundColor = "#FFFFFF";
    }
}

const hide = (container) => {
    
    const actionContainer = document.querySelector(`#${container}`);
    actionContainer.classList.remove("show");

}

function toggle(current) {
    console.log("current " + current)
    var other = (current == 'RoomChart') ? 'Chatbot' : 'RoomChart';
    console.log("other " + other)
    var div1 = document.getElementById(current);
    var div2 = document.getElementById(other);
    console.log("div1 " + div1 + " div2 " + div2)
    if (div1.style.display == 'block'){
        div1.style.display = 'none';
    } else {
        div1.style.display = 'block';
        div2.style.display = 'none';
    }

}