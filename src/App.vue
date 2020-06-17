<template>
<!--    :style="{backgroundImage:`url(${bg})`}"-->
    <v-app>
        <header-view></header-view>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>

    import HeaderView from "./components/HeaderView";
    // import AppBar from "./components/AppBar";
    export default {
        name: 'App',

        components: {
            // AppBar,
            HeaderView,
        },

        data: () => ({
            // bg: require('@/assets/main_bg.jpeg')
        }),
    };
</script>
