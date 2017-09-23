<template>
    <div class="columns tabs-column">
        <div class="column is-half is-offset-one-quarter">
            <div class="card">
                <div class="card-header">
                    <p class="card-header-title">Contact Us</p>
                </div>
                <div class="card-content">
                    <p>
                        You can follow us on twitter at
                        <a href="https://twitter.com/OHara_Football">@OHara_Football</a>, on
                        Facebook at
                        <a href="https://www.facebook.com/Cardinal-OHara-Lions-Football-345813222263593/">O'Hara Football</a>
                        , or reach out to us <a @click.prevent="modalOpen = !modalOpen">here</a>.
                    </p>
                </div>
            </div>
        </div>

        <div class="modal" :class="{'is-active': modalOpen}">
            <div class="modal-background" @click="modalOpen = !modalOpen"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Contact O'Hara Football</p>
                    <button class="delete" aria-label="close" @click.prevent="modalOpen = !modalOpen"></button>
                </header>
                <section class="modal-card-body">
                    <form @submit.prevent="submitForm">
                        <div class="field">
                            <label class="label">Name</label>
                            <input type="text"
                                   class="input"
                                   placeholder="Name">
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <input type="email"
                                   class="input"
                                   placeholder="Email">
                        </div>
                        <div class="field">
                            <div class="control">
                                <label class="checkbox">
                                    <input type="checkbox">
                                      Receive email updates
                                    </input>
                                </label>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Phone</label>
                            <input type="text"
                                   class="input"
                                   placeholder="Phone Number">
                        </div>
                        <div class="field">
                            <label class="label">Preferred Contact Method</label>
                            <input type="text"
                                   class="input"
                                   placeholder="Preferred Contact Method">
                        </div>
                        <div class="field">
                            <label class="label">Message</label>
                            <textarea class="textarea"
                                      placeholder="Your Message"></textarea>
                        </div>
                    </form>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-primary">Contact</button>
                    <button class="button">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modalOpen: false
            }
        }
    }
</script>