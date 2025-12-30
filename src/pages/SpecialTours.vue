<template>
  <div class="bg-gray-100 py-8 px-4" dir="rtl">
    <div class="max-w-7xl mx-auto">

   
      <div class="flex items-center gap-3">
  <!-- icons -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20.0515 12.9085C19.6033 14.0499 15.2153 14.4127 10.6808 13.1977C6.1464 11.9827 3.29135 9.7761 3.6308 8.50855C4.39766 5.6466 8.48715 1.23108 14.3355 3.3443C20.1839 5.4575 20.8184 10.0465 20.0515 12.9085Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9997 3.5C13.9997 3.5 11.9996 6.75 10.4997 12C8.99976 17.25 8.99976 21 8.99976 21" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0001 3.5C14.0001 3.5 8.89705 4.42176 7.5 8.50001" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0002 3.5C14.0002 3.5 17.0001 6.5 15.5 11" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 21.5C5 21.5 9.5 20.75 13 20.75C16.5 20.75 19.5 21 19.5 21" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3.50007C14.5001 3.50007 15.5001 3.00007 15.9073 2.20996" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 20.5C17 19.6715 16.5 18.5 15 18.5C13.5 18.5 13 19.6715 13 20.5" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  <!-- texts -->
  <div class="flex flex-row ">
    <p class="font-bold ml-1 text-black">تورهای ویژه|</p>
    <p class="text-[#666666]">منتخب تورهایی با خدمات ممتاز و شرایط ویژه (Special-Tours-01)</p> 
  </div>
</div>

      <!-- cards-->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="tour in tours"
          :key="tour.id"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div class="relative">
            <img :src="tour.image" :alt="tour.title" class="w-full h-48 object-cover" />
          </div>

          <div class="p-4 text-center">
            <p class="text-sm text-gray-600 mb-2">
              {{ tour.title }}
            </p>

            <p class="text-xs text-gray-500 mb-4">
              {{ tour.date }} | {{ tour.nights }}
            </p>

            <div class="flex justify-center items-center gap-4 text-blue-600 text-sm mb-4">
              <span class="flex items-center gap-1">
                <svg-icon name="calendar" /> {{ tour.date }}
              </span>

              <span class="flex items-center gap-1">
                <svg-icon name="clock" /> {{ tour.nights }}
              </span>
            </div>

            <p class="text-lg font-bold text-blue-700">
              از {{ tour.price }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getSpecialTours, type SpecialTour } from "../mock/specialTours";

const tours = ref<SpecialTour[]>([]);

onMounted(async () => {
  tours.value = await getSpecialTours();
});
</script>



