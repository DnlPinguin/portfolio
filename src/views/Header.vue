<template>
    <header>



        <Burger @toggled="toggle" :open="menuOpen" class="burger-button" />

        <img class="desktop logo" src="@/assets/svg/logo.svg" alt="Your SVG image">

        <ul v-on:click="closeMenu" class="desktop header-nav" ref="scrollContainer" @scroll="handleScroll"
            :class="{ 'scroll-down': scrollDirection === 'down', 'scroll-up': scrollDirection === 'up' }">
            <li>
                <a href="#about" v-on:click="changeSection('about')" :class="{ active: section == 'about' }">
                    {{ text[language].about }}
                </a>
            </li>
            <li>
                <a href="#work" v-on:click="changeSection('work')" :class="{ active: section == 'work' }">{{
                    text[language].work }}</a>
            </li>
            <li>
                <a href="#experience" v-on:click="changeSection('experience')"
                    :class="{ active: section == 'experience' }">{{
                        text[language].experience }}</a>
            </li>
            <li>
                <a href="#contact" v-on:click="changeSection('contact')" :class="{ active: section == 'contact' }">{{
                    text[language].contact }}</a>
            </li>
            <li>
                <button @click="switchLanguage('DE')" class="language-button" :class="{ active: language == 'DE' }">
                    De
                </button>
                <button @click="switchLanguage('EN')" class="language-button" :class="{ active: language == 'EN' }">
                    En
                </button>
            </li>
        </ul>


        <SideBar class="side-bar" :open="menuOpen">
            <ul v-on:click="closeMenu">
                <li>
                    <a href="#about" v-on:click="changeSection('about')" :class="{ active: section == 'about' }">
                        {{ text[language].about }}
                    </a>
                </li>
                <li>
                    <a href="#work" v-on:click="changeSection('work')" :class="{ active: section == 'work' }">{{
                        text[language].work }}</a>
                </li>
                <li>
                    <a href="#experience" v-on:click="changeSection('experience')"
                        :class="{ active: section == 'experience' }">{{
                            text[language].experience }}</a>
                </li>
                <li>
                    <a href="#contact" v-on:click="changeSection('contact')" :class="{ active: section == 'contact' }">{{
                        text[language].contact }}</a>
                </li>
                <li>
                    <button @click="switchLanguage('DE')" class="language-button" :class="{ active: language == 'DE' }">
                        De
                    </button>
                    <button @click="switchLanguage('EN')" class="language-button" :class="{ active: language == 'EN' }">
                        En
                    </button>
                </li>
            </ul>

        </SideBar>
    </header>
</template>

<script>

import Burger from '../components/NavBar/Burger.vue';
import SideBar from '../components/NavBar/SideBar.vue'

export default {
    name: 'Header',
    components: {
        Burger,
        SideBar
    },
    props: {
        language: String,
    },
    data: () => ({
        menuOpen: false,
        text: {
            "DE": {
                'about': 'Über Mich',
                'experience': 'Erfahrung',
                'work': 'Arbeit',
                'contact': 'Kontakt',
                'resume': 'Lebenslauf',
            }, "EN": {
                'about': 'About Me',
                'experience': 'Experience',
                'work': 'Work',
                'contact': 'Contact',
                'resume': 'Resume',
            }
        },
        lastScrollTop: 0,
        scrollDirection: null,
        section: 'about'

    }),
    methods: {
        toggle() {
            this.menuOpen = !this.menuOpen
        },
        closeMenu() {
            this.menuOpen = false
        },
        switchLanguage(newLang) {
            this.$emit('switch-language', newLang)
        },
        handleScroll() {
            const st = this.$refs.scrollContainer.scrollTop
            console.log(st)
            if (st > this.lastScrollTop) {
                this.scrollDirection = 'down'
            } else {
                this.scrollDirection = 'up'
            }
            this.lastScrollTop = st
        },
        changeSection(_section) {
            console.log(_section)
            this.section = _section
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    position: fixed;
    width: 100%;
    display: flex;
    padding: 0;
    height: 8vh;
    z-index: 1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: linear-gradient(to right, #26011f, #11020f);
    opacity: 0.8;
}


.social-icons {
    list-style: none;
    margin: 0;
    padding: 0;
}

.social-icons li {
    display: inline-block;
    margin-right: 10px;

}

.social-icons li:last-child {
    margin-right: 0;
}

.header-nav {
    display: inline-flex;
    justify-content: space-around;
    width: 40%;
    margin-left: 50%;
    align-items: center;
}

.logo {
    margin-left: 3vw;
    justify-content: center;
    align-content: center;
    padding-top: 1vh;
    height: 50px;
    width: auto;
}

li {
    display: flex;
    flex-direction: row;
    letter-spacing: 3px;
    font-weight: 700;
}

a {
    text-decoration: none;
    transition: 0.2s;
    font-size: 12px;
    padding: 10px 0;
    color: white;
}

.number {
    font-size: 12px;
    padding-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-family: 'Courier New', Courier, monospace;
}

a:hover {
    color: #d41367;
}

.language-button {
    background: none;
    color: rgb(236, 233, 233);
    border: none;
    cursor: pointer;
    margin-left: 5%;
}

.active {
    color: #d41367;

}

.button {
    font-size: 12px;
}


@media screen and (min-width:729px) {
    .burger-button {
        display: none;
    }

    .side-bar {
        display: none;
    }
}

@media screen and (max-width: 728px) {
    header {
        float: none;
        text-align: left;
        grid-template-columns: 80% 20%;
        opacity: 1;
    }

    ul {
        flex-direction: column;
        text-align: left;
        margin-top: 30%;
    }

    .desktop {
        display: none;
    }

    a {
        font-size: 14px;
        text-align: center;
        color: white;
    }

    li {
        list-style-type: none;
        margin: auto;
        margin-top: 10%;
        font-weight: 500;
    }

    .burger-button {
        color: white;
        width: 5%;
        margin-left: 90%;
    }
}
</style>
