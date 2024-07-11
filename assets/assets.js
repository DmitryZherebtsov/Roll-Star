import mainPicture from "../assets/mainPicture.png"
import mainPictureMobile from "../assets/mainPictureMobile.png"

import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";
import phone from "../assets/phone-menu.svg";
import burger from "../assets/burger-menu.svg";
import cart from "../assets/cart-menu.svg";
import pizza from "../assets/pizza.svg";
import sushi from "../assets/sushi.png";
import set_rolls from "../assets/set-rolls.svg";
import soup from "../assets/soup.svg";
import rolls from "../assets/rolls.png";
import fishburger from "../assets/fishburger.svg";
import fishdog from "../assets/fishdog.png";
import cross from "../assets/cross.svg";

import soup_menu_dropdown from "../assets/soup_menu.svg";
import roll_menu_dropdown from "../assets/roll_menu.svg";
import pizza_menu_dropdown from "../assets/pizza_menu.svg";
import hot_dog_menu_dropdown from "../assets/hot_dog_menu.svg";

import minus from "../assets/minus.png"
import plus from "../assets/plus.png"

import fishburger_menu_active from "../assets/fishburger-menu-active.svg"
import pizza_menu_active from "../assets/pizza-menu-active.svg"
import sushi_menu_active from "../assets/sushi-menu-active.svg"
import soups_menu_active from "../assets/soups-menu-active.svg"

import fishburger_menu from "../assets/fishburger-menu.svg"
import pizza_menu from "../assets/pizza-menu.svg"
import sushi_menu from "../assets/sushi-menu.svg"
import soups_menu from "../assets/soups-menu.svg"

import caprichoza from "../assets/caprichoza.png";
import cezar from "../assets/cezar.png";
import diablo from "../assets/diablo.png";
import margarita from "../assets/margarita.png"
import mazeratti from "../assets/mazeratti.png"
import meat from "../assets/meat.png"
import mysliwska from "../assets/mysliwska.png"
import proshutoAndMango from "../assets/proshutoAndMango.png"
import salami from "../assets/salami.png"
import seaProducts from "../assets/seaProducts.png"
import weryMeat from "../assets/weryMeat.png";
import gavajska from "../assets/gavajska.png";

import hotSet9 from "../assets/hot-set-9.png";

import tomJamSeaFood from "../assets/tom-jam-sea-food.png";

import fishDog from "../assets/fishdog.png";

// import logo from '../../assets/logo.svg';
import instagram from "../assets/instagram.svg";
import gmail from "../assets/gmail.svg";
// import arrowleft from "../arrowleft.png";
// import arrowright from "../arrowright.png";
// import basket1 from "../basket1.svg";
// import tick1 from "../tick1.svg";
// import car from "../car.svg";
// import sushi1 from "../sushi1.svg";
// import instagram from "../instagram.svg";
// import gmail from "../gmail.svg";
// import add_icon_green from '../assets/add_icon_green.png'

import slider_img1 from "../assets/slider_image-1.png"
import slider_img2 from "../assets/slider_image-2.png"
import slider_img3 from "../assets/slider_image-3.png"
import slider_img4 from "../assets/slider_img4.jpg"
import slider_img5 from "../assets/slider_img5.jpg"
import slider_img6 from "../assets/slider_img6.jpg"

import pizza_home from "../assets/pizza.jpg"
import rolls_home from "../assets/rolls.jpg"
import rollset_home from "../assets/rollset.jpg"
import fishdog_home from "../assets/fishdog.jpg"
import soup_home from "../assets/soup.jpg"

import arrow_left from "../assets/arrowleft.svg"
import arrow_right from "../assets/arrowright.svg"

import koszyk from "../assets/koszyk.svg"
import confirm from "../assets/confirm.svg"
import delivery from "../assets/delivery.svg"
import youarecooked from "../assets/youarecooked.svg"

export const home_page = {
    mainPicture,
    mainPictureMobile,
    slider_img1,
    slider_img2,
    slider_img3,
    slider_img4,
    slider_img5,
    slider_img6,
    arrow_left,
    arrow_right,
    koszyk,
    confirm,
    delivery,
    youarecooked
}


export const menu_home_page = [
    {
        _id: "1",
        image: pizza_home,
        name: "Піца",
    },
    {
        _id: "2",
        image: rollset_home,
        name: "Сети",
    },
    {
        _id: "3",
        image: rolls_home,
        name: "Роли",
    },
    {
        _id: "4",
        image: fishdog_home,
        name: "Хот доги",
    },
    {
        _id: "5",
        image: soup_home,
        name: "Супи",
    },
]

export const assets = {
    minus,
    plus,
    fishburger,
    pizza,
    sushi_menu,
    soups_menu,
    fishburger_menu_active,
    pizza_menu_active,
    sushi_menu_active,
    soups_menu_active,
    set_rolls,
    // pizza,
    // sushi,
    // soup,
    // rolls,
    // fishdog
    sushi,
    soup,
    rolls,
    fishdog,
    tomJamSeaFood
}

