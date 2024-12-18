// Helper function to multiply two large numbers as strings
function multiplyStrings(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const result = Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const mul = (num1[i] - "0") * (num2[j] - "0");
      const sum = mul + result[i + j + 1];

      result[i + j + 1] = sum % 10; // Place the single-digit value
      result[i + j] += Math.floor(sum / 10); // Carry the remainder
    }
  }

  while (result[0] === 0) result.shift(); // Remove leading zeros
  return result.join("");
}

// Function to compute the product array
function productExceptSelf(X) {
  const n = X.length;
  const Y = Array(n).fill("1");

  // Convert numbers to strings for large multiplications
  const strX = X.map(String);

  // Step 1: Compute prefix products
  let prefix = "1";
  for (let i = 0; i < n; i++) {
    Y[i] = prefix; // Store the prefix product up to i-1
    prefix = multiplyStrings(prefix, strX[i]); // Update the prefix product
  }

  // Step 2: Compute suffix products and combine
  let suffix = "1";
  for (let i = n - 1; i >= 0; i--) {
    Y[i] = multiplyStrings(Y[i], suffix); // Multiply by the suffix product
    suffix = multiplyStrings(suffix, strX[i]); // Update the suffix product
  }

  return Y;
}

// Example usage:
let X = [9999999, 29999999999, 399999999999, 499999999999999];
let Y = productExceptSelf(X);
console.log(Y); 
// Output: [
//   "5999999999784988000000500429999999999",
//   "1999999799994996000500400009999999",
//   "149999984994999700500030009999999",
//   "119999987995700000430009999999"
// ]
