<script setup>
    import Card from 'primevue/card'
    import DashButton from './small-components/CustomDashButton.vue';
</script>

<template>
    <Card>
        <template #content>
            <div class="grid h-30rem">
                <div class="h-full col-2 col-offset-3 flex flex-column justify-content-evenly">
                    <DashButton btnTitle="All Dept. Build Schedule" link="/" />
                    <DashButton btnTitle="Turbo Dept. Build Schedule" link="/" />
                    <DashButton btnTitle="Cylinder Head Dept. Build Schedule" link="/" />
                </div>
                <div class="col-2 col-offset-2 flex flex-column justify-content-evenly">
                    <DashButton btnTitle="Warehouse Build Schedule" link="/" />
                    <DashButton btnTitle="Pumps Dept. Build Schedule" link="/" />
                    <DashButton btnTitle="New Build Schedule" link="/build" />
                </div>
            </div>
        </template>
    </Card>
</template>

<style>
    button {
        text-align: center;
    }
</style>