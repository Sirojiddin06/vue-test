import { _ as __nuxt_component_0 } from './Header-EsNeoBcF.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-nvHjMUuE.mjs';
import { _ as __nuxt_component_0$2 } from './Close-CFjUfA-h.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './search-_ukd6hRD.mjs';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "CloseList",
  __ssrInlineRender: true,
  props: {
    items: Array
  },
  setup(__props) {
    const onClickAdd = () => {
      alert("Add");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Close = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid xl:grid-cols-4 lg:grid-cols-3 gap-5" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(_component_Close, {
          key: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price,
          isFavourite: item.isFavourite,
          onClickAdd
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CloseList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "closes",
  __ssrInlineRender: true,
  setup(__props) {
    const closes = [
      {
        id: 1,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430 Adidas White Edition",
        price: 12999,
        imageUrl: "/closes/adidas.webp"
      },
      {
        id: 2,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430 Adidas Black Edition",
        price: 15600,
        imageUrl: "/closes/adidas.png"
      },
      {
        id: 3,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430 Adidas White Edition",
        price: 8499,
        imageUrl: "/closes/adidas-1.png"
      },
      {
        id: 4,
        title: "\u0416\u0435\u043D\u0441\u043A\u0430\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043A\u0430 Adidas Pink Edition",
        price: 7800,
        imageUrl: "/closes/adidas-2.png"
      },
      {
        id: 5,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043A\u0430 Asics Dark Edition",
        price: 9550,
        imageUrl: "/closes/asics-2.jpg"
      },
      {
        id: 6,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430 Asics Black Edition",
        price: 16999,
        imageUrl: "/closes/asics.png"
      },
      {
        id: 7,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430 Asics Light Edition",
        price: 7499,
        imageUrl: "/closes/asics-4.avif"
      },
      {
        id: 8,
        title: "\u0416\u0435\u043D\u0441\u043A\u0430\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043A\u0430 Asics White Edition",
        price: 15600,
        imageUrl: "/closes/asics-3.png"
      },
      {
        id: 9,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430 Nike Gold Edition",
        price: 5900,
        imageUrl: "/closes/nike-2.jpg"
      },
      {
        id: 10,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043A\u0430 Nike Red Edition",
        price: 11500,
        imageUrl: "/closes/nike-4.png"
      },
      {
        id: 11,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043A\u0430 Nike Blue Edition",
        price: 7600,
        imageUrl: "/closes/nike-3.jpg"
      },
      {
        id: 12,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0430 Nike Black Edition",
        price: 13e3,
        imageUrl: "/closes/nike.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_close_list = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white w-4/5 m-auto rounded-xl mt-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="p-10"><div class="flex justify-between items-center xl:flex-row lg:flex-col"><div class="flex gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "../" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl font-bold mb-8"${_scopeId}>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl font-bold mb-8" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "../sneakers" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl font-bold mb-8"${_scopeId}>\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl font-bold mb-8" }, "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl font-bold mb-8 cursor-pointer text-red-600"${_scopeId}>\u041E\u0434\u0435\u0436\u0434\u0430</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl font-bold mb-8 cursor-pointer text-red-600" }, "\u041E\u0434\u0435\u0436\u0434\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-4"><select class="py-2 px-3 border rounded-md outline-none"><option value="name">\u0411\u0440\u0435\u043D\u0434</option><option value="price">Nike</option><option value="-price">Adias</option><option value="-price">Puma</option></select><select class="py-2 px-3 border rounded-md outline-none"><option value="name">\u0421\u0435\u0437\u043E\u043D</option><option value="price">\u041B\u0435\u0442\u043D\u0438\u0435</option><option value="-price">\u0417\u0438\u043C\u043D\u0438\u0435</option></select><select class="py-2 px-3 border rounded-md outline-none"><option value="name">\u041F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E</option><option value="price">\u041F\u043E \u0446\u0435\u043D\u0435 (\u0434\u0435\u0448\u0451\u0432\u044B\u0435)</option><option value="-price">\u041F\u043E \u0446\u0435\u043D\u0435 (\u0434\u043E\u0440\u043E\u0433\u0438\u0435)</option></select><div class="relative"><img${ssrRenderAttr("src", _imports_0)} class="absolute left-4 top-3"><input class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400" type="text" placeholder="\u041F\u043E\u0438\u0441\u043A..."></div></div></div><div class="mt-10">`);
      _push(ssrRenderComponent(_component_close_list, { items: closes }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/closes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=closes-Ten2N61_.mjs.map
