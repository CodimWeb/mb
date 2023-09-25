<template>
    <div class="app-view">
        <router-view v-slot="{ Component, route }">
                <div :key="route.name">
                    <component :is="Component"/>
                </div>
        </router-view>
    </div>
</template>

<script>
export default {};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: .2;
}
</style>
