export const getPlaces = async () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(["آنتالیا", "آلانیا", "کوش آداسی", "استانبول"]);
    }, 500); 
  });
};
