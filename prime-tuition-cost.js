//purpose: calculate remaining balance, applying desposits, discounts, and scholarships

const tuitionTotal = 16000;
const scholarship = -9600;
const deposit = -1500;
const diversityDiscount = -500;
const prepaymentDiscount = -500;

console.log("After discounts and scholarships have been applied, you will have a remaining balance: $"+(tuitionTotal + deposit + diversityDiscount + prepaymentDiscount + scholarship));
