function initMap(){var e={lat:44.809159,lng:20.483182},t=new google.maps.Map(document.getElementById("map"),{center:e,zoom:14,scrollwheel:!1,styles:[{elementType:"geometry",stylers:[{color:"#2d2b2c"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#40435a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#96909a"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#322a37"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#292728"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#322a37"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]});new google.maps.Marker({position:e,map:t})}$(window).load(function(){var e=$(".navigacija"),t=$(".burger").find("i");$('a[href^="#"]').on("click",function(l){var r=$(this.getAttribute("href"));r.length&&(l.preventDefault(),$("html, body").stop().animate({scrollTop:r.offset().top-70},680)),$(window).width()<1024&&(t.toggleClass("fa-bars").toggleClass("fa-times"),e.toggleClass("drop-down-active"))}),t.click(function(){t.toggleClass("fa-bars").toggleClass("fa-times"),e.toggleClass("drop-down-active")})});var page="index",pages=["404","articles"],x=25;