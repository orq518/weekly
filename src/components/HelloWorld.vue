<template>
    <v-parallax
            style="height: 250px"
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col class="text-center" cols="12">
                <v-card
                        color="#385F73"
                        dark
                >
                </v-card>
            </v-col>
        </v-row>
    </v-parallax>
</template>
<script>
    export default {
        name: 'HelloWorld',

        data: () => ({
            ecosystem: [
                {
                    text: 'vuetify-loader',
                    href: 'https://github.com/vuetifyjs/vuetify-loader',
                },
                {
                    text: 'github',
                    href: 'https://github.com/vuetifyjs/vuetify',
                },
                {
                    text: 'awesome-vuetify',
                    href: 'https://github.com/vuetifyjs/awesome-vuetify',
                },
            ],
            importantLinks: [
                {
                    text: 'Documentation',
                    href: 'https://vuetifyjs.com',
                },
                {
                    text: 'Chat',
                    href: 'https://community.vuetifyjs.com',
                },
                {
                    text: 'Made with Vuetify',
                    href: 'https://madewithvuejs.com/vuetify',
                },
                {
                    text: 'Twitter',
                    href: 'https://twitter.com/vuetifyjs',
                },
                {
                    text: 'Articles',
                    href: 'https://medium.com/vuetify',
                },
            ],
            whatsNext: [
                {
                    text: 'Explore components',
                    href: 'https://vuetifyjs.com/components/api-explorer',
                },
                {
                    text: 'Select a layout',
                    href: 'https://vuetifyjs.com/layout/pre-defined',
                },
                {
                    text: 'Frequently Asked Questions',
                    href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
                },
            ],
        }),
    }
</script>
