<script>
    export let title;
</script>

<div class="app-button">
    <button on:click>
        {title}
    </button>
</div>

<style lang="scss">
    .app-button {
        margin: 5px 0;

        button {
            cursor: pointer;

            &:hover {
                background-color: #999999;
            }
        }
    }
</style>
