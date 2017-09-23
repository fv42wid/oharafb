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
                                   name="name"
                                   v-model="contact.name"
                                   :disabled="loading"
                                   v-validate="'required'"
                                   placeholder="Name">
                            <p class="help is-danger" v-show="errors.has('name')">{{ errors.first('name') }}</p>
                        </div>

                        <div class="field">
                            <label class="label">Email</label>
                            <input type="email"
                                   class="input"
                                   name="email"
                                   v-model="contact.email"
                                   :disabled="loading"
                                   v-validate="'required|email'"
                                   placeholder="Email">
                            <p class="help is-danger" v-show="errors.has('email')">{{ errors.first('email') }}</p>
                        </div>
                        <div class="field">
                            <div class="control">
                                <label class="checkbox">
                                    <input type="checkbox"
                                           v-model="contact.updates"
                                           :disabled="loading">
                                      Receive email updates
                                    </input>
                                </label>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Phone</label>
                            <input type="text"
                                   class="input"
                                   name="phone"
                                   v-model="contact.phone"
                                   :disabled="loading"
                                   v-validate="'required'"
                                   placeholder="Phone Number">
                            <p class="help is-danger" v-show="errors.has('phone')">{{ errors.first('phone') }}</p>
                        </div>
                        <div class="field">
                            <label class="label">Preferred Contact Method</label>
                            <input type="text"
                                   class="input"
                                   name="contact_method"
                                   v-model="contact.contact_method"
                                   :disabled="loading"
                                   v-validate="'required'"
                                   placeholder="Preferred Contact Method">
                            <p class="help is-danger" v-show="errors.has('contact_method')">{{ errors.first('contact_method') }}</p>
                        </div>
                        <div class="field">
                            <label class="label">Message</label>
                            <textarea class="textarea"
                                      name="message"
                                      v-model="contact.message"
                                      :disabled="loading"
                                      v-validate="'required'"
                                      placeholder="Your Message"></textarea>
                            <p class="help is-danger" v-show="errors.has('message')">{{ errors.first('message') }}</p>
                        </div>
                    </form>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-primary"
                            :class="{'is-loading': loading}"
                            type="submit"
                            @click="submitForm"
                            :disabled="!formIsValid">Contact</button>
                    <button class="button" @click.prevent="modalOpen = !modalOpen">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modalOpen: false,
                loading: false,
                contact: {
                    name: '',
                    email: '',
                    updates: false,
                    phone: '',
                    contact_method: '',
                    message: ''
                }
            }
        },
        methods: {
            submitForm() {
                this.loading = true
                setTimeout(() => this.loading = false, 1000);
                setTimeout(() => this.modalOpen = false, 1000);
                //this.loading = false
                //this.modalOpen = false
            }
        },
        computed: {
            formIsValid() {
                if(this.errors.any() || this.contact.name == '' || this.contact.email == '' ||
                this.contact.phone == '' || this.contact.contact_method == '' || this.contact.message == '') {
                    return false
                } else {
                    return true
                }
            }
        }
    }
</script>