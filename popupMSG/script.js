let overlay = document.getElementById("overlay");
let popup = document.getElementById('reservationPopup');

function showReservationDetails() {
      // You can fetch reservation details from the server using AJAX or set it dynamically
      // var reservationDetails = "Reservation Date: 2023-01-01<br>Time: 10:00 AM<br>Room: A123";
  
      // document.getElementById('reservationDetailsContent').innerHTML = reservationDetails;
      document.getElementById('reservationPopup').style.display = 'block';

  }
  
  function closeReservationDetails() {
      document.getElementById('reservationPopup').style.display = 'none';
      
  }

  