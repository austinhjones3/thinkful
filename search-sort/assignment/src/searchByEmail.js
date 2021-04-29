/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */
// const sort = require("./sort");
function searchByEmail(email, c) {
  //   if (!Array.isArray(customers)) return -1;
  //   if (!customers.length) return -1;
  //   customers = sort(customers)
  //   customers = sort((a, b) => b.email < a.email, customers);
  //   console.log(customers);
  //   let lowerIndex = 0;
  //   let upperIndex = customers.length - 1;
  //   while (lowerIndex <= upperIndex) {
  //     const index = Math.floor((upperIndex + lowerIndex) / 2);

  //     let found = email === customers[lowerIndex].email;
  //     if (found) {
  //       return lowerIndex;
  //     }
  //     lowerIndex = index + 1;
  //     found = email === customers[upperIndex].email;
  //     if (found) {
  //       return upperIndex;
  //     }
  //     upperIndex = index + 1;
  //     found = email === customers[index].email;
  //     if (found) {
  //       return index;
  //     }
  //   }
  //   return -1;
  for (let i = 0; i < c.length; i++) if (c[i].email === email) return i;
  return -1;
}

module.exports = searchByEmail;
