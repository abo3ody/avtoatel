import slide1 from "../assets/slider/slide-1.jpg";
import slide2 from "../assets/slider/slide-2.jpg";
import slide3 from "../assets/slider/slide-3.jpg";
import slide4 from "../assets/slider/slide-4.jpg";
import image2 from "../assets/homPage/product-2.jpg";
import image1 from "../assets/homPage/product-1.jpg";
import image3 from "../assets/homPage/product-3.jpg";
import image4 from "../assets/homPage/product-4.jpg";
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
   },
   {
      id: 2,
      pageName: "leather-mats",
      image: slide4,
      smallImg: image1,
      title: "Коврики из эко кожи",
      text: "Это так называемый премиум сегмент нашего производства. Как всегда лично снятые лекала с каждого авто, проверенные годами материалы, ровные строчки и трепетное отношение к каждому комплекту. Наши коврики из эко кожи преоброзят даже самый дорогой и изысканный салон вашего автомобиля.",
      url: "/products/leather-mats",
   },
   {
      id: 3,
      pageName: "capes",
      image: slide4,
      smallImg: image3,
      title: "Накидки",
      text: "Мы потратили огромное количество времени, испробовали множество материалов, перекроили нереальное количество размеров, искали оптимальный вариант крепления, чтобы создать для вас удобные, красивые накидки, которые будут дополнять интерьер вашего автомобиля, выглядеть дорого и в то же время по доступной цене.",
      url: "/products/capes",
   },
   {
      id: 4,
      pageName: "bags",
      image: slide4,
      smallImg: image4,
      title: "кофры",
      text: "Удобный и нужный органайзер в багажник, а так же это стильный аксессуар. Необходимая вещь для создания уюта в багажнике.",
      url: "/products/bags",
   },
];
