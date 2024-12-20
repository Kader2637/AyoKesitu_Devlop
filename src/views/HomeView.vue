<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>
<template>
    <div class="bg-[#D0EFFF] overflow-x-hidden">


        <div class="flex flex-col relative">

            <div class="absolute inset-0 z-0 overflow-hidden">
                <img src="/asset/image/bannerhome.png" alt="Background"
                    class="w-full h-full object-cover filter blur-sm" />
            </div>
            <Navbar />

            <div class="flex flex-col items-center justify-center text-center mt-16 z-10 relative px-4 sm:px-8">
                <h1 class="text-4xl text-black font-semibold">Discover the vacation of your dreams</h1>
                <p class="text-black mt-2 max-w-3xl">Search low price on flights, travel, and trip tours</p>
            </div>

            <div class="flex flex-col items-center justify-center mt-16 px-4 sm:px-8 z-10 relative">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                    <input type="text" class="bg-white border p-5 rounded-full w-full max-w-xl mx-auto"
                        placeholder="Explore destination">
                    <input type="text" class="bg-white border p-5 rounded-full w-full max-w-xl mx-auto"
                        placeholder="Departure">
                    <input type="text" class="bg-white border p-5 rounded-full w-full max-w-xl mx-auto"
                        placeholder="Return">
                </div>
            </div>

            <div class="flex gap-4 items-center justify-center mt-16 mb-10 px-6 sm:px-24 flex-wrap z-10 relative">
                <div class="border-0 p-6 rounded-lg bg-[#FF9090] w-full sm:w-auto shadow-lg">
                    <div class="grid grid-cols-12 items-center">
                        <div class="col-span-7">
                            <h5 class="text-2xl text-white font-semibold">Vacations</h5>
                            <p class="text-white">1,412 vacations</p>
                        </div>
                        <div class="col-span-5">
                            <img src="/asset/image/Vacations.svg" alt="vacations" class="max-w-full">
                        </div>
                    </div>
                </div>
                <div class="border-0 p-6 rounded-lg bg-[#93FFC6] w-full sm:w-auto shadow-lg">
                    <div class="grid grid-cols-12 items-center">
                        <div class="col-span-7">
                            <h5 class="text-2xl text-white font-semibold">Hiking</h5>
                            <p class="text-white">1,412 hikings</p>
                        </div>
                        <div class="col-span-5">
                            <img src="/asset/image/Hiking.svg" alt="Hiking" class="max-w-full" style="width: 160px;">
                        </div>
                    </div>
                </div>
                <div class="border-0 p-6 rounded-lg bg-[#93DAFF] w-full sm:w-auto shadow-lg">
                    <div class="grid grid-cols-12 items-center">
                        <div class="col-span-7">
                            <h5 class="text-2xl text-white font-semibold">Recreational</h5>
                            <p class="text-white">1,412 recreationals</p>
                        </div>
                        <div class="col-span-5">
                            <img src="/asset/image/Recreational.svg" alt="Recreational" class="max-w-full"
                                style="width: 160px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div class="px-6 sm:px-20 mt-10 w-full">
                <div class="border rounded-lg bg-[#E7F7FF] p-5">
                    <div class="flex gap-4 items-center justify-between">
                        <h1 class="text-gray-700 text-2xl font-bold">Upcoming trip</h1>
                        <div class="border px-2 py-1 bg-white shadow-sm rounded-full"><span>3d:10h:10m</span></div>
                    </div>
                    <div class="grid gap-4 mt-12 grid-cols-1 sm:grid-cols-3">
                        <div class="rounded-lg min-h-64 relative">
                            <div class="absolute inset-0">
                                <img src="/asset/image/bali.png" alt="Bali Trip"
                                    class="w-full h-full object-cover rounded-lg">
                            </div>
                            <div class="absolute opacity-75 min-h-16 p-5 bottom-4 left-0 right-0 rounded-lg mx-5"
                                style="background-color: rgba(255, 255, 255, 0.9);">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <h4 class="text-xl font-semibold">3 day Bali</h4>
                                        <p class="text-gray-600">122 people</p>
                                    </div>
                                    <button
                                        class="bg-gray-600 text-white opacity-100 text-gray-700 rounded-full px-4 py-2 cursor-pointer">Detail</button>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg min-h-64 relative">
                            <div class="absolute inset-0">
                                <img src="/asset/image/sumba.png" alt="Bali Trip"
                                    class="w-full h-full object-cover rounded-lg">
                            </div>
                            <div class="absolute opacity-75 min-h-16 p-5 bottom-4 left-0 right-0 rounded-lg mx-5"
                                style="background-color: rgba(255, 255, 255, 0.9);">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <h4 class="text-xl font-semibold">5 Day Sumba</h4>
                                        <p class="text-gray-600">122 people</p>
                                    </div>
                                    <button
                                        class="bg-gray-600 text-white opacity-100 text-gray-700 rounded-full px-4 py-2 cursor-pointer">Detail</button>
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg min-h-64 relative">
                            <div class="absolute inset-0">
                                <img src="/asset/image/bromo.png" alt="Bali Trip"
                                    class="w-full h-full object-cover rounded-lg">
                            </div>
                            <div class="absolute opacity-75 min-h-16 p-5 bottom-4 left-0 right-0 rounded-lg mx-5"
                                style="background-color: rgba(255, 255, 255, 0.9);">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <h4 class="text-xl font-semibold">2 Day Bromo</h4>
                                        <p class="text-gray-600">122 people</p>
                                    </div>
                                    <button
                                        class="bg-gray-600 text-white opacity-100 text-gray-700 rounded-full px-4 py-2 cursor-pointer">Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section class="px-4 sm:px-10 lg:px-20 mt-10 mb-10 w-full">
            <h1 class="text-gray-700 text-2xl sm:text-3xl font-bold mb-6">Explore Indonesia</h1>
            <div class="flex flex-wrap gap-4">
                <button class="bg-[#DBFFEC] text-black rounded-full px-5 py-2">Filters</button>
                <button class="bg-[#DBFFEC] text-black rounded-full px-5 py-2">Nearby</button>
                <button class="bg-[#5FFFAA] text-black rounded-full px-5 py-2">Popular</button>
                <button class="bg-[#DBFFEC] text-black rounded-full px-5 py-2">Recommendation</button>
                <button class="bg-[#DBFFEC] text-black rounded-full px-5 py-2">New</button>
            </div>
            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="max-w-full rounded-lg overflow-hidden shadow-lg bg-white">
                    <img class="w-full h-48 object-cover rounded-t-lg" src="/asset/image/sumba.png" alt="Sumba Island">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">5 Day Sumba Island</div>
                        <p class="text-gray-700 text-base">5 Nov - 10 Nov 2024</p>
                        <p class="text-gray-900 text-2xl mt-4">$1,420/Person</p>
                    </div>
                </div>
                <div class="max-w-full rounded-lg overflow-hidden shadow-lg bg-white">
                    <img class="w-full h-48 object-cover rounded-t-lg" src="/asset/image/sumba.png" alt="Sumba Island">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">5 Day Sumba Island</div>
                        <p class="text-gray-700 text-base">5 Nov - 10 Nov 2024</p>
                        <p class="text-gray-900 text-2xl mt-4">$1,420/Person</p>
                    </div>
                </div>
                <div class="max-w-full rounded-lg overflow-hidden shadow-lg bg-white">
                    <img class="w-full h-48 object-cover rounded-t-lg" src="/asset/image/sumba.png" alt="Sumba Island">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">5 Day Sumba Island</div>
                        <p class="text-gray-700 text-base">5 Nov - 10 Nov 2024</p>
                        <p class="text-gray-900 text-2xl mt-4">$1,420/Person</p>
                    </div>
                </div>
                <div class="max-w-full rounded-lg overflow-hidden shadow-lg bg-white">
                    <img class="w-full h-48 object-cover rounded-t-lg" src="/asset/image/sumba.png" alt="Sumba Island">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">5 Day Sumba Island</div>
                        <p class="text-gray-700 text-base">5 Nov - 10 Nov 2024</p>
                        <p class="text-gray-900 text-2xl mt-4">$1,420/Person</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="px-4 sm:px-10 lg:px-20 mt-20 mb-10 w-full space-y-16">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 ">
                <div class="col-span-12 lg:col-span-4">
                    <div class="border rounded-xl bg-white p-4 flex flex-col items-center text-center">
                        <img src="/asset/image/left-side.svg" alt="Left Side">
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-1">
                </div>
                <div class="col-span-12 lg:col-span-6 space-y-4">
                    <h1 class="text-2xl sm:text-3xl">Safely saved list</h1>
                    <p class="text-gray-700">Neatly arranged for your ease of access. Go to Saved at the top navigation
                        bar, where
                        we save your saved items. We group them based on category. Just a few clicks away from starting
                        your
                        journey!</p>
                    <button class="bg-[#38FF96] py-2 px-6 rounded-full text-white">Learn More</button>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 ">
                <div class="col-span-12 lg:col-span-6 space-y-4">
                    <h1 class="text-2xl sm:text-3xl">Easy Reschedule</h1>
                    <p class="text-gray-700">No more chasing after the airline. Changing your flight is only a matter of
                        a few
                        clicks. Easy Reschedule ultimately saves your time! Open your e-ticket Through My Booking, open
                        the e-
                        ticket of the flight you want to reschedule.</p>
                    <button class="bg-[#38FF96] py-2 px-6 rounded-full text-white">Learn More</button>
                </div>
                <div class="col-span-12 lg:col-span-1">
                </div>
                <div class="col-span-12 lg:col-span-4 flex justify-end">
                    <div class="border rounded-xl bg-white p-4 flex flex-col items-center text-center">
                        <img src="/asset/image/left-side.svg" alt="Left Side">
                    </div>
                </div>
            </div>
        </section>


        <section class="px-4 sm:px-10 lg:px-20 mt-20 mb-10 w-full">
            <h1 class="text-2xl sm:text-3xl font-semibold text-center mb-10 mt-10">Satisfied customers are our best ads
            </h1>
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="border rounded-lg bg-white p-5">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <h3 class="text-xl font-bold">Anita Wijaya</h3>
                            <p class="text-gray-500">Travel Blogger</p>
                        </div>
                        <span class="text-gray-400">3.4</span>
                    </div>
                    <p class="text-gray-700 mb-7 mt-5">Paket wisata dari TripMaster sangat memudahkan saya dalam
                        merencanakan
                        liburan. Sistem pemesanan mereka yang sederhana membantu saya memilih destinasi dan jadwal
                        perjalanan dengan
                        tepat.</p>
                </div>
                <div class="border rounded-lg bg-white p-5">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <h3 class="text-xl font-bold">Anita Wijaya</h3>
                            <p class="text-gray-500">Travel Blogger</p>
                        </div>
                        <span class="text-gray-400">3.4</span>
                    </div>
                    <p class="text-gray-700 mb-7 mt-5">Paket wisata dari TripMaster sangat memudahkan saya dalam
                        merencanakan
                        liburan. Sistem pemesanan mereka yang sederhana membantu saya memilih destinasi dan jadwal
                        perjalanan dengan
                        tepat.</p>
                </div>
                <div class="border rounded-lg bg-white p-5">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <h3 class="text-xl font-bold">Anita Wijaya</h3>
                            <p class="text-gray-500">Travel Blogger</p>
                        </div>
                        <span class="text-gray-400">3.4</span>
                    </div>
                    <p class="text-gray-700 mb-7 mt-5">Paket wisata dari TripMaster sangat memudahkan saya dalam
                        merencanakan
                        liburan. Sistem pemesanan mereka yang sederhana membantu saya memilih destinasi dan jadwal
                        perjalanan dengan
                        tepat.</p>
                </div>
                <div class="border rounded-lg bg-white p-5">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <h3 class="text-xl font-bold">Anita Wijaya</h3>
                            <p class="text-gray-500">Travel Blogger</p>
                        </div>
                        <span class="text-gray-400">3.4</span>
                    </div>
                    <p class="text-gray-700 mb-7 mt-5">Paket wisata dari TripMaster sangat memudahkan saya dalam
                        merencanakan
                        liburan. Sistem pemesanan mereka yang sederhana membantu saya memilih destinasi dan jadwal
                        perjalanan dengan
                        tepat.</p>
                </div>
                <div class="border rounded-lg bg-white p-5">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <h3 class="text-xl font-bold">Anita Wijaya</h3>
                            <p class="text-gray-500">Travel Blogger</p>
                        </div>
                        <span class="text-gray-400">3.4</span>
                    </div>
                    <p class="text-gray-700 mb-7 mt-5">Paket wisata dari TripMaster sangat memudahkan saya dalam
                        merencanakan
                        liburan. Sistem pemesanan mereka yang sederhana membantu saya memilih destinasi dan jadwal
                        perjalanan dengan
                        tepat.</p>
                </div>
                <div class="border rounded-lg bg-white p-5">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <h3 class="text-xl font-bold">Anita Wijaya</h3>
                            <p class="text-gray-500">Travel Blogger</p>
                        </div>
                        <span class="text-gray-400">3.4</span>
                    </div>
                    <p class="text-gray-700 mb-7 mt-5">Paket wisata dari TripMaster sangat memudahkan saya dalam
                        merencanakan
                        liburan. Sistem pemesanan mereka yang sederhana membantu saya memilih destinasi dan jadwal
                        perjalanan dengan
                        tepat.</p>
                </div>
            </div>
        </section>

        <section class="flex justify-center px-4 sm:px-10 lg:px-20 mt-10 mb-10">
            <img src="/asset/image/WeMakeEvery.svg" alt="We Make Every">
        </section>

        <Footer />

        <div id="authentication-modal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-full max-h-full backdrop-blur-sm">
            <div class="relative w-full max-w-4xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-center justify-between dark:border-gray-600">
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="authentication-modal">
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="grid grid-cols-12 gap-4 p-3">
                        <div class="col-span-12 md:col-span-6">
                            <div class="p-4 md:p-5">
                                <form class="space-y-4" action="#">
                                    <div class="flex justify-center">
                                        <img src="/asset/image/logo.svg" alt="logo.png" class="flex justify-center">
                                    </div>
                                    <div>
                                        <label for="email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Email</label>
                                        <input type="email" name="email" id="email"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label for="password"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required />
                                    </div>
                                    <div class="flex justify-end">
                                        <a href="#"
                                            class="text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot
                                            Password?</a>
                                    </div>
                                    <button type="submit"
                                        class="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                        Sign in
                                    </button>
                                    <span class="flex justify-center">Or</span>
                                    <a href="#"
                                        class="border p-3 rounded-lg bg-gray-100 flex justify-center items-center"><i
                                            class="fa fa-google fa-md"></i> Sign in with Google</a>
                                    <a href="#"
                                        class="border p-3 rounded-lg bg-gray-100 flex justify-center items-center"><i
                                            class="fa fa-facebook fa-md"></i> Sign in with Facebook</a>

                                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Don't have an account? <a href="#"
                                            class="text-blue-700 hover:underline dark:text-blue-500">Sign
                                            up</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-6">
                            <img src="/asset/image/login.svg" alt="Login illustration"
                                class="rounded-lg p-3 object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
