<template>
  <div class="bg-gray-100 min-h-screen" dir="rtl">
    <!-- Latest Offers -->
    <div class="mt-5">
      <LatestOffers />
    </div>

    <!-- Footer -->
    <footer class="bg-white py-12 px-4 shadow-lg">
      <div class="max-w-7xl mx-auto">
        <!-- Top Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          <div>
            <h4 class="text-lg font-bold text-gray-800 mb-6">تورهای نوروزی</h4>
            <ul class="space-y-4 text-gray-700">
              <li class="hover:text-blue-700 cursor-pointer transition">تور اسپانیا</li>
              <li class="hover:text-blue-700 cursor-pointer transition">تور پوکت</li>
              <li class="hover:text-blue-700 cursor-pointer transition">تور استانبول</li>
              <li class="hover:text-blue-700 cursor-pointer transition">تور آلانیا</li>
            </ul>
          </div>

       
          <div>
            <h4 class="text-lg font-bold text-gray-800 mb-6">دسترسی سریع</h4>
            <ul class="space-y-4 text-gray-700">
              <li class="hover:text-blue-700 cursor-pointer transition">تماس با ما</li>
              <li class="hover:text-blue-700 cursor-pointer transition">درباره ما</li>
              <li class="hover:text-blue-700 cursor-pointer transition">مجله گردشگری</li>
              <li class="hover:text-blue-700 cursor-pointer transition">سفر اقساطی</li>
            </ul>
          </div>

         
          <div>
            <h4 class="text-lg font-bold text-gray-800 mb-6">لینک های مفید</h4>
            <ul class="space-y-4 text-gray-700">
              <li class="hover:text-blue-700 cursor-pointer transition">نکات کاربردی برای سفرهای راحت و بی دردسر</li>
              <li class="hover:text-blue-700 cursor-pointer transition">تور دبی</li>
              <li class="hover:text-blue-700 cursor-pointer transition">تور کیش</li>
              <li class="hover:text-blue-700 cursor-pointer transition">تور ارمنستان</li>
              <li class="hover:text-blue-700 cursor-pointer transition">تور گرجستان</li>
              <li class="hover:text-blue-700 cursor-pointer transition">تور مالدیو</li>
              <li class="hover:text-blue-700 cursor-pointer transition">تور روسیه</li>
            </ul>
          </div>

      
          <div>
            <ul class="space-y-4 text-gray-700">
              <li class="hover:text-blue-700 cursor-pointer transition">
                آژانس گردشگری ما با ارائه‌ی بهترین تورهای داخلی و خارجی، خدمات رزرو هتل، بلیت هواپیما و پشتیبانی ۲۴ ساعته، همراه مطمئن سفرهای شماست. ما با تجربه، دقت و تعهد، لحظه‌هایی خاطره‌ساز برایتان رقم می‌زنیم.
              </li>
              <li class="hover:text-blue-700 cursor-pointer transition">
                تهران، خیابان اشرفی اصفهانی
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C12 22 19.5 16 19.5 9.5C19.5 5.35785 16.1421 2 12 2C7.85785 2 4.5 5.35785 4.5 9.5C4.5 16 12 22 12 22Z" stroke="#333333" stroke-linejoin="round"/>
                  <path d="M12 12.5C13.6568 12.5 15 11.1568 15 9.5C15 7.84315 13.6568 6.5 12 6.5C10.3432 6.5 9 7.84315 9 9.5C9 11.1568 10.3432 12.5 12 12.5Z" stroke="#333333" stroke-linejoin="round"/>
                </svg>
              </li>
              <li class="hover:text-blue-700 cursor-pointer transition">
                ۰۲۱۴۹۲۹۶
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8.49802 3.84277C8.86132 3.84277 9.19602 4.03978 9.37237 4.3574L10.5956 6.56081C10.7557 6.84931 10.7633 7.19826 10.6157 7.49341L9.43727 9.85026C9.43727 9.85026 9.77877 11.606 11.208 13.0352C12.6372 14.4644 14.387 14.8 14.387 14.8L16.7435 13.6218C17.0388 13.4741 17.388 13.4817 17.6766 13.6422L19.8863 14.8707C20.2036 15.0471 20.4004 15.3816 20.4004 15.7447V18.2814C20.4004 19.5733 19.2004 20.5063 17.9764 20.0933C15.4624 19.245 11.5601 17.6299 9.08667 15.1565C6.61322 12.6831 4.99812 8.78071 4.14985 6.26676C3.73684 5.04271 4.66989 3.84277 5.96172 3.84277H8.49802Z" stroke="#333333" stroke-linejoin="round"/>
                </svg>
              </li>
              <li class="hover:text-blue-700 cursor-pointer transition">
                xxx@gmail.com
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 9V19.9091C22 20.5116 21.5523 21 21 21H3C2.44771 21 2 20.5116 2 19.9091V9L12 17L22 9Z" stroke="#333333" stroke-linejoin="round"/>
                  <path d="M2 8.89195L12 2L22 8.89195" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 9H7V13L12 17L17 13V9Z" stroke="#333333" stroke-linejoin="round"/>
                </svg>
              </li>
            </ul>
          </div>
        </div>

        
        <div class="flex flex-col lg:flex-row gap-8 mt-8">
         
          <div class="bg-gray-50 rounded-3xl p-8 w-full lg:w-8/12 mx-auto">
            <div class="flex flex-wrap justify-center gap-4">
              <button class="px-5 py-3 border border-2 border-[#051844] rounded-2xl text-[#051844] hover:bg-gray-100 transition font-medium">تور کیش</button>
              <button class="px-5 py-3 border border-2 border-[#051844] rounded-2xl text-[#051844] hover:bg-gray-100 transition font-medium">تور دبی</button>
              <button class="px-5 py-3 border border-2 border-[#051844] rounded-2xl text-[#051844] hover:bg-gray-100 transition font-medium">تور گرجستان</button>
              <button class="px-5 py-3 border border-2 border-[#051844] rounded-2xl text-[#051844] hover:bg-gray-100 transition font-medium">تور آفریقای جنوبی</button>
              <button class="px-5 py-3 border border-2 border-[#051844] rounded-2xl text-[#051844] hover:bg-gray-100 transition font-medium">تور استانبول</button>
              <button class="px-5 py-3 border border-2 border-[#051844] rounded-2xl text-[#051844] hover:bg-gray-100 transition font-medium">تور آنتالیا</button>
              <button class="px-5 py-3 border border-2 border-[#051844] rounded-2xl text-[#051844] hover:bg-gray-100 transition font-medium">تور ایروان</button>
              <button class="px-5 py-3 border border-2 border-[#051844] rounded-2xl text-[#051844] hover:bg-gray-100 transition font-medium">تور ترکیبی روسیه</button>
              <button class="px-5 py-3 border border-2 border-[#051844] rounded-2xl text-[#051844] hover:bg-gray-100 transition font-medium">تور کوش آداسی</button>
              <button class="px-5 py-3 border border-2 border-[#051844] rounded-2xl text-[#051844] hover:bg-gray-100 transition font-medium">تور بانکوک</button>
            </div>
          </div>

          <!-- Logos  -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-8 items-center">
            <img src="../assets/images/footersigns/0885b5a640deac187b3f9ff1973adc6b04b7ab2c.png" alt="سازمان میراث فرهنگی" class="h-16"/>
            <img src="../assets/images/footersigns/3a01ac48c4a21ab3b95e60483eb3fa56bc77a320.png" alt="نشان ملی ثبت" class="h-16"/>
            <img src="../assets/images/footersigns/31d2c153ca1b611dc0cbb0cff181fee9df9b1e4a.png" alt="اینماد" class="h-16"/>
          </div>
        </div>
      </div>
    </footer>

    <!-- Bottom Bar -->
    <div class="bg-[#030D25] text-white py-6 px-4">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
        <p class="text-center lg:text-right font-bold">طراحی سایت و بهینه سازی سایت : پیام آوران پارسیان</p>
        <div class="flex gap-6">
          <a href="#" class="text-2xl hover:text-cyan-300 transition"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<g clip-path="url(#clip0_4021_9470)">
