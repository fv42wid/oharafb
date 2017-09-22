<template>
    <div>
        <div class="profile-options">
            <div class="tabs is-fullwidth">
                <ul>
                    <li class="link" :class="{'is-active': activeTab.schedule}">
                        <a @click.prevent="setTab('schedule')"><span class="icon"><i class="fa fa-calendar-o"></i></span> <span>Upcoming Shedule</span></a>
                    </li>
                    <li class="link" :class="{'is-active': activeTab.stories}">
                        <a @click.prevent="setTab('stories')"><span class="icon"><i class="fa fa-newspaper-o"></i></span> <span>Recent Stories</span></a>
                    </li>
                    <li class="link" :class="{'is-active': activeTab.social}">
                        <a @click.prevent="setTab('social')"><span class="icon"><i class="fa fa-twitter-square"></i></span> <span>Social Media</span></a>
                    </li>
                    <li class="link" :class="{'is-active': activeTab.contact}">
                        <a @click.prevent="setTab('contact')"><span class="icon"><i class="fa fa-commenting-o"></i></span> <span>Contact Us</span></a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="spacer"></div>

        <schedule-tab :games="upcomingGames" v-if="this.activeTab.schedule"></schedule-tab>

    </div>
</template>

<script>
    import ScheduleTab from './schedule-tab.vue'

    export default {
        data() {
            return {
                activeTab: {
                    schedule: true,
                    stories: false,
                    social: false,
                    contact: false
                },
                upcomingGames: this.games
            }
        },
        props: ['games'],
        methods: {
            setTab(tab) {
                Object.keys(this.activeTab).forEach(v => this.activeTab[v] = false)
                this.activeTab[tab] = true
            }
        },
        created() {
            console.log('main tabs created')
        },
        components: {
            'schedule-tab' : ScheduleTab
        }
    }
</script>