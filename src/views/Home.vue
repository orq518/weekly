<template>
    <v-container id="main-content" >
        <v-row>
            <v-col cols="4" v-bind:key="data.index" v-for="data in weekData"
            >
                <week-card-view :weeks="data.time"
                                :index="data.index"
                                :cur-week-data="data.thisWeekData"
                                :next-week-data="data.nextWeekData"
                                :problem-data="data.problemData"
                ></week-card-view>
            </v-col>
        </v-row>

        <v-row align="center" style="margin-top: 20px">
            <v-col cols="3">
                <v-btn
                        v-if="page !== 1"
                        class="ml-0"
                        square
                        color="primary"
                        fab
                        small
                        title="前一页"
                        @click="page--"
                >
                    <v-icon>mdi-chevron-left</v-icon>
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
                        title="下一页"
                        @click="page++"
                        color="primary"
                        fab
                        small
                >
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-layout column class="fab-container">
            <v-btn fab color="primary"
            @click="gotoAdd()">
                <v-icon>add</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    import WeekCardView from "../components/WeekCardView"
    export default {
        name: "Weekly",
        components: {WeekCardView},
        comments: {
            WeekCardView,
        },
        methods: {
            getData() {
                return this.weekData.reverse();
            },
            gotoAdd() {
                this.$router.push("/add")
            },
        },
        data: () => ({
            page: 1,
            pages: 10,
            weekData: [
                {
                    index: 1,
                    time: '第1周 2020/1/1---2020/1/5',
                    thisWeekData: "本周干了什么adadadafafaf啊发发啊发发发啊发发发啊发发发啊发发发啊发发啊发发发下周要干啥呢adadadafafaf啊发发啊发发发啊发发发啊发发发啊发发发啊发发啊发发发adadadafafaf啊发发啊发发发啊发发发啊发发发啊发发发啊发发啊发发发aa",
                    nextWeekData: "下周要干啥呢发啊发发发啊发发发啊发发发啊发发发啊发啊发发发啊发发发啊发发发啊发发发啊下周要发啊发发发啊发发发啊发发发啊发发发啊干啥呢",
                    problemData: "有什么问题吗",
                },
                {
                    index: 2,
                    time: '第2周 2020/1/1---2020/1/5',
                    thisWeekData: "本周干了什么",
                    nextWeekData: "下周要干啥呢",
                    problemData: "有什么问题吗",
                }, {
                    index: 3,
                    time: '第3周 2020/1/1---2020/1/5',
                    thisWeekData: "本周干了什么",
                    nextWeekData: "下周要干啥呢",
                    problemData: "有什么问题吗",
                },
                {
                    index: 4,
                    time: '第4周 2020/1/1---2020/1/5',
                    thisWeekData: "本周干了什么",
                    nextWeekData: "下周要干啥呢",
                    problemData: "有什么问题吗",
                },
                {
                    index: 5,
                    time: '第5周 2020/1/1---2020/1/5',
                    thisWeekData: "本周干了什么",
                    nextWeekData: "下周要干啥呢",
                    problemData: "有什么问题吗",
                },
                {
                    index: 6,
                    time: '第6周 2020/1/1---2020/1/5',
                    thisWeekData: "本周干了什么",
                    nextWeekData: "下周要干啥呢",
                    problemData: "有什么问题吗",
                },
                {
                    index: 7,
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
