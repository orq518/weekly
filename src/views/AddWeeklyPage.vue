<template>
    <v-container>
        <v-row class="ml-4">
            <v-col cols="3"
                   sm="4"
                   md="4"
                   lg="3">
                <v-menu
                        v-model="start_menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="200px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                v-model="start_date"
                                label="开始日期"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="start_date" @input="start_menu = false"></v-date-picker>
                </v-menu>
            </v-col>
            <v-col cols="3"
                   sm="4"
                   md="4"
                   lg="3">
                <v-menu
                        v-model="end_menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="200px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                v-model="end_date"
                                label="结束日期"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="end_date" @input="end_menu = false"></v-date-picker>
                </v-menu>
            </v-col>
        </v-row>
        <v-card-title class="ml-4 mb-n4 subheading font-weight-medium">本周工作总结</v-card-title>
        <v-row class="mx-4">
            <v-container>
                <v-row>
                    <v-col
                            v-for="(item,id) in curWeekData"
                            :key="id"
                            cols="4"
                            xs="6"
                    >
                        <v-card v-show="!modelType" class="pa-3">
                            <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

                            <v-divider></v-divider>
                            <v-list class="mb-4">
                                <v-list-item
                                        v-for="(workdata,i) in item.workdata"
                                        :key="workdata"
                                >
                                    <v-textarea
                                            v-model="item.workdata[i]"
                                            auto-grow
                                            rows="1"
                                            dense
                                            @click:clear="clearData(item,i)"
                                            clearable
                                    />
                                    <!--                                            <v-list-item-content class="align-start">{{ workdata }}-->
                                    <!--                                            </v-list-item-content>-->
                                </v-list-item>

                            </v-list>
                            <v-expand-x-transition>
                                <v-textarea class="ma-4 mx-auto mb-n4"
                                            v-show="item.showAdd"
                                            v-model="item.textMessage"
                                            clearable
                                            rows="2"
                                            auto-grow
                                            outlined
                                            @keyup.enter="addWorkData(item)"
                                            @click:append-outer="addWorkData(item)"
                                            :append-outer-icon="item.textMessage ? 'mdi-send' : ''"
                                            label="在此处添加工作内容，回车确定"
                                ></v-textarea>
                            </v-expand-x-transition>


                            <v-row justify="end">
                                <v-btn class="mr-4 mb-4" fab dark small color="primary"
                                       @click="item.showAdd=!item.showAdd">
                                    <v-icon v-show="!item.showAdd">mdi-plus</v-icon>
                                    <v-icon v-show="item.showAdd">mdi-close</v-icon>
                                </v-btn>
                            </v-row>
                        </v-card>
                        <v-card v-show="modelType" class="px-2">
                            <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>
                            <v-divider></v-divider>
                            <v-textarea class="mx-auto ma-4"
                                        clearable
                                        outlined
                                        rows="4"
                                        auto-grow
                                        label="在此处添加工作内容"
                            ></v-textarea>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
        <v-card-title class="ml-4 subheading font-weight-bold">下周工作计划</v-card-title>
        <v-row class="ml-4">
            <v-col cols="4">
                <v-card class="pt-4" v-show="!modelType">
                    <!--                    <v-card-title class="subheading font-weight-bold">下周计划</v-card-title>-->
                    <!--                    <v-divider class="ml-4 mr-4"/>-->
                    <v-list dense>
                        <v-list-item
                                class="mx-4"
                                v-for="(workdata, i) in nextWeekData.workdata"
                                :key="workdata"
                        >
                            <v-textarea
                                    v-model="nextWeekData.workdata[i]"
                                    class="mt-n1 small"
                                    auto-grow
                                    rows="1"
                                    @click:clear="clearData(nextWeekData,i)"
                                    clearable
                            />
                        </v-list-item>

                    </v-list>
                    <v-expand-x-transition>
                        <v-textarea class="mx-4 my-n4"
                                    v-show="nextWeekData.showAdd"
                                    v-model="nextWeekData.textMessage"
                                    clearable
                                    outlined
                                    rows="2"
                                    auto-grow
                                    @keyup.enter="addWorkData(nextWeekData)"
                                    @click:append-outer="addWorkData(nextWeekData)"
                                    :append-outer-icon="nextWeekData.textMessage ? 'mdi-send' : ''"
                                    label="在此处添加工作内容，回车确定"
                        ></v-textarea>
                    </v-expand-x-transition>
                    <v-row justify="end">
                        <v-btn class="mx-2 mr-4 mb-4" fab dark small color="primary"
                               @click="nextWeekData.showAdd=!nextWeekData.showAdd">
                            <v-icon dark v-show="!nextWeekData.showAdd">mdi-plus</v-icon>
                            <v-icon dark v-show="nextWeekData.showAdd">mdi-close</v-icon>
                        </v-btn>
                    </v-row>

                </v-card>
                <v-card v-show="modelType" class="px-2 pt-2">
                    <!--                    <v-card-title class="subheading font-weight-bold">下周计划</v-card-title>-->
                    <!--                    <v-divider></v-divider>-->
                    <v-textarea class="mx-auto ma-4"
                                clearable
                                outlined
                                rows="4"
                                auto-grow
                                label="在此处添加工作内容"
                    ></v-textarea>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="ma-8 justify-center">
            <v-btn dark large color="primary" class="px-12">提交</v-btn>
        </v-row>
        <v-layout column class="fab-container">
            <v-btn small color="primary" @click="changeModel()">切换模板</v-btn>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            modelType: false,
            start_date: new Date().toISOString().substr(0, 10),
            end_date: new Date().toISOString().substr(0, 10),
            start_menu: false,
            end_menu: false,
            curWeekData: [
                {
                    name: '年度KPI工作',
                    workdata: ["1、年哈怕爱的，搭建项目完成官网开发，搭完成官网开发，搭建什么什么项目完成官网开发，搭",],
                    textMessage: "",
                    showAdd: false
                },
                {
                    name: '月度重点工作',
                    workdata: ["1、年哈怕爱的，搭建什么什么项目",],
                    textMessage: "",
                    showAdd: false
                },
                {
                    name: '临时性工作',
                    workdata: [],
                    textMessage: "",
                    showAdd: false
                },
            ],
            nextWeekData: {
                name: '下周工作',
                workdata: [],
                textMessage: "",
                showAdd: false
            },
        }),
        methods: {
            addWorkData(it) {
                if (!it.textMessage) {
                    return
                }
                it.workdata.push((it.workdata ? (it.workdata.length + 1)
                        :
                        1
                    )
                    + "、" + it.textMessage.replace(/[\r\n]/g, "")
                )
                it.textMessage = ""
                console.log("##add-workdata：" + it.workdata)
            },
            clearData(it, index) {
                console.log("删除" + index)
                it.workdata.splice(index, 1)
                console.log("##delete-workdata：" + it.workdata)
            },
            changeModel() {
                this.modelType = !this.modelType
            },
        },
    }
</script>

<style scoped>
    .fab-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }

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
