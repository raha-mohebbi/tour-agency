<template>
  <div class="bg-gray-100 py-12 px-4" dir="rtl">
    <div class="max-w-5xl mx-auto">
   
      <h2 class="text-center text-2xl font-bold text-gray-800 mb-8">
        نام تم مورد نظر
      </h2>

      <!-- searchbar-->
      <div class="flex justify-center mb-10">
        <div class="relative w-full max-w-3xl">
          <!-- search icon-->
          <div
            class="absolute inset-y-0 mr-4 flex items-center pointer-events-none"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7663 18.5889L14.7962 13.6188C16.1506 11.9623 16.8165 9.84866 16.6562 7.71497C16.4959 5.58128 15.5216 3.59083 13.9349 2.15534C12.3482 0.719841 10.2704 -0.0508742 8.13136 0.00260835C5.99233 0.0560909 3.95568 0.929679 2.44268 2.44268C0.929679 3.95568 0.0560909 5.99233 0.00260835 8.13136C-0.0508742 10.2704 0.719841 12.3482 2.15534 13.9349C3.59083 15.5216 5.58128 16.4959 7.71497 16.6562C9.84866 16.8165 11.9623 16.1506 13.6188 14.7962L18.5889 19.7663C18.7459 19.9179 18.9563 20.0019 19.1746 20C19.3929 19.9981 19.6017 19.9105 19.7561 19.7561C19.9105 19.6017 19.9981 19.3929 20 19.1746C20.0019 18.9563 19.9179 18.7459 19.7663 18.5889ZM8.35314 15.0143C7.03568 15.0143 5.74781 14.6237 4.65238 13.8917C3.55695 13.1598 2.70317 12.1194 2.199 10.9023C1.69483 9.6851 1.56292 8.34575 1.81994 7.05361C2.07697 5.76146 2.71138 4.57455 3.64297 3.64297C4.57455 2.71138 5.76146 2.07697 7.05361 1.81994C8.34575 1.56292 9.6851 1.69483 10.9023 2.199C12.1194 2.70317 13.1598 3.55695 13.8917 4.65238C14.6237 5.74781 15.0143 7.03568 15.0143 8.35314C15.0124 10.1192 14.3099 11.8123 13.0611 13.0611C11.8123 14.3099 10.1192 15.0124 8.35314 15.0143Z"
                fill="#051844"
              />
            </svg>
          </div>

          <!-- input search box-->
          <input
            type="text"
            placeholder="جستجو در تورها"
            class="w-full px-10 py-2 text-base border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
      </div>

      <div class="flex items-center gap-3 mb-10">
        <!--  icons -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.5 14.1961V17.7033C18.5 19.524 17.0442 21 15.2485 21C13.4527 21 11.997 19.524 11.997 17.7033L12.003 6.57145C12.003 4.59899 10.5473 3 8.7515 3C6.95575 3 5.5 4.59899 5.5 6.57145V14.1961"
            stroke="#999999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.5 15.5L18.5 12.5L15.5 15.5"
            stroke="#999999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.5 5.36365C21.5 7.5909 18.5 9.5 18.5 9.5C18.5 9.5 15.5 7.5909 15.5 5.36365C15.5 4.60415 15.8161 3.87578 16.3787 3.33874C16.9413 2.80171 17.7043 2.5 18.5 2.5C19.2957 2.5 20.0587 2.80171 20.6213 3.33874C21.1839 3.87578 21.5 4.60415 21.5 5.36365Z"
            stroke="#999999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 17.3636C8.5 19.5909 5.5 21.5 5.5 21.5C5.5 21.5 2.5 19.5909 2.5 17.3636C2.5 16.6041 2.81607 15.8758 3.37868 15.3387C3.94129 14.8017 4.70435 14.5 5.5 14.5C6.29565 14.5 7.0587 14.8017 7.6213 15.3387C8.18395 15.8758 8.5 16.6041 8.5 17.3636Z"
            stroke="#999999"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.5 6.5C19.0523 6.5 19.5 6.05228 19.5 5.5C19.5 4.94772 19.0523 4.5 18.5 4.5C17.9477 4.5 17.5 4.94772 17.5 5.5C17.5 6.05228 17.9477 6.5 18.5 6.5Z"
            fill="#999999"
          />
          <path
            d="M5.5 18.5C6.05228 18.5 6.5 18.0523 6.5 17.5C6.5 16.9477 6.05228 16.5 5.5 16.5C4.94772 16.5 4.5 16.9477 4.5 17.5C4.5 18.0523 4.94772 18.5 5.5 18.5Z"
            fill="#999999"
          />
        </svg>

        <!-- texts -->
        <div class="flex flex-row">
          <p class="font-bold ml-1 text-black">مشاهده تور های پر بازدید |</p>
          <p class="text-[#666666]">جایی برای تحقق رویای سفر شما</p>
        </div>
      </div>

      <!-- timeline   -->
      <div class="relative max-w-4xl mx-auto color-[#333333]">
        <!-- line-->
        <div
          class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2"
        ></div>

        <!-- dots-->
        <div class="flex justify-between items-center relative">
          <div
            v-for="place in places"
            :key="place"
            class="flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M32 58.6666C32 58.6666 52 42.6666 52 25.3333C52 14.2875 43.0457 5.33325 32 5.33325C20.9543 5.33325 12 14.2875 12 25.3333C12 42.6666 32 58.6666 32 58.6666Z"
                stroke="#00454B"
                stroke-width="3"
                stroke-linejoin="round"
              />
              <path
                d="M32 33.3332C36.4183 33.3332 40 29.7515 40 25.3333C40 20.915 36.4183 17.3333 32 17.3333C27.5817 17.3333 24 20.915 24 25.3333C24 29.7515 27.5817 33.3332 32 33.3332Z"
                stroke="#00454B"
                stroke-width="3"
                stroke-linejoin="round"
              />
            </svg>
            <div class="mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="15" cy="15" r="15.5" stroke="#00A4B2" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="15" cy="15" r="10" fill="#00A4B2" />
                </svg>
              </svg>
            </div>

            <span class="text-sm font-medium text-gray-700">{{ place }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getPlaces } from "../mock/places";

const places = ref<string[]>([]);

onMounted(async () => {
  places.value = await getPlaces();
});
</script>
