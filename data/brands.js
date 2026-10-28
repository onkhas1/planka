/*
  Каталог Планки. Чтобы добавить бренд, скопируйте блок { ... } и поменяйте поля.
  example: true — бренд-пример, на сайте будет метка «Пример». У настоящих брендов уберите эту строку.
  id — латиницей, будет в адресе страницы: brand.html?id=...
  years — сколько лет продаёт, since — с какого времени (для подписи), joined — когда попал в каталог.
  rating и reviews — оценка покупателей и число отзывов там, где бренд продаёт сейчас.
  price — цена самой доступной вещи, img — фото из папки img/.
  site — адрес магазина бренда (https://...). Пусто — кнопка «на сайт» не показывается.
  Первые шесть брендов участвуют в «Поднимите планку» на главной, у них должна быть цена.
*/
window.PLANKA_BRANDS = [
  { id: "iznanka", example: true, name: "Изнанка", cat: "Трикотаж", city: "Москва", years: 4, since: "весны 2022-го", rating: 4.91, reviews: 384, price: 7600, joined: "14 октября", img: "img/b-iznanka.jpg", site: "",
    about: "Свитеры и кардиганы из мериноса небольшими партиями. Горловины доделывают вручную.",
    items: [["Свитер с высоким горлом", "меринос", 7600], ["Кардиган на пуговицах", "меринос, альпака", 9800], ["Джемпер оверсайз", "меринос", 8400]] },
  { id: "severo-zapad", example: true, name: "Северо-Запад", cat: "Верхняя одежда", city: "Санкт-Петербург", years: 7, since: "2019-го", rating: 4.68, reviews: 1120, price: 14900, joined: "9 октября", img: "img/b-severo-zapad.jpg", site: "",
    about: "Пальто и куртки под питерскую погоду: ветер, мокрый снег, долгие прогулки.",
    items: [["Куртка-рубашка", "шерсть, утеплитель", 14900], ["Пальто прямое", "шерсть 80%", 23500]] },
  { id: "dvoe-studio", example: true, name: "dvoe studio", cat: "Базовый гардероб", city: "Москва", years: 5, since: "2021-го", rating: 4.83, reviews: 612, price: 3900, joined: "2 октября", img: "img/b-dvoe-studio.jpg", site: "",
    about: "Футболки, худи и брюки, которые носятся каждый день и не теряют форму после стирок.",
    items: [["Футболка плотная", "хлопок 240 г", 3900], ["Худи", "футер с начёсом", 7200], ["Брюки широкие", "хлопок, лён", 6800]] },
  { id: "teply-ceh", example: true, name: "Тёплый цех", cat: "Обувь", city: "Казань", years: 6, since: "2020-го", rating: 4.62, reviews: 318, price: 9800, joined: "28 сентября", img: "img/b-teply-ceh.jpg", site: "",
    about: "Кеды и ботинки на своей колодке. Шьют на небольшой фабрике в Казани.",
    items: [["Кеды кожаные", "кожа, резина", 9800], ["Ботинки зимние", "кожа, мех", 16400]] },
  { id: "bobina", example: true, name: "Бобина", cat: "Аксессуары", city: "Екатеринбург", years: 3, since: "осени 2023-го", rating: 4.97, reviews: 96, price: 1800, joined: "21 сентября", img: "img/b-bobina.jpg", site: "",
    about: "Ремни, кошельки и часовые ремешки из толстой кожи.",
    items: [["Ремень", "кожа, латунь", 1800], ["Ремешок для часов", "кожа", 2400], ["Кошелёк", "кожа", 3600]] },
  { id: "palto-i-tochka", example: true, name: "Пальто и точка", cat: "Верхняя одежда", city: "Москва", years: 5, since: "2021-го", rating: 4.74, reviews: 233, price: 12500, joined: "17 сентября", img: "img/b-palto-i-tochka.jpg", site: "",
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
  cat — категория, g — для кого: "ж" женское, "м" мужское, "у" для всех.
  url — ссылка на эту вещь в магазине бренда (https://...). Пусто — откроется страница бренда в Планке.
  Порядок в списке = порядок «Новые»: новые вещи добавляйте наверх.
*/
window.PLANKA_ITEMS = [
  { brand: "dvoe-studio", name: "Джинсы прямые", cat: "Брюки и джинсы", g: "у", price: 6900, img: "img/p-jeans-straight.jpg", url: "" },
  { brand: "palto-i-tochka", name: "Пальто-халат", cat: "Верхняя одежда", g: "ж", price: 12500, img: "img/p-coat-robe.jpg", url: "" },
  { brand: "iznanka", name: "Свитер с высоким горлом", cat: "Трикотаж", g: "ж", price: 7600, img: "img/p-sweater-grey.jpg", url: "" },
  { brand: "teply-ceh", name: "Ботинки челси", cat: "Обувь", g: "у", price: 16400, img: "img/p-chelsea.jpg", url: "" },
  { brand: "bobina", name: "Сумка через плечо", cat: "Сумки", g: "ж", price: 6800, img: "img/p-bag-sling.jpg", url: "" },
  { brand: "plecho", name: "Костюм синий", cat: "Костюмы", g: "м", price: 28900, img: "img/p-suit-blue.jpg", url: "" },
  { brand: "dacha", name: "Джинсы светлые", cat: "Брюки и джинсы", g: "ж", price: 5900, img: "img/p-jeans-light.jpg", url: "" },
  { brand: "severo-zapad", name: "Пальто прямое", cat: "Верхняя одежда", g: "м", price: 23500, img: "img/p-coat-man.jpg", url: "" },
  { brand: "vera-kim", name: "Платье миди", cat: "Платья", g: "ж", price: 11800, img: "img/p-dress-white.jpg", url: "" },
  { brand: "kusok", name: "Свитер ржавого цвета", cat: "Трикотаж", g: "у", price: 6400, img: "img/p-sweater-rust.jpg", url: "" },
  { brand: "len-i-sol", name: "Рубашка льняная", cat: "Рубашки", g: "м", price: 5400, img: "img/p-shirt-blue.jpg", url: "" },
  { brand: "beton", name: "Ботинки чёрные", cat: "Обувь", g: "м", price: 13900, img: "img/p-boots-lace.jpg", url: "" },
  { brand: "dvoe-studio", name: "Худи", cat: "Худи и футболки", g: "у", price: 7200, img: "img/p-hoodie-grey.jpg", url: "" },
  { brand: "krasnaya-liniya", name: "Костюм зелёный", cat: "Костюмы", g: "у", price: 26500, img: "img/p-suit-green.jpg", url: "" },
  { brand: "ushanka-lab", name: "Шапки вязаные", cat: "Головные уборы", g: "у", price: 2400, img: "img/p-hats-knit.jpg", url: "" },
  { brand: "severo-zapad", name: "Пальто с поясом", cat: "Верхняя одежда", g: "ж", price: 21900, img: "img/p-coat-belt.jpg", url: "" },
  { brand: "dvoe-studio", name: "Джинсы широкие", cat: "Брюки и джинсы", g: "ж", price: 7400, img: "img/p-jeans-wide.jpg", url: "" },
  { brand: "bobina", name: "Сумка-тоут", cat: "Сумки", g: "у", price: 5400, img: "img/p-tote.jpg", url: "" },
  { brand: "plecho", name: "Платье чёрное", cat: "Платья", g: "ж", price: 12900, img: "img/p-dress-black.jpg", url: "" },
  { brand: "iznanka", name: "Кардиган оверсайз", cat: "Трикотаж", g: "у", price: 9800, img: "img/p-cardigan.jpg", url: "" },
  { brand: "teply-ceh", name: "Кеды кожаные", cat: "Обувь", g: "у", price: 9800, img: "img/p-kedy-white.jpg", url: "" },
  { brand: "len-i-sol", name: "Брюки льняные", cat: "Брюки и джинсы", g: "ж", price: 6200, img: "img/p-pants-linen.jpg", url: "" },
  { brand: "palto-i-tochka", name: "Пальто красное", cat: "Верхняя одежда", g: "ж", price: 19800, img: "img/p-coat-red.jpg", url: "" },
  { brand: "dacha", name: "Рубашка синяя", cat: "Рубашки", g: "м", price: 4200, img: "img/p-shirt-line.jpg", url: "" },
  { brand: "kusok", name: "Шапка бини", cat: "Головные уборы", g: "у", price: 2200, img: "img/p-beanie-black.jpg", url: "" },
  { brand: "ovsyanka", name: "Свитер шоколадный", cat: "Трикотаж", g: "ж", price: 6900, img: "img/p-sweater-brown.jpg", url: "" },
  { brand: "plecho", name: "Костюм серый", cat: "Костюмы", g: "м", price: 24900, img: "img/p-suit-grey.jpg", url: "" },
  { brand: "beton", name: "Кеды бордовые", cat: "Обувь", g: "у", price: 7900, img: "img/p-kedy-maroon.jpg", url: "" },
  { brand: "vera-kim", name: "Платье на одно плечо", cat: "Платья", g: "ж", price: 14600, img: "img/p-dress-maroon.jpg", url: "" },
  { brand: "len-i-sol", name: "Рубашка белая", cat: "Рубашки", g: "у", price: 4900, img: "img/p-shirt-white.jpg", url: "" },
  { brand: "krasnaya-liniya", name: "Брюки розовые", cat: "Брюки и джинсы", g: "ж", price: 8900, img: "img/p-pants-pink.jpg", url: "" },
  { brand: "permsky-sviter", name: "Шапка с бубоном", cat: "Головные уборы", g: "у", price: 1900, img: "img/p-cap-yellow.jpg", url: "" },
  { brand: "dacha", name: "Худи белое", cat: "Худи и футболки", g: "у", price: 5600, img: "img/p-hoodie-white.jpg", url: "" },
  { brand: "teply-ceh", name: "Ботинки коричневые", cat: "Обувь", g: "м", price: 15400, img: "img/p-boots-brown.jpg", url: "" },
  { brand: "bobina", name: "Сумка серая", cat: "Сумки", g: "ж", price: 7900, img: "img/p-bag-grey.jpg", url: "" },
];
