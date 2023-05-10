<!-- src/components/ProjectCard.vue -->

<template>
    <a :href="project.link" target="_blank" class="project-card">
        <div class="dekstop image">
            <img :src="require(`@/assets/images/${project.image}`)" class="slide-in-left">
        </div>
        <div class="description slide-in-right">
            <h4>{{ project.techStack }}</h4>
            <h3>{{ project.title }}</h3>
        </div>
    </a>

    <div class="description slide-up">
        <p>{{ project.description }}</p>
    </div>
</template>
  
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {

        };
    },
    methods: {
        toggleOverlay() {
            this.isOverlayVisible = !this.isOverlayVisible;
        },
    },
};
</script>
  
<style scoped>
.project-card {
    position: relative;
    width: 80%;
    padding: 20px;
    margin: 20px;
    text-align: center;
    display: flex;
    flex-direction: row;
    border-radius: 20px;

}

.project-image {
    position: relative;
    width: 50%;
    height: 200px;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 500ms ease-in-out;
    z-index: 0;

}

.project-content {
    background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    width: 50%;
}

.project-card:hover .overlay {
    background-color: transparent;
}

h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 10px;
}

h4 {
    color: #d41367;
    font-size: 1rem;
    margin-bottom: 10px;
}


.image img {
    width: 35vw;
    height: auto;
    filter: grayscale(80%);
    transition: all 0.5s ease;
    border-radius: 10px;
    border: 2px solid #d41367;
}

.image img:hover {
    filter: grayscale(0%);
    transform: scale(110%);
}

.description {
    width: 80%;
    margin-left: 5%;
    margin-top: 2%;
    text-align: left;
    color: #FFFFFF80;
}
</style>
  