<template>
    <div class="container">
        <router-link class="back-arrow" to="/">&#x2190;</router-link>
        <h2>WEBSEITENBETREIBER</h2>
        <ul>
            <li>Daniel-Valentin Kowalski</li>
        </ul>
        <h2>INFORMATIONEN ÜBER DAS UNTERNEHMEN</h2>
        <ul>
            <li>Freiberufler</li>
            <li>Kirsteinstraße 3E</li>
            <li>Mainz, 55131</li>
            <li>daniel.valentink@gmail.com</li>
            <li>+4917641864586</li>
        </ul>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    .back-arrow{
        color: white;
        background-color: #d41367;
        width: 5vw;  
        font-size: 3vw;
        border-bottom-right-radius: 20px;
    }

    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
    }

    ul {
        list-style-type: none;
    }

    li{
        margin-top: 20px;
    }


</style>