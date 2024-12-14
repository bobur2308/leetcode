var addBinary = function(bin1, bin2) {
  let maxLength = Math.max(bin1.length, bin2.length);
  let carry = 0;
  let result = '';

  // Pad the shorter binary number with leading zeros
  bin1 = bin1.padStart(maxLength, '0');
  bin2 = bin2.padStart(maxLength, '0');

  // Add binary digits from right to left
  for (let i = maxLength - 1; i >= 0; i--) {
    let bit1 = parseInt(bin1[i]);
    let bit2 = parseInt(bin2[i]);

    let sum = bit1 + bit2 + carry;
    carry = Math.floor(sum / 2); // Carry will be 1 if sum is 2 or 3
    result = (sum % 2) + result; // Append the result bit (0 or 1)
  }

  // If there is a carry left after the last addition
  if (carry) {
    result = '1' + result;
  }

  return result;

};

console.log(addBinary('101','11'));