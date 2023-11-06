<script setup>
    import Button from 'primevue/button'
    const props = defineProps({ btnTitle: String, link: String })
</script>

<template>
    <RouterLink :to="props.link">
        <Button
            :label="props.btnTitle"
            style="height: 100px; width: 300px"
        />
    </RouterLink>
</template>

<style></style>