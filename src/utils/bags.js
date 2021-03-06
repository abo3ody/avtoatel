import slide4 from "../assets/slider/slide-4.jpg";
import image3 from "../assets/homPage/product-3.jpg";

export const bags = {
   id: 4,
   pageName: "bags",
   image: slide4,
   smallImg: image3,
   title: "кофры",
   text: "Удобный и нужный органайзер в багажник, а так же это стильный аксессуар. Необходимая вещь для создания уюта в багажнике.",
   url: "/products/bags",
   type: "square",
   set: "70x30x30",
   price: 2650,
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
   productTypes: [
      {
         stepText: "1 шаг: выберите вид отстрочки",
         content: [
            {
               id: 1,
               img: "/products/Кофры/type-icon/квадратный.png",
               type: "square",
               text: "Квадрат",
               base: "/products/Кофры/Материал/Квадрат/бежевый.png",
               border: "/products/Кофры/Кантик/бежевый.png",
               line: "/products/Кофры/Узор/Квадрат/бежевый.png",
            },
            {
               id: 2,
               img: "/products/Кофры/type-icon/квадрат.png",
               type: "square-straight",
               text: "Квадрат прямой",
               base: "/products/Кофры/Материал/Квадрат прямой/бежевый.png",
               border: "/products/Кофры/Кантик/бежевый.png",
               line: "/products/Кофры/Узор/Квадрат прямой/бежевый.png",
            },
            {
               id: 3,
               img: "/products/Кофры/type-icon/линия.png",
               type: "band",
               text: "Полоса",
               base: "/products/Кофры/Материал/Полоса/бежевый.png",
               border: "/products/Кофры/Кантик/бежевый.png",
               line: "/products/Кофры/Узор/Полоса/бежевый.png",
            },
            {
               id: 4,
               img: "/products/Кофры/type-icon/ромб.png",
               type: "romb",
               text: "Ромб",
               base: "/products/Кофры/Материал/Ромб/бежевый.png",
               border: "/products/Кофры/Кантик/бежевый.png",
               line: "/products/Кофры/Узор/Ромб/бежевый.png",
            },
         ],
      },
   ],
   options: [
      {
         stepText: "2 шаг: выберите цвет материала",
         type: "square",
         category: "base",
         content: [
            {
               id: 1,
               category: "base",
               color: "beige",
               Text: "бежевый",
               imgUrl: "/products/Кофры/Материал/Квадрат/бежевый.png",
            },
            {
               id: 2,
               category: "base",
               color: "burgundy",
               Text: "бордовый",
               imgUrl: "/products/Кофры/Материал/Квадрат/бордовый.png",
            },
            {
               id: 3,
               category: "base",
               color: "brown",
               Text: "коричневый",
               imgUrl: "/products/Кофры/Материал/Квадрат/коричневый.png",
            },
            {
               id: 4,
               category: "base",
               color: "red",
               Text: "красный",
               imgUrl: "/products/Кофры/Материал/Квадрат/красный.png",
            },
            {
               id: 5,
               category: "base",
               color: "gray",
               Text: "серый",
               imgUrl: "/products/Кофры/Материал/Квадрат/серый.png",
            },
            {
               id: 6,
               category: "base",
               color: "blue",
               Text: "синий",
               imgUrl: "/products/Кофры/Материал/Квадрат/синий.png",
            },
            {
               id: 7,
               category: "base",
               color: "black",
               Text: "черный",
               imgUrl: "/products/Кофры/Материал/Квадрат/черный.png",
            },
            {
               id: 8,
               category: "base",
               color: "orange",
               Text: "оранжевый",
               imgUrl: "/products/Кофры/Материал/Квадрат/оранжевый.png",
            },
            {
               id: 9,
               category: "base",
               color: "indigo",
               Text: "индиго",
               imgUrl: "/products/Кофры/Материал/Квадрат/индиго.png",
            },
            {
               id: 10,
               category: "base",
               color: "white",
               Text: "белый",
               imgUrl: "/products/Кофры/Материал/Квадрат/белый.png",
            },
         ],
      },
      {
         stepText: "2 шаг: выберите цвет материала",
         type: "square-straight",
         category: "base",
         content: [
            {
               id: 1,
               category: "base",
               color: "beige",
               Text: "бежевый",
               imgUrl: "/products/Кофры/Материал/Квадрат прямой/бежевый.png",
            },
            {
               id: 2,
               category: "base",
               color: "burgundy",
               Text: "бордовый",
               imgUrl: "/products/Кофры/Материал/Квадрат прямой/бордовый.png",
            },
            {
               id: 3,
               category: "base",
               color: "brown",
               Text: "коричневый",
               imgUrl: "/products/Кофры/Материал/Квадрат прямой/коричневый.png",
            },
            {
               id: 4,
               category: "base",
               color: "red",
               Text: "красный",
               imgUrl: "/products/Кофры/Материал/Квадрат прямой/красный.png",
            },
            {
               id: 5,
               category: "base",
               color: "gray",
               Text: "серый",
               imgUrl: "/products/Кофры/Материал/Квадрат прямой/серый.png",
            },
            {
               id: 6,
               category: "base",
               color: "blue",
               Text: "синий",
               imgUrl: "/products/Кофры/Материал/Квадрат прямой/синий.png",
            },
            {
               id: 7,
               category: "base",
               color: "black",
               Text: "черный",
               imgUrl: "/products/Кофры/Материал/Квадрат прямой/черный.png",
            },
            {
               id: 8,
               category: "base",
               color: "orange",
               Text: "оранжевый",
               imgUrl: "/products/Кофры/Материал/Квадрат прямой/оранжевый.png",
            },
            {
               id: 9,
               category: "base",
               color: "indigo",
               Text: "индиго",
               imgUrl: "/products/Кофры/Материал/Квадрат прямой/индиго.png",
            },
            {
               id: 10,
               category: "base",
               color: "white",
               Text: "белый",
               imgUrl: "/products/Кофры/Материал/Квадрат прямой/белый.png",
            },
         ],
      },
      {
         stepText: "2 шаг: выберите цвет материала",
         type: "band",
         category: "base",
         content: [
            {
               id: 1,
               category: "base",
               color: "beige",
               Text: "бежевый",
               imgUrl: "/products/Кофры/Материал/Полоса/бежевый.png",
            },
            {
               id: 2,
               category: "base",
               color: "burgundy",
               Text: "бордовый",
               imgUrl: "/products/Кофры/Материал/Полоса/бордовый.png",
            },
            {
               id: 3,
               category: "base",
               color: "brown",
               Text: "коричневый",
               imgUrl: "/products/Кофры/Материал/Полоса/коричневый.png",
            },
            {
               id: 4,
               category: "base",
               color: "red",
               Text: "красный",
               imgUrl: "/products/Кофры/Материал/Полоса/красный.png",
            },
            {
               id: 5,
               category: "base",
               color: "gray",
               Text: "серый",
               imgUrl: "/products/Кофры/Материал/Полоса/серый.png",
            },
            {
               id: 6,
               category: "base",
               color: "blue",
               Text: "синий",
               imgUrl: "/products/Кофры/Материал/Полоса/синий.png",
            },
            {
               id: 7,
               category: "base",
               color: "black",
               Text: "черный",
               imgUrl: "/products/Кофры/Материал/Полоса/черный.png",
            },
            {
               id: 8,
               category: "base",
               color: "orange",
               Text: "оранжевый",
               imgUrl: "/products/Кофры/Материал/Полоса/оранжевый.png",
            },
            {
               id: 9,
               category: "base",
               color: "indigo",
               Text: "индиго",
               imgUrl: "/products/Кофры/Материал/Полоса/индиго.png",
            },
            {
               id: 10,
               category: "base",
               color: "white",
               Text: "белый",
               imgUrl: "/products/Кофры/Материал/Полоса/белый.png",
            },
         ],
      },
      {
         stepText: "2 шаг: выберите цвет материала",
         type: "romb",
         category: "base",
         content: [
            {
               id: 1,
               category: "base",
               color: "beige",
               Text: "бежевый",
               imgUrl: "/products/Кофры/Материал/Ромб/бежевый.png",
            },
            {
               id: 2,
               category: "base",
               color: "burgundy",
               Text: "бордовый",
               imgUrl: "/products/Кофры/Материал/Ромб/бордовый.png",
            },
            {
               id: 3,
               category: "base",
               color: "brown",
               Text: "коричневый",
               imgUrl: "/products/Кофры/Материал/Ромб/коричневый.png",
            },
            {
               id: 4,
               category: "base",
               color: "red",
               Text: "красный",
               imgUrl: "/products/Кофры/Материал/Ромб/красный.png",
            },
            {
               id: 5,
               category: "base",
               color: "gray",
               Text: "серый",
               imgUrl: "/products/Кофры/Материал/Ромб/серый.png",
            },
            {
               id: 6,
               category: "base",
               color: "blue",
               Text: "синий",
               imgUrl: "/products/Кофры/Материал/Ромб/синий.png",
            },
            {
               id: 7,
               category: "base",
               color: "black",
               Text: "черный",
               imgUrl: "/products/Кофры/Материал/Ромб/черный.png",
            },
            {
               id: 8,
               category: "base",
               color: "orange",
               Text: "оранжевый",
               imgUrl: "/products/Кофры/Материал/Ромб/оранжевый.png",
            },
            {
               id: 9,
               category: "base",
               color: "indigo",
               Text: "индиго",
               imgUrl: "/products/Кофры/Материал/Ромб/индиго.png",
            },
            {
               id: 10,
               category: "base",
               color: "white",
               Text: "белый",
               imgUrl: "/products/Кофры/Материал/Ромб/белый.png",
            },
         ],
      },
      {
         stepText: "3 шаг: выберите цвет окантовки",
         content: [
            {
               id: 1,
               category: "border",
               color: "beige",
               Text: "бежевый",
               imgUrl: "/products/Кофры/Кантик/бежевый.png",
            },
            {
               id: 2,
               category: "border",
               color: "burgundy",
               Text: "бордовый",
               imgUrl: "/products/Кофры/Кантик/бордовый.png",
            },
            {
               id: 3,
               category: "border",
               color: "brown",
               Text: "коричневый",
               imgUrl: "/products/Кофры/Кантик/коричневый.png",
            },
            {
               id: 4,
               category: "border",
               color: "red",
               Text: "красный",
               imgUrl: "/products/Кофры/Кантик/красный.png",
            },
            {
               id: 5,
               category: "border",
               color: "gray",
               Text: "серый",
               imgUrl: "/products/Кофры/Кантик/серый.png",
            },
            {
               id: 6,
               category: "border",
               color: "blue",
               Text: "синий",
               imgUrl: "/products/Кофры/Кантик/синий.png",
            },
            {
               id: 7,
               category: "border",
               color: "black",
               Text: "черный",
               imgUrl: "/products/Кофры/Кантик/черный.png",
            },
            {
               id: 8,
               category: "border",
               color: "green",
               Text: "зеленый",
               imgUrl: "/products/Кофры/Кантик/зеленый.png",
            },
            {
               id: 9,
               category: "border",
               color: "indigo",
               Text: "индиго",
               imgUrl: "/products/Кофры/Кантик/индиго.png",
            },
            {
               id: 10,
               category: "border",
               color: "light-blue",
               Text: "голубой",
               imgUrl: "/products/Кофры/Кантик/голубой.png",
            },
            {
               id: 11,
               category: "border",
               color: "silver",
               Text: "серебристый",
               imgUrl: "/products/Кофры/Кантик/серебристый.png",
            },
         ],
      },
      {
         stepText: "4 шаг: выберите цвет нити",
         type: "square",
         content: [
            {
               id: 1,
               category: "line",
               color: "beige",
               Text: "бежевый",
               imgUrl: "/products/Кофры/Узор/Квадрат/бежевый.png",
            },
            {
               id: 2,
               category: "line",
               color: "burgundy",
               Text: "бордовый",
               imgUrl: "/products/Кофры/Узор/Квадрат/бордовый.png",
            },
            {
               id: 3,
               category: "line",
               color: "brown",
               Text: "коричневый",
               imgUrl: "/products/Кофры/Узор/Квадрат/коричневый.png",
            },
            {
               id: 4,
               category: "line",
               color: "red",
               Text: "красный",
               imgUrl: "/products/Кофры/Узор/Квадрат/красный.png",
            },
            {
               id: 5,
               category: "line",
               color: "gray",
               Text: "серый",
               imgUrl: "/products/Кофры/Узор/Квадрат/серый.png",
            },
            {
               id: 6,
               category: "line",
               color: "blue",
               Text: "синий",
               imgUrl: "/products//Кофры/Узор/Квадрат/синий.png",
            },
            {
               id: 7,
               category: "line",
               color: "black",
               Text: "черный",
               imgUrl: "/products/Кофры/Узор/Квадрат/черный.png",
            },
            {
               id: 8,
               category: "line",
               color: "orange",
               Text: "оранжевый",
               imgUrl: "/products/Кофры/Узор/Квадрат/оранжевый.png",
            },
            {
               id: 9,
               category: "line",
               color: "indigo",
               Text: "индиго",
               imgUrl: "/products/Кофры/Узор/Квадрат/индиго.png",
            },
            {
               id: 10,
               category: "line",
               color: "white",
               Text: "белый",
               imgUrl: "/products/Кофры/Узор/Квадрат/белый.png",
            },
         ],
      },
      {
         stepText: "4 шаг: выберите цвет нити",
         type: "square-straight",
         content: [
            {
               id: 1,
               category: "line",
               color: "beige",
               Text: "бежевый",
               imgUrl: "/products/Кофры/Узор/Квадрат прямой/бежевый.png",
            },
            {
               id: 2,
               category: "line",
               color: "burgundy",
               Text: "бордовый",
               imgUrl: "/products/Кофры/Узор/Квадрат прямой/бордовый.png",
            },
            {
               id: 3,
               category: "line",
               color: "brown",
               Text: "коричневый",
               imgUrl: "/products/Кофры/Узор/Квадрат прямой/коричневый.png",
            },
            {
               id: 4,
               category: "line",
               color: "red",
               Text: "красный",
               imgUrl: "/products/Кофры/Узор/Квадрат прямой/красный.png",
            },
            {
               id: 5,
               category: "line",
               color: "gray",
               Text: "серый",
               imgUrl: "/products/Кофры/Узор/Квадрат прямой/серый.png",
            },
            {
               id: 6,
               category: "line",
               color: "blue",
               Text: "синий",
               imgUrl: "/products//Кофры/Узор/Квадрат прямой/синий.png",
            },
            {
               id: 7,
               category: "line",
               color: "black",
               Text: "черный",
               imgUrl: "/products/Кофры/Узор/Квадрат прямой/черный.png",
            },
            {
               id: 8,
               category: "line",
               color: "orange",
               Text: "оранжевый",
               imgUrl: "/products/Кофры/Узор/Квадрат прямой/оранжевый.png",
            },
            {
               id: 9,
               category: "line",
               color: "indigo",
               Text: "индиго",
               imgUrl: "/products/Кофры/Узор/Квадрат прямой/индиго.png",
            },
            {
               id: 10,
               category: "line",
               color: "white",
               Text: "белый",
               imgUrl: "/products/Кофры/Узор/Квадрат прямой/белый.png",
            },
         ],
      },
      {
         stepText: "4 шаг: выберите цвет нити",
         type: "band",
         content: [
            {
               id: 1,
               category: "line",
               color: "beige",
               Text: "бежевый",
               imgUrl: "/products/Кофры/Узор/Полоса/бежевый.png",
            },
            {
               id: 2,
               category: "line",
               color: "burgundy",
               Text: "бордовый",
               imgUrl: "/products/Кофры/Узор/Полоса/бордовый.png",
            },
            {
               id: 3,
               category: "line",
               color: "brown",
               Text: "коричневый",
               imgUrl: "/products/Кофры/Узор/Полоса/коричневый.png",
            },
            {
               id: 4,
               category: "line",
               color: "red",
               Text: "красный",
               imgUrl: "/products/Кофры/Узор/Полоса/красный.png",
            },
            {
               id: 5,
               category: "line",
               color: "gray",
               Text: "серый",
               imgUrl: "/products/Кофры/Узор/Полоса/серый.png",
            },
            {
               id: 6,
               category: "line",
               color: "blue",
               Text: "синий",
               imgUrl: "/products//Кофры/Узор/Полоса/синий.png",
            },
            {
               id: 7,
               category: "line",
               color: "black",
               Text: "черный",
               imgUrl: "/products/Кофры/Узор/Полоса/черный.png",
            },
            {
               id: 8,
               category: "line",
               color: "orange",
               Text: "оранжевый",
               imgUrl: "/products/Кофры/Узор/Полоса/оранжевый.png",
            },
            {
               id: 9,
               category: "line",
               color: "indigo",
               Text: "индиго",
               imgUrl: "/products/Кофры/Узор/Полоса/индиго.png",
            },
            {
               id: 10,
               category: "line",
               color: "white",
               Text: "белый",
               imgUrl: "/products/Кофры/Узор/Полоса/белый.png",
            },
         ],
      },
      {
         stepText: "4 шаг: выберите цвет нити",
         type: "romb",
         content: [
            {
               id: 1,
               category: "line",
               color: "beige",
               Text: "бежевый",
               imgUrl: "/products/Кофры/Узор/Ромб/бежевый.png",
            },
            {
               id: 2,
               category: "line",
               color: "burgundy",
               Text: "бордовый",
               imgUrl: "/products/Кофры/Узор/Ромб/бордовый.png",
            },
            {
               id: 3,
               category: "line",
               color: "brown",
               Text: "коричневый",
               imgUrl: "/products/Кофры/Узор/Ромб/коричневый.png",
            },
            {
               id: 4,
               category: "line",
               color: "red",
               Text: "красный",
               imgUrl: "/products/Кофры/Узор/Ромб/красный.png",
            },
            {
               id: 5,
               category: "line",
               color: "gray",
               Text: "серый",
               imgUrl: "/products/Кофры/Узор/Ромб/серый.png",
            },
            {
               id: 6,
               category: "line",
               color: "blue",
               Text: "синий",
               imgUrl: "/products//Кофры/Узор/Ромб/синий.png",
            },
            {
               id: 7,
               category: "line",
               color: "black",
               Text: "черный",
               imgUrl: "/products/Кофры/Узор/Ромб/черный.png",
            },
            {
               id: 8,
               category: "line",
               color: "orange",
               Text: "оранжевый",
               imgUrl: "/products/Кофры/Узор/Ромб/оранжевый.png",
            },
            {
               id: 9,
               category: "line",
               color: "indigo",
               Text: "индиго",
               imgUrl: "/products/Кофры/Узор/Ромб/индиго.png",
            },
            {
               id: 10,
               category: "line",
               color: "white",
               Text: "белый",
               imgUrl: "/products/Кофры/Узор/Ромб/белый.png",
            },
         ],
      },
   ],
   sets: [
      {
         id: 1,
         text: "70x30x30",
         price: 2650,
      },
      {
         id: 2,
         text: "50x30x30",
         price: 1500,
      },
      {
         id: 3,
         text: "30x30x30",
         price: 1000,
      },
   ],
};
