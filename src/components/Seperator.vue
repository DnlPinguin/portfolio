<template>
    <div class="container">
        <p class="number cranberry">{{ number }}</p>
        <p class="title"> {{ title }}</p>
        <div class="seperator" />
    </div>
</template>
<script>
export default {
    props: {
        number: {
            type: String
        },
        title: {
            type: String
        }
    },
    methods: {
    }
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: auto;
    /* add this line */

}

.number {
    font-size: 2rem;
    font-weight: bold;
    margin-left: 1rem;
    font-family: 'Courier New', Courier, monospace;
}

.title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: .7rem;
    margin-right: .7rem;
    letter-spacing: 5px;
}

.seperator {
    height: 2px;
    width: 100%;
    background-color: #d41367;

}
</style>