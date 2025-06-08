// 1. scuberGreetingForFeet
function scuberGreetingForFeet(rideDistance) {
  if (rideDistance <= 400) {
    return "This one is on me!";
  } else if (rideDistance > 400 && rideDistance <= 2000) {
    return "That will be twenty bucks.";
  } else if (rideDistance > 2000 && rideDistance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// 2. ternaryCheckCity
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// 3. switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
