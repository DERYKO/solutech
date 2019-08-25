<template>
    <div class="container">
        <article class="c-stage u-mt-large" id="venue-block">
            <a aria-controls="stage-panel1" aria-expanded="false" class="c-stage__header u-flex u-justify-between"
               data-toggle="collapse" href="#stage-panel3">
                <div class="o-media c-table__cell--img">
                    <div class="c-stage__header-img o-media__img"><img alt="" src="img/icon-shift-staff.png"></div>
                    <div class="c-stage__header-title">
                        <h6 class="u-mb-zero">New Product</h6></div>
                </div>
                <i class="far fa-edit u-text-mute"></i> </a>
            <div class="c-stage__panel c-stage__panel--mute collapse" id="stage-panel3">
                <div class="u-p-medium">
                    <div class="u-p-xsmall u-border-rounded" style="background: rgb(239, 243, 246);">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="c-field ">
                                    <label for="name" class="c-field__label">Name</label>
                                    <div class="c-field input-group u-mb-xsmall">
                                        <input type="text" v-model="name" id="name" placeholder="Name"
                                               name="name" required="required" autocomplete="off" class="c-input"></div>
                                    <!---->
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="c-field ">
                                    <label for="desc" class="c-field__label">Description</label>
                                    <div class="c-field input-group u-mb-xsmall">
                                        <input type="text" v-model="description" id="desc" placeholder="Description"
                                               name="desc" required="required" autocomplete="off" class="c-input"></div>
                                    <!---->
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="c-field ">
                                    <label class="c-field__label">Quantity</label>
                                    <div class="c-field input-group u-mb-xsmall">
                                        <input type="search" v-model="quantity" id="quantity" placeholder="Quantity"
                                               name="quanity" required="required" autocomplete="off" class="c-input"></div>
                                    <!---->
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="c-field ">
                                    <div class="c-field input-group u-mb-xsmall">
                                        <button @click="create" class="btn btn-lg btn-success">Create Product</button>
                                       </div>
                                    <!---->
                                </div>
                            </div>
                        </div>
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
                <tbody v-for="product in products.data">
                <tr class="c-table__row" >
                    <td class="c-table__cell">
                        <div class="o-media">
                            <div class="o-media__body">{{product.name}}
                                <small class="u-block u-text-mute">product</small>
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
                        <router-link class="c-btn c-btn--secondary"  :to="{ name: 'app.product.edit', params: { id : product.id } }">
                            Edit/View
                        </router-link>
                        <button @click="suppRemove(product.id)" class="c-btn c-btn--danger smal">Remove</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <button @click="loadPreviousPage" v-if="products.meta.pagination.links.previous" style="margin-top: 3%"
                    class="c-btn--fancy btn-outline-success">Previous Page
            </button>
            <button @click="loadNextPage" v-if="products.meta.pagination.links.next" style="margin-top: 3%"
                    class="c-btn--fancy btn-outline-success">Next Page
            </button>
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
                    this.products = response.data
                })
            }
        },
        data() {
            return {
                products: [],
                updating: false,
                name: '',
                description: '',
                quantity: ''
            }
        },
        methods: {
            create() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.post('api/product', {name: this.name,description: this.description,quantity: this.quantity}, config).then((response) => {
                    this.products = response.data
                })
            },
            suppRemove(id){
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.delete('api/product/'+id, config).then((response) => {
                    this.products = response.data
                })
            },
            loadNextPage() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                if (token) {
                    axios.get(this.products.meta.pagination.links.next, config).then((response) => {
                        this.products = response.data
                    })
                }
            },
            loadPreviousPage() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                if (token) {
                    axios.get(this.products.meta.pagination.links.previous, config).then((response) => {
                        this.products = response.data
                    })
                }
            }
        }

    }
</script>