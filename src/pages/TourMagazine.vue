<template>
  <div dir="rtl" class="flex items-center justify-center font-sans">
    <div class="rounded-lg p-6 w-4/5 max-w-6xl">
     
      <div class="flex items-center gap-3 mb-6">
        <!-- icons -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M2.5 3.5H8C10.2092 3.5 12 5.29085 12 7.5V21C12 19.3432 10.6568 18 9 18H2.5V3.5Z" stroke="#999999" stroke-width="2" stroke-linejoin="round"/>
          <path d="M21.5 3.5H16C13.7908 3.5 12 5.29085 12 7.5V21C12 19.3432 13.3432 18 15 18H21.5V3.5Z" stroke="#999999" stroke-width="2" stroke-linejoin="round"/>
        </svg>

        <!-- texts -->
        <div class="flex flex-row">
          <p class="font-bold ml-1 text-black">{{ blogTitle }} |</p>
          <p class="text-[#666666]">{{ blogSubtitle }}</p> 
        </div>
      </div>

      <div class="flex gap-6 flex-col lg:flex-row">
        <!-- right column -->
        <div class="w-full lg:w-1/2 flex flex-col gap-3">
          <div v-for="item in leftList" :key="item.id" class="bg-[#FFFFFF] rounded-md p-3 text-right text-blue-900 border border-[#B3B3B3] text-sm">
            {{ item.text }}
          </div>
        </div>

        <!-- middle-->
        <div class="w-full lg:w-1/2 ">
          <img :src="featured.image" :alt="featured.title" class="w-full h-48 object-cover rounded-t-lg ">
          <div class="  bg-transparent rounded-b-lg p-4 text-right text-sm text-gray-800">
            {{ featured.description }}
          </div>
        </div>

        <!-- left column -->
        <div class="w-full lg:w-1/2 flex flex-col gap-4">
          <div v-for="card in rightCards" :key="card.id" class="bg-[#FFFFFF] rounded-md p-3 flex items-start gap-3 border border-[#B3B3B3]">
            <div class="flex-1 text-right text-sm text-blue-900 ">
              <strong>{{ card.title }}</strong><br>
              {{ card.description }} 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { tourMagazineData } from '../mock/tourmagazine';

export default {
  name: 'TourismBlogSection',
  data() {
    return tourMagazineData;
  }
}
</script>


