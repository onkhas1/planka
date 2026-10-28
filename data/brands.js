/*
  Каталог Планки. Чтобы добавить бренд, скопируйте блок { ... } и поменяйте поля.
  example: true — бренд-пример, на сайте будет метка «Пример». У настоящих брендов уберите эту строку.
  id — латиницей, будет в адресе страницы: brand.html?id=...
  years — сколько лет продаёт, since — с какого времени (для подписи), joined — когда попал в каталог.
  rating и reviews — оценка покупателей и число отзывов там, где бренд продаёт сейчас.
  price — цена самой доступной вещи, img — фото из папки img/.
  site — адрес магазина бренда (https://...). Пусто — кнопка «на сайт» не показывается.
  bar: 1…6 — бренд стоит на «Поднимите планку» на главной, число = место слева направо.
  Можно продавать как платное место. Если не отмечен никто, там стоят первые шесть брендов списка.
*/
window.PLANKA_BRANDS = [
  { id: "iznanka", example: true, bar: 1, name: "Изнанка", cat: "Трикотаж", city: "Москва", years: 4, since: "весны 2022-го", rating: 4.91, reviews: 384, price: 7600, joined: "14 октября", img: "img/b-iznanka.jpg", site: "",
    about: "Свитеры и кардиганы из мериноса небольшими партиями. Горловины доделывают вручную.",
    items: [["Свитер с высоким горлом", "меринос", 7600], ["Кардиган на пуговицах", "меринос, альпака", 9800], ["Джемпер оверсайз", "меринос", 8400]] },
  { id: "severo-zapad", example: true, bar: 2, name: "Северо-Запад", cat: "Верхняя одежда", city: "Санкт-Петербург", years: 7, since: "2019-го", rating: 4.68, reviews: 1120, price: 14900, joined: "9 октября", img: "img/b-severo-zapad.jpg", site: "",
    about: "Пальто и куртки под питерскую погоду: ветер, мокрый снег, долгие прогулки.",
    items: [["Куртка-рубашка", "шерсть, утеплитель", 14900], ["Пальто прямое", "шерсть 80%", 23500]] },
  { id: "dvoe-studio", example: true, bar: 3, name: "dvoe studio", cat: "Базовый гардероб", city: "Москва", years: 5, since: "2021-го", rating: 4.83, reviews: 612, price: 3900, joined: "2 октября", img: "img/b-dvoe-studio.jpg", site: "",
    about: "Футболки, худи и брюки, которые носятся каждый день и не теряют форму после стирок.",
    items: [["Футболка плотная", "хлопок 240 г", 3900], ["Худи", "футер с начёсом", 7200], ["Брюки широкие", "хлопок, лён", 6800]] },
  { id: "teply-ceh", example: true, bar: 4, name: "Тёплый цех", cat: "Обувь", city: "Казань", years: 6, since: "2020-го", rating: 4.62, reviews: 318, price: 9800, joined: "28 сентября", img: "img/b-teply-ceh.jpg", site: "",
    about: "Кеды и ботинки на своей колодке. Шьют на небольшой фабрике в Казани.",
    items: [["Кеды кожаные", "кожа, резина", 9800], ["Ботинки зимние", "кожа, мех", 16400]] },
  { id: "bobina", example: true, bar: 5, name: "Бобина", cat: "Аксессуары", city: "Екатеринбург", years: 3, since: "осени 2023-го", rating: 4.97, reviews: 96, price: 1800, joined: "21 сентября", img: "img/b-bobina.jpg", site: "",
    about: "Ремни, кошельки и часовые ремешки из толстой кожи.",
    items: [["Ремень", "кожа, латунь", 1800], ["Ремешок для часов", "кожа", 2400], ["Кошелёк", "кожа", 3600]] },
  { id: "palto-i-tochka", example: true, bar: 6, name: "Пальто и точка", cat: "Верхняя одежда", city: "Москва", years: 5, since: "2021-го", rating: 4.74, reviews: 233, price: 12500, joined: "17 сентября", img: "img/b-palto-i-tochka.jpg", site: "",
    about: "Делают только пальто. Три модели в сезон, каждую в пяти цветах.",
    items: [["Пальто-халат", "шерсть 70%", 12500], ["Пальто двубортное", "шерсть, кашемир", 19800]] },
  { id: "kusok", example: true, name: "KUSOK", cat: "Трикотаж", city: "Санкт-Петербург", years: 3, since: "2023-го", rating: 4.8, reviews: 141, joined: "11 сентября", img: "img/b-kusok.jpg", site: "",
    about: "Вязаные вещи из остатков пряжи с больших фабрик. Каждая партия своего цвета.",
    items: [["Жилет", "шерсть", 4900], ["Шапка", "шерсть, акрил", 2200]] },
  { id: "vera-kim", example: true, name: "Мастерская Веры Ким", cat: "Костюмы", city: "Санкт-Петербург", years: 9, since: "2017-го", rating: 4.9, reviews: 77, joined: "5 сентября", img: "img/b-vera-kim.jpg", site: "",
    about: "Платья и костюмы, которые шьют по меркам за две недели.",
    items: [["Платье миди", "вискоза", 11800], ["Костюм с юбкой", "шерсть", 24000]] },
  { id: "krasnaya-liniya", example: true, name: "Красная линия", cat: "Костюмы", city: "Москва", years: 4, since: "2022-го", rating: 4.71, reviews: 205, joined: "30 августа", img: "img/b-krasnaya-liniya.jpg", site: "",
    about: "Пиджаки и брюки свободного кроя. У каждой модели есть вариант в красном.",
    items: [["Пиджак", "шерсть, вискоза", 12500], ["Брюки", "шерсть", 8900]] },
  { id: "len-i-sol", example: true, name: "Лён и соль", cat: "Базовый гардероб", city: "Санкт-Петербург", years: 2, since: "лета 2024-го", rating: 4.86, reviews: 58, joined: "26 августа", img: "img/b-len-i-sol.jpg", site: "",
    about: "Рубашки и брюки из льна, который покупают у фабрики в Костроме.",
    items: [["Рубашка", "лён", 5400], ["Брюки", "лён", 6200]] },
  { id: "ovsyanka", example: true, name: "Овсянка", cat: "Трикотаж", city: "Москва", years: 6, since: "2020-го", rating: 4.65, reviews: 402, joined: "19 августа", img: "img/b-ovsyanka.jpg", site: "",
    about: "Свитеры спокойных цветов: овсяный, графит, молочный.",
    items: [["Свитер", "шерсть, хлопок", 6900], ["Водолазка", "меринос", 5200]] },
  { id: "beton", example: true, name: "Бетон", cat: "Обувь", city: "Екатеринбург", years: 3, since: "2023-го", rating: 4.77, reviews: 129, joined: "12 августа", img: "img/b-beton.jpg", site: "",
    about: "Кроссовки на толстой подошве для города.",
    items: [["Кроссовки", "замша, сетка", 11200]] },
  { id: "permsky-sviter", example: true, name: "Пермский свитер", cat: "Трикотаж", city: "Пермь", years: 8, since: "2018-го", rating: 4.93, reviews: 512, joined: "7 августа", img: "img/b-permsky-sviter.jpg", site: "",
    about: "Тёплые свитеры с узорами, вяжут на машинах и доделывают вручную.",
    items: [["Свитер с узором", "шерсть", 8900], ["Варежки", "шерсть", 1900]] },
  { id: "dacha", example: true, name: "Дача", cat: "Базовый гардероб", city: "Казань", years: 2, since: "2024-го", rating: 4.7, reviews: 44, joined: "1 августа", img: "img/b-dacha.jpg", site: "",
    about: "Простая одежда на лето и межсезонье.",
    items: [["Рубашка", "хлопок", 4200], ["Шорты", "хлопок", 3100]] },
  { id: "ushanka-lab", example: true, name: "Ушанка lab", cat: "Аксессуары", city: "Москва", years: 4, since: "2022-го", rating: 4.84, reviews: 167, joined: "25 июля", img: "img/b-ushanka-lab.jpg", site: "",
    about: "Шапки, ушанки и шарфы, которые выдерживают минус двадцать.",
    items: [["Ушанка", "овчина", 6900], ["Шарф", "шерсть", 2800]] },
  { id: "plecho", example: true, name: "Плечо", cat: "Костюмы", city: "Москва", years: 5, since: "2021-го", rating: 4.69, reviews: 98, joined: "18 июля", img: "img/b-plecho.jpg", site: "",
    about: "Костюмы с широким плечом для работы и вечера.",
    items: [["Костюм", "шерсть, вискоза", 18900], ["Жилет", "шерсть", 6400]] },
];

