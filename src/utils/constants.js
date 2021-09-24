import slide1 from "../assets/slider/slide-1.jpg";
import slide2 from "../assets/slider/slide-2.jpg";
import slide3 from "../assets/slider/slide-3.jpg";
import slide4 from "../assets/slider/slide-4.jpg";
import image2 from "../assets/homPage/product-2.jpg";
import image1 from "../assets/homPage/product-1.jpg";
import image3 from "../assets/homPage/product-3.jpg";
import image4 from "../assets/homPage/product-4.jpg";
// import base from "../assets/products/Накидки/Основа/бежевый.png";
// import border from "../assets/products/Накидки/Кантак/бежевый.png";
export const links = [
   {
      id: 1,
      text: "Главная",
      url: "/",
   },
   { id: 2, text: "продукты", url: "/products" },
   {
      id: 3,
      text: "контакты",
      url: "/contacts",
   },
];

export const products = [
   {
      id: 1,
      pageName: "eva-mats",
      image: slide4,
      smallImg: image2,
      title: "EVA Коврики",
      text: "Для производства лучших ЭВА ковриков в стране, мы используем лучший ЭВА материал, лучшую фурнитуру, окантовку, липучку и самое главное лично снятые лекала с каждого авто. Гарантируем качество и даём гарантию на всё, что производим.",
      url: "/products/eva-mats",
      galleryImgs: [
         {
            id: 1,
            name: "base",
            imgUrl: "/products/Коврики/ЭВА_ромб/бежевый.png",
         },
         {
            id: 2,
            name: "border",
            imgUrl: "/products/Коврики/Кантики/ЭВА/бежевый.png",
         },
         {
            id: 3,
            name: "border line",
            imgUrl: "/products/Коврики/Строчка_по_кантику/бежевый.png",
         },
      ],
   },
   {
      id: 2,
      pageName: "leather-mats",
      image: slide4,
      smallImg: image1,
      title: "Коврики из эко кожи",
      text: "Это так называемый премиум сегмент нашего производства. Как всегда лично снятые лекала с каждого авто, проверенные годами материалы, ровные строчки и трепетное отношение к каждому комплекту. Наши коврики из эко кожи преоброзят даже самый дорогой и изысканный салон вашего автомобиля.",
      url: "/products/leather-mats",
      galleryImgs: [
         {
            id: 1,
            name: "base",
            imgUrl: "/products/Коврики/Кожа/бежевый.png",
         },
         {
            id: 2,
            name: "border",
            imgUrl: "/products/Коврики/Кантики/кожаный/бежевый.png",
         },
         {
            id: 3,
            name: "border line",
            imgUrl: "/products/Коврики/Строчка_по_кантику/бежевый.png",
         },
         {
            id: 4,
            name: "line",
            imgUrl: "/products/Коврики/Узоры/Квадрат/бежевый.png",
         },
      ],
   },
   {
      id: 3,
      pageName: "capes",
      image: slide4,
      smallImg: image4,
      title: "Накидки",
      text: "Мы потратили огромное количество времени, испробовали множество материалов, перекроили нереальное количество размеров, искали оптимальный вариант крепления, чтобы создать для вас удобные, красивые накидки, которые будут дополнять интерьер вашего автомобиля, выглядеть дорого и в то же время по доступной цене.",
      url: "/products/capes",
      galleryImgs: [
         {
            id: 1,
            name: "base",
            imgUrl: "/products/Накидки/Основа/бежевый.png",
         },
         {
            id: 2,
            name: "border",
            imgUrl: "/products/Накидки/Кантак/бежевый.png",
         },
      ],
      options: [
         {
            stepText: "1 шаг: выберите цвет материала",
            content: [
               {
                  id: 1,
                  category: "base",
                  color: "beige",
                  Text: "бежевый",
                  imgUrl: "/products/Накидки/Основа/бежевый.png",
               },
               {
                  id: 2,
                  category: "base",
                  color: "burgundy",
                  Text: "бордовый",
                  imgUrl: "/products/Накидки/Основа/бордовый.png",
               },
               {
                  id: 3,
                  category: "base",
                  color: "brown",
                  Text: "коричневый",
                  imgUrl: "/products/Накидки/Основа/коричневый.png",
               },
               {
                  id: 4,
                  category: "base",
                  color: "red",
                  Text: "красный",
                  imgUrl: "/products/Накидки/Основа/красный.png",
               },
               {
                  id: 5,
                  category: "base",
                  color: "gray",
                  Text: "серый",
                  imgUrl: "/products/Накидки/Основа/серый.png",
               },
               {
                  id: 6,
                  category: "base",
                  color: "blue",
                  Text: "синий",
                  imgUrl: "/products/Накидки/Основа/синий.png",
               },
               {
                  id: 7,
                  category: "base",
                  color: "black",
                  Text: "черный",
                  imgUrl: "/products/Накидки/Основа/черный.png",
               },
            ],
         },
         {
            stepText: "2 шаг: выберите цвет окантовки",
            content: [
               {
                  id: 1,
                  category: "border",
                  color: "beige",
                  Text: "бежевый",
                  imgUrl: "/products/Накидки/Кантак/бежевый.png",
               },
               {
                  id: 2,
                  category: "border",
                  color: "burgundy",
                  Text: "бордовый",
                  imgUrl: "/products/Накидки/Кантак/бордовый.png",
               },
               {
                  id: 3,
                  category: "border",
                  color: "brown",
                  Text: "коричневый",
                  imgUrl: "/products/Накидки/Кантак/коричневый.png",
               },
               {
                  id: 4,
                  category: "border",
                  color: "red",
                  Text: "красный",
                  imgUrl: "/products/Накидки/Кантак/красный.png",
               },
               {
                  id: 5,
                  category: "border",
                  color: "gray",
                  Text: "серый",
                  imgUrl: "/products/Накидки/Кантак/серый.png",
               },
               {
                  id: 6,
                  category: "border",
                  color: "blue",
                  Text: "синий",
                  imgUrl: "/products/Накидки/Кантак/синий.png",
               },
               {
                  id: 7,
                  category: "border",
                  color: "black",
                  Text: "черный",
                  imgUrl: "/products/Накидки/Кантак/черный.png",
               },
            ],
         },
      ],
   },
   {
      id: 4,
      pageName: "bags",
      image: slide4,
      smallImg: image3,
      title: "кофры",
      text: "Удобный и нужный органайзер в багажник, а так же это стильный аксессуар. Необходимая вещь для создания уюта в багажнике.",
      url: "/products/bags",
      galleryImgs: [
         {
            id: 1,
            name: "base",
            imgUrl: "/products/Кофры/Материал/Квадрат/бежевый.png",
         },
         {
            id: 2,
            name: "border",
            imgUrl: "/products/Кофры/Кантик/бежевый.png",
         },

         {
            id: 3,
            name: "line",
            imgUrl: "/products/Кофры/Узор/Квадрат/бежевый.png",
         },
      ],
   },
];
