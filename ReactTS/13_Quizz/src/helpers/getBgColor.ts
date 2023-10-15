export const getBgColor = (
  index: number,
  optionSelected: number | undefined,
  answer: number
) => {
  if (optionSelected === undefined) return "transparent";
  if (optionSelected !== index && answer !== index) return "transparent";
  if (index === answer) return "green";
  if (optionSelected === index) return "red";

  return "transparent";
};
