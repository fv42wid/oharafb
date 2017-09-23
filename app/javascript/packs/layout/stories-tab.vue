<template>
    <div class="columns tabs-column">
        <div class="column is-4" v-for="story in stories" :key="story.id">
            <div class="card">
                <div class="card-header">
                    <p class="card-header-title">{{ story.title }}</p>
                </div>
                <div class="card-content">
                    <p class="is-size-7">
                        {{ story.body.substring(0,90) }}...
                    </p>
                </div>
                <div class="card-footer story-footer">
                    <p class="card-footer-item is-size-7">
                        {{ story.created_at | formatDate }}
                    </p>
                    <p class="card-footer-item is-size-7">
                        <a>read more</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        data() {
            return {
                stories: this.upcomingstories
            }
        },
        props: ['upcomingstories'],
        filters: {
            formatDate(date) {
                return moment(date).format('MMM DD YYYY')
            }
        }

    }
</script>