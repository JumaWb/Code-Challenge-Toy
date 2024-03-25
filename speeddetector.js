//Speed Detector
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsThreshold = 12;
  
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints <= demeritPointsThreshold) {
            console.log("Points:", demeritPoints);
        } else {
            console.log("License suspended");
        }
    }
  }
  
  // Test with speed of 80
  calculateDemeritPoints(280);
