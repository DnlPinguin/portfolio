<template>
    <div class="desktop">
        <ul class="left-list">
            <li v-for="(project, idx) in this.projects" v-bind:key="idx + '-key-element'"
                :class="{ choosen: activeView === project.id }" @click="changeActiveView(project.id)">
                {{ project.title }}
            </li>
        </ul>
        <ul class="right-list">
            <h3>
                <p class="role">{{ projects[activeView].role }}</p>
                <p>@</p>
                <p class="cranberry firm">{{ projects[activeView].title }}</p>
            </h3>
            <h4>{{ projects[activeView].time }}</h4>
            <ul>
                <li v-for="(entry, idx) in projects[activeView].entries" v-bind:key="idx + '-work-entry'">
                    <p class="work-entry">{{ entry }}</p>
                </li>
            </ul>
        </ul>
    </div>

    <div class="mobile"></div>
</template>
<script>

export default {
    components: {
    },
    props: {
        language: String,
    },
    data: () => ({
        activeView: 0,
        projects: [
            {
                id: 0,
                title: "Lucksmith E.K.",
                role: "Software Engineer",
                description: "This is a description of Project 1.",
                entries: [
                    "Writing and maintaining code",
                    "Debugging and troubleshooting",
                    "Designing software architecture",
                    "Collaborating with other team members",
                    "Keeping up-to-date with new technologies and industry trends"
                ],
                time: "July 2021 - Present"
            },
            {
                id: 1,
                title: "Verbund Pflegehilfe",
                role: "Web Developer",
                description: "This is a description of Project 2.",
                entries: [
                    "Writing and maintaining code",
                    "Debugging and troubleshooting",
                    "Designing software architecture",
                    "Collaborating with other team members",
                    "Keeping up-to-date with new technologies and industry trends"
                ],
                time: "Jan 2020 - June 2021"
            },
            {
                id: 2,
                title: "Algorilla",
                role: "CTO",
                description: "This is a description of Project 3.",
                link: "https://www.example.com/project3",
                entries: [
                    "Writing and maintaining code",
                    "Debugging and troubleshooting",
                    "Designing software architecture",
                    "Collaborating with other team members",
                    "Keeping up-to-date with new technologies and industry trends"
                ],
                time: "May 2023 - Present"
            },
        ]
    }),
    methods: {
        changeActiveView(id) {
            this.activeView = id;
        }
    }
}



</script>
<style scoped>
.desktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    margin: auto;
    align-content: center;

}

.role {
    letter-spacing: 2px;
    margin-right: .5rem;

}

.firm {
    text-transform: none;
    margin-left: .5rem;
}

.desktop h3 {
    display: flex;
    flex-direction: row;
}

.work-entry {
    color: #FFFFFF80;
}

.left-list li {
    list-style-type: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    transition: color 0.5s ease-in-out;
    transition: border-left 0.5s ease-in-out;
}

.choosen {
    color: #c03370;
    border-radius: 0px;
    border-left: 2px solid #c03370;
    z-index: 2;
}


@media screen and (max-width: 728px) {
    .container {
        width: 90%;
    }
}
</style>
