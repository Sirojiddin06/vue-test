import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-nvHjMUuE.mjs';
import { _ as __nuxt_component_0$2 } from './Close-CFjUfA-h.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useI18n, _ as _export_sfc } from '../server.mjs';
import { a as _imports_0$1$1, b as _imports_1$3, c as _imports_2$2, d as _imports_3$2, e as _imports_4$2, _ as _imports_0$2 } from './search-_ukd6hRD.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$5 = {
  __name: "MainList",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between overflow-hidden items-center" }, _attrs))}><!--[-->`);
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$5;
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto flex flex-wrap items-center"><div class="lg:w-2/6 md:w-1/2 bg-blue-950 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"><h2 class="text-white text-lg font-medium title-font mb-5">${ssrInterpolate(_ctx.$t("form-title"))}</h2><div class="relative mb-4"><label for="full-name" class="leading-7 text-sm font-bold text-indigo-600">Full Name</label><input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative mb-4"><label for="email" class="leading-7 text-sm font-bold text-indigo-600">Email</label><input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><button class="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button><p class="text-xs text-gray-500 mt-3">Literally you probably haven&#39;t heard of them jean shorts.</p></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = "" + buildAssetsURL("card-2.qiA5_JxN.png");
const _imports_1$2 = "data:image/svg+xml,%3csvg%20width='20'%20height='12'%20viewBox='0%200%2020%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%200.0389404C6.17879%200.0389404%202.71351%202.12956%200.15649%205.52529C-0.0521632%205.80349%20-0.0521632%206.19216%200.15649%206.47036C2.71351%209.87018%206.17879%2011.9608%2010%2011.9608C13.8212%2011.9608%2017.2865%209.87018%2019.8435%206.47445C20.0522%206.19625%2020.0522%205.80758%2019.8435%205.52938C17.2865%202.12956%2013.8212%200.0389404%2010%200.0389404ZM10.2741%2010.1975C7.73755%2010.357%205.64284%208.26641%205.80239%205.72576C5.93331%203.63104%207.63118%201.93318%209.72589%201.80226C12.2625%201.6427%2014.3572%203.73332%2014.1976%206.27398C14.0626%208.3646%2012.3647%2010.0625%2010.2741%2010.1975ZM10.1473%208.25823C8.78081%208.34415%207.65163%207.21906%207.74164%205.85258C7.81119%204.7234%208.72763%203.81106%209.85681%203.73742C11.2233%203.6515%2012.3525%204.77659%2012.2625%206.14306C12.1888%207.27633%2011.2724%208.18868%2010.1473%208.25823Z'%20fill='%23B3C0D2'/%3e%3c/svg%3e";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Form = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative text-gray-600 body-font flex items-center"><div class="container px-5 py-24 mx-auto"><div class="flex flex-col w-full"><h1 class="text-4xl font-bold mb-8 mx-16 text-blue-900 tracking-widest">${ssrInterpolate(_ctx.$t("blog"))}</h1></div><div class="flex flex-col -m-4"><div class="p-4 xl:w-1/2"><div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white rounded-lg shadow-xl pr-4"><img alt="team" class="flex-shrink-0 rounded-lg w-64 h-48 object-cover object-center sm:mb-0 mb-4"${ssrRenderAttr("src", _imports_0$1)}><div class="flex-grow sm:pl-8"><h2 class="title-font font-medium text-lg text-blue-900">${ssrInterpolate(_ctx.$t("blog-title"))} NIKE AIR MAX 270</h2><p class="mb-4 text-black">Nike Air Max 720 Saturn ${ssrInterpolate(_ctx.$t("blog-text"))} Black / Team Orange.</p><span class="flex items-center justify-between"><p class="">15 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2019</p><div class="ml-2 text-gray-500 flex items-center gap-4"><img${ssrRenderAttr("src", _imports_1$2)}><p class="">4412</p></div></span></div></div></div><div class="p-4 xl:w-1/2"><div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white rounded-lg shadow-xl pr-4"><img alt="team" class="flex-shrink-0 rounded-lg w-64 h-48 object-cover object-center sm:mb-0 mb-4"${ssrRenderAttr("src", _imports_0$1)}><div class="flex-grow sm:pl-8"><h2 class="title-font font-medium text-lg text-blue-900">${ssrInterpolate(_ctx.$t("blog-title"))} NIKE AIR MAX 270</h2><p class="mb-4 text-black">Nike Air Max 720 Saturn ${ssrInterpolate(_ctx.$t("blog-text"))} Black / Team Orange.</p><span class="flex items-center justify-between"><p class="">15 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2019</p><div class="ml-2 text-gray-500 flex items-center gap-4"><img${ssrRenderAttr("src", _imports_1$2)}><p class="">4412</p></div></span></div></div></div>`);
  _push(ssrRenderComponent(_component_Form, { class: "xl:absolute xl:w-5/6 xl:top-20 xl:pt-5 xl:right-5" }, null, _parent));
  _push(`</div></div></section></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + buildAssetsURL("porshe.IhbwWeNT.png");
const _imports_1$1 = "" + buildAssetsURL("newbalance.THL4NTOa.png");
const _imports_2$1 = "" + buildAssetsURL("nike.m0jv_C8p.png");
const _imports_3$1 = "" + buildAssetsURL("puma.WUwbCyYL.png");
const _imports_4$1 = "" + buildAssetsURL("vans.C22HciFe.jpg");
const _imports_5$1 = "" + buildAssetsURL("reebok.pn7tDY0o.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-blue-900 font-bold text-4xl mx-16">${ssrInterpolate(_ctx.$t("brands"))}</h1><section class="text-gray-600 body-font"><div class="container px-5 py-24 mx-auto"><div class="flex items-center -m-4 text-center"><div class="p-4 sm:w-1/4 w-1/2"><img${ssrRenderAttr("src", _imports_0)}></div><div class="p-4 sm:w-1/4 w-1/2"><img${ssrRenderAttr("src", _imports_1$1)}></div><div class="p-4 sm:w-1/4 w-1/2"><img${ssrRenderAttr("src", _imports_2$1)}></div><div class="p-4 sm:w-1/4 w-1/2"><img${ssrRenderAttr("src", _imports_3$1)}></div><div class="p-4 sm:w-1/4 w-1/2"><img${ssrRenderAttr("src", _imports_4$1)}></div><div class="p-4 sm:w-1/4 w-1/2"><img${ssrRenderAttr("src", _imports_5$1)}></div></div></div></section></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Brands.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQkSURBVHgBxZhdaBxVGIbfc2Z3aU0LiWDiD9iNKTZIo5F4oVhxYyy2YpoVRNQL44LgpVuMIt60ubAEDbi5FAoT4kXFCxuzQURbMwGVSBWStqFQaLptoW160aQ0pWWTnNPzTXa2M7Pzs9tNts/Fcuabb2bfeb/zN8NQIYm0Xr9ZQ0LjSAD8VcZQr8Jx67yUmFa/i2ByEgLG+GDKQAWwchP3pPV4JIo0Y7xXHdajfHKrUvSLZRi/ZVK5sORQQeTI1hg7oFLTqA5T2K/fpoZxv4Le6tMTjHMdtpJUi5TSWFmWKT+3fAV19+lpcP4dNobccl50eoniXtn7+n44sIFiiHg0xieoX7pPlDi09zM9GdH4UdSG3M28eN7IpBatgMMhcyRpG+qMm/jWmKbbAw5BkQgOYh07cHnIJFUFbkGFEdWLB4C9KkVBasatdp6phvibn+sfUcMUZPZ2xnvwAOFgZnUi5kGU1iUndZuiaH78YUfs9Nx8sd29qxVdHduxZXPMPF66ncfU7EX8eOyk45rmxxpQV8ixOH95Abfu5B0xxliCVgVTkAZNqZOOhH2vPIP3X3/OEcv89Df+/P+c2Z6du4YPdrcr4Wt/1tgAU5xdUGNDHYbS3XDz9cgE/p29VBJ/KIokX1Mn290nx/46U/IUXR0txfbc5es4/t85BOF+IGJ+YclTDKHEtPOkskl6rN63VAlIlJ22lkex86kmR44f5E7XC9tL4kf+mPG9hoHHOTb5byW8XPr03ZeLZQrCyx26n1VyT0EM2zgC8HKpqWEL3tv9rNl2d1YLs8O73KFSBblDUKW01l3Jein99zrnryxg74tPIxbRirHWJx8xS9Kx4wmHKGpT/J3OtpL7pIfGsbh0G8GCxAzHHSwGJZFLh8dOlMTJgUblllfczZTqxNeUQ+XAR9VKq5b8QFHHVd1PzV3F/dKmBgLNR6Go/bjZh6QUk2G5h0aMsp/SDZXy0Cdv4DXbtOEJg8GtBkKg0n31/e+hog5nT+DIsRlPUWk1QoOcivCCQ1oewygDEhMkyhqVNJq8RBHklNe0oTr05OhAKmcKon4EyQyUKerjgZ8xpJYRGoF25m1C/USRUztbmkriTK6ZUtzCFvZDE6gQelpr6JND7omURmJTYTTSOVqE3Q4rEbmxb3qbC+17dH8xcpR2cKg1UqSyhfc1x0yt8dX9YVPAusPYcNb28ugQRJ1KCPE2agSVSmOr/fZYyVpmfhwQYj9qIIZz0Ukm2OOaV/LZf36Z2vFSzw1l5x7UUAzhu9pnB1MZKUQnXYz1ZdJPDBH69SP5pR5fEfygSqzqFYkGixSsPzv4YSYkrzwsYcrSHlnB96HCqB3ieZEZtb0yB+RXBm15V2LqLUUioT5etStxcXWTbdZ5dXxBzbrTavc3Lbgwxgcq+4J2FzfKk57sGLBfAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPkSURBVHgBvZhNTBNREMf/uy2JFjUYY/WgoT34ETURY0QvxuJBkY+4aIjcgJsJMUKM0ZOAnvSgmBiP0qOAsUtE4kmWxIPRA40BQ+TQmuhBEAMkVIyl68wrLd12l3Zh6z9pup032/3tvHnzZleCTQVCStnmZQQkmT4SzpCpTAJ8qXEdCNPvOSQwSh9tqFHVYENSoY41IaWCrtYiS2hmiELPI8ConkB3Qob2pkGN5vPPC8QR2Qp00h+3YwNKgQ1fVoNYL1DdgBLQ3ejNnBIHpMaBDqtoWQLVh5R2uqtHKII4WstAlRmUbHZC3aDSWSwYFkfcBYxUhxSfyZhRF14oisuFEP6DOFKLwDGtQZ1L2QwRYmLZVbzIZIsjtQXozbQZgFw6uswSeOfmnbh7qhMva/vF5/COQ3BQCi+eHKC6kMKFrtnsjHsEc2TH4fTvK/sa4aR4JecAkTrNnKv2nIHX4zXYGM7j9sAp8axw7qaBVrI9YOZ8do+pGXX+WjgpWkjX00AlNI9Wjp6SUlN7vb8GDivAu4IAouV3ETZVSqBOThvLk4AigGgOK6ycogtRU/vzqQHE4jE4KgkVskJh0tfYvUe+aaa2/i8DcFqc3ByhNVuJ8dnPmJidMNh0HUURAZXJhTj2TRmjcXZvwOnimFZBQByloeiwwXb7+E1RwYsBNFeI47OJICIZCc6rjCu401Cuyb7JpQNNB7kb3JTPOfwzjMrdlQImBXVy1wmM/5rA3J95gy+DPjz9gApoDRbji7Rav+b7e2rBMejig/1NB6tRQFe4+DeGDz8+5kCdLz9HtUzH9O+ZdCm4drQNB7bvT0KTP29B7MPgVuWC9tL7oh+y2x16Pbz7d8GbNV3TsWmRbyxOfDNF5iO48e6W6Zgb8IukpjAFYUPTsRnced8lImIE9QoQKxghyaJr1jGqUksrgNRkx6bBJtTVt205qy+frCo/cQb525UyUB5x1rXApsZmwhj5rolc8W/zrenLEX3y6anIRQMMcb5qUFtXjldFTdoILNqQQsS5VbmrUrQsvm3lhjHebrjAcmSzRRCtBBRcOV4V7Ws+ejwZ0208mVqptMRDEfOL48hCJCcqGTDBVHRY7szBpaRhwzAsBhjP2gNNYKKUMx2ZNsPWISfWP112tQJTpWY8AuUCyeZNfhFhoiZjSXFfTdMVQbFF9cYtQcmOTErpHBLTJRtPJFwNXJ/oNQykjUWP3xnRXtX9+pLak8cvKbHkdapPElQKp5odTl6BcXqQtAvGILRqH9Od91hFJcs/fcGyQk5gvzjXKl0sgAq6mI9uojx18YSOeQp0WJcQJpM21GDvDdo/WTVYjlrD0q8AAAAASUVORK5CYII=";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFzSURBVHgBpZTbUcMwEEV35RRgOggFAEkFoE8GmOAO0kHSQUIFpIR0ACEwfMqpwAlpwCX4H1vLyozBY+SHzJ2xx9aujlZXD4SStrvjAojmBJR4pIMbOd5DD2EFuCzFEkGZ7APGGuC/wCJ/24FGvkZPPaloCC7QDh18AWIKLlB+krYkDeg2/UCOGYqhLUgAMRDKQJ4/g4NyT4n0xhbMeJHu5FkIjsqhGeg12G1otaYWaixAoodq0HNcoEJY/tmGR8VmXJWakpSy02/fe0LfeXul6EX86f+20j4lLatg3or+QIiZ1nCiQa84HhcxUU68NgHCoDLuaIDizwFga1acuxSIswEX8qaikbXSQq/qMCfEx3IbXzIxIqxTrTdc4cQAK91+jrQVarRVhyUgLsBNORibMmwVd1AomqK38sL4ZkaOoaOIuIwuiWZXfPLCIOKkJbV9+lW9qI+pQFjwnTCsAzYuVBucJ3rPlV/yr08EOw+yeXGZfwHsL607LXzibgAAAABJRU5ErkJggg==";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB1ZTRUYNAEIZ3OeL4mBLSgCZUIFcAmViBsQJjBUIFsQPtIE6iz5dUwGADUgKPjpPj/A/FzDAwkDEv/A/JwR7f7v57QNQXsf1ZqXiIvyGdQNfSS7m82KjkkZjv6D8yOgqkF7q2SkE0D+R4AXAG8AMdr8wYfTuV3svrLrlhQEcuiw9iEwZX42it4hmzeKKOdhiiVBstLXjAYpkT+c4hyuFm+77SRFvXaA++pK1AQzsAvXOsB+zESDC3953KvplA8BMLUWTnbTNRR1N56WM12bMAkEdlqArFceARwAptDAP/QqKcqLKl8M8OZK2SBaxTVLHKqSvCgnNkh78LDDBkY+6L4mCJgw4wkOf1Llky87L2+b9BNel3gG8qnnyhSuvfnp0VApO67UViatPPAJUFnqFNDWuagKVc6iYf3cR5x2PWXulBnV/jY6Cd1Q8ojmN28k8flFFv9A0koIYXb6EaRgAAAABJRU5ErkJggg==";
const _imports_6$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAWCAYAAAAmaHdCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADQSURBVHgBrZTtEYIwDEBTzv/gBIQJHEFHcATdwA1kA91ARnADR2AEdALcoCYYvNIrXmn77sJxTXgkfBRgBq31iaLVXzqKC0UBvlDxWS6+URwoGhG1XiIqQhHUjvWeO/SR8Bj9TO5BcbfXM0ctt/sGNy/JT1gZd6nldMuF9jjCxso1SqnnKNjpMK7mOP6vbkpuShDCqFJ0UqboBExJCWGgKQmGv+RRUkE4Rew4DGaLfu8/nSDEMUhiO8EUkjyFZK3kwXYRsuNwJNFe9tAl/LbKD7s55lcc/ofNAAAAAElFTkSuQmCC";
const _imports_7$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD9SURBVHgBtZWLDYIwEIZ/nIARcAIZgRHcwBXcQDfQDWAEnAA3gA3KBoxwXm01POyDFr/kQlrIR9vrtYADIso47hwDKQRHKfsRAwvykXSO/EmOEPSIBdmR71OsRS+FD1eTY2fxH+BHHiLfw480RN7BDxEir+HHAyFwshpHMkuEIrcZR2UQV65tmJik/CjeHyRJze1CtzOoXHTc/9T9qW738BjtiaZV2dKs1PWMbrOZXFzijMy0Oget5ZuzTd5QHHLG3zzsxqP+rHMEUnxcyGEp45Xk/5Rnv+RbsVxzWA6gUMbyHtuwPMhIFYagOAYy3a2kiqgi871pk8rjYLIpXibULNwalG5pAAAAAElFTkSuQmCC";
const _imports_8$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFzSURBVHgBtZaLcYMwDIZFrgMwgjdoRmCEbFBG6AbQCegGYYOmE6SdIGxAOgHZQJUTc0cUYSQC352Ox0n+LVsyJKAEEV1/nyTJGdaARFKyd7IjPtKF9zksRRDrUEdLtoNnoAH2OI9Cq/HCBCu65ILfL1lDdiFLyTKyV+ZTUrzf7w8wZJgLs//BQQEx/ywsLSfTCjphgFIZW7O4oyZOyvILlOCtyltztvjYFg4MCJP+1AQNOYGRkK16jI2Q1R8YoYq9sLg05r8R3nUwj04tKpyjDubhBvfnSW+/B2xPUjCAt54dcoj598v7zd6rj7RAxZ4PkxFC9XneQAH5FSyuBS2+twThAuITrYSYHLSEQU7CIC1ZGfbN2y5McOzTZ9salM/gOZiFfcY1Po+1GK/i2wlxv7x+mV3ETxROFOK+Z7dw3/wNHSoN86vpIlV8afqwW7FmvKRwOSJcwZpEhPewJhHhDNZkRDiDtWHC6n+vJYR9L7v++R+wgb5WfjiLgAAAAABJRU5ErkJggg==";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><footer class="text-gray-600 body-font"><div class="container px-5 py-24 mx-auto"><div class="flex flex-wrap md:text-left text-center order-first"><div class="lg:w-1/4 md:w-1/2 w-full px-4"><img${ssrRenderAttr("src", _imports_0$1$1)} class="w-40 h-40"></div><div class="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col justify-center"><div class="flex items-center gap-5"><img${ssrRenderAttr("src", _imports_1)} class="cursor-pointer"><img${ssrRenderAttr("src", _imports_2)} class="cursor-pointer"><img${ssrRenderAttr("src", _imports_3)} class="cursor-pointer"></div><div class="flex items-center gap-5 mt-8 cursor-pointer"><img${ssrRenderAttr("src", _imports_4)}><p class="text-lg text-gray-500 font-bold">+992 107 0000 20</p></div><div class="flex items-center gap-5 cursor-pointer"><img${ssrRenderAttr("src", _imports_5)}><p class="text-lg text-gray-500 font-bold">sirojiddinmirahmad@gmail.com</p></div></div><div class="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-center"><nav class="list-none mb-10"><li><a class="text-gray-600 hover:text-gray-300 cursor-pointer">${ssrInterpolate(_ctx.$t("footer1"))}</a></li><li><a class="text-gray-600 hover:text-gray-300 cursor-pointer">${ssrInterpolate(_ctx.$t("footer2"))}</a></li><li><a class="text-gray-600 hover:text-gray-300 cursor-pointer">${ssrInterpolate(_ctx.$t("footer3"))}</a></li><li><a class="text-gray-300 hover:text-gray-600 cursor-pointer">${ssrInterpolate(_ctx.$t("footer4"))}</a></li><li><a class="text-gray-600 hover:text-gray-300 cursor-pointer">${ssrInterpolate(_ctx.$t("footer5"))}</a></li></nav></div><div class="lg:w-1/4 md:w-1/2 w-full px-4"><div class="flex flex-col mt-6"><div class="flex items-center gap-5"><div class="bg-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"><img${ssrRenderAttr("src", _imports_6$1)}></div><div class="bg-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"><img${ssrRenderAttr("src", _imports_7$1)}></div></div><div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"><div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2"><input type="text" id="footer-field" placeholder="\u041F\u043E\u0438\u0441\u043A " name="footer-field" class="mt-8 w-full bg-zinc-600 rounded border border-zinc-600 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><img${ssrRenderAttr("src", _imports_8$1)}></button></div></div></div></div></div></footer></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_6 = "" + buildAssetsURL("main_1.vRBa5UVV.png");
const _imports_7 = "" + buildAssetsURL("Rectangle.xMIHR7l5.png");
const _imports_8 = "" + buildAssetsURL("btn_2.WqTAVp4O.png");
const _imports_9 = "" + buildAssetsURL("Component-1.0UGV23Dg.png");
const _imports_10 = "" + buildAssetsURL("btn_3.kTk6iaq-.png");
const _imports_11 = "" + buildAssetsURL("main_2.mHIeC3hL.png");
const _imports_12 = "" + buildAssetsURL("btn_1.wEEg7ZTL.png");
const _imports_13 = "" + buildAssetsURL("main_3.B3XgT7QP.png");
const _imports_14 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAhCAYAAAAGcPEMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgBnZXbbYMwFIbPMRmAEVigatkAP1a9KJmgzQbJBE0nSDtBR6ACVX00mYCkDNCMwHMLObWpghzCxeaTkC2bH/PL5wJgSShSVz1qjjbCSOwWiLhWc6JyaSz+EOnVAZ1UW8qZifBTpB4hCxvL7sREXKDzJgevuT54crzJnuQQtO31eo5EOkV0wq79TrHyWSITBOh1vdP520PCTnG02a2HhK3iKhAIF2DAiWflU17LNxjCdKHyCRbU4l9gKxOfOlWEVYFA9ACWoK1PHfYD7BFGwhiwBEbC7vhFgkRLGEF9z3HypRJgChbUV1VQOZdf2oMFtXjG/RypnMlpbi1W3HB/K/0/gyFniXHLL19kwLyCAa0pWcBhJYvrFgborSTFf6l1weZkxTX397Kwz6GH3up5z/33Pv9GHSNOMpnnFFidfGRCRWsAGfeqWGQBIOmVxqxXKRoJlNsEU43en/8AlEOGHpIaMjIAAAAASUVORK5CYII=";
const _imports_15 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAhCAYAAAAGcPEMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE/SURBVHgBpZXtTcMwEIbv7A6QEbpBmw3i31DUbsAIYYLABIUJ2g2KUvE7dIJAF6AbwALucbZw1a84tnmkKImjJ+fXPiUAzKppM3NAJKJuPssByi8+vuumLaNkRKz4bKsiyvm6aYtg2YkOQrHgCMNQ+QQEHHKEBQQgOsaLerOdQ6IMSFDyAk4hRbYv4On78ntlJhugWHX1QJ9s6o+lkFWifMhfJsn2BSirt6YdJ8lMps/yx8gXDRQl/zF1+XH9viVIgbRKqWzZgyj+Ie+XaTLpp5nKd9EyL9ByovJHcx0ls7jTXNXdR8ksKjPdaBmJHo7FcJno5VaNns+He2WTc6JGVz/Jok80Obue+yuTvsgZJvOW3Kn8FTxclYlg4xohSrY5Qd9DAEb+OR6QpGe+nCcyb/6h3Uwj3Kj8A2JI/T//AjWDfDTKLe2MAAAAAElFTkSuQmCC";
const _imports_16 = "data:image/png;base64,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";
const _imports_17 = "data:image/png;base64,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";
const _imports_18 = "data:image/png;base64,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";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tab_1 = ref(true);
    const tab_2 = ref(false);
    const tab_3 = ref(false);
    const { locale } = useI18n();
    const products1 = [
      {
        id: 1,
        title: "\u041C\u0443\u0436\u0441\u043A\u0438\u0435 \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Nike Blazer Mid Suede",
        price: 12999,
        imageUrl: "/sneakers/sneakers-4.jpg"
      },
      {
        id: 2,
        title: "\u041C\u0443\u0436\u0441\u043A\u0438\u0435 \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438 Nike Air Max 270",
        price: 15600,
        imageUrl: "/sneakers/sneakers-2.jpg"
      },
      {
        id: 3,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043A\u0430 Asics Black Edition",
        price: 8499,
        imageUrl: "/closes/asics-2.jpg"
      },
      {
        id: 4,
        title: "\u041C\u0443\u0436\u0441\u043A\u0430\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043A\u0430 Nike Red Edition",
        price: 7800,
        imageUrl: "/closes/nike-4.png"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_main_list = __nuxt_component_1;
      const _component_Blog = __nuxt_component_2;
      const _component_Brands = __nuxt_component_3;
      const _component_Footer = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white overflow-hidden" }, _attrs))}><div class="flex justify-center top-0 w-100 bg-black h-1/8 py-2"><h2 class="text-white font-bold text-3xl">${ssrInterpolate(_ctx.$t("sale1"))} <span class="text-red-600">-30%</span> ${ssrInterpolate(_ctx.$t("sale2"))}</h2></div><div class="bg-white w-4/5 m-auto mt-0"><header class="flex xl:flex-row justify-between border-b border-slate-200 px-10 py-8 lg:flex-col"><div class="flex lg:justify-around xl:justify-between"><div class="flex items-center gap-4"><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Logo" class="w-10"><div><h2 class="text-xl font-bold uppercase">Best Clothes</h2><p class="text-slate-400">${ssrInterpolate(_ctx.$t("header-title"))}</p></div></div><div class="flex gap-4 items-center cursor-pointer text-slate-400 hover:text-black xl:mx-12"><img${ssrRenderAttr("src", _imports_1$3)} class="opacity-30"><p class="">sirojiddinmirahmad@gmail.com</p></div></div><div class="flex lg:justify-around lg:mt-2"><ul class="flex items-center gap-10"><li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"><img${ssrRenderAttr("src", _imports_2$2)}><b>15600 ${ssrInterpolate(_ctx.$t("header-cart"))}</b></li><li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"><img${ssrRenderAttr("src", _imports_3$2)}><span>${ssrInterpolate(_ctx.$t("header-favourites"))}</span></li><li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"><img${ssrRenderAttr("src", _imports_4$2)}><span>${ssrInterpolate(_ctx.$t("header-profile"))}</span></li><li><select class="rounded-lg"${ssrRenderAttr("value", unref(locale))}><option value="ru"${ssrIncludeBooleanAttr(Array.isArray(unref(locale)) ? ssrLooseContain(unref(locale), "ru") : ssrLooseEqual(unref(locale), "ru")) ? " selected" : ""}>RU</option><option value="en"${ssrIncludeBooleanAttr(Array.isArray(unref(locale)) ? ssrLooseContain(unref(locale), "en") : ssrLooseEqual(unref(locale), "en")) ? " selected" : ""}>EN</option><option value="de"${ssrIncludeBooleanAttr(Array.isArray(unref(locale)) ? ssrLooseContain(unref(locale), "de") : ssrLooseEqual(unref(locale), "de")) ? " selected" : ""}>DE</option></select></li></ul></div></header><div class="p-10"><div class="flex justify-between items-center"><div class="flex gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl font-bold mb-8 text-red-600"${_scopeId}>${ssrInterpolate(_ctx.$t("main-home"))}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl font-bold mb-8 text-red-600" }, toDisplayString(_ctx.$t("main-home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/sneakers" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl font-bold mb-8"${_scopeId}>${ssrInterpolate(_ctx.$t("main-sneakers"))}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl font-bold mb-8" }, toDisplayString(_ctx.$t("main-sneakers")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/closes" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl font-bold mb-8"${_scopeId}>${ssrInterpolate(_ctx.$t("main-clothes"))}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl font-bold mb-8" }, toDisplayString(_ctx.$t("main-clothes")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative"><img${ssrRenderAttr("src", _imports_0$2)} class="absolute left-4 top-3"><input class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400" type="text" placeholder="\u041F\u043E\u0438\u0441\u043A..."></div></div></div></div><div><div class="${ssrRenderClass([unref(tab_1) ? "" : "none", "tab1"])}"><div class="flex justify-between w-4/5 mx-auto"><div class="flex flex-col gap-6"><h1 class="font-bold text-6xl text-blue-900">Adidas <br> Nite Jogger</h1><h3 class="text-black text-2xl">${ssrInterpolate(_ctx.$t("text1"))}<br>${ssrInterpolate(_ctx.$t("text2"))}</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/sneakers" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="text-white text-xl bg-red-600 py-4 rounded-3xl w-5/6"${_scopeId}>${ssrInterpolate(_ctx.$t("main-btn1"))}</button>`);
          } else {
            return [
              createVNode("button", { class: "text-white text-xl bg-red-600 py-4 rounded-3xl w-5/6" }, toDisplayString(_ctx.$t("main-btn1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex relative"><img${ssrRenderAttr("src", _imports_6)} class="relative left-20 -top-10 z-10"><img${ssrRenderAttr("src", _imports_7)} class="absolute -right-40 z-5"></div></div><div class="flex justify-center items-center"><div class="flex items-center relative"><img${ssrRenderAttr("src", _imports_8)} class="relative left-10 -top-6"><h3 class="text-black text-xl font-bold px-16 py-2 rounded-3xl shadow-md">Adidas <br> Yeezy Boost </h3><img${ssrRenderAttr("src", _imports_9)} class="relative cursor-pointer right-16 top-0"></div><div class="flex items-center relative"><img${ssrRenderAttr("src", _imports_10)} class="relative left-10 -top-6"><h3 class="text-black text-xl font-bold px-16 py-2 rounded-3xl shadow-md">Nike <br> Air Max </h3><img${ssrRenderAttr("src", _imports_9)} class="relative cursor-pointer right-16 top-0"></div></div></div><div class="${ssrRenderClass([unref(tab_2) ? "" : "none", "tab2"])}"><div class="flex justify-between w-4/5 mx-auto"><div class="flex flex-col gap-6"><h1 class="font-bold text-6xl text-blue-900">Adidas <br> Yeezy Boost</h1><h3 class="text-black text-2xl">${ssrInterpolate(_ctx.$t("text1"))}<br>${ssrInterpolate(_ctx.$t("text2"))}</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/sneakers" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="text-white text-xl bg-red-600 py-4 rounded-3xl w-5/6"${_scopeId}>${ssrInterpolate(_ctx.$t("main-btn1"))}</button>`);
          } else {
            return [
              createVNode("button", { class: "text-white text-xl bg-red-600 py-4 rounded-3xl w-5/6" }, toDisplayString(_ctx.$t("main-btn1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex relative"><img${ssrRenderAttr("src", _imports_11)} class="relative left-20 -top-10 z-10"><img${ssrRenderAttr("src", _imports_7)} class="absolute -right-40 -top-10 z-5"></div></div><div class="flex justify-center items-center"><div class="flex items-center relative"><img${ssrRenderAttr("src", _imports_12)} class="relative left-10 -top-6"><h3 class="text-black text-xl font-bold px-16 py-2 rounded-3xl shadow-md">Adidas <br> Yeezy Boost </h3><img${ssrRenderAttr("src", _imports_9)} class="relative cursor-pointer right-16 top-0"></div><div class="flex items-center relative"><img${ssrRenderAttr("src", _imports_10)} class="relative left-10 -top-6"><h3 class="text-black text-xl font-bold px-16 py-2 rounded-3xl shadow-md">Nike <br> Air Max </h3><img${ssrRenderAttr("src", _imports_9)} class="relative cursor-pointer right-16 top-0"></div></div></div><div class="${ssrRenderClass([unref(tab_3) ? "" : "none", "tab3"])}"><div class="flex justify-between w-4/5 mx-auto"><div class="flex flex-col gap-6"><h1 class="font-bold text-6xl text-blue-900">Nike <br> Air Max</h1><h3 class="text-black text-2xl">${ssrInterpolate(_ctx.$t("text1"))}<br>${ssrInterpolate(_ctx.$t("text2"))}</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/sneakers" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="text-white text-xl bg-red-600 py-4 rounded-3xl w-5/6"${_scopeId}>${ssrInterpolate(_ctx.$t("main-btn1"))}</button>`);
          } else {
            return [
              createVNode("button", { class: "text-white text-xl bg-red-600 py-4 rounded-3xl w-5/6" }, toDisplayString(_ctx.$t("main-btn1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex relative"><img${ssrRenderAttr("src", _imports_13)} class="relative left-20 -top-10 z-10"><img${ssrRenderAttr("src", _imports_7)} class="absolute -right-40 z-5"></div></div><div class="flex justify-center items-center"><div class="flex items-center relative"><img${ssrRenderAttr("src", _imports_12)} class="relative left-10 -top-6"><h3 class="text-black text-xl font-bold px-16 py-2 rounded-3xl shadow-md">Adidas <br> Yeezy Boost </h3><img${ssrRenderAttr("src", _imports_9)} class="relative cursor-pointer right-16 top-0"></div><div class="flex items-center relative"><img${ssrRenderAttr("src", _imports_8)} class="relative left-10 -top-6"><h3 class="text-black text-xl font-bold px-16 py-2 rounded-3xl shadow-md">Nike <br> Air Max </h3><img${ssrRenderAttr("src", _imports_9)} class="relative cursor-pointer right-16 top-0"></div></div></div></div><div class="w-4/5 mx-auto flex flex-col justify-between gap-5 mt-24"><h2 class="text-3xl font-bold text-blue-900 mx-16 my-8">${ssrInterpolate(_ctx.$t("text3"))}</h2><div class="w-100 mx-auto flex justify-between items-center gap-5"><img${ssrRenderAttr("src", _imports_14)}>`);
      _push(ssrRenderComponent(_component_main_list, { items: products1 }, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_15)}></div></div><div class="flex justify-around items-center mx-auto mt-16 w-3/4"><div class="flex flex-col items-center justify-center gap-5"><div class="bg-blue-200 rounded-full p-6"><img${ssrRenderAttr("src", _imports_16)} class="w-8 h-8"></div><h3 class="text-xl text-blue-900 font-bold text-center">${ssrInterpolate(_ctx.$t("guarantee1"))} <br> ${ssrInterpolate(_ctx.$t("guarantee2"))} <br> ${ssrInterpolate(_ctx.$t("guarantee3"))}</h3></div><div class="flex flex-col items-center justify-center gap-5"><div class="bg-green-200 rounded-full p-6"><img${ssrRenderAttr("src", _imports_17)} class="w-8 h-8"></div><h3 class="text-xl text-blue-900 font-bold text-center">${ssrInterpolate(_ctx.$t("help1"))} <br> ${ssrInterpolate(_ctx.$t("help2"))} <br> ${ssrInterpolate(_ctx.$t("help3"))}</h3></div><div class="flex flex-col items-center justify-center gap-5"><div class="bg-red-200 rounded-full p-6"><img${ssrRenderAttr("src", _imports_18)} class="w-8 h-8"></div><h3 class="text-xl text-blue-900 font-bold text-center">${ssrInterpolate(_ctx.$t("delivery1"))} <br> ${ssrInterpolate(_ctx.$t("delivery2"))} <br> ${ssrInterpolate(_ctx.$t("delivery3"))}</h3></div></div>`);
      _push(ssrRenderComponent(_component_Blog, { class: "w-4/5 m-auto" }, null, _parent));
      _push(ssrRenderComponent(_component_Brands, { class: "w-4/5 m-auto" }, null, _parent));
      _push(`<div class="w-100 bg-neutral-800">`);
      _push(ssrRenderComponent(_component_Footer, { class: "w-4/5 mx-auto" }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D26LFGAh.mjs.map
