<script lang="ts">
    export let data = [];

    const TITLES = [
        'Address',
        'Addition date',
        'CPU load',
        'Uptime',
        'Number of hosts'
    ];
</script>

<table class="device-table">
    <thead>
        <tr class="device-table--title-row">
            {#each TITLES as title}
                <th class="device-table--title-cell">
                    {title}
                </th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each data as device}
            <tr class="device-table--data-row">
                <td class="col-left">{device.address}</td>
                <td>{device.timestamp}</td>
                <td>{device.cpuload}</td>
                <td>{device.uptime}</td>
                <td class="col-right">{device['hosts_count']}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style lang="scss">
    .col-left {
        border-left: 1px solid;
    }

    .col-right {
        border-right: 1px solid;
    }

    .device-table {
        text-align: center;
        border-collapse: collapse;

        &--data-row {
            td {
                padding: 4px 10px;
                border-bottom: 1px solid;
            }

            &:hover {
                background-color: lightgrey;
            }
        }

        &--title-cell {
          padding: 4px 10px;
          border-bottom: 2px solid;
        }
    }
</style>
