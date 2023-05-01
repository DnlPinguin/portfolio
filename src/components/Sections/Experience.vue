<template>
    <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="slide-up" />
        <button class="default-button middle slide-up">
            Show More
        </button>
    </div>
</template>
<script>

import ProjectCard from "../ProjectCard.vue";

export default {
    components: {
        ProjectCard
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
        },
        projects: [
            {
                id: 1,
                title: "50 Jahre Charterfeier",
                description: "CharterMainz is an all- inclusive Frontend and Backend Ticket Management System, meticulously crafted to orchestrate the grand 50th - anniversary celebration of the Rotaract Club Mainz.This cutting - edge platform streamlines event organization by integrating a sleek brand design, a robust backend system, real - time email notifications, and an intuitive frontend interface.Tailored to the needs of the Rotaract Club, CharterMainz ensures a seamless experience for both event organizers and attendees.Its advanced features and user- friendly approach make it the ideal solution to manage a memorable and efficient anniversary event for one of the most prestigious clubs in the region.",
                image: "CharterMainzBeispiel.png",
                link: "https://chartermainz.de",
                techStack: "Vue, Symfony, Docker, Git and DALL-E"
            },
            {
                id: 2,
                title: "Schokoradeln",
                description: "SchokoRadeln is an innovative Frontend Project designed to promote and manage the 2023 Schokoradeln event.The platform delivers an engaging and user- friendly experience, showcasing event details, registration processes, and captivating visuals that capture the essence of the Schokoradeln festivities.With its seamless navigation and appealing design, SchokoRadeln ensures effortless organization and heightened anticipation for the 2023 event, creating a delightful and unforgettable experience for all participants.",
                image: "SchokoRadeln.png",
                link: "https://schokoradeln.de",
                techStack: "Vue, Docker, Git and DALL-E"
            },
            {
                id: 3,
                title: "Octol.ink",
                description: "OCTOL.ink is a comprehensive social media management system specifically tailored for businesses seeking to elevate their brand presence and create customizable content across various platforms. This powerful tool streamlines the process of content creation, scheduling, and publishing, allowing businesses to reach wider audiences and engage with their customers effectively. OCTOL.ink's intuitive interface makes it easy for users to navigate and manage multiple social media accounts seamlessly, providing insightful analytics to track performance and optimize strategies. The platform's robust features include a versatile content editor, a smart scheduling system, and an extensive library of templates, empowering businesses to craft unique and visually appealing posts that resonate with their target audiences. \n Designed with scalability in mind, OCTOL.ink caters to businesses of all sizes, from startups to large enterprises. Its flexible configuration capabilities enable users to adapt the system to their specific needs, ensuring the most efficient and productive social media management experience. With OCTOL.ink, businesses can unlock the full potential of their social media presence, driving brand awareness, customer engagement, and ultimately, boosting their bottom line.",
                image: "OctolinkLogo.png",
                link: "https://www.example.com/project3",
                techStack: "Django, Docker, Git, DALL-E, GPT-x and Postgres"
            },
        ]
    })
}
</script>
<style scoped>
.projects-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
}

.middle {
    margin: auto;
    margin-top: 2rem;
}
</style>