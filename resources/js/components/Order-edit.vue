<template>
    <div class="container">
        <article class="c-stage u-mt-large" id="venue-block">
            <a aria-controls="stage-panel1" aria-expanded="false" class="c-stage__header u-flex u-justify-between"
               data-toggle="collapse" href="#stage-panel3">
                <div class="o-media c-table__cell--img">
                    <div class="c-stage__header-img o-media__img"><img alt="" src="img/icon-shift-staff.png"></div>
                    <div class="c-stage__header-title">
                        <h6 class="u-mb-zero">Edit order</h6></div>
                </div>
                <i class="far fa-edit u-text-mute"></i> </a>
            <div class="c-stage__panel c-stage__panel--mute collapse" id="stage-panel3">
                <div class="u-p-medium">
                    <div class="u-p-xsmall u-border-rounded" style="background: rgb(239, 243, 246);">
                        <form @submit.prevent="update" class="c-login__content">
                            <div class="c-field u-mb-small">
                                <label class="c-field__label" for="name">Name</label>
                                <input class="c-input" v-model="order.order_number" type="name" id="name" placeholder="">
                            </div>
                            <button class="c-btn c-btn--success c-btn--fullwidth" type="submit">Update</button>
                        </form>
                        <form @submit.prevent="attach" class="c-login__content">
                            <div class="c-field u-mb-small">
                                <label class="c-field__label" for="product">Products</label>
                                <select class="c-input" id="product" v-model="product_id">
                                    <option v-for="product in products" v-bind:value="product.id">
                                        {{ product.name }}
                                    </option>
                                </select>
                            </div>
                            <button class="c-btn c-btn--success c-btn--fullwidth" type="submit">Attach Product</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- // .c-stage__panel -->
        </article>
        <div class="c-table-responsive@desktop u-mt-medium">
            <table class="c-table">
                <thead class="c-table__head c-table__head--slim">
                <tr class="c-table__row">
                    <th class="c-table__cell c-table__cell--head" style="min-width: 25%">Name</th>
                    <th class="c-table__cell c-table__cell--head">Description</th>
                    <th class="c-table__cell c-table__cell--head">Quantity</th>
                    <th class="c-table__cell c-table__cell--head">Created At</th>
                    <th class="c-table__cell c-table__cell--head no-sort"><span class="u-hidden-visually">Actions</span>
                    </th>
                </tr>
                </thead>
                <tbody v-for="product in order.products">
                <tr class="c-table__row" >
                    <td class="c-table__cell">
                        <div class="o-media">
                            <div class="o-media__body">{{product.name}}
                                <small class="u-block u-text-mute">order</small>
                            </div>
                        </div>
                    </td>
                    <td class="c-table__cell"><span
                            class="c-badge c-badge--success u-text-uppercase c-badge--small">{{product.description}}</span>
                    </td>
                    <td class="c-table__cell"><span
                            class="c-badge c-badge--success u-text-uppercase c-badge--small">{{product.quantity}}</span>
                    </td>
                    <td class="c-table__cell"><span
                            class="c-badge c-badge--success u-text-uppercase c-badge--small">{{product.created_at}}</span>
                    </td>
                    <td class="c-table__cell u-float-right">
                        <button @click="proRemove(product.id)" class="c-btn c-btn--danger smal">Remove</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.order = this.$route.params.order;
            const token = localStorage.getItem("token");
            let config = {
                headers: {'Authorization': "Bearer " + token}
            };
            if (token) {
                axios.get('api/product', config).then((response) => {
                    this.products = response.data.data
                })
            }
        },
        data() {
            return {
                order: {},
                products: [],
                product_id: null
            }
        },
        methods: {
            update() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.put('api/order/' + this.order.id, this.order, config).then((response) => {
                    this.order = response.data.data
                })
            },
            attach() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.post('api/order_detail', {
                    product_id: this.product_id,
                    order_id: this.order.id
                }, config).then((response) => {
                    this.order = response.data.data
                })
            },
            proRemove(product_id){
                console.log(product_id)
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.delete('api/order_detail/'+product_id, config).then((response) => {
                    this.order = response.data.data
                })
            }
        }
    }
</script>