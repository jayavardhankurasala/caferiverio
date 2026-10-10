export type MenuCategoryKey =
  | "all"
  | "coffee-fumes"
  | "coffee-chillz"
  | "beverage-fumes"
  | "beverage-chillz"
  | "pizzas"
  | "pastas"
  | "bites-burgers";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryKey;
  categoryLabel: string;
  description: string;
  price: number;
  priceVariants?: { label: string; price: number }[];
  isVeg: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
  image?: string;
  tags?: string[];
  complimentary?: string;
}

export interface MenuCategoryMeta {
  key: MenuCategoryKey;
  label: string;
  tagline: string;
  iconName: string;
}

export const menuCategories: MenuCategoryMeta[] = [
  {
    key: "all",
    label: "Full Menu",
    tagline: "Explore our full gourmet culinary and craft beverage collection",
    iconName: "Utensils",
  },
  {
    key: "coffee-fumes",
    label: "Coffee Fumes",
    tagline: "Freshly roasted, artisan hot coffees served with complimentary cookies",
    iconName: "Coffee",
  },
  {
    key: "coffee-chillz",
    label: "Coffee Chillz",
    tagline: "Rich frappes, cold brews, and creamy iced indulgences",
    iconName: "IceCream",
  },
  {
    key: "beverage-fumes",
    label: "Artisanal Teas",
    tagline: "Exotic herbal infusions, Blue Butterfly, and floral tisanes",
    iconName: "CupSoda",
  },
  {
    key: "beverage-chillz",
    label: "Mocktails & Chillz",
    tagline: "Signature Riverio mojitos, fruit refreshers, and healthy smoothies",
    iconName: "Wine",
  },
  {
    key: "pizzas",
    label: "Stone-Fired Pizzas",
    tagline: "Melted mozzarella, farm-fresh toppings, and crispy crusts",
    iconName: "Pizza",
  },
  {
    key: "pastas",
    label: "Italian Pastas",
    tagline: "Creamy Alfredos, zesty pestos, and artisanal penne & lasagna",
    iconName: "CookingPot",
  },
  {
    key: "bites-burgers",
    label: "Burgers, Sandwiches & Fries",
    tagline: "Grilled gourmet breads, club sandwiches, peri-peri fries & burgers",
    iconName: "Sandwich",
  },
];

