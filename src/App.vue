<script setup>
import Navbar from './components/Navbar.vue'

</script>
<template>
  <div class="bg-[#D0EFFF] overflow-x-hidden">

    <Navbar />

    <div class="flex flex-col ">

      <div class="flex flex-col items-center justify-center flex-grow text-center mt-16">
        <h1 class="text-4xl">Discover the vacation of your dreams</h1>
        <p class="text-gray-700 mt-2">Search low price on flights,travel,and trip tour</p>
      </div>

      <div class="flex flex-col items-center justify-center flex-grow text-center mt-16">
        <div class="grid grid-cols-12 gap-4">
          <input type="text" name="" id="" class="bg-white border p-3 rounded-full col-span-4 w-full"
            placeholder="Explore destination">
          <input type="text" name="" id="" class="bg-white border p-3 rounded-full col-span-4 w-full"
            placeholder="Departure">
          <input type="text" name="" id="" class="bg-white border p-3 rounded-full col-span-4 w-full"
            placeholder="Return">
        </div>
      </div>

      <div class="flex gap-4 items-center justify-center flex-grow text-center mt-16 px-24">
        <div class="border p-3 rounded-lg bg-[#FF9090]">
          <div class="grid grid-cols-12 items-center">
            <div class="col-span-7">
              <h5 class="text-2xl ms-0">Vacations</h5>
              <p>1,412 vacations</p>
            </div>
            <div class="col-span-5">
              <img src="/public/asset/image/Vacations.svg" alt="vacations.svg" class="max-w-full">
            </div>
          </div>
        </div>
        <div class="border p-3 rounded-lg bg-[#93FFC6]">
          <div class="grid grid-cols-12 items-center">
            <div class="col-span-7">
              <h5 class="text-2xl ms-0">Hiking</h5>
              <p>1,412 hikings</p>
            </div>
            <div class="col-span-5">
              <img src="/public/asset/image/Hiking.svg" alt="Hiking.svg" class="max-w-full">
            </div>
          </div>
        </div>
        <div class="border p-3 rounded-lg bg-[#93DAFF]">
          <div class="grid grid-cols-12 items-center">
            <div class="col-span-7">
              <h5 class="text-2xl ms-0">Recreational</h5>
              <p>1,412 recreationals</p>
            </div>
            <div class="col-span-5">
              <img src="/public/asset/image/Recreational.svg" alt="Recreational.svg" class="max-w-full">
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="px-10 py-5">
      <div class="border rounded-lg bg-[#E7F7FF] p-5">

        <div class="flex gap-4 items-center">
          <h1 class="text-gray-700 text-2xl font-bold">Upcoming trip</h1>
          <div class="border px-2 py-1 bg-white shadow-sm rounded-full"><span>3d:10h:10s</span></div>
        </div>

        <div class="grid gap-4 mt-12 grid-cols-12">

          <div class="bg-gray-300 rounded-lg min-h-64 col-span-4 relative">
            <div class="absolute bg-white opacity-75 min-h-16 p-5 bottom-4 left-0 right-0 rounded-lg mx-5">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-xl font-semibold">3 day Bali</h4>
                  <p class="text-gray-600">122 people</p>
                </div>
                <span class="bg-gray-100 opacity-100 text-gray-700 rounded-full px-4 py-2 cursor-pointer">See
                  details</span>
              </div>
            </div>
          </div>

          <div class="bg-gray-300 rounded-lg min-h-64 col-span-4 relative">
            <div class="absolute bg-white opacity-75 min-h-16 p-5 bottom-4 left-0 right-0 rounded-lg mx-5">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-xl font-semibold">1 day Sumba</h4>
                  <p class="text-gray-600">122 people</p>
                </div>
                <span class="bg-gray-100 opacity-100 text-gray-700 rounded-full px-4 py-2 cursor-pointer">See
                  details</span>
              </div>
            </div>
          </div>

          <div class="bg-gray-300 rounded-lg min-h-64 col-span-4 relative">
            <div class="absolute bg-white opacity-75 min-h-16 p-5 bottom-4 left-0 right-0 rounded-lg mx-5">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-xl font-semibold">2 day Bromo</h4>
                  <p class="text-gray-600">122 people</p>
                </div>
                <span class="bg-gray-100 opacity-100 text-gray-700 rounded-full px-4 py-2 cursor-pointer">See
                  details</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- login modal -->
    <div id="authentication-modal" tabindex="-1" aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-full max-h-full">
      <div class="relative w-full max-w-4xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between dark:border-gray-600">

            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal">
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="grid grid-cols-12 gap-4 p-3">
            <div class="col-span-12 md:col-span-6">
              <div class="p-4 md:p-5">
                <form class="space-y-4" action="#">
                  <div class="flex justify-center">
                    <img src="/public/logo.png" alt="logo.png" class="flex justify-center">
                  </div>
                  <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      email</label>
                    <input type="email" name="email" id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com" required />
                  </div>
                  <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required />
                  </div>
                  <div class="flex justify-end">
                    <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
                  </div>
                  <button type="submit"
                    class="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Sign in
                  </button>
                  <span class="flex justify-center">Or</span>
                  <a href="#" class="border p-3 rounded-lg bg-gray-100 flex justify-center items-center"><i
                      class="fa fa-google fa-md"></i> Sign in with google</a>
                  <a href="#" class="border p-3 rounded-lg bg-gray-100 flex justify-center items-center"><i
                      class="fa fa-facebook fa-md"></i> Sign in with facebook</a>

                  <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Don't you have an account? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Sign
                      up</a>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-span-12 md:col-span-6">
              <img src="/public/asset/image/login.svg" alt="Login illustration" class="rounded-lg p-3 object-cover">
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>