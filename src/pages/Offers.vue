<template>
  <div class="bg-gray-100 py-8 px-4" dir="rtl">
    <div class="max-w-7xl mx-auto">
     
           <div class="flex items-center gap-3">
  <!-- icons -->
   <div class="mb-5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 20.9998L7.33705 8.63184L15.5 17.0191L3 20.9998Z" stroke="#999999" stroke-width="2" stroke-linejoin="round"/>
<path d="M11.5 9.5L14 7C15.3333 5.66665 15.5 4.5 14.5 3.5" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 12.5L17 9.99999C18.6667 8.33334 20.3333 8.33334 22 9.99999" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 3.5C10.5523 3.5 11 3.05228 11 2.5C11 1.94771 10.5523 1.5 10 1.5C9.4477 1.5 9 1.94771 9 2.5C9 3.05228 9.4477 3.5 10 3.5Z" fill="#999999"/>
<path d="M21 3C21.5523 3 22 2.55228 22 2C22 1.44771 21.5523 1 21 1C20.4477 1 20 1.44771 20 2C20 2.55228 20.4477 3 21 3Z" fill="#999999"/>
<path d="M21 14.5C21.5523 14.5 22 14.0523 22 13.5C22 12.9477 21.5523 12.5 21 12.5C20.4477 12.5 20 12.9477 20 13.5C20 14.0523 20.4477 14.5 21 14.5Z" fill="#999999"/>
<path d="M19.5 19C20.0523 19 20.5 18.5523 20.5 18C20.5 17.4477 20.0523 17 19.5 17C18.9477 17 18.5 17.4477 18.5 18C18.5 18.5523 18.9477 19 19.5 19Z" fill="#999999"/>
</svg>
    </div>
  <!-- texts -->
  <div class="flex flex-row mb-5 ">
    <p class="font-bold ml-1 text-black">  تخفیف های استثنایی|</p>
    <p class="text-[#666666]">فرصت های محدود برای سفر با هزینه کمتر (Festival-Tour-01)</p> 
  </div>
</div>

      <!-- Swiper -->
      <swiper
        :slides-per-view="2.2"
        :space-between="20"
        :breakpoints="{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }"
        class="pb-8"
      >
        <swiper-slide
          v-for="tour in tours"
          :key="tour.id"
          class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
        >
          <div class="relative">
            <img :src="tour.image" :alt="tour.title" class="w-full h-48 object-cover" />
            <div class="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              {{ getDiscount(tour.id) }}
            </div>
          </div>
          <div class="p-5 text-center">
            <h3 class="font-bold text-lg mb-3">{{ tour.title }}</h3>
            <div class="flex justify-center gap-6 text-sm text-gray-600 mb-4">
              <span class="flex items-center gap-1">{{ tour.nights }}</span>
              <span class="flex items-center gap-1">{{ tour.date }}</span>
              <span class="flex items-center gap-1">۶ نفر</span>
            </div>
            <p class="text-xs text-gray-500 mb-3">
              آژانس پرشین توریست<br />
              بهترین پکیج + گشت کامل
            </p>
            <div class="flex justify-center mb-3">
              <span class="text-yellow-500">★★★★★</span>
            </div>
            <p class="text-xl font-bold text-blue-700">
              {{ tour.price }}
            </p>
          </div>
        </swiper-slide>

        <!-- cards-->
        <swiper-slide class="rounded-3xl shadow-xl overflow-hidden relative h-100">
          <img 
            src="../assets/images/imagesoffers/Frame 1890165983.png"
            alt="تصویر تور"
            class="w-full h-full object-cover"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getOffers, type Offers } from "../mock/offers";

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const tours = ref<Offers[]>([]);

onMounted(async () => {
  tours.value = await getOffers();
});

// درصد تخفیف برای مثال
const getDiscount = (id: number) => {
  switch (id) {
    case 1: return "۲۵٪";
    case 2: return "۱۵٪";
    case 3: return "۲۰٪";
    default: return "۰٪";
  }
};
</script>

<style scoped>
/* برای ارتفاع کارت تبلیغاتی */
.h-96 {
  height: 24rem;
}
</style>
