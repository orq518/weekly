<template>
    <v-container id="main-content">
        <v-row>
            <v-col cols="3" v-bind:key="data.index" v-for="data in weekData"
            >
                <group-week-card-view :weeks="data.time"
                                      :name="data.name"
                                      :index="data.index"
                                      :cur-week-data="data.thisWeekData"
                                      :next-week-data="data.nextWeekData"
                                      :problem-data="data.problemData"
                ></group-week-card-view>
            </v-col>
        </v-row>

        <v-row align="center" style="margin-top: 20px">
            <v-col cols="3">
                <v-btn
                        v-if="page !== 1"
                        class="ml-0"
                        square
                        color="primary"
                        small
                        title="下一周"
                        @click="page--"
                >
                    下一周
                </v-btn>
            </v-col>

            <v-col
                    class="text-center subheading"
                    cols="6"
            >
                第 {{page}} 页／共 {{pages}} 页
            </v-col>

            <v-col
                    class="text-right"
                    cols="3"
            >
                <v-btn
                        v-if="pages > 1 && page < pages"
                        class="mr-0"
                        title="上一周"
                        @click="page++"
                        color="primary"
                        small
                >
                    上一周
                </v-btn>
            </v-col>

        </v-row>

        <v-layout column class="fab-container">
            <v-btn color="primary"
                   @click="getAllWeekly()">
                导出团队周报
            </v-btn>
        </v-layout>
        <v-bottom-sheet v-model="sheet">
            <v-sheet class="text-center" height="200px">
                <v-btn
                        class="mt-6"
                        text
                        color="primary"
                        @click="sheet = !sheet"
                >close</v-btn>
                <div class="py-3">导出周报位置、、、、</div>
            </v-sheet>
        </v-bottom-sheet>
    </v-container>
</template>

<script>
    import GroupWeekCardView from "../components/GroupWeekCardView"

    export default {
        name: "GroupWeekly",
        components: {GroupWeekCardView},
        comments: {
            GroupWeekCardView,
        },
        methods: {
            getData() {
                return this.weekData.reverse();
            },
            getAllWeekly() {
                this.sheet=!this.sheet
            },
        },
        data: () => ({
            page: 1,
            pages: 10,
            sheet: false,
            weekData: [
                {
                    index: 1,
                    name: "欧瑞强",
                    time: '第1周 2020/1/1---2020/1/5',
                    thisWeekData: "本周干了什么adadadafafaf啊发发啊发发发啊发发发啊发发发啊发发发啊发发啊发发发下周要干啥呢adadadafafaf啊发发啊发发发啊发发发啊发发发啊发发发啊发发啊发发发adadadafafaf啊发发啊发发发啊发发发啊发发发啊发发发啊发发啊发发发aa",
                    nextWeekData: "下周要干啥呢发啊发发发啊发发发啊发发发啊发发发啊发啊发发发啊发发发啊发发发啊发发发啊下周要发啊发发发啊发发发啊发发发啊发发发啊干啥呢",
                    problemData: "有什么问题吗",
                },
                {
                    index: 2,
                    name: "欧瑞强",
                    time: '第2周 2020/1/1---2020/1/5',
                    thisWeekData: "未填写",
                    nextWeekData: "未填写",
                    problemData: "有什么问题吗",
                }, {
                    index: 3,
                    name: "欧瑞强",
                    time: '第3周 2020/1/1---2020/1/5',
                    thisWeekData: "未填写",
                    nextWeekData: "未填写",
                    problemData: "有什么问题吗",
                },
                {
                    index: 4,
                    name: "欧瑞强",
                    time: '第4周 2020/1/1---2020/1/5',
                    thisWeekData: "未填写",
                    nextWeekData: "未填写",
                    problemData: "有什么问题吗",
                },
                {
                    index: 5,
                    name: "欧瑞强",
                    time: '第5周 2020/1/1---2020/1/5',
                    thisWeekData: "未填写",
                    nextWeekData: "未填写",
                    problemData: "有什么问题吗",
                },
                {
                    index: 6,
                    name: "欧瑞强",
                    time: '第6周 2020/1/1---2020/1/5',
                    thisWeekData: "本周干了什么",
                    nextWeekData: "下周要干啥呢",
                    problemData: "有什么问题吗",
                },
                {
                    index: 7,
                    name: "欧瑞强",
                    time: '第7周 2020/1/1---2020/1/5',
                    thisWeekData: "本周干了什么",
                    nextWeekData: "下周要干啥呢",
                    problemData: "有什么问题吗",
                },
            ],
        })
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
        padding: 30px 30px;
    }

    #bottom-text {
        font-size: 15px;
        color: black;
    }
</style>
