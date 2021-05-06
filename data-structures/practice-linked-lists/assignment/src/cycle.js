function cycle(list) {
  let fast = list.head;
  let slow = list.head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast.value === slow.value) {
      return true;
    }
  }
  return false;
}

// make an array out of values and check and see if each.next.value is included in the array
//   const arr = [];
//   let node = list.head;
//   while (node) {
//     arr.push(node.value);
//     if (node.next && arr.includes(node.next.value)) {
//       return true;
//     }
//     node = node.next;
//   }
//   return false;

module.exports = cycle;
