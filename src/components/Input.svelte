<script>
    export let label = '';
    export let model = '';
</script>

<div class="app-input">
    <div class="app-input--container">
        <div class="app-input--label">{label}</div>
        <div><input bind:value={model}></div>
    </div>
</div>

<style lang="scss">
    .app-input {
        display: flex;

        &--label {
            margin-bottom: 9px;
            margin-right: 15px;
        }

        &--container {
            display: flex;
            align-items: center;
        }
    }
</style>