<path d="M20 10.1609C23.2063 10.1609 23.5859 10.175 24.8469 10.2312C26.0188 10.2828 26.6516 10.4797 27.0734 10.6438C27.6313 10.8594 28.0344 11.1219 28.4516 11.5391C28.8734 11.9609 29.1313 12.3594 29.3469 12.9172C29.5109 13.3391 29.7078 13.9766 29.7594 15.1437C29.8156 16.4094 29.8297 16.7891 29.8297 19.9906C29.8297 23.1969 29.8156 23.5766 29.7594 24.8375C29.7078 26.0094 29.5109 26.6422 29.3469 27.0641C29.1313 27.6219 28.8687 28.025 28.4516 28.4422C28.0297 28.8641 27.6313 29.1219 27.0734 29.3375C26.6516 29.5016 26.0141 29.6984 24.8469 29.75C23.5813 29.8062 23.2016 29.8203 20 29.8203C16.7938 29.8203 16.4141 29.8062 15.1531 29.75C13.9813 29.6984 13.3484 29.5016 12.9266 29.3375C12.3688 29.1219 11.9656 28.8594 11.5484 28.4422C11.1266 28.0203 10.8688 27.6219 10.6531 27.0641C10.4891 26.6422 10.2922 26.0047 10.2406 24.8375C10.1844 23.5719 10.1703 23.1922 10.1703 19.9906C10.1703 16.7844 10.1844 16.4047 10.2406 15.1437C10.2922 13.9719 10.4891 13.3391 10.6531 12.9172C10.8688 12.3594 11.1313 11.9562 11.5484 11.5391C11.9703 11.1172 12.3688 10.8594 12.9266 10.6438C13.3484 10.4797 13.9859 10.2828 15.1531 10.2312C16.4141 10.175 16.7938 10.1609 20 10.1609ZM20 8C16.7422 8 16.3344 8.01406 15.0547 8.07031C13.7797 8.12656 12.9031 8.33281 12.1438 8.62812C11.3516 8.9375 10.6813 9.34531 10.0156 10.0156C9.34531 10.6813 8.9375 11.3516 8.62813 12.1391C8.33281 12.9031 8.12656 13.775 8.07031 15.05C8.01406 16.3344 8 16.7422 8 20C8 23.2578 8.01406 23.6656 8.07031 24.9453C8.12656 26.2203 8.33281 27.0969 8.62813 27.8563C8.9375 28.6484 9.34531 29.3188 10.0156 29.9844C10.6813 30.65 11.3516 31.0625 12.1391 31.3672C12.9031 31.6625 13.775 31.8687 15.05 31.925C16.3297 31.9812 16.7375 31.9953 19.9953 31.9953C23.2531 31.9953 23.6609 31.9812 24.9406 31.925C26.2156 31.8687 27.0922 31.6625 27.8516 31.3672C28.6391 31.0625 29.3094 30.65 29.975 29.9844C30.6406 29.3188 31.0531 28.6484 31.3578 27.8609C31.6531 27.0969 31.8594 26.225 31.9156 24.95C31.9719 23.6703 31.9859 23.2625 31.9859 20.0047C31.9859 16.7469 31.9719 16.3391 31.9156 15.0594C31.8594 13.7844 31.6531 12.9078 31.3578 12.1484C31.0625 11.3516 30.6547 10.6813 29.9844 10.0156C29.3188 9.35 28.6484 8.9375 27.8609 8.63281C27.0969 8.3375 26.225 8.13125 24.95 8.075C23.6656 8.01406 23.2578 8 20 8Z" fill="white"/>
<path d="M20 13.8359C16.5969 13.8359 13.8359 16.5969 13.8359 20C13.8359 23.4031 16.5969 26.1641 20 26.1641C23.4031 26.1641 26.1641 23.4031 26.1641 20C26.1641 16.5969 23.4031 13.8359 20 13.8359ZM20 23.9984C17.7922 23.9984 16.0016 22.2078 16.0016 20C16.0016 17.7922 17.7922 16.0016 20 16.0016C22.2078 16.0016 23.9984 17.7922 23.9984 20C23.9984 22.2078 22.2078 23.9984 20 23.9984Z" fill="white"/>
<path d="M27.8469 13.5924C27.8469 14.3893 27.2 15.0314 26.4078 15.0314C25.6109 15.0314 24.9688 14.3846 24.9688 13.5924C24.9688 12.7955 25.6156 12.1533 26.4078 12.1533C27.2 12.1533 27.8469 12.8002 27.8469 13.5924Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4021_9470">
<rect width="24" height="24" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg></a>
          <a href="#" class="text-2xl hover:text-cyan-300 transition"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M26.3263 9.9043H29.6998L22.3297 18.3278L31 29.7903H24.2112L18.894 22.8383L12.8099 29.7903H9.43443L17.3174 20.7804L9 9.9043H15.9611L20.7674 16.2586L26.3263 9.9043ZM25.1423 27.7711H27.0116L14.9454 11.8174H12.9395L25.1423 27.7711Z" fill="white"/>
