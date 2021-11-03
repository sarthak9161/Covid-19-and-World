//now we create the function to show the data that we get from the internet
function updateData() {
    console.log("updating the data");
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                let cases = element.infected;
                if (cases < 1000) {
                    color = "rgb(255,0, 0)";
                }
                else {
                    color = `rbg(${cases}, 0, 0)`
                }
                //mark the map
                new mapboxgl.Marker({
                    color: color,
                    draggable: false
                }).setLngLat([longitude, latitude])
                    .addTo(map);






            });
        })
}
let interval = 2000;
setInterval(updateData, interval)