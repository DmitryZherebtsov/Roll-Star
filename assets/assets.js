// Main Picture of the web site
import mainPicture from "../assets/mainPicture.png"

// Graphic pictures + menu pics
import logo from "../assets/logo.png";
import arrow from "../assets/arrow.svg";
import phone from "../assets/phone-menu.svg";
import burger from "../assets/burger-menu.svg";
import cart from "../assets/cart-menu.svg";
import pizza from "../assets/pizza.svg";
import sushi from "../assets/sushi.png";
import boul from "../assets/bowl.svg";
import sushi_roll from "../assets/sushi-roll.svg";
import set_rolls from "../assets/set-rolls.svg";
import soup from "../assets/soup.svg";
import rolls from "../assets/rolls.png";
import fishburger from "../assets/fishburger.svg";
import fishdog from "../assets/fishdog.png";
import cross from "../assets/cross.svg";
import minus from "../assets/minus.png"
import plus from "../assets/plus.png"
import instagram from "../assets/instagram.svg";
import gmail from "../assets/gmail.svg";

// dropdown menu
import soup_menu_dropdown from "../assets/soup_menu.svg";
import roll_menu_dropdown from "../assets/roll_menu.svg";
import pizza_menu_dropdown from "../assets/pizza_menu.svg";
import hot_dog_menu_dropdown from "../assets/hot_dog_menu.svg";

import sushi_white from "../assets/sushi_white.png";

// Pizza Menu
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
import veryMeat from "../assets/weryMeat.png";
import gavajska from "../assets/gavajska.png";

// Fish-Dogs Menu & Hand-Rolls
import fish_dog_vugrem from "../assets/fish_dog_vugrem.jpg";
import fish_dog_krevetka from "../assets/fish_dog_krevetka.jpg";
import fish_dog_losos from "../assets/fish_dog_losos.jpg";
import fish_burger_vugrem from "../assets/fish_burger_vugrem.jpg";
import fish_burger_losos from "../assets/fish_burger_losos.jpg";
import fish_burger_tunec from "../assets/fish_burger_tunec.jpg";
import fish_burger_krevetka from "../assets/fish_burger_krevetka.jpg";
// import hot_hand_roll_meat from "..asetts/hot_hand_roll_meat.jpg"
// import hot_hand_roll_cheese from "..asetts/hot_hand_roll_cheese.jpg"

// Sushi-Sets Menu
import set1 from "../assets/set1.jpg";
import set2 from "../assets/set2.jpg";
import set3 from "../assets/set3.jpg";
import set4 from "../assets/set4.jpg";
import set5 from "../assets/set5.jpg";
import set6 from "../assets/set6.jpg";
import set7 from "../assets/set7.jpg";
import set8 from "../assets/set8.jpg";

// Soups Menu
import tom_losos from "../assets/tom_jam_losos.jpg";
import tom_krewetka from "../assets/tom_jam_krewetka.jpg";

// Bouly Menu
import boul_tuna from "../assets/boul_tuna.jpg";
import boul_losos from "../assets/boul_losos.jpg";
import boul_krewetka from "../assets/boul_krewetka.jpg";
import boul_vugor from "../assets/boul_vugor.jpg";

// Slider Images
import slider_img3 from "../assets/slider3.jpg"
import slider_img5 from "../assets/slider5.jpg"
import slider_img7 from "../assets/slider7.jpg"
import slider_img8 from "../assets/slider8.jpg"
import slider_img9 from "../assets/slider9.jpg"
import slider_img10 from "../assets/slider10.jpg"
import slider_img11 from "../assets/slider11.jpg"
import slider_img13 from "../assets/slider_image-3.png"
import slider_img14 from "../assets/slider_image-2.png"
import slider_img15 from "../assets/slider_image-1.png"

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

import user from "../assets/user-circle1.svg"

