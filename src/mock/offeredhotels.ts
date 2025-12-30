
export interface Hotel {
  id: number;
  name: string;
  location: string;
  tours: number;
  stars: number;
  image: string;
}

export async function getHotels(): Promise<Hotel[]> {
  return [
    {
      id: 1,
      name: "هتل والو مرکوری و رزیدنس سنت پترزبورگ",
      location: "استانبول، میدان تکسیم، منطقه تکسیم",
      tours: 3,
      stars: 5,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
    },
    {
      id: 2,
      name: "رنسانس پلاتیک سن پترزبورگ",
      location: "استانبول، میدان تکسیم، منطقه تکسیم",
      tours: 6,
      stars: 5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    },
    {
      id: 3,
      name: "هتل پارک این رادیسون سادو مسکو",
      location: "استانبول، میدان تکسیم، منطقه تکسیم",
      tours: 4,
      stars: 5,
      image: "https://images.unsplash.com/photo-1571896349842-33c7dc7b7c2c?w=800&q=80"
    },
    {
      id: 4,
      name: "هتل هالیدی این سوشفسکی",
      location: "استانبول، میدان تکسیم، منطقه تکسیم",
      tours: 5,
      stars: 5,
      image: "https://images.unsplash.com/photo-1542314831-0682db4e0bad?w=800&q=80"
    }
  ];
}
