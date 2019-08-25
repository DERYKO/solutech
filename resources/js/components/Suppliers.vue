<template>
    <div class="container">
        <article class="c-stage u-mt-large" id="venue-block">
            <a aria-controls="stage-panel1" aria-expanded="false" class="c-stage__header u-flex u-justify-between"
               data-toggle="collapse" href="#stage-panel3">
                <div class="o-media c-table__cell--img">
                    <div class="c-stage__header-img o-media__img"><img alt="" src="img/icon-shift-staff.png"></div>
                    <div class="c-stage__header-title">
                        <h6 class="u-mb-zero">New Supplier</h6></div>
                </div>
                <i class="far fa-edit u-text-mute"></i> </a>
            <div class="c-stage__panel c-stage__panel--mute collapse" id="stage-panel3">
                <div class="u-p-medium">
                    <div class="u-p-xsmall u-border-rounded" style="background: rgb(239, 243, 246);">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="c-field ">
                                    <label class="c-field__label">Name</label>
                                    <div class="c-field input-group u-mb-xsmall">
                                        <input type="search" v-model="name" id="role-name" placeholder="Name"
                                               name="name" required="required" autocomplete="off" class="c-input"></div>
                                    <!---->
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <button @click="create" class="btn btn-lg btn-success">Create Supplier</button>
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
                    <th class="c-table__cell c-table__cell--head">Created At</th>
                    <th class="c-table__cell c-table__cell--head no-sort"><span class="u-hidden-visually">Actions</span>
                    </th>
                </tr>
                </thead>
                <tbody v-for="supplier in suppliers">
                <tr class="c-table__row" >
                    <td class="c-table__cell">
                        <div class="o-media">
                            <div class="o-media__img u-mr-xsmall">
                                <div class="c-avatar c-avatar--table"><img class="c-avatar__img"
                                                                           src="img/avatar3-72.jpg"
                                                                           alt="Adam's Face"></div>
                            </div>
                            <div class="o-media__body">{{supplier.name}}
                                <small class="u-block u-text-mute">Supplier</small>
                            </div>
                        </div>
                    </td>
                    <td class="c-table__cell"><span
                            class="c-badge c-badge--success u-text-uppercase c-badge--small">{{supplier.created_at}}</span>
                    </td>
                    <td class="c-table__cell u-float-right">
                        <router-link class="c-btn c-btn--secondary"  :to="{ name: 'app.supplier.edit', params: { supplier : supplier } }">
                            Edit/View
                        </router-link>
                        <button @click="suppRemove(supplier.id)" class="c-btn c-btn--danger smal">Remove</button>
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
                axios.get('api/supplier?include=products', config).then((response) => {
                    this.suppliers = response.data.data
                })
            }
        },
        data() {
            return {
                suppliers: [],
                updating: false,
                name: ''
            }
        },
        methods: {
            create() {
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                axios.post('api/supplier', {name: this.name}, config).then((response) => {
                    this.suppliers = response.data.data
                })
            },
            suppRemove(id){
                const token = localStorage.getItem("token");
                let config = {
                    headers: {'Authorization': "Bearer " + token}
                };
                console.log(this.token)
                axios.delete('api/supplier/'+id, config).then((response) => {
                    this.suppliers = response.data.data
                })
            }
        }

    }
</script>