export const home_page = {
    mainPicture,
    slider_img3,
    slider_img5,
    slider_img7,
    slider_img8,
    slider_img9,
    slider_img10,
    slider_img11,
    slider_img13,
    slider_img14,
    slider_img15,
    arrow_left,
    arrow_right,
    koszyk,
    confirm,
    delivery,
    youarecooked,
    user
}

export const menu_home_page = [
    {
        _id: "1",
        image: pizza_home,
        name: "Піца",
        type:"pizza"
    },
    {
        _id: "2",
        image: rollset_home,
        name: "Сети",
        type:"sushi"
    },
    {
        _id: "3",
        image: rolls_home,
        name: "Роли",
        type:"sushi"
    },
    {
        _id: "4",
        image: fishdog_home,
        name: "Фіш-Доги",
        type:"fishburger"
    },
    {
        _id: "5",
        image: soup_home,
        name: "Супи",
        type:"soups"
    },
]

export const assets = {
    minus,
    plus,
    fishburger,
    pizza,
    set_rolls,
    roll_menu_dropdown,
    sushi,
    soup,
    boul,
    sushi_roll,
    rolls,
    fishdog,
    sushi_white,

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

export const dropdown_res = [
    {
        _id: "1",
        image: pizza_menu_dropdown,
        name: "Піца",
        type:"pizza"
    },
    {
        _id: "2",
        image: roll_menu_dropdown,
        name: "Роли | Сети",
        type:"sushi"
    },
    {
        _id: "3",
        image: hot_dog_menu_dropdown,
        name: "Фіш-Доги",
        type:"fishburger"
    },
    {
        _id: "4",
        image: soup_menu_dropdown,
        name: "Супи",
        type:"soups"
    },
    {
        _id: "5",
        image: boul,
        name: "Боули",
        type:"pizza"
    }
]

export const ordered = [
    
]

export const ordered_final = [ // масив з замовленнями + контактні дані 
    ordered
]


export const menu_items_list = [ // Меню
    {
        id: "1",
        image: caprichoza,
        title: "Капрічоза",
        description: "Тісто для піц (н/ф), Куряче філє Жар, шинка, Гриби печериці, моцарела, масліни, Помідор, Томатна основа (н/ф)",
        weight: 600,
        price: 205,
        type: "pizza"
    },
    {
        id: "2",
        image: cezar,
        title: "Цезар",
        description: "Тісто для піц (н/ф), Вершки, моцарела, Куряче філе Жар (н/ф), бекон, томат чері, пармезан, коробка для піци",
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
    {
        id: "6",
        image: meat,
        title: "М’ясна",
        description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени, олень, масло пертушка.",
        weight: 630,
        price: 200,
        type:"pizza"
    },
    {
        id: "7",
        image: mysliwska,
        title: "Мисливська",
        description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без.",
        weight: 600,
        price: 200,
        type:"pizza"
    },
    {
        id: "8",
        image: proshutoAndMango,
        title: "Прошуто і Манго",
        description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени.",
        weight: 650,
        price: 230,
        type:"pizza"
    },
    {
        id: "9",
        image: salami,
        title: "Салямі",
        description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени.",
        weight: 600,
        price: 180,
        type:"pizza"
    },
    {
        id: "10",
        image: seaProducts,
        title: "Морепродукти",
        description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени, олень, масло пертушка, виноград.",
        weight: 650,
        price: 280,
        type:"pizza"
    },
    {
        id: "11",
        image: veryMeat,
        title: "Дуже М’ясна",
        description: "Соус “Кетчунез”, колбаска, оливка, помидорка, тесто хлебное, сьірок без плесени, олень, масло пертушка, виноград.",
        weight: 630,
        price: 230,
        type:"pizza"
    },
    {
        id: "12",
        image: gavajska,
        title: "Гавайська",
        description: "Тісто для піц (н/ф), Томатна основа (н/ф), моцарела, шинка, бекон, салямі, Мисливські ковбаси, куріне філе жар(нф), салямі Пепероні, айсберг",
        weight: 600,
        price: 215,
        type:"pizza"
    },
    {   
        id: "50",
        image: set1,
        title: "Сет №1",
        description: 'Філадельфія з вугрем (н/ф),Філадельфія класична (н/ф),філадельфія з тунцем (н/ф)',
        weight:930,
        price:630,
        type:"sushi"
    },
    {
        id: "51",
        image: set2,
        title: "Сет №2",
        description: 'Філадельфія з вугрем ,Філадельфія класична, Філадельфія гриль з грушою , філадельфія з тунцем',
        weight:1240,
        price:835,
        type:"sushi"
    },
    {
        id: "52",
        image: set3,
        title: "Сет №3",
        description: 'Black Філадельфія гриль з авокадо (н/ф),Black Філадельфія гриль з Манго (н/ф), Black Філадельфія гриль з тунцем (н/ф), Філадельфія гриль з грушою (н/ф)',
        weight:1240,
        price:900,
        type:"sushi"
    },
    {
        id: "53",
        image: set4,
        title: "Сет №4",
        description: 'Black чедер з грушою (н/ф),Філадельфія класична (н/ф),Black Аляска з тунцем (н/ф), Боніто з копченим лососем (н/ф)',
        weight:1100,
        price:800,
        type:sushi
    },
    {
        id: "54",
        image: set5,
        title: "Сет №5",
        description: 'Філадельфія з креветкою (н/ф),Аляска з Лососем (н/ф),Black Аляска з тунцем (н/ф), Філадельфія з копченим лососем (н/ф)',
        weight:1230,
        price:880,
        type:"sushi"
    },
    {
        id: "55",
        image: set6,
        title: "Сет №6",
        description: 'Філадельфія з крабом (н/ф),Футомак з вугрем (н/ф),Філадельфія гриль з грушою (н/ф), Black чедер з жареним лососем (н/ф)',
        weight:1100,
        price:900,
        type:"sushi"
    },
    {
        id: "56",
        image: set7,
        title: "Сет №7",
        description: 'lack Дракон (н/ф),Зелений дракон (н/ф),Золотий дракон (н/ф),Червоний дракон (н/ф) зелений дракон з крев. фрі (н/ф)',
        weight:1650,
        price:1350,
        type:"sushi"
    },  
    {
        id: "57",
        image: set8,
        title: "Сет №8",
        description: 'Філадельфія з копченим лососем (н/ф),Black Аляска з тунцем (н/ф),Боніто з Лососем (н/ф), Філадельфія з креветкою (н/ф),Black чедер з креветкою фрі (н/ф),Філадельфія в кунжуті з лососем (н/ф), футомак з лососем (н/ф),Футомак з вугрем (н/ф)',
        weight:2200,
        price:1700,
        type:"sushi"
    },
    {
        id: "58",
        image: rollset_home,
        title: "Хот-сет №9",
        description: "Теплий з вугрем (н/ф), теплий з креветкою фрі (н/ф), Black Теплий з лососем (н/ф), Black теплий з копченим лососем (н/ф)",
        weight: 1100,
        price: 930,
        type:"sushi"
    },
    {
        id: "101",
        image: soup_home,
        title: "Том-Ям з Морепродуктами",
        description: "Лосось, томат чері, кунжут білий+чорний, зеленна цибуля, кокосове молоко, соєвий П/Ф (н/ф), том-ям, бульйон (н/ф)",
        weight: 500,
        price: 200,
        type:"soups"
    },
    {
        id: "102",
        image: tom_losos,
        title: "Том-Ям з Лососем",
        description: "Лосось, томат чері, кунжут білий+чорний, зеленна цибуля, кокосове молоко,соєвий П/Ф (н/ф), том-ям, бульйон (н/ф)",
        weight: 500,
        price: 200,
        type:"soups"
    },
    {
        id: "103",
        image: tom_krewetka,
        title: "Том-Ям з креветками",
        description: "Томат чері, креветка бейбі, кунжут білий+чорний, зеленна цибуля, кокосове молоко, соєвий П/Ф (н/ф), том-ям, бульйон (н/ф)",
        weight: 500,
        price: 200,
        type:"soups"
    },
    {
        id: "201",
        image: fish_dog_vugrem,
        title: "Фіш-Дог з вугрем",
        description: "Рис пф (н/ф), Вершковий сир, зеленна цибуля, кляр для темпури (н/ф), соус спайс (н/ф)",
        weight: 500,
        price: 200,
        type:"fishburger"
    },
    {
        id: "202",
        image: fish_dog_krevetka,
        title: "Фіш-Дог з креветкою",
        description: 'Рис пф (н/ф),Вершковий сир,кляр для темпури (н/ф),соус Світ чілі,креветка тигрова',
        weight: 370,
        price: 250,
        type: "fishburger",
    },
    {
        id: "203",
        image: fish_dog_losos,
        title: "Фіш-Дог з лососем",
        description: 'Рис пф (н/ф),Вершковий сир,вугор,сир Чедер,айсберг,соус Унагі,манго,Огірок,кляр для темпури (н/ф)',
        weight: 370,
        price: 250,
        type: "fishburger"
    },
    {
        id: "204",
        image: fish_burger_tunec,
        title: "Фіш-бургер з тунцем",
        description: 'Рис пф (н/ф),Вершковий сир,тунець,сир Чедер,айсберг,соус Унагі,груша,Огірок,кляр для темпури (н/ф)',
        weight: 430,
        price: 250,
        type: "fishburger",
    },
    {
        id: "205",
        image: fish_burger_losos,
        title: "Фіш-Бурег з лососем",
        description: 'Рис пф (н/ф),Вершковий сир,кляр для темпури (н/ф),сир Чедер,соус Унагі,айсберг,Лосось,Авокадо,Огірок',
        weight: 430,
        price: 250,
        type: "fishburger",
    },
    {
        id: "206",
        image: fish_burger_krevetka,
        title: "Фіш-Бурег з креветкою",
        description: 'Рис пф (н/ф),Вершковий сир,кляр для темпури (н/ф),айсберг, Авокадо, Огірок,креветка тигрова,сир Чедер, соус Унагі',
        weight: 430,
        price: 250,
        type: "fishburger"
    },
    {
        id: "207",
        image: fish_burger_vugrem,
        title: 'Фіш-Бурег з вугрем',
        description: 'Рис пф (н/ф),Вершковий сир,вугор,сир Чедер,айсберг, соус Унагі,манго,Огірок,кляр для темпури (н/ф)',
        weight: 430,
        price: 250,
        type: "fishburger"
    },
    {
        id: "250",
        image: boul_tuna,
        title: "Боул з тунцем",
        description: 'Рис пф (н/ф),салат хіяші,томат чері,айсберг,Огірок,груша,тунець, соус Унагі, кунжут білий+чорний',
        weight: 340,
        price: 200,
        type: "bouly"
    },
    {
        id: "251",
        image: boul_losos,
        title: "Боул з лососем",
        description: 'Рис пф (н/ф),салат хіяші,соус Унагі,томат чері,айсберг,Огірок, Авокадо,Лосось,мендаль,кунжут білий+чорний',
        weight: 340,
        price: 200,
        type: "bouly"
    },
    {
        id: "252",
        image: boul_krewetka,
        title: "Боул з креветкою",
        description: 'Рис пф (н/ф),салат хіяші,томат чері,айсберг,Огірок,Авокадо,креветка тигрова,соус Унагі,Ікра масага',
        weight: 340,
        price: 240,
        type: "bouly"
    },
    {
        id: "253",
        image: boul_vugor,
        title: "Боул з вугрем",
        description: 'Рис пф (н/ф),салат хіяші,томат чері,айсберг,Огірок,манго,вугор,соус Унагі,мендаль,кунжут білий+чорний',
        weight: 340,
        price: 250,
        type: "bouly"
    },
]
