function soma(...nums) {
  let total = 0;
  console.log(nums);

  nums.forEach(num => total += num);

  return total;
}
module.exports = soma;
