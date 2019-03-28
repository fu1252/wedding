require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([0],Array(26).concat([
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(27);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_05073174_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(42);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05073174"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_05073174_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\message\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05073174", Component.options)
  } else {
    hotAPI.reload("data-v-05073174", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_video__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_form__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_formlist__ = __webpack_require__(38);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Message',
  components: {
    HVideo: __WEBPACK_IMPORTED_MODULE_1__components_video__["a" /* default */],
    HForm: __WEBPACK_IMPORTED_MODULE_2__components_form__["a" /* default */],
    HFormlist: __WEBPACK_IMPORTED_MODULE_3__components_formlist__["a" /* default */]
  },
  data: function data() {
    return {
      isOpen: false,
      desc: '',
      messageList: [],
      openId: '',
      userInfo: '',
      isForm: false,
      isVideo: false,
      isFormlist: false,
      formList: []
    };
  },
  onShow: function onShow() {
    var that = this;
    that.isVideo = false;
    that.isForm = false;
    that.isFormlist = false;
    that.getMessageList();
  },

  methods: {
    lookList: function lookList() {
      var that = this;
      that.isFormlist = true;
      that.getFormlist();
      that.isOpen = false;
    },
    closeFormlist: function closeFormlist() {
      var that = this;
      that.isFormlist = false;
    },
    getFormlist: function getFormlist() {
      var that = this;

      wx.cloud.callFunction({
        name: 'presentList',
        data: {}
      }).then(function (res) {
        that.formList = res.result.data.reverse();
      });
    },
    toVideo: function toVideo() {
      var that = this;
      that.isVideo = true;
    },
    closeVideo: function closeVideo() {
      var that = this;
      that.isVideo = false;
    },
    cancel: function cancel() {
      var that = this;
      that.isOpen = false;
    },
    getNowFormatDate: function getNowFormatDate() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var hh = now.getHours();
      var mm = now.getMinutes();
      var ss = now.getSeconds();
      var clock = year + '-';
      if (month < 10) {
        clock += '0';
      }
      clock += month + '-';
      if (day < 10) {
        clock += '0';
      }
      clock += day + ' ';
      if (hh < 10) {
        clock += '0';
      }
      clock += hh + ':';
      if (mm < 10) {
        clock += '0';
      }
      clock += mm + ':';
      if (ss < 10) {
        clock += '0';
      }
      clock += ss;
      return clock;
    },
    sendMessage: function sendMessage() {
      var that = this;
      if (that.desc) {
        var db = wx.cloud.database();
        var message = db.collection('message');
        message.add({
          data: {
            desc: that.desc,
            type: 'message',
            time: that.getNowFormatDate(),
            url: that.userInfo.avatarUrl,
            name: that.userInfo.nickName
          }
        }).then(function (res) {
          that.isOpen = false;
          that.desc = '';
          that.getMessageList();
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].showToast('说点什么吧');
      }
    },
    toForm: function toForm() {
      var that = this;
      that.isForm = true;
    },
    closeForm: function closeForm() {
      var that = this;
      that.isForm = false;
    },
    addUser: function addUser() {
      var that = this;
      var db = wx.cloud.database();
      var user = db.collection('user');
      user.add({
        data: {
          user: that.userInfo
        }
      }).then(function (res) {});
    },
    getIsExist: function getIsExist() {
      var that = this;
      var db = wx.cloud.database();
      var user = db.collection('user');
      user.where({
        _openid: that.openId
      }).get().then(function (res) {
        if (res.data.length === 0) {
          that.addUser();
        }
      });
    },
    getOpenId: function getOpenId() {
      var that = this;
      wx.cloud.callFunction({
        name: 'user',
        data: {}
      }).then(function (res) {
        that.openId = res.result.openid;
        that.getIsExist();
      });
    },
    toMessage: function toMessage(e) {
      var that = this;
      if (e.target.errMsg === 'getUserInfo:ok') {
        wx.getUserInfo({
          success: function success(res) {
            that.userInfo = res.userInfo;
            that.isOpen = true;
            that.getOpenId();
          }
        });
      }
    },
    getMessageList: function getMessageList() {
      var that = this;
      wx.cloud.callFunction({
        name: 'messageList',
        data: {}
      }).then(function (res) {
        that.messageList = res.result.data.reverse();
      });
    }
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_video_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_03e391cb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_video_vue__ = __webpack_require__(33);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(31)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03e391cb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_video_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_03e391cb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_video_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03e391cb", Component.options)
  } else {
    hotAPI.reload("data-v-03e391cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_index__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'video',
  data: function data() {
    return {
      inputValue: '',
      danmuList: [],
      danmu: '',
      time: '',
      isPlay: false
    };
  },
  onLoad: function onLoad() {
    var that = this;
    that.getMessageList();
    that.videoContext = wx.createVideoContext('myVideo');
  },

  methods: {
    toIndex: function toIndex() {
      wx.switchTab({
        url: "/pages/index/main"
      });
    },
    getRandomColor: function getRandomColor() {
      var rgb = [];
      for (var i = 0; i < 3; ++i) {
        var color = Math.floor(Math.random() * 256).toString(16);
        color = color.length === 1 ? '0' + color : color;
        rgb.push(color);
      }
      return '#' + rgb.join('');
    },
    close: function close() {
      var that = this;
      that.$emit('closeVideo');
    },
    getTime: function getTime(e) {
      this.time = Math.floor(e.mp.detail.currentTime);
      console.log(this.time);
    },
    getMessageList: function getMessageList() {
      var that = this;
      var db = wx.cloud.database();
      var message = db.collection('message');
      message.get().then(function (res) {
        var data = res.data.reverse();
        var arr = [];
        if (data.length > 0) {
          data.forEach(function (item, index) {
            arr.push({
              text: item.desc,
              color: that.getRandomColor(),
              time: 1 + index * 2
            });
          });
          that.danmuList = arr;
        }
      });
    },

    // onInputBlur(e) {
    //   const that = this        
    //   that.inputValue = e.mp.detail.value
    // },
    onSendDanmu: function onSendDanmu() {
      var that = this;
      console.log(that.danmuList);
      that.danmuList.push({
        text: that.danmu,
        color: that.getRandomColor(),
        time: that.time + 3
      });

      that.danmu = '';
    },
    play: function play() {
      this.videoContext.play();
      this.isPlay = !this.isPlay;
      wx.pauseBackgroundAudio();
    },
    pause: function pause() {
      this.videoContext.pause();
      this.isPlay = !this.isPlay;
      wx.playBackgroundAudio();
      // const db = wx.cloud.database()
      // const music = db.collection('counter')


      // music.get().then((res) => {
      //   wx.playBackgroundAudio({
      //     dataUrl: res.data[0].musicUrl,
      //     title: '天天音乐',
      //     coverImgUrl: 'https://img3.doubanio.com/view/photo/l/public/p1560261394.webp'
      //   })
      // })
    }
  }
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section"
  }, [_c('video', {
    attrs: {
      "id": "myVideo",
      "src": "http://vt1.doubanio.com/201903251332/b216edf7460881052281465608f0c9fc/view/movie/M/402390886.mp4",
      "danmu-list": _vm.danmuList,
      "enable-danmu": "",
      "danmu-btn": "",
      "controls": "",
      "poster": "https://img3.doubanio.com/view/photo/raw/public/p2413273686.jpg",
      "eventid": '0'
    },
    on: {
      "timeupdate": _vm.getTime
    }
  }), _vm._v(" "), (_vm.isPlay) ? _c('button', {
    staticClass: "play",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.pause
    }
  }, [_vm._v("暂停")]) : _c('button', {
    staticClass: "play",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.play
    }
  }, [_vm._v("播放")]), _vm._v(" "), _c('div', {
    staticClass: "btn-area"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.danmu),
      expression: "danmu"
    }],
    attrs: {
      "placeholder": "请输入弹幕",
      "placeholder-style": "color:#bbb",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.danmu)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.danmu = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.onSendDanmu
    }
  }, [_vm._v("点击生成弹幕")]), _vm._v(" "), _c('image', {
    attrs: {
      "src": "/static/images/close1.png",
      "eventid": '5'
    },
    on: {
      "tap": _vm.close
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-03e391cb", esExports)
  }
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_form_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c44753b8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_form_vue__ = __webpack_require__(37);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(35)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c44753b8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_form_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c44753b8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_form_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c44753b8", Component.options)
  } else {
    hotAPI.reload("data-v-c44753b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'form',
    data: function data() {
        return {
            list: [{
                name: '自己出席', value: '自己出席', checked: true
            }, {
                name: '两人出席', value: '两人出席', checked: false
            }, {
                name: '三人出席', value: '三人出席', checked: false
            }, {
                name: '三人以上', value: '三人以上', checked: false
            }],
            desc: '',
            name: '',
            phone: '',
            count: '自己出席',
            phoneFlag: false
        };
    },

    methods: {
        cancel: function cancel() {
            var that = this;
            that.$emit('closeForm');
        },
        radioChange: function radioChange(e) {
            var that = this;
            that.count = e.mp.detail.value;
            that.list.forEach(function (item) {
                if (item.name === that.count) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            });
        },
        submit: function submit() {
            var that = this;
            if (that.name) {
                if (that.phoneFlag) {
                    that.addPresent();
                } else {
                    __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].showToast('请正确输入您的手机号码');
                }
            } else {
                __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].showToast('请填写您的姓名');
            }
        },
        checkPhone: function checkPhone() {
            var that = this;
            var reg = /^(1[3-9][0-9])\d{8}$/;
            if (that.phone.length === 11) {
                that.phoneFlag = true;
            } else {
                that.phoneFlag = false;
                __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].showToast('手机号码格式不正确');
            }
        },
        addPresent: function addPresent() {
            var that = this;
            var db = wx.cloud.database();
            var present = db.collection('present');
            present.add({
                data: {
                    name: that.name,
                    phone: that.phone,
                    count: that.count,
                    desc: that.desc
                }
            }).then(function (res) {
                that.name = '';
                that.phone = '';
                that.count = '自己出席';
                that.desc = '';
                that.$emit('closeForm');
            });
        }
    }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form"
  }, [_c('image', {
    staticClass: "head-img",
    attrs: {
      "src": "/static/images/green-flower.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_c('span', [_vm._v("*")]), _vm._v("姓名")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    attrs: {
      "type": "text",
      "placeholder": "怎么称呼您",
      "maxlength": "6",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_c('span', [_vm._v("*")]), _vm._v("电话")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phone),
      expression: "phone"
    }],
    attrs: {
      "type": "number",
      "placeholder": "请填写有效的手机号码",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.phone)
    },
    on: {
      "blur": _vm.checkPhone,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phone = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("几人出席")]), _vm._v(" "), _c('radio-group', {
    staticClass: "group",
    attrs: {
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.radioChange
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('label', {
      key: index,
      staticClass: "radio"
    }, [_c('radio', {
      attrs: {
        "value": item.name,
        "check": item.checked
      }
    }), _vm._v("\n            " + _vm._s(item.value) + "\n        ")], 1)
  })), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("备注")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.desc),
      expression: "desc"
    }],
    staticClass: "desc",
    attrs: {
      "focus": "true",
      "maxlength": "80",
      "placeholder": "请填写您的备注请求",
      "name": "textarea",
      "placeholder-style": "color:#ccc",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.desc)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.desc = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    staticClass: "left",
    attrs: {
      "eventid": '4'
    },
    on: {
      "tap": _vm.submit
    }
  }, [_vm._v("确定提交")]), _vm._v(" "), _c('button', {
    staticClass: "right",
    attrs: {
      "eventid": '5'
    },
    on: {
      "tap": _vm.cancel
    }
  }, [_vm._v("取消")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c44753b8", esExports)
  }
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_formlist_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f7d63c7c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_formlist_vue__ = __webpack_require__(41);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f7d63c7c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_formlist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f7d63c7c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_formlist_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\formlist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] formlist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f7d63c7c", Component.options)
  } else {
    hotAPI.reload("data-v-f7d63c7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Formlist',
    props: ['formList'],
    methods: {
        close: function close() {
            var that = this;
            that.$emit('closeFormlist');
        }
    }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    staticClass: "formlist",
    attrs: {
      "scroll-y": ""
    }
  }, _vm._l((_vm.formList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "item-top"
    }, [_c('span', {
      staticClass: "left"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "right"
    }, [_vm._v(_vm._s(item.phone))])]), _vm._v(" "), _c('div', {
      staticClass: "item-midddle"
    }, [_c('p', {
      staticClass: "address"
    }, [_c('span', [_vm._v(_vm._s(item.count))]), _vm._v(" "), (item.desc) ? _c('span', [_vm._v("备注：" + _vm._s(item.desc))]) : _vm._e()])], 1)])
  })), _vm._v(" "), _c('image', {
    attrs: {
      "src": "/static/images/close1.png",
      "eventid": '0'
    },
    on: {
      "tap": _vm.close
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f7d63c7c", esExports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message"
  }, [_c('scroll-view', {
    staticClass: "box",
    attrs: {
      "scroll-y": "",
      "eventid": '0'
    },
    on: {
      "scroll": _vm.scroll
    }
  }, [_c('p', {
    staticClass: "place"
  }), _vm._v(" "), _vm._l((_vm.messageList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('image', {
      staticClass: "left",
      attrs: {
        "src": item.url
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "right"
    }, [_c('div', {
      staticClass: "top"
    }, [_c('span', {
      staticClass: "top-1"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "top-2"
    }, [_vm._v(_vm._s(item.time))])]), _vm._v(" "), _c('p', {
      staticClass: "con"
    }, [_vm._v(_vm._s(item.desc))])], 1)])
  }), _vm._v(" "), _c('p', {
    staticClass: "place-end"
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('button', {
    staticClass: "inner",
    attrs: {
      "lang": "zh_CN",
      "open-type": "getUserInfo",
      "eventid": '1'
    },
    on: {
      "getuserinfo": _vm.toMessage
    }
  }, [_vm._v("说点什么")]), _vm._v(" "), _c('button', {
    staticClass: "inner",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.toForm
    }
  }, [_vm._v("我要出席")])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    staticClass: "dialog"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.desc),
      expression: "desc"
    }],
    staticClass: "desc",
    attrs: {
      "name": "textarea",
      "focus": "true",
      "maxlength": "80",
      "placeholder": "在这里输入你说的话",
      "placeholder-style": "color:#ccc",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.desc)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.desc = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    staticClass: "btn-inner send-btn",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.sendMessage
    }
  }, [_vm._v("发送留言")]), _vm._v(" "), _c('button', {
    staticClass: "btn-inner cancel-btn",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("取消")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "video-dialog",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.toVideo
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/video1.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-dialog",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.lookList
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/form.png"
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVideo),
      expression: "isVideo"
    }],
    staticClass: "video"
  }, [_c('h-video', {
    attrs: {
      "eventid": '8',
      "mpcomid": '0'
    },
    on: {
      "closeVideo": _vm.closeVideo
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isForm),
      expression: "isForm"
    }],
    staticClass: "form"
  }, [_c('h-form', {
    attrs: {
      "eventid": '9',
      "mpcomid": '1'
    },
    on: {
      "closeForm": _vm.closeForm,
      "getFromlist": _vm.getFormlist
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isFormlist),
      expression: "isFormlist"
    }],
    staticClass: "form-list"
  }, [_c('h-formlist', {
    attrs: {
      "formList": _vm.formList,
      "eventid": '10',
      "mpcomid": '2'
    },
    on: {
      "closeFormlist": _vm.closeFormlist
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05073174", esExports)
  }
}

/***/ })
]),[26]);