<template>
    <div class="o-page__card o-page__card--horizontal">
        <notifications position="bottom right" width="400"/>
        <div class="c-card c-login-horizontal">
            <div class="c-login__content-wrapper">
                <header class="c-login__header u-mt-large u-mb-small">


                    <!--                        <h2 class="c-login__title">Try </h2>-->
                    <span style="font-size: 20px; color: blue; font-weight: bold">Order Management Made Easier</span>
                    <span class="u-color-primary u-text-small u-block u-mt-xsmall">Welcome Back</span>


                    <!--                        <span class="u-color-fancy u-text-tiny">14 Day Free Trial. No Credit Card. No Contract.</span>-->
                </header>

                <form @submit.prevent="login" class="c-login__content">
                    <div class="c-field u-mb-small">
                        <label class="c-field__label" for="email">Email Address</label>
                        <input class="c-input" v-model="email" type="email" id="email" placeholder="Email" required>
                    </div>

                    <div class="c-field u-mb-small">
                        <label class="c-field__label" for="password">Password</label>
                        <input class="c-input" v-model="password" type="password" id="password" placeholder="Password" required>
                    </div>

                    <button class="c-btn c-btn--success c-btn--fullwidth" type="submit">Sign In</button>

                    <span class="c-divider u-mv-small"></span>
                    <router-link class="c-btn c-btn--secondary c-btn--fullwidth" to="/register">New? Create Account
                    </router-link>
                </form>
            </div>

            <div class="c-login__content-image">
                <img src="img/login-lady3.jpg" style="object-fit: cover;" alt="Welcome to Supply">

                <!--                    <h3>Welcome Back</h3>-->
                <p class="u-text-small u-mv-large" id="randomText"></p>
            </div>
        </div>
        <div class="u-text-center o-line u-flex u-justify-around u-mt-small">
            <img src="img/badge-1.png" class="u-mv-xsmall " style="max-width:12%; height:auto"/>
            <img src="img/badge-2.png" class="u-mv-xsmall " style="max-width:12%; height:auto"/>
            <img src="img/badge-3.png" class="u-mv-xsmall " style="max-width:12%; height:auto"/>
        </div>
        <div class="u-text-center">
            <a href="#" target="_blank"> <img src="img/capterra.png"
                                              class="u-mt-xsmall u-opacity-heavy"
                                              style="max-width:150px; height:auto"/></a>
        </div>
    </div>
</template>
<script>
    export default {
        beforeMount(){
            //check user exists
            const token = localStorage.getItem("token");
            if (token) {
                this.$router.push('/home');
            }
        },
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                //login
                axios.post('api/login', {email: this.email, password: this.password}).then((response) => {
                    localStorage.setItem("token", response.data.token);
                    this.$router.push('/home');
                }).catch((error) => {
                    this.$notify({
                        type: 'danger',
                        text: error.response.data.message,
                    });
                })
            }
        }
    }
</script>