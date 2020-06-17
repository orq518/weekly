<template>
    <v-container >
        <v-card
                elevation="24"
                height="500"
                width="500"
                class="mx-auto"
        >
            <v-img
                    :src="require(`../assets/articles/beachjar.jpg`)"
                    height="200"
            ></v-img>
            <v-row>
                <v-col class="ma-8 px-12">
                    <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                    >
                        <v-text-field
                                v-model="name"
                                :counter="10"
                                :rules="nameRules"
                                label="用户名"
                                required
                        ></v-text-field>

<!--                        <v-text-field-->
<!--                                v-model="email"-->
<!--                                :rules="emailRules"-->
<!--                                label="邮箱"-->
<!--                                required-->
<!--                        ></v-text-field>-->
                        <v-text-field
                                v-model="pwd"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                hint="At least 8 characters"
                                counter
                                label="密码"
                                required
                                @click:append="show1 = !show1"
                        ></v-text-field>
                        <!--                        :disabled="!valid"-->
                        <v-row justify="center" class="mt-12">
                            <v-btn
                                    color="success"
                                    class="ma-4"
                                    @click="gotoHome()"
                            >
                                登录
                            </v-btn>
                        </v-row>


                        <!--                        <v-btn-->
                        <!--                                color="error"-->
                        <!--                                class="mr-4"-->
                        <!--                                @click="reset"-->
                        <!--                        >-->
                        <!--                            Reset Form-->
                        <!--                        </v-btn>-->

                        <!--                        <v-btn-->
                        <!--                                color="warning"-->
                        <!--                                @click="resetValidation"-->
                        <!--                        >-->
                        <!--                            Reset Validation-->
                        <!--                        </v-btn>-->
                    </v-form>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            show1: false,
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            pwd: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },
        }),

        methods: {
            gotoHome() {
                this.$router.push("/home")
            },
            validate() {
                this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>
