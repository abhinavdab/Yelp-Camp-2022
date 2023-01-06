mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaW5hdmRhYiIsImEiOiJjbGJ3aW5waW4wNm5rM3hvNWJkYmF6eTY3In0.Kp6KrelwDMci_aPZV6qiIw';
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12", // stylesheet location
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 3, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${campground.title}</h3><p>${campground.location}</p>`
        )
    )
    .addTo(map);