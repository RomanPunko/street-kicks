import { NextResponse } from "next/server";

const products = [
  {
    id: "1",
    name: "Nike Air Force 1 Low White '07 315122-111",
    image:
      "https://sneakers.com.ua/image/cache/catalog/image/catalog/image/catalog/image/nike/air-force/mid/fksu0027/25502.webp",
    price: 300,
    gender: ["чоловікам", "жінкам"],
    type: "Кросівки",
  },
  {
    id: "2",
    name: "New Balance 9060 Rain Cloud U9060GRY",
    image:
      "https://sneakers.com.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/newbalance/9060/fks56975/24321-623x627.webp",
    price: 400,
    gender: ["чоловікам", "жінкам"],
    type: "Кросівки",
  },
  {
    id: "3",
    name: "New Balance 530 Grey MR530SGD",
    image:
      "https://sneakers.com.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/newbalance/530/fks55919/25508-623x627.webp",
    price: 250,
    gender: ["чоловікам", "жінкам"],
    type: "Кросівки",
  },
  {
    id: "4",
    name: "Vans Knu Skool Black White VN0009QC6BT",
    image:
      "https://sneakers.com.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/catalog/vans/knuskool/zb-2357170/46239-623x627.webp",
    price: 290,
    gender: ["чоловікам", "жінкам"],
    type: "Кеди",
  },
  {
    id: "5",
    name: "Adidas Handball Spezial x Sporty & Rich Pink Gum IH2610",
    image:
      "https://sneakers.com.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/catalog/adidas/handball/zb-2358876/61191-623x627.webp",
    price: 330,
    gender: ["жінкам",],
    type: "Кеди",
  },
  {
    id: "6",
    name: "UGG Classic Mini Dipper Chestnut",
    image:
      "https://sneakers.com.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/catalog/ugg/classicmini/classic/zb-2355203/38018-623x627.webp",
    price: 500,
    gender: ["жінкам",],
    type: "Черевики",
  },
  {
    id: "7",
    name: "Crocs Bayaband Sandal Kids Charcoal",
    image:
      "https://sneakers.com.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/crocs/zb-2353226/26002-623x627.webp",
    price: 20,
    gender: ["дітям",],
    type: "Шльопанці",
  },
  {
    id: "8",
    name: "Crocs Classic Kids I AM Unicorn White",
    image:
      "https://sneakers.com.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/crocs/zb-2353221/25968-623x627.webp",
    price: 25,
    gender: ["дітям",],
    type: "Шльопанці",
  },
  {
    id: "9",
    name: "Puma Leadcat 2.0 White 384139-02",
    image:
      "https://sneakers.com.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/catalog/puma/zb-2354376/34358-623x627.webp",
    price: 40,
    gender: ["чоловікам", "жінкам"],
    type: "Шльопанці",
  },
  {
    id: "10",
    name: "Dr. Martens 1460 Smooth Leather Lace Up Boots 11822006",
    image:
      "https://sneakers.com.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/catalog/product///dr-martens/1460/zd-3715/309911-623x627.webp",
    price: 450,
    gender: ["чоловікам", "жінкам"],
    type: "Черевики",
  },
];

export async function GET() {
  return NextResponse.json(products);
}
