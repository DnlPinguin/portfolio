<template>
    <div class="container">
        <div class="desktop">
            <div class="description ">
                <h3 class="name cranberry slide-down">Based in Mainz,Ger </h3>
                <h1 class="slide-down">Daniel Valentin Kowalski</h1>
                <h2 class="cranberry slide-up">Software Engineer</h2>
                <p class="light-white bio slide-in-left">
                    As a passionate professional with expertise in backend technology, I excel in working closely with
                    clients, solving unique problems, and optimizing business processes. My experience in creating
                    exceptional digital experiences has led me to develop accessible, human-centered products.

                    Currently part of the innovative team at <a href="https://www.lucksmith.de">Lucksmith</a>, I am
                    dedicated to
                    continuous improvement and
                    staying updated with industry trends, enabling me to deliver cutting-edge solutions that enhance
                    user
                    experiences.

                    Feel free to explore my portfolio and learn more about how my work can transform your vision into
                    reality.
                </p>
            </div>
            <div class="image">
                <img :src="require(`@/assets/images/TreePurple.png`)" class="slide-in-right">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    components: {
    },
    props: {
        language: String,
    },
    data: () => ({
        text: {
            "DE": {
            },
            "EN": {
            }
        }
    })
}
</script>
<style scoped>
.container {
    width: 90%;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: row;
}

.desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5vh;
}

.name {
    text-transform: uppercase;
    font-size: 17px;
    letter-spacing: 1px;
}

.description {}


.bio {
    font-size: 18px;
    line-height: 2;
    width: 70%;
    margin-top: 3rem;

}

.description a {
    text-decoration: none;
    color: #d41367;
}


h1 {
    font-size: 4rem;
    letter-spacing: 2px;
    text-transform: uppercase;
}

h2 {
    letter-spacing: 2px;
    text-transform: uppercase;
}

.image img {
    width: 500px;
    transform: translateX(100%);
    transition: all 1s ease;
}


@media screen and (max-width: 728px) {
    .container {
        width: 90%;
    }
}
</style>