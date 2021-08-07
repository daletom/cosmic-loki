import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
    domain: "imgix.cosmicjs.com",
    defaultIxParams: {
        auto: 'format,compress',
    },
})