export const cart_assets = {
    cross
}

export const nav_assets = {
    logo,
    arrow,
    phone,
    cart,
    burger,
    instagram,
    gmail,
    soup_menu_dropdown,
    roll_menu_dropdown,
    pizza_menu_dropdown,
    hot_dog_menu_dropdown
}

export const menu_items_list = [
    {
        id: "1",
        image: caprichoza,
        title: "Капрічоза",
        description: "Тісто для піц (н/ф), Куряче філє Жар, шинка, Гриби печериці, моцарела, масліни, Помідор, Томатна основа (н/ф)",
        weight: 600,
        price: 205,
        type:"pizza"
    },
    {
        id: "2",
        image: cezar,
        title: "Цезар",
        description: "Тісто для піц (н/ф), Вершки, моцарела, Курінне філє Жар (н/ф), бекон, томат чері, пармезан, коробка для піци",
        weight: 630,
        price: 220,
        type:"pizza"
    },
    {
        id: "3",
        image: diablo,
        title: "Діабло",
        description: "Тісто для піц (н/ф), Томатна основа (н/ф), моцарела, салямі Пепероні, Мисливські ковбаси, бекон, соус Ширачі, халапеньо",
        weight: 615,
        price: 210,
        type:"pizza"
    },
    {
        id: "4",
        image: margarita,
        title: "Маргарита",
        description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени, олень, масло пертушка, виноград.",
        weight: 600,
        price: 160,
        type:"pizza"
    },
    {
        id: "5",
        image: mazeratti,
        title: "4 Сира Мазераті",
        description: "Тісто для піц (н/ф), моцарела, сир гауда, сир дорблю, вершки, пармезан",
        weight: 600,
        price: 250,
        type:"pizza"
    },
    // {
    //     id: "6",
    //     image: meat,
    //     title: "М’ясна",
    //     description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени, олень, масло пертушка.",
    //     weight: 630,
    //     price: 200,
    //     type:"pizza"
    // },
    // {
    //     id: "7",
    //     image: mysliwska,
    //     title: "Мисливська",
    //     description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без.",
    //     weight: 600,
    //     price: 200,
    //     type:"pizza"
    // },
    // {
    //     id: "8",
    //     image: proshutoAndMango,
    //     title: "З Прошуто і Манго",
    //     description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени.",
    //     weight: 650,
    //     price: 230,
    //     type:"pizza"
    // },
    // {
    //     id: "9",
    //     image: salami,
    //     title: "Салямі",
    //     description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени.",
    //     weight: 600,
    //     price: 180,
    //     type:"pizza"
    // },
    // {
    //     id: "10",
    //     image: seaProducts,
    //     title: "з Морепродуктами",
    //     description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени, олень, масло пертушка, виноград.",
    //     weight: 650,
    //     price: 280,
    //     type:"pizza"
    // },
    // {
    //     id: "11",
    //     image: weryMeat,
    //     title: "Дуже М’ясна",
    //     description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени, олень, масло пертушка, виноград.",
    //     weight: 630,
    //     price: 230,
    //     type:"pizza"
    // },
    // {
    //     id: "12",
    //     image: gavajska,
    //     title: "Гавайська",
    //     description: "Тісто для піц (н/ф), Томатна основа (н/ф), моцарела, шинка, бекон, салямі, Мисливські ковбаси, куріне філе жар(нф), салямі Пепероні, айсберг",
    //     weight: 600,
    //     price: 215,
    //     type:"pizza"
    // },
    {
        id: "51",
        image: hotSet9,
        title: "Хот-сет №9",
        description: "Теплий з вугрем (н/ф), теплий з креветкою фрі (н/ф), Black Теплий з лососем (н/ф), Black теплий з копченим лососем (н/ф)",
        weight: 1100,
        price: 930,
        type:"sushi"
    },
    {
        id: "101",
        image: tomJamSeaFood,
        title: "Том-Ям з морепродуктами",
        description: "Лосось, томат чері, кунжут білий+чорний, зеленна цибуля, кокосове молоко, соєвий П/Ф (н/ф), том-ям, бульйон (н/ф)",
        weight: 500,
        price: 200,
        type:"soups"
    },
    {
        id: "201",
        image: fishDog,
        title: "Фіш-Dog з лососем",
        description: "Рис пф (н/ф), Вершковий сир, зеленна цибуля, кляр для темпури (н/ф), соус спайс (н/ф)",
        weight: 500,
        price: 200,
        type:"fishburger"
    },
]

export const set_list = [
    {
        _id: "1",
        image: pizza,
        description: "Піца",
    },
    {
        _id: "2",
        image: sushi,
        description: "Сети"
    },
    {
        _id: "3",
        image: soup,
        description: "Супи"
    },
    {
        _id: "4",
        image: rolls,
        description: "Роли"
    },
    {
        _id: "5",
        image: fishdog,
        description: "Хот доги"
    },
]




