<template>
    <v-hover v-slot:default="{ hover }"
             open-delay="200">
        <v-card
                :elevation="hover ? 16 : 1"
                height="500"
                color="white"
                dark
                outlined
                class="mx-auto"
                @click="gotoDetail()"
        >
<!--            <v-expand-transition>-->
<!--                <div-->
<!--                        v-if="hover"-->
<!--                        class="d-flex transition-fast-in-fast-out primary  v-card&#45;&#45;reveal white&#45;&#45;text"-->
<!--                        style="height: 450px;"-->
<!--                >-->
<!--                    <v-col>-->
<!--                        <p class=" font-weight-bold white&#45;&#45;text" style="font-size: 20px">-->
<!--                            {{weeks}}工作预览-->
<!--                        </p>-->
<!--                        <p class="subtitle-1 white&#45;&#45;text">-->
<!--                            本周工作-->
<!--                        </p>-->
<!--                        <p class="ml-4 mr-4 card-content subtitle-1 white&#45;&#45;text font-weight-light text-justify mt-n2"-->
<!--                           style="height: 90px">-->
<!--                            {{curWeekData}}-->
<!--                        </p>-->
<!--                        <p class="subtitle-1 white&#45;&#45;text">-->
<!--                            下周工作-->
<!--                        </p>-->
<!--                        <p class="ml-4 mr-4 card-content subtitle-1 white&#45;&#45;text font-weight-light text-justify mt-n2"-->
<!--                           style="height: 90px">-->
<!--                            {{nextWeekData}}-->
<!--                        </p>-->
<!--                    </v-col>-->
<!--                </div>-->
<!--            </v-expand-transition>-->
            <v-img
                    class="white--text align-end"
                    height="150"
                    :src="require(`../assets/articles/${card_bg[index%card_bg.length]}`)"
            >
                <v-card-title class="headline">{{weeks}}</v-card-title>
            </v-img>
<!--            v-if="!hover"-->
            <v-row
                    class="fill-height  ma-0" style="height: 350px"
            >
                <v-col>
                    <p class="subtitle-1 black--text" style="background: white;">
                        本周工作
                    </p>
                    <p class="mx-4 card-content subtitle-1 black--text font-weight-light text-justify mt-n2"
                       style="height: 90px">
                        {{curWeekData}}
                    </p>
                    <p class="subtitle-1 black--text">
                        下周工作
                    </p>
                    <p class="mx-4 card-content subtitle-1 black--text font-weight-light text-justify mt-n2"
                       style="height: 90px">
                        {{nextWeekData}}
                    </p>
                    <div class="mb-2" id="aline"></div>
                    <p class="black--text ma-4">查看详情</p>
                </v-col>

            </v-row>
        </v-card>
    </v-hover>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "WeekCardView",
        props: {
            weeks: {
                type: String,
            },
            curWeekData: {
                type: String,
            },
            nextWeekData: {
                type: String,
            },
            problemData: {
                type: String,
            },
            url: {
                type: String,
            },
            index: {
                type: Number,
                default: 0
            }

        },
        computed: {
            ...mapState(['card_bg']),
        },
        data() {
            return {}
        },
        methods: {
            gotoDetail() {
                console.log('详情')
                this.$router.push("/weeklydetail")

            },
        }
    }
</script>

<style scoped>
    .card-content {
        color: black;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    #aline {
        background-color: #E6E3E3;
        height: 1px;
    }

</style>
