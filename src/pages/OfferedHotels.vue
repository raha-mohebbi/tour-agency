<template>
  <div class="bg-gray-100 py-10 px-4" dir="rtl">
    <div class="max-w-7xl mx-auto">
       <div class="flex items-center gap-3">
  <!-- icons -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M2 2H22" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 2H5C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V3C20 2.44772 19.5523 2 19 2Z" stroke="#999999" stroke-width="2" stroke-linejoin="round"/>
<path d="M10 16H14V22H10V16Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 6H8.5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
<path d="M7.5 9H8.5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
<path d="M11.5 6H12.5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
<path d="M11.5 9H12.5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
<path d="M15.5 6H16.5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
<path d="M15.5 9H16.5" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
<path d="M2 22H22" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0001 16H15.0001C15.2762 16 15.505 15.774 15.4523 15.5029C15.1759 14.0827 13.7355 13 12.0001 13C10.2646 13 8.82424 14.0827 8.54789 15.5029C8.49519 15.774 8.72394 16 9.00009 16H10.0001" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  <!-- texts -->
  <div class="flex flex-row ">
    <p class="font-bold ml-1 text-black">هتل های پیشنهادی|</p>
    <p class="text-[#666666]">هتل هایی با امکانات مناسب و رضایت بالای مسافران (Hotel-01)</p> 
  </div>
</div>

      <!-- cards-->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div 
          v-for="hotel in hotels" 
          :key="hotel.id" 
          class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
        >
          <div class="relative">
            <img 
              :src="hotel.image" 
              :alt="hotel.name"
              class="w-full h-64 object-cover"
            />
            <div class="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {{ hotel.tours }} تور
            </div>
          </div>
          <div class="p-6 text-center">
            <h3 class="text-lg font-bold text-gray-800 mb-2">
              {{ hotel.name }}
            </h3>
            <div class="flex justify-center items-center gap-2 mb-4 text-yellow-500 text-xl">
              <span v-for="star in hotel.stars" :key="star">★</span>
            </div>
            <p class="text-sm text-gray-600 mb-4">
              {{ hotel.location }}
            </p>
            <a href="#" class="text-blue-600 text-sm font-medium hover:underline">
              نمایش هتل در نقشه →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { hotels } from '../mock/hotelslist';
</script>


