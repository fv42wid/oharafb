<template>
    <div>
        <div class="field has-addons is-expanded">
            <p class="control">
                <a class="button is-static">$150</a>
            </p>
            <div class="control is-expanded">
                <div class="select is-fullwidth">
                    <select>
                        <option>Lion Club</option>
                        <option>Golden Lion Club</option>
                        <option>Regulus Club</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="field">
            <div class="control has-text-right">
                <button class="button is-primary">
                    Pay Now
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                price: 0
            }
        }
    }
</script>