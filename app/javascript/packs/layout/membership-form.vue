<template>
    <div class="tile is-parent is-vertical">
        <div v-if="!submitted" class="tile is-child">
            <div class="field has-addons is-expanded">
                <p class="control">
                    <a class="button is-static" :disabled="loading">${{ setPrice }}</a>
                    <input type="hidden" name="price" :value="setPrice">
                </p>
                <div class="control is-expanded">
                    <div class="select is-fullwidth">
                        <select name="member_plan" v-model="plan" :disabled="loading">
                            <option value="lion_club" selected>Lion Club</option>
                            <option value="golden_lion_club">Golden Lion Club</option>
                            <option value="regulus_club">Regulus Club</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="control has-text-right">
                    <button class="button is-primary" :class="{'is-loading': loading}" @click.prevent="submitForm">
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
        <div class="tile is-child notification is-success">
            Your payment has been processed!  A receipt will be emailed to you.
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                submitted: false,
                loading: false,
                plan: 'lion_club'

            }
        },
        methods: {
            submitForm() {
                this.loading = true
                setTimeout(() => this.loading = false, 1000)
                setTimeout(() => this.submitted = true, 1000)
            }
        },
        computed: {
            setPrice() {
                switch(this.plan) {
                    case 'lion_club':
                        return 150
                        break
                    case 'golden_lion_club':
                        return 750
                        break
                    case 'regulus_club':
                        return 2500
                        break
                    default:
                        return 150
                }
            }
        }
    }
</script>