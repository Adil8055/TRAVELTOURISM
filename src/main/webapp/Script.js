document.addEventListener("DOMContentLoaded", function() {


    let exploreButton = document.getElementById("exploreBtn");

    exploreButton.addEventListener("click", function(event) {

        event.preventDefault();

        alert("Let's explore our destination!");

    });


    

    let tourButtons = document.querySelectorAll(".tour-btn");

    let tourDetails = document.getElementById("tourDetails");

    let tourName = document.getElementById("tourName");

    let tourDuration = document.getElementById("tourDuration");

    let tourPrice = document.getElementById("tourPrice");

    let tourDescription = document.getElementById("tourDescription");


    // View Tour buttons

    tourButtons.forEach(function(button) {

        button.addEventListener("click", function(event) {

            event.preventDefault();

            let destination = button.getAttribute("data-destination");

            tourName.textContent = destination;


            if (destination === "Darjeeling") {

                tourDuration.textContent = "Duration: 5 Days / 4 Nights";

                tourPrice.textContent = "Price: Rs 8,999";

                tourDescription.textContent =
                    "Enjoy the beautiful mountains, tea gardens and scenic views of Darjeeling.";

            }

            else if (destination === "Goa") {

                tourDuration.textContent = "Duration: 4 Days / 3 Nights";

                tourPrice.textContent = "Price: Rs 9,999";

                tourDescription.textContent =
                    "Enjoy beautiful beaches, relaxing views and exciting activities in Goa.";

            }

            else if (destination === "Kashmir") {

                tourDuration.textContent = "Duration: 6 Days / 5 Nights";

                tourPrice.textContent = "Price: Rs 12,999";

                tourDescription.textContent =
                    "Explore the beautiful valleys, lakes and mountains of Kashmir.";

            }

            else if (destination === "Sikkim") {

                tourDuration.textContent = "Duration: 5 Days / 4 Nights";

                tourPrice.textContent = "Price: Rs 10,999";

                tourDescription.textContent =
                    "Discover the peaceful mountains, monasteries and natural beauty of Sikkim.";

            }

            else if (destination === "Shimla") {

                tourDuration.textContent = "Duration: 4 Days / 3 Nights";

                tourPrice.textContent = "Price: Rs 8,999";

                tourDescription.textContent =
                    "Experience the beautiful hills, pleasant weather and scenic views of Shimla.";

            }

            else if (destination === "Paris") {

                tourDuration.textContent = "Duration: 6 Days / 5 Nights";

                tourPrice.textContent = "Price: Rs 45,999";

                tourDescription.textContent =
                    "Explore the Eiffel Tower, beautiful streets, museums and famous attractions of Paris.";

            }


            tourDetails.style.display = "block";

            tourDetails.scrollIntoView({
                behavior: "smooth"
            });

        });

    });



    let closeButton = document.getElementById("closeDetails");

    closeButton.addEventListener("click", function() {

        tourDetails.style.display = "none";

    });


    
    let bookingForm = document.getElementById("bookingForm");

    let bookNowButton = document.getElementById("bookNowBtn");

    let closeBooking = document.getElementById("closeBooking");

    let bookingFormElement = document.getElementById("bookingFormElement");


	bookNowButton.addEventListener("click", function(event) {

	    event.preventDefault();

	    alert("Book Now button clicked!");

	    bookingForm.style.display = "block";

	    bookingForm.scrollIntoView({
	        behavior: "smooth"
	    });

	});


    

    closeBooking.addEventListener("click", function() {

        bookingForm.style.display = "none";

    });


 

    bookingFormElement.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Your booking has been submitted successfully!");

    });

});