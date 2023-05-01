<template>
  <body @scroll="handleScroll">
    <Header :language="language" @switch-language="switchLanguage" />
    <main>
      <div class="left desktop slide-up">
        <ul class="social-media-icons">
          <li><a href="#"> <i class="fab fa-facebook"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>
        <div class="footer-line" />
      </div>
      <div class="content">


        <section id="about">
          <About :language="language" />
        </section>

        <Seperator :number="'01'" :title="'Check out my Work'" id="work" />
        <section>
          <Work :language="language" />
        </section>

        <Seperator :number="'02'" :title="'My Experience'" id="experience" />
        <section>
          <Experience ref="watchedDiv" :language="language" />
        </section>

        <Seperator :number="'03'" :title="'Get In Contact'" id="contact" />
        <section>
          <Contact :language="language" />
        </section>

      </div>
      <div class="right desktop slide-up">
        <a href="mailto:daniel.valentink@gmail.com">daniel.valentink@gmail.com</a>
        <div class="footer-line" />
      </div>


      <div class="mobile-footer">
        <ul class="social-media-icons">
          <li><a href="#"> <i class="fab fa-facebook"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>
        <a href="mailto:daniel.valentink@gmail.com">Get in Touch</a>
        <div class="footer-line" />
      </div>
    </main>
  </body>
</template>

<script>

import Header from './Header.vue'

import About from '@/components/Sections/About.vue';
import Work from '@/components/Sections/Work.vue';
import Experience from '@/components/Sections/Experience.vue';
import Contact from '@/components/Sections/Contact.vue';
import Seperator from '@/components/Seperator.vue';

export default {
  name: 'MainCard',
  props: {
    msg: String
  },

  components: {
    Header,
    About,
    Work,
    Experience,
    Contact,
    Seperator
  },
  data() {
    return {
      language: "DE",
    }
  },
  async mounted() {
    await this.$nextTick();
    this.observeDiv()
  },

  beforeUnmount() {
    this.observer.disconnect();
  },
  methods: {
    switchLanguage(newLang) {
      this.language = newLang
      console.log("new lang", newLang)
    },
    observeDiv() {
      const watchedDiv = this.$refs.watchedDiv;

      this.observer = new IntersectionObserver(
        (entries, observer) => {
          console.log(observer)
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('Div is in view range');
              // Do something when the div is in the view range
            } else {
              console.log('Div is not in view range');
              // Do something when the div is not in the view range
            }
          });
        },
        { threshold: 0.1 }
      );

      this.observer.observe(watchedDiv);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
main {
  padding-top: 8vh;
  font-size: 1.5em;
  transition: 400ms;
}



a {
  text-decoration: none;
}

.left {
  position: fixed;
  left: 0;
  top: 0;
  width: 5vw;
  margin-top: 60vh;
  height: 40vh;
  z-index: 1;
}

.right {
  position: fixed;
  right: 0;
  top: 0;
  width: 5vw;
  margin-top: 60vh;
  height: 40vh;
  z-index: 1;
}

.content {
  width: 90vw;
  margin: 0 auto;
  padding: 0 5vw;
  display: grid;
}

section {
  min-height: 50vh;
  margin-top: 2vh;
}

h1 {
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 0;
  letter-spacing: 8px;
}

h2 {
  margin-top: 0;
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 0;
  letter-spacing: 8px;
}


h3 {
  letter-spacing: 4px;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 700;
}

p {
  margin: 0;
  padding: 0;
  font-size: 17px;
}

.social-media-icons {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 60vh;
  height: 60%;
  margin: auto;
  margin-bottom: 30px;
}

.social-media-icons li {
  margin: 0 10px;
}


.social-media-icons a {
  display: flex;
  margin: auto;
  justify-content: center;
  align-content: center;
  color: #d41367;
  font-size: 24px;
  line-height: 1;
  text-align: center;
  width: 100%;
  height: auto;
  border-radius: 50%;
  transition: color 0.3s ease;
}

.social-media-icons a:hover {
  color: #fff;
}

.footer-line {
  background-color: #d41367;
  margin-top: 3rem;
  height: 100%;
  width: 1px;
  margin: auto;
}

.right a {
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  font-size: 15px;
  letter-spacing: 2px;
  color: #d41367;
  writing-mode: vertical-rl;
  justify-content: center;
  align-content: center;
}

.mobile-footer {
  display: none;
}

@media screen and (max-width: 728px) {
  .desktop {
    display: none
  }

  .content {
    width: 100vw;
    padding: 0;
  }

  .social-media-icons {
    width: 60%;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
  }

  .mobile-footer {
    display: block;
  }

  .mobile-footer a {
    margin: auto;
    margin-bottom: 30px;
    display: flex;
    font-size: 15px;
    letter-spacing: 2px;
    color: #d41367;
    justify-content: center;
    align-content: center;
  }
}
</style>
