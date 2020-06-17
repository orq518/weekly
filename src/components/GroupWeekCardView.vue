<template>
    <v-hover v-slot:default="{ hover }"
             open-delay="800">
        <v-card
                :elevation="hover ? 16 : 1"
                height="360"
                color="white"
                dark
                outlined
                class="mx-auto"
                @click="gotoDetail()"
        >
                        <v-expand-transition>
                            <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out primary  v-card--reveal white--text"
                                    style="height: 450px;"
                            >
                                <v-row
                                        class="fill-height  ma-0" style="height: 350px"
                                >
                                    <v-col>
                                        <p class="subtitle-1 white--text">
                                            {{name}}
                                        </p>
                                        <p class="subtitle-1 white--text">
                                            本周工作
                                        </p>
                                        <p class="mx-4 card-content subtitle-1 white--text font-weight-light text-justify mt-n2"
                                           style="max-height: 160px">
                                            {{curWeekData}}
                                        </p>
                                        <p class="subtitle-1 white--text">
                                            下周工作
                                        </p>
                                        <p class="mx-4 card-content subtitle-1 white--text font-weight-light text-justify mt-n2"
                                           style="max-height: 160px">
                                            {{nextWeekData}}
                                        </p>
                                    </v-col>

                                </v-row>
                            </div>
                        </v-expand-transition>




            <v-img
                    class="white--text align-end"
                    height="120"
                    :src="require(`../assets/articles/${card_bg[index%card_bg.length]}`)"
            >
                <v-card-title class="headline">{{name}}</v-card-title>
                <p class="subtitle-1 white--text mx-4" >
                    {{weeks}}
                </p>
            </v-img>
            <v-row  v-if="!hover"
                    class="fill-height  ma-0" style="height: 350px"
            >
                <v-col>
                    <p class="subtitle-1 black--text" style="background: white;">
                        本周工作
                    </p>
                    <p class="mx-4 card-content subtitle-1 black--text font-weight-light text-justify mt-n2"
                       style="height: 60px">
                        {{curWeekData}}
                    </p>
                    <p class="subtitle-1 black--text">
                        下周工作
                    </p>
                    <p class="mx-4 card-content subtitle-1 black--text font-weight-light text-justify mt-n2"
                       style="height: 60px">
                        {{nextWeekData}}
                    </p>
                </v-col>

            </v-row>
        </v-card>
    </v-hover>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "GroupWeekCardView",
        props: {
            name: {
                type: String,
            },
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
        -webkit-line-clamp: 5;
        line-clamp: 5;
        -webkit-box-orient: vertical;
    }

    #aline {
        background-color: #E6E3E3;
        height: 1px;
    }

</style>
