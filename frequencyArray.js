console.log("Hello World");
var largestAltitude = function(gain){
    let altitude = 0;
    let maxAltitude = 0;

    for( let i=0; i<gain.length; i++){
        altitude+=gain[i];
        maxAltitude =Math.max(altitude, maxAltitude);
    }
    return maxAltitude;
};

console.log(largestAltitude(2, 4, -4 , 4,1));
