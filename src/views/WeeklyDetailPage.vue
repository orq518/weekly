<template>
    <v-container>
        <v-row class="ml-4">
            <v-card-title class="subheading font-weight-bold">{{weeklyDate}}</v-card-title>
        </v-row>

        <v-card-title class="ml-4 subheading font-weight-bold">本周工作总结</v-card-title>
        <v-row class="ml-4 mr-4">
            <v-container>
                <v-row>
                    <v-col
                            v-for="(item,id) in curWeekData"
                            :key="id"
                            cols="4"
                            xs="6"
                    >
                        <v-card class="pa-3">
                            <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

                            <v-divider></v-divider>

                            <v-list dense>
                                <v-list-item
                                        v-for="(workdata) in item.workdata"
                                        :key="workdata"
                                >
                                    <v-list-item-content class="align-start">{{ workdata }}
                                    </v-list-item-content>
                                </v-list-item>

                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
        <v-card-title class="ml-4 mt-4 subheading font-weight-bold">下周工作计划</v-card-title>
        <v-row class="ml-4">
            <v-col cols="4">
                <v-card>
                    <v-card-title class="subheading font-weight-bold">下周计划</v-card-title>
                    <v-divider class="ml-4 mr-4"/>
                    <v-list dense>
                        <v-list-item
                                v-for="(workdata) in nextWeekData.workdata"
                                :key="workdata"
                        >
                            <v-list-item-content class="align-start">{{ workdata }}
                            </v-list-item-content>
                        </v-list-item>

                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name: "WeeklyDetailPage",
        data: () => ({
            weeklyDate: "2020-5-20至2020-5-25",
            start_date: new Date().toISOString().substr(0, 10),
            end_date: new Date().toISOString().substr(0, 10),
            start_menu: false,
            end_menu: false,
            curWeekData: [
                {
                    name: '年度KPI工作',
                    workdata: ["1、年哈怕爱的，搭建项目完成官网开发，搭完成官网开发，搭建什么什么项目完成官网开发，搭",],
                    textMessage: ""
                },
                {
                    name: '月度重点工作',
                    workdata: ["1、年哈怕爱的，搭建什么什么项目", "2、年哈怕爱的，搭建什么什么项目"],
                    textMessage: ""
                },
                {
                    name: '临时性工作',
                    workdata: ["1、年哈怕爱的，搭建什么什么项目"],
                    textMessage: ""
                },
            ],
            nextWeekData: {
                name: '下周计划',
                workdata: ["1、年哈怕爱的，搭建什么什么项目", "2、年哈怕爱的，搭建什么什么项目"],
                textMessage: ""
            },
        }),
        methods: {

        },
    }
</script>

<style scoped>
    #main-content {
        /*background: cadetblue;*/
        background: white;
        padding: 30px 80px;
    }

    #bottom-text {
        font-size: 15px;
        color: black;
    }
</style>
