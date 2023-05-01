<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import MainCard from './views/MainCard.vue'

export default {
  name: 'App',
  components: {
    // MainCard
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 7vh;
  height: 100%;
  overflow-y: scroll;

}

.cranberry {
  color: #d41367;
}

.light-white {
  color: rgb(237, 238, 240);
}

.grey {
  color: rgb(99, 101, 105);
}

.default-button {
  background-color: transparent;
  color: inherit;
  border: 2px solid #d41367;
  border-radius: 5px;
  padding: 10px;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
}

.default-button:hover {
  background-color: #280b18;
  color: #d41367;
}

.default-button:active {
  background-color: #d41367;
  color: #111;
}

body {
  background-color: rgb(237, 238, 240);
  margin: 0 !important;
  padding: 0 !important;
  font-family: 'Inter-Regular', sans-serif;
  color: white;
  background: linear-gradient(to right, #26011f, #11020f);
  overflow-x: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #11020f;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #d41367;
  border-radius: 10px;
}


/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}


.slide-in-left {
  animation: slideInLeft 1s forwards;
  animation-delay: .5s;
  opacity: 0;
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}


.slide-in-right {
  animation: slideInRight 1s forwards;
  animation-delay: .5s;
  opacity: 0;
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}


.slide-up {
  animation: slideUp 1s forwards;
  animation-delay: .5s;
  opacity: 0;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

.slide-down {
  animation: slideDown 1s forwards;
  animation-delay: .5s;
  opacity: 0;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>
