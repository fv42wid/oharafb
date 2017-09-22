<template>
    <ul>
        <li class="link" :class="{'is-active': activeTab.schedule}">
            <a><span class="icon"><i class="fa fa-calendar-o"></i></span> <span>Upcoming Shedule</span></a>
        </li>
        <li class="link" :class="{'is-active': activeTab.stories}">
            <a><span class="icon"><i class="fa fa-newspaper-o"></i></span> <span>Recent Stories</span></a>
        </li>
        <li class="link" :class="{'is-active': activeTab.social}">
            <a><span class="icon"><i class="fa fa-twitter-square"></i></span> <span>Social Media</span></a>
        </li>
        <li class="link" :class="{'is-active': activeTab.contact}">
            <a><span class="icon"><i class="fa fa-commenting-o"></i></span> <span>Contact Us</span></a>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: {
                    schedule: true,
                    stories: false,
                    social: false,
                    contact: false
                }
            }
        },
        created() {
            console.log('main tabs created')
        }
    }
</script>