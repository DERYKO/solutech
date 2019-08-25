<template>
    <div>
        <header class="c-navbar c-navbar--inverse ">
            <a class="c-navbar__brand u-mr-large" href="#!"> <img src="img/qs-logo.png" alt="Dashboard UI Kit"> </a>
            <!-- Navigation items that will collapse and toggle in small viewports -->
            <nav class="c-nav collapse" id="main-nav">
                <ul class="c-nav__list">
                    <li class="c-nav__item"><a class="c-nav__link" href="#">Order platform</a></li>
                    <li class="c-nav__item">
                        <a class="c-nav__link" href="#">Order Today</a>
                    </li>
                </ul>
            </nav>
            <!-- // Navigation items -->
            <div class="c-dropdown u-ml-auto dropdown">
                <a aria-expanded="false" aria-haspopup="true"
                   class="c-avatar c-avatar--xsmall has-dropdown dropdown-toggle" data-toggle="dropdown" href="#"
                   id="dropdwonMenuAvatar">
                    <div class="u-mr-xsmall u-text-right u-hidden-down@tablet" id="user-id">
                        <h6 class="u-mb-zero u-color-white">{{this.user.name}}</h6> <span class="u-color-white u-text-tiny">The Supply Agency Ever</span>
                    </div>
                    <img alt="User's Profile Picture" class="c-avatar__img" src="img/avatar-72.jpg"> </a>
                <div aria-labelledby="dropdwonMenuAvatar" class="c-dropdown__menu dropdown-menu dropdown-menu-right">
                    <a class="c-dropdown__item dropdown-item" href="#"><i class="fas fa-power-off u-mr-small"></i><button @click="logout">Logout</button></a>
                </div>
            </div>
            <button class="c-nav-toggle" data-target="#main-nav" data-toggle="collapse" type="button"><span
                    class="c-nav-toggle__bar"></span> <span class="c-nav-toggle__bar"></span> <span
                    class="c-nav-toggle__bar"></span></button>
            <!-- // .c-nav-toggle -->
        </header>
        <div class="c-toolbar u-mb-medium u-hidden-down@tablet">
            <ol class="c-breadcrumb u-mr-auto">
                <li class="c-breadcrumb__item c-toolbar__title"><router-link to="/home">User</router-link></li>
                <li class="c-breadcrumb__item c-toolbar__meta u-color-info">Home</li>
            </ol>
        </div>
        <!-- // .c-toolbar -->
        <div class="c-toolbar u-hidden-up@tablet u-text-center u-pt-xsmall u-mr-xsmall"> <i class="fas fa-circle u-color-success u-mr-xsmall"></i> <span class="u-text-success ">Order Supply</span></div>
        <div class="o-page__sidebar js-page-sidebar">
            <div class="c-sidebar">
                <ul class="c-sidebar__list">
                    <li class="c-sidebar__item"> <router-link class="c-sidebar__link "  :to="{ name: 'app.suppliers'}">Suppliers</router-link> </li>
                    <li class="c-sidebar__item"> <router-link class="c-sidebar__link" to="/products">Products</router-link> </li>
                    <li class="c-sidebar__item"> <router-link class="c-sidebar__link" to="/orders">Orders</router-link> </li>
                </ul>
            </div>
        </div>
        <main class="o-page__content">
            <div class="container u-mb-medium">
            <router-view/>
            </div>
        </main>
    </div>
</template>
<script>
    export default {
        mounted() {
            const token = localStorage.getItem("token");
            let config = {
                headers: {'Authorization': "Bearer " + token}
            };
            if (token) {
                axios.get('api/profile', config).then((response) => {
                    this.user = response.data
                }).catch((error) => {

                })
            } else {
                this.$router.push('/')
            }
        },
        data() {
            return {
                user: {}
            }
        },
        methods: {
            logout(){
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.get('api/logout', config).then((response) => {
                    localStorage.removeItem("token");
                    this.$router.push('/')
                })
            }
        }
    }
</script>