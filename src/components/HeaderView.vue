<template>
    <v-app-bar
            app
            color="primary"
            dark
    >
        <v-btn class="ma-2" tile large color="white" @click="gotoHome()" text>
            周报管理平台
            <v-icon>mdi-vuetify</v-icon>
        </v-btn>
        <div class="d-flex align-center">
        </div>
        <v-spacer></v-spacer>
        <v-text-field
                append-icon="mdi-magnify"
                flat
                label="输入搜索关键字"
                hide-details
                style="max-width: 200px;margin: 20px 20px"
        />
        <v-btn
                @click="gotoAdd()"
                target="_blank"
                text
        >
            <span class="mr-2">新增周报</span>
        </v-btn>
        <v-btn
                @click="gotoLogin()"
                target="_blank"
                text
        >
            <span class="mr-2">登录</span>
        </v-btn>
        <v-btn
                @click="gotoGroupWeekly()"
                target="_blank"
                text
        >
            <span class="mr-2">团队周报</span>
        </v-btn>
        <v-btn
                @click="gotoAbout()"
                target="_blank"
                text
        >
            <span class="mr-2">日历测试</span>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'HeaderView',
        data: () => ({}),
        methods: {
            gotoHome() {
                this.$router.push("/home")
            },
            gotoAdd() {
                this.$router.push("/add")
            },
            gotoLogin() {
                this.$router.push("/login")
            },
            gotoGroupWeekly() {
                this.$router.push("/groupweekly")
            },
            gotoAbout() {
                this.$router.push("/about")
            }
        },
    }
</script>
