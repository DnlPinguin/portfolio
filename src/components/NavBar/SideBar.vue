<template>
    <div class="sidebar">
        <div class="sidebar-blur" v-if="open"></div>
        <transition name="slide">
            <div v-if="open" class="sidebar-panel">
                <slot />
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true,
            default: false
        }
    }
}
</script>
<style>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.sidebar-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    opacity: 0.7;
    z-index: 1;
}


.blurred {
    backdrop-filter: blur(10px);
    opacity: 0.7;
    z-index: 1;
}


.slide-enter-active,
.slide-leave-active {
    transition: transform .3s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translatex(100%);
    transition: all .3s ease-in 0s
}

.sidebar-backdrop {
    background-color: rgba(0, 0, 0);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
}

.sidebar-panel {
    background-color: black;
    backdrop-filter: blur(0px);
    opacity: 1;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    min-height: 100vh;
    text-align: center;
    width: 50%;
    z-index: 2;
}
</style>