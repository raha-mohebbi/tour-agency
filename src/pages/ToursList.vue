<template>
    
  <div class="bg-gray-100 py-8 px-4" dir="rtl">

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
    <p class="font-bold ml-1 text-black">لیست تورها|</p>
    <p class="text-[#666666]">مروری بر تورهای موجود همراه با جزئیات کامل (Tour-List-Desktop-01)</p> 
  </div>
</div>
    <div class="max-w-5xl mx-auto">

      <!-- Tabs -->
      <div class="flex gap-2 mb-6 mt-5 justify-right flex-wrap">
        <button 
          v-for="tab in tabs" 
          :key="tab" 
          @click="selectedTab = tab"
          :class="selectedTab === tab ? 'bg-[#051844] text-white' : ' text-gray-700 underline decoration-[#051844] decoration-1 underline-offset-8'"
          class="px-4 py-2 rounded-tl-lg rounded-tr-lg  hover:bg-blue-50 transition"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Tour Cards -->
      <div v-for="tour in tours" :key="tour.id" class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row mb-6">
        <!-- Image -->
        <div class="md:w-1/4 w-full h-48 md:h-auto relative">
          <img :src="tour.image" alt="tour image" class="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl" />
        </div>

        <!-- Content -->
        <div class="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-bold mb-1">{{ tour.title }}</h3>
            <p class="text-gray-500 text-sm mb-2">
              {{ tour.date }} | {{ tour.people }} | {{ tour.departure }}
            </p>
            <div class="flex gap-2 mb-2 flex-wrap">
              <span class="px-2 py-1 bg-gray-100 rounded text-sm">{{ tour.stars }}</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-2">
            <div class="text-blue-600 font-semibold">{{ tour.price }}</div>
            <button class="bg-[#051844] border border-[#051844] text-white rounded-[10px] shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all duration-300 text-lg  w-44 font-light  ">
              جزئیات تور
            </button>
          </div>
        </div>
      </div>

      <!-- See more button -->
      <div class="text-left mt-4">
        <button class="px-4 py-2 border border-[#051844] rounded-xl text-[#051844] hover:bg-gray-100 transition font-medium">
          مشاهده سایر تورها
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getTours, type Tour } from '../mock/tourslist'

const tabs = ["تور خارجی", "تور قسطی", "تور تابستانه"]
const selectedTab = ref("تور خارجی")

const tours = ref<Tour[]>([])

onMounted(async () => {
  tours.value = await getTours()
})
</script>
