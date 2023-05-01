<template>
    <div class="container">
        <img class="image-container" :src="require(`../assets/${source}`)">
        <div class="overlay" />
        <p v-if="description" class="image-text">{{description}}</p>
    </div>
</template>
<script>
    export default {
        props: {
            source :{
                type: String
            },
            description :{
                type: String
            }
        },
        methods: {
        }
    }
</script>
<style scoped>
    .container{
        position: relative;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    .image-container{
        width: 100%;
        height: 100%;
    }


    
    .image-text{
        background-color: #d41367;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        color: white;
        justify-content: center;
        display: flex;  
        opacity: 0.95;
        height: 15%;
        width: 100%;
        position: absolute;
        margin: auto;
        align-items:center;
        font-size: 2vw;
    }
    .image-container:hover ~ .image-text{
        transition: transform 0.4s ease;
        transform: translatey(-100%);
    }
    
</style>