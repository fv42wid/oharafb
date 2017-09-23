<template>
    <div class="columns tabs-column">
        <div class="column is-4" v-for="post in posts">
            <div class="card">
                <div class="card-header">
                    <p class="card-header-title">{{ post.user }}</p>
                </div>
                <div class="card-content">
                    <p class="is-size-7">
                        {{ post.body }}
                    </p>
                </div>
                <div class="card-footer story-footer">
                    <p class="card-footer-item is-size-7">
                        {{ post.time }} ago
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
    export default {
        data() {
            return {
                posts: [
                    {
                        user: '@Ohara_Football',
                        body: 'Retweeted PA Prep Live (@PaPrepLive): Gould, O\'Hara line have a field day in downing Bonner & Prendergast ',
                        time: '9h'
                    },
                    {
                        user: '@Delco Sports',
                        body: 'Among the many things tackled by @reeko215 Friday night: The back page for Saturday\'s @delcotimes. Visit',
                        time: '14h'
                    },
                    {
                        user: '@PaPrepLive',
                        body: 'Gould, O\'Hara line have a field day in downing Bonner & Prendergast - papreplive.com/2017/09/23/gou…',
                        time: '9h'
                    }
                ]
            }
        },

    }
</script>