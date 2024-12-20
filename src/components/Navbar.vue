<script setup>
</script>

<template>
    <nav class="w-full z-20 top-0 start-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/asset/image/logo.svg" class="h-24" alt="ayokesitu-logo.png">
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                    class="text-black focus:outline-none font-medium rounded-full text-sm px-5 py-4 text-center bg-[#DBFFEC]"
                    type="button" onclick="toggleModal('authentication-modal')">
                    Sign in
                </button>
                <button type="button"
                    class="text-black focus:outline-none font-medium rounded-full text-sm px-5 py-4 text-center bg-[#DBFFEC] ">Sign
                    up</button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 border-0 rounded-full p-4 bg-[#DBFFEC]"
                id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    <li class="px-3">
                        <a href="#"
                            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                            aria-current="page"><i class="fas fa-location-arrow fa-md px-1"></i>
                            Going To</a>
                    </li>
                    <li class="px-3">
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><i
                                class="fas fa-heart fa-md px-1"></i> Favourite</a>
                    </li>
                    <li class="px-3">
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><i
                                class="fas fa-user fa-md px-1"></i> Guests</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>