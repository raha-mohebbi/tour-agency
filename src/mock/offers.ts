import img1 from '../assets/images/imagesoffers/Image Offer (2).png';
import img2 from '../assets/images/imagesoffers/Image Offer (4).png';
import img3 from '../assets/images/imagesoffers/Image Offer (5).png';
import img4 from '../assets/images/imagesoffers/Frame 1890165983.png'


export interface Offers {
  id: number;
  title: string;
  date: string;
  nights: string;
  price: string;
  image: string;
}


export const data: Offers[] = [
  
  { id: 1, title: "تور ویژه ۹ روزه اروپا ...", date: "تیر ۱۴۰۴", nights: "۱۰ شب", price: "۱۹,۹۹۰,۰۰۰ + ۴۹۰ دلار", image: img1 },
  { id: 2, title: "تور ویژه ۹ روزه کوهستان ...", date: "تیر ۱۴۰۴", nights: "۱۰ شب", price: "۱۹,۹۹۰,۰۰۰ + ۴۹۰ دلار", image: img2 },
  { id: 3, title: "تور ویژه ۹ روزه استانبول ...", date: "تیر ۱۴۰۴", nights: "۱۰ شب", price: "۱۹,۹۹۰,۰۰۰ + ۴۹۰ دلار", image: img3 },
 
];


export function getOffers(): Promise<Offers[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 400);
  });
}
