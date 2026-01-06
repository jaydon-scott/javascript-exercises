const findTheOldest = function (people) {
  const oldestPerson = people.sort((a, b) => {
    let currentYear = new Date().getFullYear();
    let yearOfDeath_a = "yearOfDeath" in a ? a.yearOfDeath : currentYear;
    let yearOfDeath_b = "yearOfDeath" in b ? b.yearOfDeath : currentYear;
    return yearOfDeath_a - a.yearOfBirth < yearOfDeath_b - b.yearOfBirth ? 1 : -1;
  })[0];
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
