<template>
    <div class="o-page__card o-page__card--horizontal">
        <div class="c-card c-login-horizontal">
            <div class="c-login__content-wrapper" style="width: 55%">
                <header class="c-login__header u-mt-large u-mb-small">
                    <span style="font-size: 20px; color: blue; font-weight: bold">Order Management Made Easier</span>
                    <span class="u-color-primary u-text-small u-block u-mt-xsmall">The better way to handle orders</span>
                </header>

                <form @submit.prevent="save" class="c-card__body">
                    <div class="c-field u-mb-small">
                        <label class="c-field__label" for="name">Name</label>
                        <input class="c-input" v-model="name" type="text" id="name" placeholder="Solutech Engineer" required>
                    </div>
                    <div class="c-field u-mb-small">
                        <label class="c-field__label" for="email">Your Work E-mail Address</label>
                        <input class="c-input" v-model="email" type="email" id="email"  required>
                    </div>

                    <div class="c-field u-mb-small">
                        <label class="c-field__label" for="password">Create A Password</label>
                        <input class="c-input" v-model="password" type="password" id="password" required>
                    </div>


                    <button class="c-btn c-btn--info c-btn--fullwidth" type="submit">SignUp for free</button>

                    <!--                        <span class="c-divider has-text c-divider&#45;&#45;small u-mv-medium">Singup via social networks</span>-->

                    <div class="o-line u-mt-medium">
                        <router-link class="u-text-tiny c-btn c-btn--secondary c-btn--small" to="/">
                            Already have an account?
                        </router-link>
                    </div>
                </form>
            </div>
            <div class="c-signup__content-image" style="width: 45%">
                <img src="img/login-lady.jpg" style="object-fit: cover;" alt="Welcome to Supply">

                <!--                    <h2 class="u-h4 u-color-white">You are about to make your life a lot easier </h2>-->
                <p class="u-mv-small u-text-xsmall"> <i>"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” – Winston Churchill. When it comes to success quotes by famous people, Winston Churchill's inspirational words of wisdom always make the list. Click here to tweet this quote"
                </i><br/>
                    <span class="u-mv-xsmall u-text-xsmall u-text-bold u-color-primary">Jamie S. VP Event Production</span>
                    <!--                       -->
                </p>
                <div class="u-border-rounded u-bg-white u-p-xsmall">
                    <span class="u-h6 u-text-dark u-text-small u-text-bold">Try Supply - 100% risk-free!</span>
                </div>
                <!--	                <p class="u-mv-small u-text-bold">You are about to make your life a lot easier</p>-->

                <!--                    -->

            </div>

        </div>
        <div class="u-text-center o-line u-flex u-justify-around u-mt-small">
            <img src="img/badge-1.png" class="u-mv-xsmall " style="max-width:12%; height:auto" />
            <img src="img/badge-2.png" class="u-mv-xsmall " style="max-width:12%; height:auto" />
            <img src="img/badge-3.png" class="u-mv-xsmall " style="max-width:12%; height:auto" />
        </div>
        <div class="u-text-center">
            <a href="https://www.capterra.com/p/121679/QuickStaff/" target="_blank"> <img src="img/capterra.png" class="u-mt-xsmall u-opacity-heavy" style="max-width:150px; height:auto" /></a>
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                name: '',
                email: '',
                password: ''
            }
        },
        methods:{
            save(){
                let data ={
                    name: this.name,
                    email: this.email,
                    password: this.password
                };
                axios.post('api/register',data).then((response)=>{
                    this.$router.push('/');
                }).catch((error)=>{

                })
            }
        }
    }
</script>