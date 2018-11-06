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
    var other = (current == 'RoomChart') ? 'Chatbot' : 'RoomChart';
    var div1 = document.getElementById(current);
    var div2 = document.getElementById(other);
    
    if (div1.style.display == 'block'){
        div1.style.display = 'none';
    } else {
        div1.style.display = 'block';
        div2.style.display = 'none';
    }

}