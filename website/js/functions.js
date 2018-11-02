function tableBooking(td) {
    if (td.innerHTML == 'Available') {
        td.innerHTML = 'Booked';
        td.style.backgroundColor = "#FF6464";
    } else {
        td.innerHTML = 'Available';
        td.style.backgroundColor = "#FFFFFF";
    }
}