import * as flsFunctions from "./modules/functions.js"
import { customSwiper } from "./libs/swiper.js"
import { toggle } from "./libs/navToggle.js"
import { addProduct } from "./libs/addProducts.js"
import { fixedHeader } from "./libs/headerFixed.js"
import { filter } from "./libs/filter.js"
import { tabs } from "./libs/tabs.js"
import Swiper from "swiper"
import { modalWindow } from './libs/modal.js'
flsFunctions.isWebP()
customSwiper()
toggle()
addProduct()
fixedHeader()
filter()
tabs()
modalWindow()

const gallery = new Swiper('.gallery', {
    slidesPerView: 1.2,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 30,
    loop: true,
})