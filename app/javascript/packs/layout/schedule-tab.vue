<template>
    <div class="columns tabs-column">
        <div class="column is-3" v-for="game in upcomingGames" :key="game.id">
            <div class="card">
                <div class="card-header">
                    <p class="card-header-title">{{ game.opponent }}</p>
                </div>
                <div class="card-content game-card">
                    <p class="is-size-7">{{ game.time | formatDate }}</p>
                    <span class="tag"
                          :class="{'is-danger': game.home_away == 'H', 'is-primary': game.home_away == 'A'}">
                        {{ game.home_away == 'H' ? 'Home' : 'Away' }}
                      </span>
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
                upcomingGames: this.games
            }
        },
        filters: {
            formatDate(date) {
                return moment(date).format('MM/DD [@] hh:mm A')
            }
        },
        props: ['games'],
        created() {

        }
    }
</script>