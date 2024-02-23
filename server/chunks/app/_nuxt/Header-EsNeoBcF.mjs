import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { a as _imports_0$1, b as _imports_1, c as _imports_2, d as _imports_3, e as _imports_4 } from './search-_ukd6hRD.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex lg:flex-col xl:flex-row justify-between border-b border-slate-200 px-10 py-8" }, _attrs))}><div class="flex lg:justify-around xl:justify-between"><div class="flex items-center gap-4"><img${ssrRenderAttr("src", _imports_0$1)} alt="Logo" class="w-10"><div><h2 class="text-xl font-bold uppercase">Best Sneakers</h2><p class="text-slate-400">\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043B\u0443\u0447\u0448\u0438\u0445 \u043A\u0440\u0430\u0441\u043E\u0432\u043E\u043A</p></div></div><div class="flex gap-4 items-center cursor-pointer text-slate-400 hover:text-black"><img${ssrRenderAttr("src", _imports_1)} class="opacity-30"><p class="">sirojiddinmirahmad@gmail.com</p></div></div><div class="flex lg:justify-around lg:mt-2"><ul class="flex items-center gap-10"><li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"><img${ssrRenderAttr("src", _imports_2)}><b>15600 \u0440\u0443\u0431.</b></li><li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"><img${ssrRenderAttr("src", _imports_3)}><span>\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438</span></li><li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"><img${ssrRenderAttr("src", _imports_4)}><span>\u041F\u0440\u043E\u0444\u0438\u043B\u044C</span></li></ul></div></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Header-EsNeoBcF.mjs.map
