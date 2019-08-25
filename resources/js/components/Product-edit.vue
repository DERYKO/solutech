<template>
    <div class="container">
        <article class="c-stage u-mt-large" id="venue-block">
            <a aria-controls="stage-panel1" aria-expanded="false" class="c-stage__header u-flex u-justify-between"
               data-toggle="collapse" href="#stage-panel3">
                <div class="o-media c-table__cell--img">
                    <div class="c-stage__header-img o-media__img"><img alt="" src="img/icon-shift-staff.png"></div>
                    <div class="c-stage__header-title">
                        <h6 class="u-mb-zero">Edit product</h6></div>
                </div>
                <i class="far fa-edit u-text-mute"></i> </a>
            <div class="c-stage__panel c-stage__panel--mute collapse" id="stage-panel3">
                <div class="u-p-medium">
                    <div class="u-p-xsmall u-border-rounded" style="background: rgb(239, 243, 246);">
                        <form @submit.prevent="update" class="c-login__content">
                            <div class="col-lg-3">
                                <div class="c-field ">
                                    <label for="name" class="c-field__label">Name</label>
                                    <div class="c-field input-group u-mb-xsmall">
                                        <input type="text" v-model="product.name" id="name" placeholder="Name"
                                               name="name" required="required" autocomplete="off" class="c-input"></div>
                                    <!---->
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="c-field ">
                                    <label for="desc" class="c-field__label">Description</label>
                                    <div class="c-field input-group u-mb-xsmall">
                                        <input type="text" v-model="product.description" id="desc" placeholder="Description"
                                               name="desc" required="required" autocomplete="off" class="c-input"></div>
                                    <!---->
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="c-field ">
                                    <label class="c-field__label">Quantity</label>
                                    <div class="c-field input-group u-mb-xsmall">
                                        <input type="search" v-model="product.quantity" id="quantity" placeholder="Quantity"
                                               name="quanity" required="required" autocomplete="off" class="c-input"></div>
                                    <!---->
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="c-field ">
                                    <div class="c-field input-group u-mb-xsmall">
                                        <button type="submit" class="btn btn-lg btn-success">Update Product</button>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- // .c-stage__panel -->
        </article>
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
                axios.get('api/product/'+this.$route.params.id, config).then((response) => {
                    this.product = response.data.data
                })
            }
        },
        data() {
            return {
                product: {},
            }
        },
        methods: {
            update() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.put('api/product/' + this.product.id, this.product, config).then((response) => {
                    this.product = response.data.data
                })
            }
        }
    }
</script>