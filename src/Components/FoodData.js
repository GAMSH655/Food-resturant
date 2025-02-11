import Soup from "../../src/assets/Soup.png";
import Pasta from "../assets/Pasta.png";
import Pizza from "../assets/Pizza.png";
import Salad from "../assets/Salad.png";
import Break from "../assets/Break.png";
import Burger from "../assets/Burger.png";
import Order from "../assets/Order.png";
import Food from "../assets/Food.png";
import Orderfood from "../assets/Orderfood.png";

const foodData = [
  { foodImg: Soup, FoodName: "Soup", ResturantNums: "21 restaurants" },
  { foodImg: Pasta, FoodName: "Pasta", ResturantNums: "32 restaurants" },
  { foodImg: Pizza, FoodName: "Pizza", ResturantNums: "4 restaurants" },
  { foodImg: Salad, FoodName: "Salad", ResturantNums: "32 restaurants" },
  { foodImg: Break, FoodName: "Breakfast", ResturantNums: "36 restaurants" },
  { foodImg: Burger, FoodName: "Burger", ResturantNums: "40 restaurants" },
];

const FaqsContents = [
  { faqImg: Orderfood, faqTitle: "Place an Order", faqText: "Place order through our website or Mobile app" },
  { faqImg: Food, faqTitle: "Track Progress", faqText: "You can track your order status with delivery time" },
  { faqImg: Order, faqTitle: "Get Your Order", faqText: "Receive your order at lightning-fast speed" },
];

// ✅ Correctly export both variables
export { foodData, FaqsContents };
