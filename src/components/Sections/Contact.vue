<template>
    <div class="contact-container">
        <h4>Lets chat about your future project</h4>
        <p class="phone-number">+49 176 418 64 586</p>
    </div>

    <div class="baseline">
        <p>Realized By
            <b>Daniel Valentin Kowalski ©2023</b>
        </p>
        <div class="legal-links">
            <a>Imprint</a>
            <p>|</p>
            <a>Data Security</a>
        </div>

    </div>
</template>
<script>

export default {
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
.contact-container {
    text-align: left;
    width: 60%;
    margin: auto;
}

h4 {
    font-size: 2.5rem;
    font-weight: 200;
    margin-top: 5rem;
}

.phone-number {
    font-size: 20px;
    font-weight: 100;
    margin-top: 1rem;
}

.baseline {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    margin-top: 20rem;
    margin-bottom: 4rem;
}

.baseline p {
    color: #FFFFFF80;
    font-weight: 100;
}

.baseline b {
    color: #FFFFFF90;
    font-weight: 100;
    text-decoration: underline;
}

.legal-links {
    width: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
    margin: auto;
    color: #d41367;
    font-weight: 100;
    font-size: 18px;
    text-decoration: underline;
}

.legal-links a {}
</style>