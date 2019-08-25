(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order-edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Order-edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    var token = localStorage.getItem("token");
    var config = {
      headers: {
        'Authorization': "Bearer " + token
      }
    };

    if (token) {
      axios.get('api/product', config).then(function (response) {
        _this.products = response.data.data;
      });
      axios.get('api/order/' + this.$route.params.id, config).then(function (response) {
        _this.order = response.data.data;
      });
    }
  },
  data: function data() {
    return {
      order: {},
      products: [],
      product_id: null
    };
  },
  methods: {
    update: function update() {
      var _this2 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios.put('api/order/' + this.order.id, this.order, config).then(function (response) {
        _this2.order = response.data.data;
      });
    },
    attach: function attach() {
      var _this3 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios.post('api/order_detail', {
        product_id: this.product_id,
        order_id: this.order.id
      }, config).then(function (response) {
        _this3.order = response.data.data;
      });
    },
    proRemove: function proRemove(product_id) {
      var _this4 = this;

      console.log(product_id);
      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios["delete"]('api/order_detail/' + product_id, config).then(function (response) {
        _this4.order = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Orders.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Orders.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    var token = localStorage.getItem("token");
    var config = {
      headers: {
        'Authorization': "Bearer " + token
      }
    };

    if (token) {
      axios.get('api/order', config).then(function (response) {
        _this.orders = response.data;
      });
    }
  },
  data: function data() {
    return {
      orders: [],
      updating: false,
      order_number: ''
    };
  },
  methods: {
    create: function create() {
      var _this2 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios.post('api/order', {
        order_number: this.order_number
      }, config).then(function (response) {
        _this2.orders = response.data;
      });
    },
    suppRemove: function suppRemove(id) {
      var _this3 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios["delete"]('api/order/' + id, config).then(function (response) {
        _this3.orders = response.data;
      });
    },
    loadNextPage: function loadNextPage() {
      var _this4 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };

      if (token) {
        axios.get(this.orders.meta.pagination.links.next, config).then(function (response) {
          _this4.orders = response.data;
        });
      }
    },
    loadPreviousPage: function loadPreviousPage() {
      var _this5 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };

      if (token) {
        axios.get(this.orders.meta.pagination.links.previous, config).then(function (response) {
          _this5.orders = response.data;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product-edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product-edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    var token = localStorage.getItem("token");
    var config = {
      headers: {
        'Authorization': "Bearer " + token
      }
    };

    if (token) {
      axios.get('api/product/' + this.$route.params.id, config).then(function (response) {
        _this.product = response.data.data;
      });
    }
  },
  data: function data() {
    return {
      product: {}
    };
  },
  methods: {
    update: function update() {
      var _this2 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios.put('api/product/' + this.product.id, this.product, config).then(function (response) {
        _this2.product = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Products.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Products.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    var token = localStorage.getItem("token");
    var config = {
      headers: {
        'Authorization': "Bearer " + token
      }
    };

    if (token) {
      axios.get('api/product', config).then(function (response) {
        _this.products = response.data;
      });
    }
  },
  data: function data() {
    return {
      products: [],
      updating: false,
      name: '',
      description: '',
      quantity: ''
    };
  },
  methods: {
    create: function create() {
      var _this2 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios.post('api/product', {
        name: this.name,
        description: this.description,
        quantity: this.quantity
      }, config).then(function (response) {
        _this2.products = response.data;
      });
    },
    suppRemove: function suppRemove(id) {
      var _this3 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios["delete"]('api/product/' + id, config).then(function (response) {
        _this3.products = response.data;
      });
    },
    loadNextPage: function loadNextPage() {
      var _this4 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };

      if (token) {
        axios.get(this.products.meta.pagination.links.next, config).then(function (response) {
          _this4.products = response.data;
        });
      }
    },
    loadPreviousPage: function loadPreviousPage() {
      var _this5 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };

      if (token) {
        axios.get(this.products.meta.pagination.links.previous, config).then(function (response) {
          _this5.products = response.data;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Supplier-edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Supplier-edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    var token = localStorage.getItem("token");
    var config = {
      headers: {
        'Authorization': "Bearer " + token
      }
    };

    if (token) {
      axios.get('api/product', config).then(function (response) {
        _this.products = response.data.data;
      });
      axios.get('api/supplier/' + this.$route.params.id, config).then(function (response) {
        _this.supplier = response.data.data;
      });
    }
  },
  data: function data() {
    return {
      supplier: {},
      products: [],
      product_id: null
    };
  },
  methods: {
    update: function update() {
      var _this2 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios.put('api/supplier/' + this.supplier.id, this.supplier, config).then(function (response) {
        _this2.supplier = response.data.data;
      });
    },
    attach: function attach() {
      var _this3 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios.post('api/supplier_product', {
        product_id: this.product_id,
        supplier_id: this.supplier.id
      }, config).then(function (response) {
        _this3.supplier = response.data.data;
      });
    },
    proRemove: function proRemove(product_id) {
      var _this4 = this;

      console.log(product_id);
      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios["delete"]('api/supplier_product/' + product_id, config).then(function (response) {
        _this4.supplier = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Suppliers.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Suppliers.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    var token = localStorage.getItem("token");
    var config = {
      headers: {
        'Authorization': "Bearer " + token
      }
    };

    if (token) {
      axios.get('api/supplier', config).then(function (response) {
        _this.suppliers = response.data;
      });
    }
  },
  data: function data() {
    return {
      suppliers: [],
      updating: false,
      name: ''
    };
  },
  methods: {
    create: function create() {
      var _this2 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      axios.post('api/supplier', {
        name: this.name
      }, config).then(function (response) {
        _this2.suppliers = response.data;
      });
    },
    suppRemove: function suppRemove(id) {
      var _this3 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };
      console.log(this.token);
      axios["delete"]('api/supplier/' + id, config).then(function (response) {
        _this3.suppliers = response.data;
      });
    },
    loadNextPage: function loadNextPage() {
      var _this4 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };

      if (token) {
        axios.get(this.suppliers.meta.pagination.links.next, config).then(function (response) {
          _this4.suppliers = response.data;
        });
      }
    },
    loadPreviousPage: function loadPreviousPage() {
      var _this5 = this;

      var token = localStorage.getItem("token");
      var config = {
        headers: {
          'Authorization': "Bearer " + token
        }
      };

      if (token) {
        axios.get(this.suppliers.meta.pagination.links.previous, config).then(function (response) {
          _this5.suppliers = response.data;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order-edit.vue?vue&type=template&id=ae054d58&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Order-edit.vue?vue&type=template&id=ae054d58& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "article",
      { staticClass: "c-stage u-mt-large", attrs: { id: "venue-block" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "c-stage__panel c-stage__panel--mute collapse",
            attrs: { id: "stage-panel3" }
          },
          [
            _c("div", { staticClass: "u-p-medium" }, [
              _c(
                "div",
                {
                  staticClass: "u-p-xsmall u-border-rounded",
                  staticStyle: { background: "rgb(239, 243, 246)" }
                },
                [
                  _c(
                    "form",
                    {
                      staticClass: "c-login__content",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.update($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "c-field u-mb-small" }, [
                        _c(
                          "label",
                          {
                            staticClass: "c-field__label",
                            attrs: { for: "name" }
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.order.order_number,
                              expression: "order.order_number"
                            }
                          ],
                          staticClass: "c-input",
                          attrs: { type: "name", id: "name", placeholder: "" },
                          domProps: { value: _vm.order.order_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.order,
                                "order_number",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "c-btn c-btn--success c-btn--fullwidth",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Update")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticClass: "c-login__content",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.attach($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "c-field u-mb-small" }, [
                        _c(
                          "label",
                          {
                            staticClass: "c-field__label",
                            attrs: { for: "product" }
                          },
                          [_vm._v("Products")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.product_id,
                                expression: "product_id"
                              }
                            ],
                            staticClass: "c-input",
                            attrs: { id: "product" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.product_id = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          _vm._l(_vm.products, function(product) {
                            return _c(
                              "option",
                              { domProps: { value: product.id } },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(product.name) +
                                    "\n                                "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "c-btn c-btn--success c-btn--fullwidth",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Attach Product")]
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "c-table-responsive@desktop u-mt-medium" }, [
      _c(
        "table",
        { staticClass: "c-table" },
        [
          _vm._m(1),
          _vm._v(" "),
          _vm._l(_vm.order.products, function(product) {
            return _c("tbody", [
              _c("tr", { staticClass: "c-table__row" }, [
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("div", { staticClass: "o-media" }, [
                    _c("div", { staticClass: "o-media__body" }, [
                      _vm._v(
                        _vm._s(product.name) + "\n                            "
                      ),
                      _c("small", { staticClass: "u-block u-text-mute" }, [
                        _vm._v("order")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("span", [_vm._v(_vm._s(product.description))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("span", [_vm._v(_vm._s(product.quantity))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("span", [_vm._v(_vm._s(product.created_at))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell u-float-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "c-btn c-btn--danger smal",
                      on: {
                        click: function($event) {
                          return _vm.proRemove(product.id)
                        }
                      }
                    },
                    [_vm._v("Remove")]
                  )
                ])
              ])
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "c-stage__header u-flex u-justify-between",
        attrs: {
          "aria-controls": "stage-panel1",
          "aria-expanded": "false",
          "data-toggle": "collapse",
          href: "#stage-panel3"
        }
      },
      [
        _c("div", { staticClass: "o-media c-table__cell--img" }, [
          _c("div", { staticClass: "c-stage__header-img o-media__img" }, [
            _c("img", { attrs: { alt: "", src: "img/icon-shift-staff.png" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "c-stage__header-title" }, [
            _c("h6", { staticClass: "u-mb-zero" }, [_vm._v("Edit order")])
          ])
        ]),
        _vm._v(" "),
        _c("i", { staticClass: "far fa-edit u-text-mute" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "c-table__head c-table__head--slim" }, [
      _c("tr", { staticClass: "c-table__row" }, [
        _c(
          "th",
          {
            staticClass: "c-table__cell c-table__cell--head",
            staticStyle: { "min-width": "25%" }
          },
          [_vm._v("Name")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Description")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Quantity")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Created At")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head no-sort" }, [
          _c("span", { staticClass: "u-hidden-visually" }, [_vm._v("Actions")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "article",
      { staticClass: "c-stage u-mt-large", attrs: { id: "venue-block" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "c-stage__panel c-stage__panel--mute collapse",
            attrs: { id: "stage-panel3" }
          },
          [
            _c("div", { staticClass: "u-p-medium" }, [
              _c(
                "div",
                {
                  staticClass: "u-p-xsmall u-border-rounded",
                  staticStyle: { background: "rgb(239, 243, 246)" }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-8" }, [
                      _c("div", { staticClass: "c-field " }, [
                        _c("label", { staticClass: "c-field__label" }, [
                          _vm._v("Order Number")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "c-field input-group u-mb-xsmall" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.order_number,
                                  expression: "order_number"
                                }
                              ],
                              staticClass: "c-input",
                              attrs: {
                                type: "search",
                                id: "role-name",
                                placeholder: "Order Number",
                                name: "order_number",
                                required: "required",
                                autocomplete: "off"
                              },
                              domProps: { value: _vm.order_number },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.order_number = $event.target.value
                                }
                              }
                            })
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-8" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-lg btn-success",
                          on: { click: _vm.create }
                        },
                        [_vm._v("Create Order")]
                      )
                    ])
                  ])
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "c-table-responsive@desktop u-mt-medium" }, [
      _c(
        "table",
        { staticClass: "c-table" },
        [
          _vm._m(1),
          _vm._v(" "),
          _vm._l(_vm.orders.data, function(order) {
            return _c("tbody", [
              _c("tr", { staticClass: "c-table__row" }, [
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("div", { staticClass: "o-media" }, [
                    _c("div", { staticClass: "o-media__body" }, [
                      _vm._v(
                        _vm._s(order.order_number) +
                          "\n                        "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("span", [_vm._v(_vm._s(order.created_at))])
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "c-table__cell u-float-right" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "c-btn c-btn--secondary",
                        attrs: {
                          to: {
                            name: "app.order.edit",
                            params: { id: order.id }
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Edit/View\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "c-btn c-btn--danger smal",
                        on: {
                          click: function($event) {
                            return _vm.suppRemove(order.id)
                          }
                        }
                      },
                      [_vm._v("Remove")]
                    )
                  ],
                  1
                )
              ])
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm.orders.meta.pagination.links.previous
        ? _c(
            "button",
            {
              staticClass: "c-btn--fancy btn-outline-success",
              staticStyle: { "margin-top": "3%" },
              on: { click: _vm.loadPreviousPage }
            },
            [_vm._v("Previous Page\n        ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.orders.meta.pagination.links.next
        ? _c(
            "button",
            {
              staticClass: "c-btn--fancy btn-outline-success",
              staticStyle: { "margin-top": "3%" },
              on: { click: _vm.loadNextPage }
            },
            [_vm._v("Next Page\n        ")]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "c-stage__header u-flex u-justify-between",
        attrs: {
          "aria-controls": "stage-panel1",
          "aria-expanded": "false",
          "data-toggle": "collapse",
          href: "#stage-panel3"
        }
      },
      [
        _c("div", { staticClass: "o-media c-table__cell--img" }, [
          _c("div", { staticClass: "c-stage__header-img o-media__img" }, [
            _c("img", { attrs: { alt: "", src: "img/icon-shift-staff.png" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "c-stage__header-title" }, [
            _c("h6", { staticClass: "u-mb-zero" }, [_vm._v("New order")])
          ])
        ]),
        _vm._v(" "),
        _c("i", { staticClass: "far fa-edit u-text-mute" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "c-table__head c-table__head--slim" }, [
      _c("tr", { staticClass: "c-table__row" }, [
        _c(
          "th",
          {
            staticClass: "c-table__cell c-table__cell--head",
            staticStyle: { "min-width": "25%" }
          },
          [_vm._v("Order Number")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Created At")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head no-sort" }, [
          _c("span", { staticClass: "u-hidden-visually" }, [_vm._v("Actions")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product-edit.vue?vue&type=template&id=7218a013&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product-edit.vue?vue&type=template&id=7218a013& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "article",
      { staticClass: "c-stage u-mt-large", attrs: { id: "venue-block" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "c-stage__panel c-stage__panel--mute collapse",
            attrs: { id: "stage-panel3" }
          },
          [
            _c("div", { staticClass: "u-p-medium" }, [
              _c(
                "div",
                {
                  staticClass: "u-p-xsmall u-border-rounded",
                  staticStyle: { background: "rgb(239, 243, 246)" }
                },
                [
                  _c(
                    "form",
                    {
                      staticClass: "c-login__content",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.update($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "col-lg-3" }, [
                        _c("div", { staticClass: "c-field " }, [
                          _c(
                            "label",
                            {
                              staticClass: "c-field__label",
                              attrs: { for: "name" }
                            },
                            [_vm._v("Name")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "c-field input-group u-mb-xsmall" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.product.name,
                                    expression: "product.name"
                                  }
                                ],
                                staticClass: "c-input",
                                attrs: {
                                  type: "text",
                                  id: "name",
                                  placeholder: "Name",
                                  name: "name",
                                  required: "required",
                                  autocomplete: "off"
                                },
                                domProps: { value: _vm.product.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.product,
                                      "name",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4" }, [
                        _c("div", { staticClass: "c-field " }, [
                          _c(
                            "label",
                            {
                              staticClass: "c-field__label",
                              attrs: { for: "desc" }
                            },
                            [_vm._v("Description")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "c-field input-group u-mb-xsmall" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.product.description,
                                    expression: "product.description"
                                  }
                                ],
                                staticClass: "c-input",
                                attrs: {
                                  type: "text",
                                  id: "desc",
                                  placeholder: "Description",
                                  name: "desc",
                                  required: "required",
                                  autocomplete: "off"
                                },
                                domProps: { value: _vm.product.description },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.product,
                                      "description",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-2" }, [
                        _c("div", { staticClass: "c-field " }, [
                          _c("label", { staticClass: "c-field__label" }, [
                            _vm._v("Quantity")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "c-field input-group u-mb-xsmall" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.product.quantity,
                                    expression: "product.quantity"
                                  }
                                ],
                                staticClass: "c-input",
                                attrs: {
                                  type: "search",
                                  id: "quantity",
                                  placeholder: "Quantity",
                                  name: "quanity",
                                  required: "required",
                                  autocomplete: "off"
                                },
                                domProps: { value: _vm.product.quantity },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.product,
                                      "quantity",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "c-stage__header u-flex u-justify-between",
        attrs: {
          "aria-controls": "stage-panel1",
          "aria-expanded": "false",
          "data-toggle": "collapse",
          href: "#stage-panel3"
        }
      },
      [
        _c("div", { staticClass: "o-media c-table__cell--img" }, [
          _c("div", { staticClass: "c-stage__header-img o-media__img" }, [
            _c("img", { attrs: { alt: "", src: "img/icon-shift-staff.png" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "c-stage__header-title" }, [
            _c("h6", { staticClass: "u-mb-zero" }, [_vm._v("Edit product")])
          ])
        ]),
        _vm._v(" "),
        _c("i", { staticClass: "far fa-edit u-text-mute" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-2" }, [
      _c("div", { staticClass: "c-field " }, [
        _c("div", { staticClass: "c-field input-group u-mb-xsmall" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-lg btn-success",
              attrs: { type: "submit" }
            },
            [_vm._v("Update Product")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Products.vue?vue&type=template&id=57b394cf&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Products.vue?vue&type=template&id=57b394cf& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "article",
      { staticClass: "c-stage u-mt-large", attrs: { id: "venue-block" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "c-stage__panel c-stage__panel--mute collapse",
            attrs: { id: "stage-panel3" }
          },
          [
            _c("div", { staticClass: "u-p-medium" }, [
              _c(
                "div",
                {
                  staticClass: "u-p-xsmall u-border-rounded",
                  staticStyle: { background: "rgb(239, 243, 246)" }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-3" }, [
                      _c("div", { staticClass: "c-field " }, [
                        _c(
                          "label",
                          {
                            staticClass: "c-field__label",
                            attrs: { for: "name" }
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "c-field input-group u-mb-xsmall" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.name,
                                  expression: "name"
                                }
                              ],
                              staticClass: "c-input",
                              attrs: {
                                type: "text",
                                id: "name",
                                placeholder: "Name",
                                name: "name",
                                required: "required",
                                autocomplete: "off"
                              },
                              domProps: { value: _vm.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.name = $event.target.value
                                }
                              }
                            })
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4" }, [
                      _c("div", { staticClass: "c-field " }, [
                        _c(
                          "label",
                          {
                            staticClass: "c-field__label",
                            attrs: { for: "desc" }
                          },
                          [_vm._v("Description")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "c-field input-group u-mb-xsmall" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.description,
                                  expression: "description"
                                }
                              ],
                              staticClass: "c-input",
                              attrs: {
                                type: "text",
                                id: "desc",
                                placeholder: "Description",
                                name: "desc",
                                required: "required",
                                autocomplete: "off"
                              },
                              domProps: { value: _vm.description },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.description = $event.target.value
                                }
                              }
                            })
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-2" }, [
                      _c("div", { staticClass: "c-field " }, [
                        _c("label", { staticClass: "c-field__label" }, [
                          _vm._v("Quantity")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "c-field input-group u-mb-xsmall" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.quantity,
                                  expression: "quantity"
                                }
                              ],
                              staticClass: "c-input",
                              attrs: {
                                type: "search",
                                id: "quantity",
                                placeholder: "Quantity",
                                name: "quanity",
                                required: "required",
                                autocomplete: "off"
                              },
                              domProps: { value: _vm.quantity },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.quantity = $event.target.value
                                }
                              }
                            })
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-2" }, [
                      _c("div", { staticClass: "c-field " }, [
                        _c(
                          "div",
                          { staticClass: "c-field input-group u-mb-xsmall" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-lg btn-success",
                                on: { click: _vm.create }
                              },
                              [_vm._v("Create Product")]
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "c-table-responsive@desktop u-mt-medium" }, [
      _c(
        "table",
        { staticClass: "c-table" },
        [
          _vm._m(1),
          _vm._v(" "),
          _vm._l(_vm.products.data, function(product) {
            return _c("tbody", [
              _c("tr", { staticClass: "c-table__row" }, [
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("div", { staticClass: "o-media" }, [
                    _c("div", { staticClass: "o-media__body" }, [
                      _vm._v(
                        _vm._s(product.name) + "\n                            "
                      ),
                      _c("small", { staticClass: "u-block u-text-mute" }, [
                        _vm._v("product")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("span", [_vm._v(_vm._s(product.description))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("span", [_vm._v(_vm._s(product.quantity))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("span", [_vm._v(_vm._s(product.created_at))])
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "c-table__cell u-float-right" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "c-btn c-btn--secondary",
                        attrs: {
                          to: {
                            name: "app.product.edit",
                            params: { id: product.id }
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Edit/View\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "c-btn c-btn--danger smal",
                        on: {
                          click: function($event) {
                            return _vm.suppRemove(product.id)
                          }
                        }
                      },
                      [_vm._v("Remove")]
                    )
                  ],
                  1
                )
              ])
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm.products.meta.pagination.links.previous
        ? _c(
            "button",
            {
              staticClass: "c-btn--fancy btn-outline-success",
              staticStyle: { "margin-top": "3%" },
              on: { click: _vm.loadPreviousPage }
            },
            [_vm._v("Previous Page\n        ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.products.meta.pagination.links.next
        ? _c(
            "button",
            {
              staticClass: "c-btn--fancy btn-outline-success",
              staticStyle: { "margin-top": "3%" },
              on: { click: _vm.loadNextPage }
            },
            [_vm._v("Next Page\n        ")]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "c-stage__header u-flex u-justify-between",
        attrs: {
          "aria-controls": "stage-panel1",
          "aria-expanded": "false",
          "data-toggle": "collapse",
          href: "#stage-panel3"
        }
      },
      [
        _c("div", { staticClass: "o-media c-table__cell--img" }, [
          _c("div", { staticClass: "c-stage__header-img o-media__img" }, [
            _c("img", { attrs: { alt: "", src: "img/icon-shift-staff.png" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "c-stage__header-title" }, [
            _c("h6", { staticClass: "u-mb-zero" }, [_vm._v("New Product")])
          ])
        ]),
        _vm._v(" "),
        _c("i", { staticClass: "far fa-edit u-text-mute" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "c-table__head c-table__head--slim" }, [
      _c("tr", { staticClass: "c-table__row" }, [
        _c(
          "th",
          {
            staticClass: "c-table__cell c-table__cell--head",
            staticStyle: { "min-width": "25%" }
          },
          [_vm._v("Name")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Description")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Quantity")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Created At")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head no-sort" }, [
          _c("span", { staticClass: "u-hidden-visually" }, [_vm._v("Actions")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Supplier-edit.vue?vue&type=template&id=23414390&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Supplier-edit.vue?vue&type=template&id=23414390& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "article",
      { staticClass: "c-stage u-mt-large", attrs: { id: "venue-block" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "c-stage__panel c-stage__panel--mute collapse",
            attrs: { id: "stage-panel3" }
          },
          [
            _c("div", { staticClass: "u-p-medium" }, [
              _c(
                "div",
                {
                  staticClass: "u-p-xsmall u-border-rounded",
                  staticStyle: { background: "rgb(239, 243, 246)" }
                },
                [
                  _c(
                    "form",
                    {
                      staticClass: "c-login__content",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.update($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "c-field u-mb-small" }, [
                        _c(
                          "label",
                          {
                            staticClass: "c-field__label",
                            attrs: { for: "name" }
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.supplier.name,
                              expression: "supplier.name"
                            }
                          ],
                          staticClass: "c-input",
                          attrs: { type: "name", id: "name", placeholder: "" },
                          domProps: { value: _vm.supplier.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.supplier,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "c-btn c-btn--success c-btn--fullwidth",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Update")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticClass: "c-login__content",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.attach($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "c-field u-mb-small" }, [
                        _c(
                          "label",
                          {
                            staticClass: "c-field__label",
                            attrs: { for: "product" }
                          },
                          [_vm._v("Products")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.product_id,
                                expression: "product_id"
                              }
                            ],
                            staticClass: "c-input",
                            attrs: { id: "product" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.product_id = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          _vm._l(_vm.products, function(product) {
                            return _c(
                              "option",
                              { domProps: { value: product.id } },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(product.name) +
                                    "\n                                "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "c-btn c-btn--success c-btn--fullwidth",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Attach Product")]
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "c-table-responsive@desktop u-mt-medium" }, [
      _c(
        "table",
        { staticClass: "c-table" },
        [
          _vm._m(1),
          _vm._v(" "),
          _vm._l(_vm.supplier.products, function(product) {
            return _c("tbody", [
              _c("tr", { staticClass: "c-table__row" }, [
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("div", { staticClass: "o-media" }, [
                    _c("div", { staticClass: "o-media__body" }, [
                      _vm._v(
                        _vm._s(product.name) + "\n                            "
                      ),
                      _c("small", { staticClass: "u-block u-text-mute" }, [
                        _vm._v("Supplier")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("span", [_vm._v(_vm._s(product.description))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("span", [_vm._v(_vm._s(product.quantity))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("span", [_vm._v(_vm._s(product.created_at))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell u-float-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "c-btn c-btn--danger smal",
                      on: {
                        click: function($event) {
                          return _vm.proRemove(product.id)
                        }
                      }
                    },
                    [_vm._v("Remove")]
                  )
                ])
              ])
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "c-stage__header u-flex u-justify-between",
        attrs: {
          "aria-controls": "stage-panel1",
          "aria-expanded": "false",
          "data-toggle": "collapse",
          href: "#stage-panel3"
        }
      },
      [
        _c("div", { staticClass: "o-media c-table__cell--img" }, [
          _c("div", { staticClass: "c-stage__header-img o-media__img" }, [
            _c("img", { attrs: { alt: "", src: "img/icon-shift-staff.png" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "c-stage__header-title" }, [
            _c("h6", { staticClass: "u-mb-zero" }, [_vm._v("Edit Supplier")])
          ])
        ]),
        _vm._v(" "),
        _c("i", { staticClass: "far fa-edit u-text-mute" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "c-table__head c-table__head--slim" }, [
      _c("tr", { staticClass: "c-table__row" }, [
        _c(
          "th",
          {
            staticClass: "c-table__cell c-table__cell--head",
            staticStyle: { "min-width": "25%" }
          },
          [_vm._v("Name")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Description")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Quantity")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Created At")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head no-sort" }, [
          _c("span", { staticClass: "u-hidden-visually" }, [_vm._v("Actions")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Suppliers.vue?vue&type=template&id=a9e90268&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Suppliers.vue?vue&type=template&id=a9e90268& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "article",
      { staticClass: "c-stage u-mt-large", attrs: { id: "venue-block" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "c-stage__panel c-stage__panel--mute collapse",
            attrs: { id: "stage-panel3" }
          },
          [
            _c("div", { staticClass: "u-p-medium" }, [
              _c(
                "div",
                {
                  staticClass: "u-p-xsmall u-border-rounded",
                  staticStyle: { background: "rgb(239, 243, 246)" }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-8" }, [
                      _c("div", { staticClass: "c-field " }, [
                        _c("label", { staticClass: "c-field__label" }, [
                          _vm._v("Name")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "c-field input-group u-mb-xsmall" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.name,
                                  expression: "name"
                                }
                              ],
                              staticClass: "c-input",
                              attrs: {
                                type: "search",
                                id: "role-name",
                                placeholder: "Name",
                                name: "name",
                                required: "required",
                                autocomplete: "off"
                              },
                              domProps: { value: _vm.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.name = $event.target.value
                                }
                              }
                            })
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-8" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-lg btn-success",
                          on: { click: _vm.create }
                        },
                        [_vm._v("Create Supplier")]
                      )
                    ])
                  ])
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "c-table-responsive@desktop u-mt-medium" }, [
      _c(
        "table",
        { staticClass: "c-table" },
        [
          _vm._m(1),
          _vm._v(" "),
          _vm._l(_vm.suppliers.data, function(supplier) {
            return _c("tbody", [
              _c("tr", { staticClass: "c-table__row" }, [
                _c("td", { staticClass: "c-table__cell" }, [
                  _c("div", { staticClass: "o-media" }, [
                    _vm._m(2, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "o-media__body" }, [
                      _vm._v(
                        _vm._s(supplier.name) + "\n                            "
                      ),
                      _c("small", { staticClass: "u-block u-text-mute" }, [
                        _vm._v("Supplier")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "c-table__cell" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "c-badge c-badge--success u-text-uppercase c-badge--small"
                    },
                    [_vm._v(_vm._s(supplier.created_at))]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "c-table__cell u-float-right" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "c-btn c-btn--secondary",
                        attrs: {
                          to: {
                            name: "app.supplier.edit",
                            params: { id: supplier.id }
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Edit/View\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "c-btn c-btn--danger smal",
                        on: {
                          click: function($event) {
                            return _vm.suppRemove(supplier.id)
                          }
                        }
                      },
                      [_vm._v("Remove")]
                    )
                  ],
                  1
                )
              ])
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm.suppliers.meta.pagination.links.previous
        ? _c(
            "button",
            {
              staticClass: "c-btn--fancy btn-outline-success",
              staticStyle: { "margin-top": "3%" },
              on: { click: _vm.loadPreviousPage }
            },
            [_vm._v("Previous Page\n        ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.suppliers.meta.pagination.links.next
        ? _c(
            "button",
            {
              staticClass: "c-btn--fancy btn-outline-success",
              staticStyle: { "margin-top": "10%" },
              on: { click: _vm.loadNextPage }
            },
            [_vm._v("Next Page\n        ")]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "c-stage__header u-flex u-justify-between",
        attrs: {
          "aria-controls": "stage-panel1",
          "aria-expanded": "false",
          "data-toggle": "collapse",
          href: "#stage-panel3"
        }
      },
      [
        _c("div", { staticClass: "o-media c-table__cell--img" }, [
          _c("div", { staticClass: "c-stage__header-img o-media__img" }, [
            _c("img", { attrs: { alt: "", src: "img/icon-shift-staff.png" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "c-stage__header-title" }, [
            _c("h6", { staticClass: "u-mb-zero" }, [_vm._v("New Supplier")])
          ])
        ]),
        _vm._v(" "),
        _c("i", { staticClass: "far fa-edit u-text-mute" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "c-table__head c-table__head--slim" }, [
      _c("tr", { staticClass: "c-table__row" }, [
        _c(
          "th",
          {
            staticClass: "c-table__cell c-table__cell--head",
            staticStyle: { "min-width": "25%" }
          },
          [_vm._v("Name")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head" }, [
          _vm._v("Created At")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "c-table__cell c-table__cell--head no-sort" }, [
          _c("span", { staticClass: "u-hidden-visually" }, [_vm._v("Actions")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "o-media__img u-mr-xsmall" }, [
      _c("div", { staticClass: "c-avatar c-avatar--table" }, [
        _c("img", {
          staticClass: "c-avatar__img",
          attrs: { src: "img/avatar3-72.jpg", alt: "Adam's Face" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Order-edit.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Order-edit.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Order_edit_vue_vue_type_template_id_ae054d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order-edit.vue?vue&type=template&id=ae054d58& */ "./resources/js/components/Order-edit.vue?vue&type=template&id=ae054d58&");
/* harmony import */ var _Order_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order-edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Order-edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Order_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Order_edit_vue_vue_type_template_id_ae054d58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Order_edit_vue_vue_type_template_id_ae054d58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order-edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order-edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Order-edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Order-edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order-edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Order-edit.vue?vue&type=template&id=ae054d58&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Order-edit.vue?vue&type=template&id=ae054d58& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_edit_vue_vue_type_template_id_ae054d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Order-edit.vue?vue&type=template&id=ae054d58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order-edit.vue?vue&type=template&id=ae054d58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_edit_vue_vue_type_template_id_ae054d58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_edit_vue_vue_type_template_id_ae054d58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Orders.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Orders.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=aebdd2e0& */ "./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/components/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Orders.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Orders.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=template&id=aebdd2e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Product-edit.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Product-edit.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_edit_vue_vue_type_template_id_7218a013___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product-edit.vue?vue&type=template&id=7218a013& */ "./resources/js/components/Product-edit.vue?vue&type=template&id=7218a013&");
/* harmony import */ var _Product_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product-edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Product-edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_edit_vue_vue_type_template_id_7218a013___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_edit_vue_vue_type_template_id_7218a013___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product-edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product-edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Product-edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product-edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product-edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Product-edit.vue?vue&type=template&id=7218a013&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Product-edit.vue?vue&type=template&id=7218a013& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_edit_vue_vue_type_template_id_7218a013___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Product-edit.vue?vue&type=template&id=7218a013& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product-edit.vue?vue&type=template&id=7218a013&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_edit_vue_vue_type_template_id_7218a013___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_edit_vue_vue_type_template_id_7218a013___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Products.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Products.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_57b394cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=57b394cf& */ "./resources/js/components/Products.vue?vue&type=template&id=57b394cf&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_57b394cf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_57b394cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Products.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products.vue?vue&type=template&id=57b394cf&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Products.vue?vue&type=template&id=57b394cf& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_57b394cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=57b394cf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Products.vue?vue&type=template&id=57b394cf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_57b394cf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_57b394cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Supplier-edit.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Supplier-edit.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Supplier_edit_vue_vue_type_template_id_23414390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Supplier-edit.vue?vue&type=template&id=23414390& */ "./resources/js/components/Supplier-edit.vue?vue&type=template&id=23414390&");
/* harmony import */ var _Supplier_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Supplier-edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Supplier-edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Supplier_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Supplier_edit_vue_vue_type_template_id_23414390___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Supplier_edit_vue_vue_type_template_id_23414390___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Supplier-edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Supplier-edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Supplier-edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Supplier-edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Supplier-edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Supplier-edit.vue?vue&type=template&id=23414390&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Supplier-edit.vue?vue&type=template&id=23414390& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_edit_vue_vue_type_template_id_23414390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Supplier-edit.vue?vue&type=template&id=23414390& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Supplier-edit.vue?vue&type=template&id=23414390&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_edit_vue_vue_type_template_id_23414390___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_edit_vue_vue_type_template_id_23414390___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Suppliers.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Suppliers.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Suppliers_vue_vue_type_template_id_a9e90268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Suppliers.vue?vue&type=template&id=a9e90268& */ "./resources/js/components/Suppliers.vue?vue&type=template&id=a9e90268&");
/* harmony import */ var _Suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Suppliers.vue?vue&type=script&lang=js& */ "./resources/js/components/Suppliers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Suppliers_vue_vue_type_template_id_a9e90268___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Suppliers_vue_vue_type_template_id_a9e90268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Suppliers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Suppliers.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Suppliers.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Suppliers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Suppliers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Suppliers.vue?vue&type=template&id=a9e90268&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Suppliers.vue?vue&type=template&id=a9e90268& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Suppliers_vue_vue_type_template_id_a9e90268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Suppliers.vue?vue&type=template&id=a9e90268& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Suppliers.vue?vue&type=template&id=a9e90268&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Suppliers_vue_vue_type_template_id_a9e90268___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Suppliers_vue_vue_type_template_id_a9e90268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);