export const verifiedMenuItems: MenuItem[] = [
  // COFFEE FUMES (HOT)
  {
    id: "cf-cappuccino",
    name: "Cappuccino",
    category: "coffee-fumes",
    categoryLabel: "Coffee Fumes",
    description: "Espresso with velvety steamed milk foam, dusted with fine cocoa. Served with complimentary artisan cookie.",
    price: 299,
    priceVariants: [
      { label: "Classic", price: 299 },
      { label: "Magnum", price: 349 },
    ],
    isVeg: true,
    isFeatured: true,
    image: "/images/signature-cappuccino-cookie.png",
    complimentary: "Complimentary cookie or toast",
    tags: ["Signature Brew", "Fresh Beans", "Cookie Included"],
  },
  {
    id: "cf-espresso",
    name: "Espresso",
    category: "coffee-fumes",
    categoryLabel: "Coffee Fumes",
    description: "Bold, intense shot extracted on our Italian dual-boiler espresso machine with thick crema.",
    price: 149,
    priceVariants: [
      { label: "Classic Shot", price: 149 },
      { label: "Magnum Shot", price: 199 },
    ],
    isVeg: true,
    image: "/images/espresso-machine-pull.png",
    tags: ["Bold Crema", "100% Arabica"],
  },
  {
    id: "cf-latte",
    name: "Artisan Latte",
    category: "coffee-fumes",
    categoryLabel: "Coffee Fumes",
    description: "Silky micro-foam poured over a rich double espresso with delicate barista heart latte art.",
    price: 299,
    isVeg: true,
    isFeatured: true,
    image: "/images/latte-art-bokeh.png",
    tags: ["Latte Art", "Smooth & Velvety"],
  },
  {
    id: "cf-mocha",
    name: "Café Mocha",
    category: "coffee-fumes",
    categoryLabel: "Coffee Fumes",
    description: "Rich dark chocolate ganache harmonized with espresso and steamed whole milk.",
    price: 349,
    isVeg: true,
    tags: ["Belgian Cocoa", "Comforting"],
  },
  {
    id: "cf-proticcino",
    name: "Proticcino",
    category: "coffee-fumes",
    categoryLabel: "Coffee Fumes",
    description: "High-protein fitness blend formulated with espresso and fortified wholesome milk.",
    price: 299,
    priceVariants: [
      { label: "Classic", price: 299 },
      { label: "Magnum", price: 449 },
    ],
    isVeg: true,
    tags: ["High Protein", "Fitness Fuel"],
  },
  {
    id: "cf-hot-chocolate",
    name: "Hot Chocolate Bourbon",
    category: "coffee-fumes",
    categoryLabel: "Coffee Fumes",
    description: "Thick, luxurious hot chocolate infused with warm Madagascar bourbon vanilla notes.",
    price: 299,
    priceVariants: [
      { label: "Classic Bourbon", price: 299 },
      { label: "Kit Kat", price: 349 },
      { label: "Nutella", price: 349 },
    ],
    isVeg: true,
    tags: ["Decadent", "Non-Coffee"],
  },
  {
    id: "cf-old-origin",
    name: "Old Origin Coffee",
    category: "coffee-fumes",
    categoryLabel: "Coffee Fumes",
    description: "Traditional heritage roast highlighting authentic regional Indian estate notes.",
    price: 199,
    priceVariants: [
      { label: "Classic", price: 199 },
      { label: "Magnum", price: 259 },
    ],
    isVeg: true,
    tags: ["Heritage Roast"],
  },

  // COFFEE CHILLZ (COLD COFFEE)
  {
    id: "cc-frappuccino-royale",
    name: "Frappuccino Royale",
    category: "coffee-chillz",
    categoryLabel: "Coffee Chillz",
    description: "Frosty blended espresso laced with whipped dairy cloud and dark drizzle.",
    price: 449,
    isVeg: true,
    isFeatured: true,
    tags: ["Chilled Favourite", "Thick Shake"],
  },
  {
    id: "cc-frappes",
    name: "Signature Frappes",
    category: "coffee-chillz",
    categoryLabel: "Coffee Chillz",
    description: "Thick blended cold coffee shake with your choice of premium flavour infusion.",
    price: 349,
    priceVariants: [
      { label: "Classic", price: 349 },
      { label: "Brownie Blast", price: 349 },
      { label: "Chocolate Silk", price: 349 },
      { label: "Roasted Hazelnut", price: 349 },
      { label: "Nutella Bliss", price: 349 },
    ],
    isVeg: true,
    tags: ["Flavoured", "Sweet Tooth"],
  },
  {
    id: "cc-iced-coffee-magnum",
    name: "Iced Coffee with Cookies",
    category: "coffee-chillz",
    categoryLabel: "Coffee Chillz",
    description: "Cold espresso over crystal clear ice, finished with crumbed cookies and cream.",
    price: 349,
    isVeg: true,
    tags: ["Crunchy Cookies", "Refreshing"],
  },
  {
    id: "cc-iced-coffee-icecream",
    name: "Royale Iced Coffee with Ice Cream",
    category: "coffee-chillz",
    categoryLabel: "Coffee Chillz",
    description: "Espresso poured over rich vanilla bean gelato and chilled milk.",
    price: 349,
    isVeg: true,
    tags: ["Affogato Inspired"],
  },
  {
    id: "cc-iced-latte",
    name: "Iced Latte",
    category: "coffee-chillz",
    categoryLabel: "Coffee Chillz",
    description: "Chilled milk topped with fresh espresso layers over ice.",
    price: 299,
    isVeg: true,
    tags: ["Smooth", "Zero Sugar Option"],
  },
  {
    id: "cc-iced-chocolate-royale",
    name: "Iced Chocolate Royale",
    category: "coffee-chillz",
    categoryLabel: "Coffee Chillz",
    description: "Rich melted chocolate whipped cold with creamy dairy and chocolate shavings.",
    price: 549,
    isVeg: true,
    tags: ["Ultra Premium"],
  },

  // BEVERAGE FUMES (HERBAL & CLEAR TEAS)
  {
    id: "bf-blue-butterfly",
    name: "Blue Butterfly Pea Herbal Tea",
    category: "beverage-fumes",
    categoryLabel: "Artisanal Teas",
    description: "Vibrant royal blue tea brewed from butterfly pea blossoms with antioxidant properties.",
    price: 149,
    isVeg: true,
    tags: ["Floral Tisane", "Antioxidant Rich", "Caffeine Free"],
  },
  {
    id: "bf-rose-lemongrass",
    name: "Rose & Lemongrass Infusion",
    category: "beverage-fumes",
    categoryLabel: "Artisanal Teas",
    description: "Soothing brew of sundried rose petals, zesty organic lemongrass, and holy basil.",
    price: 149,
    priceVariants: [
      { label: "Lemon Grass", price: 149 },
      { label: "Rose", price: 149 },
      { label: "Chamomile", price: 149 },
    ],
    isVeg: true,
    tags: ["Calming", "Zero Sugar"],
  },
  {
    id: "bf-clear-tea-selection",
    name: "Clear Heritage Tea Collection",
    category: "beverage-fumes",
    categoryLabel: "Artisanal Teas",
    description: "Choice of single-estate brew: Natural, Jasmine, Tulsi, Green Tea, or Peppermint.",
    price: 129,
    isVeg: true,
    tags: ["Pure Leaf", "Digestive"],
  },

  // BEVERAGE CHILLZ (MOJITOS, ICED TEAS & SMOOTHIES)
  {
    id: "bc-riverio-mojito",
    name: "Riverio Signature Mojito",
    category: "beverage-chillz",
    categoryLabel: "Mocktails & Chillz",
    description: "Our signature riverfront cooler crafted with crushed mint, fresh lime wedges, botanical syrup, and bubbling soda.",
    price: 219,
    isVeg: true,
    isFeatured: true,
    image: "/images/craft-mojito-glass.png",
    tags: ["House Signature", "Riverside Favorite"],
  },
  {
    id: "bc-strawberry-cooler",
    name: "Strawberry Mojito",
    category: "beverage-chillz",
    categoryLabel: "Mocktails & Chillz",
    description: "Ruby red refresher muddled with mountain strawberries, fresh mint leaves, and effervescent fizz.",
    price: 219,
    isVeg: true,
    isFeatured: true,
    image: "/images/pizza-twin-coolers.png",
    tags: ["Ruby Glow", "Fruity Refresh"],
  },
  {
    id: "bc-sparkling-blue-mojito",
    name: "Sparkling Blue Lagoon Mojito",
    category: "beverage-chillz",
    categoryLabel: "Mocktails & Chillz",
    description: "Electrifying blue citrus cooler reflecting the Godavari river waters, finished with lime and mint.",
    price: 219,
    isVeg: true,
    isFeatured: true,
    image: "/images/pizza-twin-coolers.png",
    tags: ["Godavari Blue", "Electric Citrus"],
  },
  {
    id: "bc-fruit-mojitos",
    name: "Exotic Fruit Mojito Range",
    category: "beverage-chillz",
    categoryLabel: "Mocktails & Chillz",
    description: "Choice of freshly muddled flavours: Green Apple, Passion Fruit, Cranberry, Watermelon, or Lavender.",
    price: 219,
    isVeg: true,
    tags: ["Muddled Fresh", "Chilled Fizz"],
  },
  {
    id: "bc-berrycado-smoothie",
    name: "Berrycado Super Smoothie",
    category: "beverage-chillz",
    categoryLabel: "Mocktails & Chillz",
    description: "Rich, velvety blend of ripe avocado, mixed wild berries, and Greek yogurt.",
    price: 399,
    isVeg: true,
    tags: ["Superfood", "Avocado & Berries"],
  },
  {
    id: "bc-iced-tea-craft",
    name: "Craft Iced Tea Selection",
    category: "beverage-chillz",
    categoryLabel: "Mocktails & Chillz",
    description: "Brewed black and fruit tea served cold over ice: Lemon, Cranberry, Peach, Mint, or Hibiscus.",
    price: 199,
    isVeg: true,
    tags: ["Cold Brewed", "Fruity"],
  },

  // PIZZAS
  {
    id: "pz-chicken-supreme",
    name: "Riverio Double Chicken Pizza",
    category: "pizzas",
    categoryLabel: "Stone-Fired Pizzas",
    description: "Loaded with grilled herb chicken chunks, spiced bell peppers, black olives, jalapeños, and bubbling golden mozzarella.",
    price: 349,
    priceVariants: [
      { label: "Chicken Pizza", price: 249 },
      { label: "Double Cheese Chicken", price: 299 },
      { label: "Double Chicken Feast", price: 349 },
    ],
    isVeg: false,
    isFeatured: true,
    image: "/images/pizza-twin-coolers.png",
    tags: ["Chef Special", "100% Real Cheese", "Crisp Crust"],
  },
  {
    id: "pz-paneer-tikka",
    name: "Paneer Tikka Pizza",
    category: "pizzas",
    categoryLabel: "Stone-Fired Pizzas",
    description: "Smoky tandoori marinated paneer cubes, roasted bell peppers, red onions, and melted mozzarella on aromatic marinara.",
    price: 249,
    priceVariants: [
      { label: "Classic Tikka", price: 249 },
      { label: "Double Cheese Paneer", price: 299 },
    ],
    isVeg: true,
    isFeatured: true,
    image: "/images/dining-spread-pizza-pasta.png",
    tags: ["Tandoori Paneer", "Crispy Base"],
  },
  {
    id: "pz-margherita-mexican",
    name: "Mexican Fiesta Veg Pizza",
    category: "pizzas",
    categoryLabel: "Stone-Fired Pizzas",
    description: "Crispy thin crust topped with sweet corn kernels, sliced jalapeños, spicy herb sauce, and cheddar mozzarella blend.",
    price: 229,
    priceVariants: [
      { label: "Margherita Classic", price: 229 },
      { label: "Mexican Fiesta", price: 229 },
      { label: "Double Cheese Burst", price: 299 },
    ],
    isVeg: true,
    tags: ["Classic Margherita", "Veggie Loaded"],
  },

  // PASTAS
  {
    id: "ps-alfredo-chicken",
    name: "Truffle Cream Alfredo Pasta (Chicken)",
    category: "pastas",
    categoryLabel: "Italian Pastas",
    description: "Silky garlic parmesan cream sauce tossed with tender grilled chicken breast strips, sautéed mushrooms, and fresh basil.",
    price: 349,
    isVeg: false,
    isFeatured: true,
    image: "/images/pizza-pasta-feast.png",
    tags: ["Rich Alfredo", "Garlic Butter Toast"],
  },
  {
    id: "ps-penne-alfredo-veg",
    name: "Classic Alfredo Pasta (Veg)",
    category: "pastas",
    categoryLabel: "Italian Pastas",
    description: "Al dente penne bathed in slow-simmered butter, cream, roasted garlic, and grated parmesan cheese. Served with toasted garlic bread.",
    price: 299,
    isVeg: true,
    image: "/images/dining-spread-pizza-pasta.png",
    tags: ["Velvety Sauce", "Garlic Bread Included"],
  },
  {
    id: "ps-spaghetti-lasagna",
    name: "Signature Lasagna Pasta",
    category: "pastas",
    categoryLabel: "Italian Pastas",
    description: "Layered pasta sheets with herb marinara sauce, béchamel, and gratinated cheese crust.",
    price: 299,
    priceVariants: [
      { label: "Vegetarian Lasagna", price: 299 },
      { label: "Chicken Lasagna", price: 349 },
    ],
    isVeg: true,
    tags: ["Baked Golden", "Comfort Food"],
  },

  // BURGERS, SANDWICHES & BITES
  {
    id: "bg-chicken-tikka-burger",
    name: "Crispy Chicken Tikka Burger",
    category: "bites-burgers",
    categoryLabel: "Burgers, Sandwiches & Fries",
    description: "Toasted brioche bun stacked with spicy marinated chicken fillet, crisp iceberg lettuce, pickled onions, and house mayo.",
    price: 299,
    isVeg: false,
    isFeatured: true,
    tags: ["Brioche Bun", "Juicy Patty"],
  },
  {
    id: "bg-paneer-burger",
    name: "Grilled Paneer Tikka Burger",
    category: "bites-burgers",
    categoryLabel: "Burgers, Sandwiches & Fries",
    description: "Spiced paneer steak grilled golden, layered with mint mayo, tomato slices, and cheddar cheese.",
    price: 249,
    isVeg: true,
    tags: ["Hearty", "Golden Grilled"],
  },
  {
    id: "sw-grilled-cheese-club",
    name: "Riverio Club Sandwich (Veg / Non-Veg)",
    category: "bites-burgers",
    categoryLabel: "Burgers, Sandwiches & Fries",
    description: "Triple-layer toasted sandwich stuffed with cheese, garden vegetables, spicy spread, and seasoned fillings.",
    price: 199,
    priceVariants: [
      { label: "Classic Veg Club", price: 199 },
      { label: "Grilled Cheese & Corn", price: 249 },
      { label: "Grilled Paneer", price: 299 },
      { label: "Grilled Chicken Club", price: 299 },
    ],
    isVeg: true,
    tags: ["Triple Layer", "Crunchy Crust"],
  },
  {
    id: "bt-cheese-garlic-bread",
    name: "Artisan Cheese Garlic Bread",
    category: "bites-burgers",
    categoryLabel: "Burgers, Sandwiches & Fries",
    description: "Freshly baked baguette slices generously coated with herb garlic butter and bubbling molten mozzarella.",
    price: 239,
    priceVariants: [
      { label: "Classic Garlic Bread", price: 199 },
      { label: "Cheese Garlic Bread", price: 239 },
    ],
    isVeg: true,
    tags: ["Molten Mozzarella", "Garlic Butter"],
  },
  {
    id: "bt-peri-peri-fries",
    name: "Crispy Peri-Peri French Fries",
    category: "bites-burgers",
    categoryLabel: "Burgers, Sandwiches & Fries",
    description: "Golden shoestring potatoes fried to crisp perfection and tossed with fiery African peri-peri dust.",
    price: 239,
    priceVariants: [
      { label: "Salted Classic", price: 199 },
      { label: "Peri Peri Spiced", price: 239 },
    ],
    isVeg: true,
    tags: ["Crispy", "Dip Served"],
  },
];
