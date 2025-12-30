
import tour1 from "../assets/images/imagestourslist/17671481c0562f7e116e7ff2fa5fab19f134efd9.jpg"
import tour2 from "../assets/images/imagestourslist/777d4c4290c7b778f301d9d2227ba7232be84c44.jpg"
import tour3 from "../assets/images/imagestourslist/41b4278399a4efaf05e0ccf836b990873f1747d5 (1).png"
import tour4 from "../assets/images/imagestourslist/ce56fc7eaa2ad509f6cb0dd0483ca7199793c963.jpg"
export interface Tour {
  id: number;
  title: string;
  date: string;
  people: string;
  stars: string;
  departure: string;
  price: string;
  image: string;
}

export async function getTours(): Promise<Tour[]> {
  return [
    {
      id: 1,
      title: "تور زمینی وان و باتومی تابستان",
      date: "تیر ۱۴۰۴ | ۷ شب و ۸ روز",
      people: "۶ نفر",
      stars: "۵ ★",
      departure: "تهران",
      price: "از ۱۹,۹۹۰,۰۰۰ تومان + ۴۹۰ دلار",
      image: tour1
    },
    {
      id: 2,
      title: "تور زمینی بانکوک پوکت",
      date: "تیر ۱۴۰۴ | ۷ شب و ۸ روز",
      people: "۶ نفر",
      stars: "۵ ★",
      departure: "تهران",
      price: "از ۱۹,۹۹۰,۰۰۰ تومان + ۴۹۰ دلار",
      image: tour2
    },
    {
      id: 3,
      title: "تور زمینی کوالالامپور",
      date: "تیر ۱۴۰۴ | ۷ شب و ۸ روز",
      people: "۶ نفر",
      stars: "۵ ★",
      departure: "تهران",
      price: "از ۱۹,۹۹۰,۰۰۰ تومان + ۴۹۰ دلار",
      image: tour3
    },
    {
      id: 4,
      title: "تور زمینی استانبول",
      date: "تیر ۱۴۰۴ | ۷ شب و ۸ روز",
      people: "۶ نفر",
      stars: "۵ ★",
      departure: "تهران",
      price: "از ۱۹,۹۹۰,۰۰۰ تومان + ۴۹۰ دلار",
      image: tour4
    }
  ];
}
