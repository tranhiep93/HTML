var hotel=new object();

hotel.name='park';
hotel.rooms=120;
hotel.booked=77;
hotel.checkAvailability = function (){
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var  elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();