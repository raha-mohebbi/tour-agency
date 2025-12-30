import alp from '../assets/images/alp.png';
export interface LeftItem {
  id: number;
  text: string;
}

export interface FeaturedItem {
  title: string;
  image: string;
  description: string;
}

export interface RightCard {
  id: number;
  title: string;
  description: string;
}

export interface TourMagazineData {
  blogTitle: string;
  blogSubtitle: string;
  leftList: LeftItem[];
  featured: FeaturedItem;
  rightCards: RightCard[];
}

export const tourMagazineData: TourMagazineData = {
  blogTitle: 'مجله گردشگری',
  blogSubtitle: 'راهنمای سفر، نکات کاربردی و تجربه های واقعی (Blog 01 & Blog02)',
  leftList: [
    { id: 1, text: 'همدان پایتخت تاریخ و تمدن ایران ' },
    { id: 2, text: 'کدام تورهای گردشگری سیستان و بلوچستان مناسب شماست؟ ' },
    { id: 3, text: 'حالا وارد ایران می شویم (قسمت دوم) ' },

  ],
  featured: {
    title: 'همدان کوهستانی',
    image: alp,
    description: 'همدان یکی از قدیمی ترین شهرهای جهان است که در غرب ایران واقع شده است. این شهر با تاریخچه ای بیش از ۳۰۰۰ سال، میزبان جاذبه های گردشگری متعددی است از جمله آرامگاه بوعلی سینا، گنجنامه، غار علیصدر و بازار سنتی همدان.'
  },
  rightCards: [
    { id: 1, title: 'سفر به رم', description: 'رم پایتخت ایتالیا و یکی از قدیمی ترین شهرهای جهان است. - شهری که تاریخ، هنر و فرهنگ در آن زنده است. ' },
    { id: 2, title: 'جزایر مالدیو', description: 'مالدیو کشوری است جزیره ای در اقیانوس هند که به خاطر سواحل سفید، آبهای شفاف و resorts لوکس معروف است. - مقصدی ایده آل برای ماه عسل و تعطیلات آرام. ' },
    { id: 3, title: 'سفر به پاریس', description: 'پاریس پایتخت فرانسه و یکی از رمانتیک ترین شهرهای جهان است. - شهری که به برج ایفل، موزه لوور و غذاهای لذیذ معروف است. ' },
    { id: 4, title: 'سفر به پاریس', description: 'پاریس پایتخت فرانسه و یکی از رمانتیک ترین شهرهای جهان است. - شهری که به برج ایفل، موزه لوور و غذاهای لذیذ معروف است. ' }
]
};