</svg></a>
          <a href="#" class="text-2xl hover:text-cyan-300 transition"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<g clip-path="url(#clip0_4021_9464)">
<path d="M20 8C13.3726 8 8 13.3726 8 20C8 25.6275 11.8746 30.3498 17.1013 31.6467V23.6672H14.6269V20H17.1013V18.4198C17.1013 14.3355 18.9498 12.4424 22.9597 12.4424C23.72 12.4424 25.0318 12.5917 25.5685 12.7405V16.0645C25.2853 16.0347 24.7933 16.0198 24.1822 16.0198C22.2147 16.0198 21.4544 16.7653 21.4544 18.703V20H25.3741L24.7006 23.6672H21.4544V31.9122C27.3963 31.1946 32.0005 26.1354 32.0005 20C32 13.3726 26.6274 8 20 8Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4021_9464">
<rect width="24" height="24" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg></a>
          <a href="#" class="text-2xl hover:text-cyan-300 transition"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<g clip-path="url(#clip0_4021_9461)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 20C32 26.6274 26.6274 32 20 32C13.3726 32 8 26.6274 8 20C8 13.3726 13.3726 8 20 8C26.6274 8 32 13.3726 32 20ZM20.43 16.8589C19.2628 17.3444 16.9301 18.3492 13.4319 19.8733C12.8638 20.0992 12.5663 20.3202 12.5392 20.5363C12.4934 20.9015 12.9507 21.0453 13.5735 21.2411C13.6582 21.2678 13.746 21.2954 13.8359 21.3246C14.4486 21.5238 15.2728 21.7568 15.7013 21.766C16.0899 21.7744 16.5237 21.6142 17.0026 21.2853C20.2712 19.079 21.9584 17.9638 22.0643 17.9398C22.139 17.9228 22.2426 17.9015 22.3128 17.9638C22.3829 18.0262 22.376 18.1443 22.3686 18.176C22.3233 18.3691 20.5281 20.0381 19.5991 20.9018C19.3095 21.171 19.1041 21.362 19.0621 21.4056C18.968 21.5033 18.8721 21.5958 18.78 21.6846C18.2108 22.2333 17.7839 22.6448 18.8036 23.3168C19.2936 23.6397 19.6858 23.9067 20.077 24.1731C20.5042 24.4641 20.9303 24.7543 21.4816 25.1157C21.6221 25.2077 21.7562 25.3034 21.8869 25.3965C22.3841 25.751 22.8307 26.0694 23.3826 26.0186C23.7032 25.9891 24.0345 25.6876 24.2027 24.7884C24.6002 22.6631 25.3816 18.0585 25.5622 16.161C25.578 15.9947 25.5581 15.782 25.5422 15.6886C25.5262 15.5952 25.4928 15.4621 25.3714 15.3636C25.2276 15.2469 25.0056 15.2223 24.9064 15.2241C24.455 15.232 23.7626 15.4728 20.43 16.8589Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4021_9461">
<rect width="24" height="24" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LatestOffers from "./LatestOffers.vue";
</script>
