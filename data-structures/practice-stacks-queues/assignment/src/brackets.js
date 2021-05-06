const Stack = require("./lib/stack");

function match(expression) {
  const matching = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const isBracket = (x) => ["{", "}", "[", "]", "(", ")"].includes(x);
  const isOpeningBracket = (x) => ["{", "[", "("].includes(x);

  let isBalanced = function (expr) {
    let stack = [];

    for (let i = 0; i < expr.length; i++) {
      if (isOpeningBracket(expr[i])) {
        stack.push(expr[i]);
      } else {
        let last = stack.pop();
        if (expr[i] !== matching[last]) {
          return false;
        }
      }
    }
    if (stack.length !== 0) {
      return false;
    }

    return true;
  };

  export const matchingBrackets = (str) => {
    const expr = [...str].filter(isBracket).join("");

    return isBalanced(expr);
  };
}

module.exports = match;

//   const stack = new Stack();
//   let valid;
//   for (let i = 0; i < expression.length; i++) {
//     const current = expression.charAt(i);
//     let open;
//     let close;
//     if (i === 0) {
//       valid = current;
//       if (valid === "(") {
//         valid += ")";
//       } else if (valid === "[") {
//         valid += "]";
//       } else if (valid === "{") {
//         valid += "}";
//       } else {
//         break;
//       }
//     } else {
//       open = valid.charAt(0);
//       close = valid.charAt(1);
//     }

//     if (current === open) {
//       stack.push(current);
//     } else if (stack.top) {
//       stack.pop();
//     } else {
//       return true;
//     }
//   }
//   return !stack.top === null;

// {}()[]
