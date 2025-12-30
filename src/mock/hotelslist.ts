import hotel1 from '../assets/images/imageshotels/d19ebe1fc3d326ff8b4230428749eff8c9652364.jpg';
import hotel2 from '../assets/images/imageshotels/f201456196b46d3aa2b5b3c756239a8f9d8f5748.jpg';
import hotel3 from '../assets/images/imageshotels/fb8c01831025fe8c4fecf5efa47da0dc9d3ad167.jpg';
import hotel4 from '../assets/images/imageshotels/ba39011a600f40ec719d6eb90756e17d1ec24d3b.jpg';
export interface Hotel {
  id: number;
  name: string;
  image: string;
  tours: number;
  stars: number;
  location: string;
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: 'هتل والو مرکوری و رزیدنس سنت پترزبورگ',

    tours: 3,
    stars: 5,
    location: 'استانبول، میدان تکسیم، منطقه تکسیم',
    image:hotel1
  },
  {
    id: 2,
    name: 'رنسانس پلاتیک سن پترزبورگ',

    tours: 6,
    stars: 5,
    location: 'استانبول، میدان تکسیم، منطقه تکسیم',
    image:hotel2
  },
  {
    id: 3,
    name: 'هتل پارک این رادیسون سادو مسکو',

    tours: 4,
    stars: 5,
    location: 'استانبول، میدان تکسیم، منطقه تکسیم',
  image:hotel3
  },
  {
    id: 4,
    name: 'هتل هالیدی این سوشفسکی',

    tours: 5,
    stars: 5,
    location: 'استانبول، میدان تکسیم، منطقه تکسیم',
image:hotel4
  }
];
