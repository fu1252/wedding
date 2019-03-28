require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fbc3915e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(20);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fbc3915e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fbc3915e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fbc3915e", Component.options)
  } else {
    hotAPI.reload("data-v-fbc3915e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_index__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'index',
  data: function data() {
    return {
      list: [],
      isPlay: true,
      audioCtx: '',
      audioUrl: '',
      back: ''
    };
  },
  onShow: function onShow() {
    var that = this;
    // that.audioCtx = wx.createAudioContext('myAudio')
    that.back = wx.getBackgroundAudioManager();
    that.isPlay = true;
    that.getMusicUrl();
  },


  components: {},
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      path: '/pages/index/main'
    };
  },

  computed: {
    isa: function isa() {
      return __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.isAudioPlay;
    },
    counter: function counter() {
      return __WEBPACK_IMPORTED_MODULE_1__store_index__["a" /* default */].state.counter;
    }
  },
  methods: {
    getList: function getList() {
      var that = this;
      var db = wx.cloud.database();
      var banner = db.collection('counter');
      banner.get().then(function (res) {
        that.list = res.data[0].bannerList;
      });
    },
    getMusicUrl: function getMusicUrl() {
      var that = this;
      var db = wx.cloud.database();
      var music = db.collection('counter');

      music.get().then(function (res) {
        // that.audioUrl = res.data[0].musicUrl
        // that.audioCtx.play()
        that.back.src = res.data[0].musicUrl;
        that.back.title = "天天音乐";
        that.back.coverImgUrl = "https://img3.doubanio.com/view/photo/l/public/p1560261394.webp";
        that.back.play();
        that.back.onPlay(function () {
          console.log("音乐播放开始");
        });
        that.back.onEnded(function () {
          console.log("音乐播放结束");
        });
        that.getList();
      });
    },
    audioPlay: function audioPlay() {
      var that = this;
      if (that.isPlay) {
        that.back.pause();
        that.isPlay = false;
        __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].showToast('已暂停音乐播放');
      } else {
        that.back.play();
        that.isPlay = true;
        __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].showToast('背景音乐已开启');
      }
    }
  },

  created: function created() {
    // let app = getApp()
  }
});

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "autoplay": true,
      "circular": true,
      "current": "0",
      "indicator-dots": true,
      "vertical": true
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      staticClass: "item",
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "mode": "aspectFill",
        "lazy-load": "true",
        "src": item
      }
    })])], 1)
  }))], 1), _vm._v(" "), _c('image', {
    staticClass: "inv",
    attrs: {
      "src": "/static/images/inv.png"
    }
  }), _vm._v(" "), (_vm.isPlay) ? _c('div', {
    staticClass: "bg-music",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.audioPlay
    }
  }, [_c('image', {
    staticClass: "musicImg music-icon",
    attrs: {
      "src": "/static/images/music_icon.png"
    }
  }), _vm._v(" "), _c('image', {
    staticClass: "music-play pauseImg",
    attrs: {
      "src": "/static/images/music_play.png"
    }
  })]) : _c('div', {
    staticClass: "bg-music",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.audioPlay
    }
  }, [_c('image', {
    staticClass: "musicImg",
    attrs: {
      "src": "/static/images/music_icon.png"
    }
  }), _vm._v(" "), _c('image', {
    staticClass: "music-play playImg",
    attrs: {
      "src": "/static/images/music_play.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info",
    attrs: {
      "animation": _vm.animationData
    }
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h1', [_vm._v("Mr. liu& Miss.liu")]), _vm._v(" "), _c('p', [_vm._v("定于 2019年9月9日（星期一）中午12：00")]), _vm._v(" "), _c('p', [_vm._v("农历 8月8日 中午十二点 举办婚礼")]), _vm._v(" "), _c('p', [_vm._v("席设：新化县孟公镇孟公大酒店")]), _vm._v(" "), _c('p', [_vm._v("地址：新化县孟公镇")]), _vm._v(" "), _c('image', {
    staticClass: "img-footer",
    attrs: {
      "src": "/static/images/we.png"
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fbc3915e", esExports)
  }
}

/***/ })

},[16]);