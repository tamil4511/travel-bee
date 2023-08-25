document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".custom-carousel .item");
  
    carouselItems.forEach((item) => {
      item.addEventListener("click", function () {
        carouselItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });
        item.classList.toggle("active");
      });
    });
  });
  
  /// Additional code for Owl Carousel initialization
  const owl = $(".custom-carousel");
  owl.owlCarousel({
    autoWidth: true,
    loop: true,
    autoplay: true, // Add this line to enable automatic sliding
    autoplayTimeout: 1900, // Adjust the timeout (in milliseconds) between each slide transition
    autoplayHoverPause: true, // Pause autoplay when hovering over the carousel
  });
  