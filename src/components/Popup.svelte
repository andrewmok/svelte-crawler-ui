<script lang="ts">
    export let isVisible = true;
    export let onClose: () => void;
</script>

{#if isVisible}
    <div class="app-popup--wrapper">
        <div class="app-popup">
            <div
                class="app-popup--close"
                on:click={onClose ? onClose() : () => null}
            >
                <span>×</span>
            </div>
            <slot>
            </slot>
        </div>
    </div>
{/if}

<style lang="scss">
    .app-popup {
        background-color: #eeeeee;
        padding: 30px 35px;
        border-radius: 16px;
        min-width: 150px;
        min-height: 150px;
        position: relative;

        &--close {
            position: absolute;
            right: 0;
            top: 0;
            font-size: 2em;
            border-radius: 50%;
            color: steelblue;
            width: 40px;
            height: 40px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                cursor: pointer;
                background-color: #d3d3d3;
                color: darkblue;
            }
        }

        &--wrapper {
            width: 100%;
            height: 100%;
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            left: 0;
            top: 0;
            background-color: #33333399;
        }
    }
</style>
