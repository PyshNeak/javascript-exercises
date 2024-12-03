const findTheOldest = function (people) {
    const curYear = new Date().getFullYear();
    const oldest = people.reduce((oldest, cur) => {
        const finalYear = cur.yearOfDeath ?? curYear;
        const curAge = finalYear - cur.yearOfBirth;
        if (curAge > oldest.age) {
            return {person: cur, age: curAge};
        }
        return oldest;
    }, {person: null, age: -1});
    return oldest.person;
};
/*
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
*/
// Do not edit below this line
module.exports = findTheOldest;
