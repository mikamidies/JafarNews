<template>
    <div class="wrapper">
        <NuxtLink :to="localePath(`/videos/${item.slug}`)">
            <p class="name">{{ item.title }}</p>
            <div class="info">
                <div class="views">
                    <ViewIcon />
                    <p>{{ item.views }}</p>
                </div>
                <div class="date">
                    <DateIcon />
                    <p>{{ item.created_at }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
import ViewIcon from "../SvgIcons/ViewIcon.vue";
import DateIcon from "../SvgIcons/DateIcon.vue";

export default {
    props: ["item"],

    components: {
        ViewIcon,
        DateIcon,
    },
};
</script>

<style scoped>
.wrapper {
    border-bottom: 1px solid var(--regular);
}

.wrapper a {
    padding: 12px;
    display: block;
}

.info {
    margin: 12px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
}

.views,
.date {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
    opacity: 0.7;
    font-family: var(--base);
}

.name {
    font-size: 20px;
    margin-bottom: 12px;
    max-width: 90%;
}

@media screen and (max-width: 1024px) {
    .name {
        font-size: 18px;
        line-height: 140%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 12px 0 0 0;
    }

    .wrapper a {
        padding: 8px 0;
    }

    .info {
        margin-bottom: 0;
    }
}
</style>