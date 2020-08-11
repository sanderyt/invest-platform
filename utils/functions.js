export const calculateProgress = investments => {
  let total = 0;
  investments.map(investment => (total += investment.amountInvested));
  return total;
};

export const amountOfInvestors = investments => {
  let investors = [];
  console.log(investments);
  investments.map(investment => {
    if (!investors.includes(investment.user.id))
      investors.push(investment.user.id);
  });
  return investors.length;
};

export const readableDate = datestring => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(datestring).toLocaleDateString("nl-NL", options);
};