/*
  Вещи для каталога. brand — id бренда из списка выше.
  cat — категория, sub — подкатегория (пальто, джинсы…), sizes — размеры, fabric — состав, about — пара строк о вещи.
  g — для кого: "ж" женское, "м" мужское, "у" для всех.
  imgs — все фото вещи (первое — главное).
  url — ссылка на эту вещь в магазине бренда (https://...). Пусто — откроется страница бренда в Планке.
  Порядок в списке = порядок «Новые»: новые вещи добавляйте наверх.
*/
window.PLANKA_ITEMS = [
  { brand: "dvoe-studio", name: "Джинсы прямые", cat: "Брюки и джинсы", g: "у", sub: "Джинсы", fabric: "Хлопок 100%, плотный деним 13 унций", about: "Классический прямой крой, средняя посадка. Деним не тянется и со временем садится по фигуре.", sizes: ["26","27","28","29","30","31","32"], price: 6900, img: "img/p-jeans-straight.jpg", imgs: ["img/p-jeans-straight.jpg", "img/p-jeans-straight-2.jpg", "img/p-jeans-straight-3.jpg"], url: "" },
  { brand: "palto-i-tochka", name: "Пальто-халат", cat: "Верхняя одежда", g: "ж", sub: "Пальто", fabric: "Шерсть 70%, полиамид 30%", about: "Свободное пальто с поясом, без пуговиц. Длина ниже колена, глубокие карманы.", sizes: ["XS","S","M","L","XL"], price: 12500, img: "img/p-coat-robe.jpg", imgs: ["img/p-coat-robe.jpg", "img/p-coat-robe-2.jpg", "img/p-coat-robe-3.jpg"], url: "" },
  { brand: "iznanka", name: "Свитер с высоким горлом", cat: "Трикотаж", g: "ж", sub: "Свитеры", fabric: "Меринос 100%", about: "Тонкий свитер, который не колется. Горловину доделывают вручную.", sizes: ["XS","S","M","L","XL"], price: 7600, img: "img/p-sweater-grey.jpg", imgs: ["img/p-sweater-grey.jpg", "img/p-sweater-grey-2.jpg", "img/p-sweater-grey-3.jpg"], url: "" },
  { brand: "teply-ceh", name: "Ботинки челси", cat: "Обувь", g: "у", sub: "Ботинки", fabric: "Кожа, подошва из резины", about: "Классические челси на резинке. Колодка широкая, подходит на высокий подъём.", sizes: ["37","38","39","40","41","42","43","44"], price: 16400, img: "img/p-chelsea.jpg", imgs: ["img/p-chelsea.jpg", "img/p-chelsea-2.jpg", "img/p-chelsea-3.jpg"], url: "" },
  { brand: "bobina", name: "Сумка через плечо", cat: "Сумки", g: "ж", sub: "Сумки", fabric: "Кожа растительного дубления", about: "Небольшая сумка на длинном ремне. Влезает телефон, кошелёк и ключи.", sizes: ["Один размер"], price: 6800, img: "img/p-bag-sling.jpg", imgs: ["img/p-bag-sling.jpg", "img/p-bag-sling-2.jpg", "img/p-bag-sling-3.jpg"], url: "" },
  { brand: "plecho", name: "Костюм синий", cat: "Костюмы", g: "м", sub: "Костюмы", fabric: "Шерсть 65%, вискоза 35%", about: "Пиджак и брюки свободного кроя. Пиджак на двух пуговицах, брюки со стрелками.", sizes: ["XS","S","M","L","XL"], price: 28900, img: "img/p-suit-blue.jpg", imgs: ["img/p-suit-blue.jpg", "img/p-suit-blue-2.jpg", "img/p-suit-blue-3.jpg"], url: "" },
  { brand: "dacha", name: "Джинсы светлые", cat: "Брюки и джинсы", g: "ж", sub: "Джинсы", fabric: "Хлопок 98%, эластан 2%", about: "Светлый деним с высокой посадкой и узким низом.", sizes: ["26","27","28","29","30","31","32"], price: 5900, img: "img/p-jeans-light.jpg", imgs: ["img/p-jeans-light.jpg", "img/p-jeans-light-2.jpg", "img/p-jeans-light-3.jpg"], url: "" },
  { brand: "severo-zapad", name: "Пальто прямое", cat: "Верхняя одежда", g: "м", sub: "Пальто", fabric: "Шерсть 80%, полиэстер 20%, утеплитель", about: "Прямое пальто до колена с тонким утеплителем. Рассчитано на питерскую осень.", sizes: ["XS","S","M","L","XL"], price: 23500, img: "img/p-coat-man.jpg", imgs: ["img/p-coat-man.jpg", "img/p-coat-man-2.jpg", "img/p-coat-man-3.jpg"], url: "" },
  { brand: "vera-kim", name: "Платье миди", cat: "Платья", g: "ж", sub: "Платья", fabric: "Вискоза 100%", about: "Лёгкое платье миди без рукавов, шьют по меркам за две недели.", sizes: ["XS","S","M","L","XL"], price: 11800, img: "img/p-dress-white.jpg", imgs: ["img/p-dress-white.jpg", "img/p-dress-white-2.jpg", "img/p-dress-white-3.jpg"], url: "" },
  { brand: "kusok", name: "Свитер ржавого цвета", cat: "Трикотаж", g: "у", sub: "Свитеры", fabric: "Шерсть 60%, акрил 40%", about: "Объёмный свитер из остатков пряжи: каждая партия своего оттенка.", sizes: ["XS","S","M","L","XL"], price: 6400, img: "img/p-sweater-rust.jpg", imgs: ["img/p-sweater-rust.jpg", "img/p-sweater-rust-2.jpg", "img/p-sweater-rust-3.jpg"], url: "" },
  { brand: "len-i-sol", name: "Рубашка льняная", cat: "Рубашки", g: "м", sub: "Рубашки", fabric: "Лён 100%", about: "Свободная рубашка из костромского льна. После стирки становится мягче.", sizes: ["XS","S","M","L","XL"], price: 5400, img: "img/p-shirt-blue.jpg", imgs: ["img/p-shirt-blue.jpg", "img/p-shirt-blue-3.jpg"], url: "" },
  { brand: "beton", name: "Ботинки чёрные", cat: "Обувь", g: "м", sub: "Ботинки", fabric: "Кожа, рифлёная подошва", about: "Высокие ботинки на шнуровке и толстой подошве для города.", sizes: ["37","38","39","40","41","42","43","44"], price: 13900, img: "img/p-boots-lace.jpg", imgs: ["img/p-boots-lace.jpg", "img/p-boots-lace-2.jpg", "img/p-boots-lace-3.jpg"], url: "" },
  { brand: "dvoe-studio", name: "Худи", cat: "Худи и футболки", g: "у", sub: "Худи", fabric: "Хлопок 80%, полиэстер 20%, футер с начёсом", about: "Плотное худи свободного кроя с двойным капюшоном.", sizes: ["XS","S","M","L","XL"], price: 7200, img: "img/p-hoodie-grey.jpg", imgs: ["img/p-hoodie-grey.jpg", "img/p-hoodie-grey-2.jpg", "img/p-hoodie-grey-3.jpg"], url: "" },
  { brand: "krasnaya-liniya", name: "Костюм зелёный", cat: "Костюмы", g: "у", sub: "Костюмы", fabric: "Шерсть 50%, вискоза 50%", about: "Пиджак свободного кроя и широкие брюки. Цвет — тёмный изумруд.", sizes: ["XS","S","M","L","XL"], price: 26500, img: "img/p-suit-green.jpg", imgs: ["img/p-suit-green.jpg", "img/p-suit-green-2.jpg", "img/p-suit-green-3.jpg"], url: "" },
  { brand: "ushanka-lab", name: "Шапки вязаные", cat: "Головные уборы", g: "у", sub: "Шапки", fabric: "Шерсть 100%", about: "Шапки с отворотом в пяти цветах, держат минус двадцать.", sizes: ["Один размер"], price: 2400, img: "img/p-hats-knit.jpg", imgs: ["img/p-hats-knit.jpg", "img/p-hats-knit-2.jpg", "img/p-hats-knit-3.jpg"], url: "" },
  { brand: "severo-zapad", name: "Пальто с поясом", cat: "Верхняя одежда", g: "ж", sub: "Тренчи", fabric: "Хлопок 70%, полиэстер 30%", about: "Тренч длиной миди с поясом и погонами. Не продувается.", sizes: ["XS","S","M","L","XL"], price: 21900, img: "img/p-coat-belt.jpg", imgs: ["img/p-coat-belt.jpg", "img/p-coat-belt-2.jpg", "img/p-coat-belt-3.jpg"], url: "" },
  { brand: "dvoe-studio", name: "Джинсы широкие", cat: "Брюки и джинсы", g: "ж", sub: "Джинсы", fabric: "Хлопок 100%", about: "Широкие джинсы с высокой посадкой и длинной штаниной.", sizes: ["26","27","28","29","30","31","32"], price: 7400, img: "img/p-jeans-wide.jpg", imgs: ["img/p-jeans-wide.jpg", "img/p-jeans-wide-2.jpg", "img/p-jeans-wide-3.jpg"], url: "" },
  { brand: "bobina", name: "Сумка-тоут", cat: "Сумки", g: "у", sub: "Сумки", fabric: "Плотный хлопок, кожаные ручки", about: "Большая сумка на каждый день, влезает ноутбук.", sizes: ["Один размер"], price: 5400, img: "img/p-tote.jpg", imgs: ["img/p-tote.jpg", "img/p-tote-2.jpg", "img/p-tote-3.jpg"], url: "" },
  { brand: "plecho", name: "Платье чёрное", cat: "Платья", g: "ж", sub: "Платья", fabric: "Вискоза 70%, шёлк 30%", about: "Платье на тонких бретелях, длина миди.", sizes: ["XS","S","M","L","XL"], price: 12900, img: "img/p-dress-black.jpg", imgs: ["img/p-dress-black.jpg", "img/p-dress-black-2.jpg", "img/p-dress-black-3.jpg"], url: "" },
  { brand: "iznanka", name: "Кардиган оверсайз", cat: "Трикотаж", g: "у", sub: "Кардиганы", fabric: "Меринос 70%, альпака 30%", about: "Объёмный кардиган на крупных пуговицах.", sizes: ["XS","S","M","L","XL"], price: 9800, img: "img/p-cardigan.jpg", imgs: ["img/p-cardigan.jpg", "img/p-cardigan-2.jpg", "img/p-cardigan-3.jpg"], url: "" },
  { brand: "teply-ceh", name: "Кеды кожаные", cat: "Обувь", g: "у", sub: "Кеды", fabric: "Кожа, резина", about: "Белые кеды на своей колодке, шьют в Казани.", sizes: ["37","38","39","40","41","42","43","44"], price: 9800, img: "img/p-kedy-white.jpg", imgs: ["img/p-kedy-white.jpg", "img/p-kedy-white-2.jpg", "img/p-kedy-white-3.jpg"], url: "" },
  { brand: "len-i-sol", name: "Брюки льняные", cat: "Брюки и джинсы", g: "ж", sub: "Брюки", fabric: "Лён 100%", about: "Широкие брюки на резинке, для лета и жары.", sizes: ["26","27","28","29","30","31","32"], price: 6200, img: "img/p-pants-linen.jpg", imgs: ["img/p-pants-linen.jpg", "img/p-pants-linen-2.jpg", "img/p-pants-linen-3.jpg"], url: "" },
  { brand: "palto-i-tochka", name: "Пальто красное", cat: "Верхняя одежда", g: "ж", sub: "Пальто", fabric: "Шерсть 80%, кашемир 20%", about: "Двубортное пальто глубокого красного цвета.", sizes: ["XS","S","M","L","XL"], price: 19800, img: "img/p-coat-red.jpg", imgs: ["img/p-coat-red.jpg", "img/p-coat-red-2.jpg", "img/p-coat-red-3.jpg"], url: "" },
  { brand: "dacha", name: "Рубашка синяя", cat: "Рубашки", g: "м", sub: "Рубашки", fabric: "Хлопок 100%", about: "Простая рубашка прямого кроя на каждый день.", sizes: ["XS","S","M","L","XL"], price: 4200, img: "img/p-shirt-line.jpg", imgs: ["img/p-shirt-line.jpg", "img/p-shirt-line-2.jpg", "img/p-shirt-line-3.jpg"], url: "" },
  { brand: "kusok", name: "Шапка бини", cat: "Головные уборы", g: "у", sub: "Шапки", fabric: "Шерсть 50%, акрил 50%", about: "Короткая бини мелкой вязки.", sizes: ["Один размер"], price: 2200, img: "img/p-beanie-black.jpg", imgs: ["img/p-beanie-black.jpg", "img/p-beanie-black-2.jpg", "img/p-beanie-black-3.jpg"], url: "" },
  { brand: "ovsyanka", name: "Свитер шоколадный", cat: "Трикотаж", g: "ж", sub: "Свитеры", fabric: "Шерсть 50%, хлопок 50%", about: "Свитер свободного кроя шоколадного цвета.", sizes: ["XS","S","M","L","XL"], price: 6900, img: "img/p-sweater-brown.jpg", imgs: ["img/p-sweater-brown.jpg", "img/p-sweater-brown-2.jpg", "img/p-sweater-brown-3.jpg"], url: "" },
  { brand: "plecho", name: "Костюм серый", cat: "Костюмы", g: "м", sub: "Костюмы", fabric: "Шерсть 70%, вискоза 30%", about: "Серый костюм с широким плечом для работы и вечера.", sizes: ["XS","S","M","L","XL"], price: 24900, img: "img/p-suit-grey.jpg", imgs: ["img/p-suit-grey.jpg", "img/p-suit-grey-2.jpg", "img/p-suit-grey-3.jpg"], url: "" },
  { brand: "beton", name: "Кеды бордовые", cat: "Обувь", g: "у", sub: "Кеды", fabric: "Замша, резина", about: "Низкие кеды из замши на тонкой подошве.", sizes: ["37","38","39","40","41","42","43","44"], price: 7900, img: "img/p-kedy-maroon.jpg", imgs: ["img/p-kedy-maroon.jpg", "img/p-kedy-maroon-2.jpg", "img/p-kedy-maroon-3.jpg"], url: "" },
  { brand: "vera-kim", name: "Платье на одно плечо", cat: "Платья", g: "ж", sub: "Платья", fabric: "Вискоза 100%", about: "Платье на одно плечо с разрезом, длина макси.", sizes: ["XS","S","M","L","XL"], price: 14600, img: "img/p-dress-maroon.jpg", imgs: ["img/p-dress-maroon.jpg", "img/p-dress-maroon-2.jpg", "img/p-dress-maroon-3.jpg"], url: "" },
  { brand: "len-i-sol", name: "Рубашка белая", cat: "Рубашки", g: "у", sub: "Рубашки", fabric: "Лён 55%, хлопок 45%", about: "Белая рубашка оверсайз, лён смешан с хлопком, чтобы меньше мялась.", sizes: ["XS","S","M","L","XL"], price: 4900, img: "img/p-shirt-white.jpg", imgs: ["img/p-shirt-white.jpg", "img/p-shirt-white-2.jpg", "img/p-shirt-white-3.jpg"], url: "" },
  { brand: "krasnaya-liniya", name: "Брюки розовые", cat: "Брюки и джинсы", g: "ж", sub: "Брюки", fabric: "Шерсть 60%, вискоза 40%", about: "Прямые брюки со стрелками пыльно-розового цвета.", sizes: ["26","27","28","29","30","31","32"], price: 8900, img: "img/p-pants-pink.jpg", imgs: ["img/p-pants-pink.jpg", "img/p-pants-pink-2.jpg", "img/p-pants-pink-3.jpg"], url: "" },
  { brand: "permsky-sviter", name: "Шапка с бубоном", cat: "Головные уборы", g: "у", sub: "Шапки", fabric: "Шерсть 100%", about: "Шапка с узором и бубоном, вяжут в Перми.", sizes: ["Один размер"], price: 1900, img: "img/p-cap-yellow.jpg", imgs: ["img/p-cap-yellow.jpg", "img/p-cap-yellow-2.jpg", "img/p-cap-yellow-3.jpg"], url: "" },
  { brand: "dacha", name: "Худи белое", cat: "Худи и футболки", g: "у", sub: "Худи", fabric: "Хлопок 100%", about: "Лёгкое худи без начёса на межсезонье.", sizes: ["XS","S","M","L","XL"], price: 5600, img: "img/p-hoodie-white.jpg", imgs: ["img/p-hoodie-white.jpg", "img/p-hoodie-white-2.jpg", "img/p-hoodie-white-3.jpg"], url: "" },
  { brand: "teply-ceh", name: "Ботинки коричневые", cat: "Обувь", g: "м", sub: "Ботинки", fabric: "Кожа, мех", about: "Зимние ботинки на шнуровке с натуральным мехом внутри.", sizes: ["37","38","39","40","41","42","43","44"], price: 15400, img: "img/p-boots-brown.jpg", imgs: ["img/p-boots-brown.jpg", "img/p-boots-brown-2.jpg", "img/p-boots-brown-3.jpg"], url: "" },
  { brand: "bobina", name: "Сумка серая", cat: "Сумки", g: "ж", sub: "Сумки", fabric: "Кожа, латунь", about: "Сумка-портфель с двумя пряжками.", sizes: ["Один размер"], price: 7900, img: "img/p-bag-grey.jpg", imgs: ["img/p-bag-grey.jpg", "img/p-bag-grey-2.jpg", "img/p-bag-grey-3.jpg"], url: "" },
];
