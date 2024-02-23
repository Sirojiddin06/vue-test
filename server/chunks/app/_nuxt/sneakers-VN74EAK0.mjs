import { _ as __nuxt_component_0$1 } from './Header-EsNeoBcF.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-nvHjMUuE.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$2 = {
  __name: "Sneaker",
  __ssrInlineRender: true,
  props: {
    title: String,
    imageUrl: String,
    price: Number,
    isFavourite: Boolean,
    isAdded: Boolean,
    onClickAdd: Function,
    onClickFavourite: Function
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition" }, _attrs))}><div class=""><img${ssrRenderAttr("src", __props.isFavourite ? "/like-2.svg" : "/like-1.svg")} alt="Like 1" class="absolute top-8 left-8"><img${ssrRenderAttr("src", __props.imageUrl)} alt="Sneaker"><p class="mt-2">${ssrInterpolate(__props.title)}</p><div class="flex justify-between mt-5"><div class="flex flex-col"><span class="text-slate-400">\u0426\u0435\u043D\u0430:</span><b>${ssrInterpolate(__props.price)} \u0440\u0443\u0431.</b></div><img${ssrRenderAttr("src", !__props.isAdded ? "/plus.svg" : "/checked.svg")} alt="Plus"></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sneaker.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "SneakerList",
  __ssrInlineRender: true,
  props: {
    items: Array
  },
  setup(__props) {
    const onClickAdd = () => {
      alert("Add");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sneaker = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid xl:grid-cols-4 lg:grid-cols-3 gap-5" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(_component_Sneaker, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SneakerList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "sneakers",
  __ssrInlineRender: true,
  setup(__props) {
    const sneakers = [
      {
        id: 1,
        title: "\u041C\u0443\u0436\u0441\u043A\u0438\u0435 \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Nike Blazer Mid Suede",
        price: 12999,
        imageUrl: "/sneakers/sneakers-1.jpg"
      },
      {
        id: 2,
        title: "\u041C\u0443\u0436\u0441\u043A\u0438\u0435 \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Nike Air Max 270",
        price: 15600,
        imageUrl: "/sneakers/sneakers-2.jpg"
      },
      {
        id: 3,
        title: "\u041C\u0443\u0436\u0441\u043A\u0438\u0435 \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Nike Blazer Mid Suede",
        price: 8499,
        imageUrl: "/sneakers/sneakers-3.jpg"
      },
      {
        id: 4,
        title: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Puma X Aka Boku Future Rider",
        price: 7800,
        imageUrl: "/sneakers/sneakers-4.jpg"
      },
      {
        id: 5,
        title: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Future Rider",
        price: 9550,
        imageUrl: "/sneakers/sneakers-5.jpg"
      },
      {
        id: 6,
        title: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Black Edition",
        price: 16999,
        imageUrl: "/sneakers/sneakers-6.jpg"
      },
      {
        id: 7,
        title: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Orange Boomb Edition",
        price: 7499,
        imageUrl: "/sneakers/sneakers-7.jpg"
      },
      {
        id: 8,
        title: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Nike Air Max 270",
        price: 15600,
        imageUrl: "/sneakers/sneakers-8.jpg"
      },
      {
        id: 9,
        title: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Nike Air Force 1",
        price: 5900,
        imageUrl: "/sneakers/sneakers-9.jpg"
      },
      {
        id: 10,
        title: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Adidas Ultraboost",
        price: 11500,
        imageUrl: "/sneakers/sneakers-10.jpg"
      },
      {
        id: 11,
        title: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Puma Clyde All-Pro",
        price: 7600,
        imageUrl: "/sneakers/sneakers-11.jpg"
      },
      {
        id: 12,
        title: "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Converse Chuck Taylor All-Star",
        price: 13e3,
        imageUrl: "/sneakers/sneakers-12.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_sneaker_list = __nuxt_component_2;
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl font-bold mb-8 text-red-600 cursor-pointer"${_scopeId}>\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl font-bold mb-8 text-red-600 cursor-pointer" }, "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "../closes" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl font-bold mb-8"${_scopeId}>\u041E\u0434\u0435\u0436\u0434\u0430</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl font-bold mb-8" }, "\u041E\u0434\u0435\u0436\u0434\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-4"><select class="py-2 px-3 border rounded-md outline-none"><option value="name">\u0411\u0440\u0435\u043D\u0434</option><option value="price">Nike</option><option value="-price">Adias</option><option value="-price">Puma</option></select><select class="py-2 px-3 border rounded-md outline-none"><option value="name">\u0421\u0435\u0437\u043E\u043D</option><option value="price">\u041B\u0435\u0442\u043D\u0438\u0435</option><option value="-price">\u0417\u0438\u043C\u043D\u0438\u0435</option></select><select class="py-2 px-3 border rounded-md outline-none"><option value="name">\u041F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E</option><option value="price">\u041F\u043E \u0446\u0435\u043D\u0435 (\u0434\u0435\u0448\u0451\u0432\u044B\u0435)</option><option value="-price">\u041F\u043E \u0446\u0435\u043D\u0435 (\u0434\u043E\u0440\u043E\u0433\u0438\u0435)</option></select><div class="relative"><img${ssrRenderAttr("src", _imports_0)} class="absolute left-4 top-3"><input class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400" type="text" placeholder="\u041F\u043E\u0438\u0441\u043A..."></div></div></div><div class="mt-10">`);
      _push(ssrRenderComponent(_component_sneaker_list, { items: sneakers }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sneakers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sneakers-VN74EAK0.mjs.map
