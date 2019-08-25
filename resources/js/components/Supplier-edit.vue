<template>
    <div class="container">
        <article class="c-stage u-mt-large" id="venue-block">
            <a aria-controls="stage-panel1" aria-expanded="false" class="c-stage__header u-flex u-justify-between"
               data-toggle="collapse" href="#stage-panel3">
                <div class="o-media c-table__cell--img">
                    <div class="c-stage__header-img o-media__img"><img alt="" src="img/icon-shift-staff.png"></div>
                    <div class="c-stage__header-title">
                        <h6 class="u-mb-zero">Edit Supplier</h6></div>
                </div>
                <i class="far fa-edit u-text-mute"></i> </a>
            <div class="c-stage__panel c-stage__panel--mute collapse" id="stage-panel3">
                <div class="u-p-medium">
                    <div class="u-p-xsmall u-border-rounded" style="background: rgb(239, 243, 246);">
                        <form @submit.prevent="update" class="c-login__content">
                            <div class="c-field u-mb-small">
                                <label class="c-field__label" for="name">Name</label>
                                <input class="c-input" v-model="supplier.name" type="name" id="name" placeholder="">
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
                <tbody v-for="product in supplier.products">
                <tr class="c-table__row" >
                    <td class="c-table__cell">
                        <div class="o-media">
                            <div class="o-media__body">{{product.name}}
                                <small class="u-block u-text-mute">Supplier</small>
                            </div>
                        </div>
                    </td>
                    <td class="c-table__cell"><span>{{product.description}}</span>
                    </td>
                    <td class="c-table__cell"><span>{{product.quantity}}</span>
                    </td>
                    <td class="c-table__cell"><span>{{product.created_at}}</span>
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
            const token = localStorage.getItem("token");
            let config = {
                headers: {'Authorization': "Bearer " + token}
            };
            if (token) {
                axios.get('api/product', config).then((response) => {
                    this.products = response.data.data
                })
                axios.get('api/supplier/'+this.$route.params.id, config).then((response) => {
                    this.supplier = response.data.data
                })
            }
        },
        data() {
            return {
                supplier: {},
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
                axios.put('api/supplier/' + this.supplier.id, this.supplier, config).then((response) => {
                    this.supplier = response.data.data
                })
            },
            attach() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.post('api/supplier_product', {
                    product_id: this.product_id,
                    supplier_id: this.supplier.id
                }, config).then((response) => {
                    this.supplier = response.data.data
                })
            },
            proRemove(product_id){
                console.log(product_id)
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.delete('api/supplier_product/'+product_id, config).then((response) => {
                    this.supplier = response.data.data
                })
            }
        }
    }
</script>