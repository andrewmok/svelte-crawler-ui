<script lang="ts">
    import {onMount} from "svelte";
    import Table from "./components/Table.svelte";
    import Button from "./components/Button.svelte";
    import Popup from "./components/Popup.svelte";
    import Input from "./components/Input.svelte";

    const FETCH_DATA = [
        {address: '192.168.1.1', timestamp: new Date(Date.now() + 1), cpuload: 100, uptime: '00:15', 'hosts_count': 15},
        {
            address: '192.168.4.1',
            timestamp: new Date(Date.now() + 100) ,
            cpuload: 12,
            uptime: '12:16',
            'hosts_count': 25
        },
        {address: '192.168.5.1', timestamp: new Date(Date.now() + 1000), cpuload: 50, uptime: '40:10', 'hosts_count': 5}
    ];

    const openAddDevicePopup = () => {
        console.log('should open popup');
        isDeviceAddPopupOpened = true;
    };

    const closeAddDevicePopup = () => {
        isDeviceAddPopupOpened = false;
    };

    const addDevice = () => {
        tableData = [...tableData, {
            address,
            timestamp: new Date(Date.now() + 1),
            cpuload: Math.round(Math.random() * 101),
            uptime: `${String(Math.round(Math.random() * 60)).padStart(2, '0')}:${String(Math.round(Math.random() * 60)).padStart(2, '0')}`,
            'hosts_count': Math.round(Math.random() * 249 + 1)
        }];

        closeAddDevicePopup();
    }

    let tableData = [];
    let isDeviceAddPopupOpened = false;
    let address = '';

    onMount(async () => {
        const res = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify(FETCH_DATA),
        });

        const json = await res.json();

        tableData = JSON.parse(json.data);
    });
</script>

<div class="app">
    <Popup
        isVisible={isDeviceAddPopupOpened}
        onClose={closeAddDevicePopup}
    >
        <Input label="IP Address:" bind:model={address}/>
        <Button title="Add" on:click={addDevice}/>
    </Popup>
	{#if tableData.length}
		<Table data={tableData}/>
		<Button title="Add device" on:click={openAddDevicePopup}/>
	{:else}
		<p>Loading...</p>
	{/if}
</div>

<style lang="scss">
	.app {
		font-family: Roboto;
	}
</style>
