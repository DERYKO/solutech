<template>
    <div class="container">
        <article class="c-stage u-mt-large" id="venue-block">
            <a aria-controls="stage-panel1" aria-expanded="false" class="c-stage__header u-flex u-justify-between"
               data-toggle="collapse" href="#stage-panel3">
                <div class="o-media c-table__cell--img">
                    <div class="c-stage__header-img o-media__img"><img alt="" src="img/icon-shift-staff.png"></div>
                    <div class="c-stage__header-title">
                        <h6 class="u-mb-zero">New order</h6></div>
                </div>
                <i class="far fa-edit u-text-mute"></i> </a>
            <div class="c-stage__panel c-stage__panel--mute collapse" id="stage-panel3">
                <div class="u-p-medium">
                    <div class="u-p-xsmall u-border-rounded" style="background: rgb(239, 243, 246);">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="c-field ">
                                    <label class="c-field__label">Order Number</label>
                                    <div class="c-field input-group u-mb-xsmall">
                                        <input type="search" v-model="order_number" id="role-name"
                                               placeholder="Order Number"
                                               name="order_number" required="required" autocomplete="off"
                                               class="c-input"></div>
                                    <!---->
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <button @click="create" class="btn btn-lg btn-success">Create Order</button>
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
                    <th class="c-table__cell c-table__cell--head" style="min-width: 25%">Order Number</th>
                    <th class="c-table__cell c-table__cell--head">Created At</th>
                    <th class="c-table__cell c-table__cell--head no-sort"><span class="u-hidden-visually">Actions</span>
                    </th>
                </tr>
                </thead>
                <tbody v-for="order in orders.data">
                <tr class="c-table__row">
                    <td class="c-table__cell">
                        <div class="o-media">
                            <div class="o-media__body">{{order.order_number}}
                            </div>
                        </div>
                    </td>
                    <td class="c-table__cell"><span>{{order.created_at}}</span>
                    </td>
                    <td class="c-table__cell u-float-right">
                        <router-link class="c-btn c-btn--secondary"
                                     :to="{ name: 'app.order.edit', params: { id : order.id } }">
                            Edit/View
                        </router-link>
                        <button @click="suppRemove(order.id)" class="c-btn c-btn--danger smal">Remove</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <button @click="loadPreviousPage" v-if="orders.meta.pagination.links.previous" style="margin-top: 3%"
                    class="c-btn--fancy btn-outline-success">Previous Page
            </button>
            <button @click="loadNextPage" v-if="orders.meta.pagination.links.next" style="margin-top: 3%"
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
                axios.get('api/order', config).then((response) => {
                    this.orders = response.data
                })
            }
        },
        data() {
            return {
                orders: [],
                updating: false,
                order_number: ''
            }
        },
        methods: {
            create() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.post('api/order', {order_number: this.order_number}, config).then((response) => {
                    this.orders = response.data
                })
            },
            suppRemove(id) {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.delete('api/order/' + id, config).then((response) => {
                    this.orders = response.data
                })
            },
            loadNextPage() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                if (token) {
                    axios.get(this.orders.meta.pagination.links.next, config).then((response) => {
                        this.orders = response.data
                    })
                }
            },
            loadPreviousPage() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                if (token) {
                    axios.get(this.orders.meta.pagination.links.previous, config).then((response) => {
                        this.orders = response.data
                    })
                }
            }
        }

    }
</script>