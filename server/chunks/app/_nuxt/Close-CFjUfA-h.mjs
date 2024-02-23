import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Close",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition" }, _attrs))}><div class=""><img${ssrRenderAttr("src", __props.isFavourite ? "/like-2.svg" : "/like-1.svg")} alt="Like 1" class="absolute top-8 left-8"><img${ssrRenderAttr("src", __props.imageUrl)} alt="Sneaker" class="ig"><p class="mt-2">${ssrInterpolate(__props.title)}</p><div class="flex justify-between mt-5"><div class="flex flex-col"><span class="text-slate-400">\u0426\u0435\u043D\u0430:</span><b>${ssrInterpolate(__props.price)} \u0440\u0443\u0431.</b></div><img${ssrRenderAttr("src", !__props.isAdded ? "/plus.svg" : "/checked.svg")} alt="Plus"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Close.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Close-CFjUfA-h.mjs.map
