
import img1 from '../assets/images/image Special Tours (3).png';
import img2 from '../assets/images/image Special Tours (1).png';
import img3 from '../assets/images/image Special Tours.png';
import img4 from '../assets/images/image 30.png';

export interface SpecialTour {
  id: number;
  title: string;
  date: string;
  nights: string;
  price: string;
  image: string;
}

export const data: SpecialTour[] = [
  { id: 1, title: "تور ویژه ۹ روزه اروپا ...", date: "تیر ۱۴۰۴", nights: "۱۰ شب", price: "۱۹,۹۹۰,۰۰۰ + ۴۹۰ دلار", image: img1 },
  { id: 2, title: "تور ویژه ۹ روزه کوهستان ...", date: "تیر ۱۴۰۴", nights: "۱۰ شب", price: "۱۹,۹۹۰,۰۰۰ + ۴۹۰ دلار", image: img2 },
  { id: 3, title: "تور ویژه ۹ روزه استانبول ...", date: "تیر ۱۴۰۴", nights: "۱۰ شب", price: "۱۹,۹۹۰,۰۰۰ + ۴۹۰ دلار", image: img3 },
  { id: 4, title: "تور ویژه ۹ روزه باستانی ...", date: "تیر ۱۴۰۴", nights: "۱۰ شب", price: "۱۹,۹۹۰,۰۰۰ + ۴۹۰ دلار", image: img4 }
];

export function getSpecialTours() {
  return new Promise<SpecialTour[]>((resolve) => {
    setTimeout(() => resolve(data), 400);
  });
}
