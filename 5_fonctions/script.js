// Les fonctions

function canDrive(age, pays) {
  if ((age >= 18 && pays === "FR") || (age >= 16 && pays === "US")) {
    return true;
  }
  return false;
}

console.log(canDrive(17, "US")); // True
