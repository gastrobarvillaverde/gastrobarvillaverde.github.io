const menuData = [
  {
    name: "Desayunos",
    eyebrow: "Para empezar el día",
    groups: [{ items: [
      ["Huevo Frito (2 u)", "Fried eggs", "1,000 MN"],
      ["Huevo Hervido (2 u)", "Boiled eggs", "500 MN"],
      ["Omelet", "Omelette", "550 MN"],
      ["Tostadas con Mantequilla", "Toast with butter", "350 MN"],
      ["Leche Caliente", "Hot milk", "200 MN"],
      ["Té Caliente", "Hot tea", "150 MN"],
      ["Té Frío", "Iced tea", "180 MN"]
    ] }]
  },
  {
    name: "Entrantes",
    eyebrow: "Para abrir el apetito",
    groups: [
      { name: "Tostones", items: [
        ["Tostones Naturales", "Plain tostones", "500 MN"],
        ["Tostones Rellenos con Vegetales", "Stuffed with vegetables", "900 MN"],
        ["Tostones Rellenos con Jamón", "Stuffed with ham", "1,000 MN"],
        ["Tostones Rellenos con Pollo", "Stuffed with chicken", "1,000 MN"],
        ["Tostones Rellenos con Queso Blanco", "Stuffed with white cheese", "1,000 MN"],
        ["Tostones Rellenos con Cerdo", "Stuffed with pork", "1,100 MN"],
        ["Tostones Rellenos con Ropa Vieja", "Stuffed with shredded beef", "1,200 MN"],
        ["Tostones Rellenos con Jamón y Queso Blanco", "Stuffed with ham and white cheese", "1,200 MN"],
        ["Tostones Rellenos con Atún", "Stuffed with tuna", "1,300 MN"],
        ["Tostones Rellenos con Queso Gouda", "Stuffed with gouda cheese", "1,500 MN"],
        ["Tostones Rellenos con Jamón y Queso Gouda", "Stuffed with ham and gouda cheese", "1,800 MN"]
      ] },
      { name: "Aperitivos & Sopas", items: [
        ["Ensalada de Estación", "Seasonal salad", "500 MN"],
        ["Ensalada Fría", null, "1,200 MN"],
        ["Chicharritas", "Plantain chips", "500 MN"],
        ["Maripositas Chinas", "Chinese butterflies", "500 MN"],
        ["Brusquetas", "Bruschettas", "1,000 MN"],
        ["Croquetas", "Croquettes", "600 MN"],
        ["Frituras de Malanga", "Malanga fritters", "800 MN"],
        ["Crema Aurora", "Aurora cream soup", "750 MN"],
        ["Crema de Queso Blanco", "Cream of white cheese soup", "750 MN"],
        ["Crema de Queso Gouda", "Cream of gouda cheese soup", "850 MN"],
        ["Crema de Queso Blanco y Jamón", "White cheese and ham soup", "1,100 MN"],
        ["Crema de Queso Gouda y Jamón", "Gouda cheese and ham soup", "1,500 MN"],
        ["Sopa de Pollo", "Chicken soup", "1,200 MN"]
      ] },
      { name: "Para Compartir", items: [
        ["Dados de Queso Blanco", "Cubes of white cheese", "400 MN"],
        ["Dados de Jamón", "Cubes of ham", "800 MN"],
        ["Dados de Jamón y Queso Blanco", "Ham and white cheese cubes", "800 MN"],
        ["Dados de Queso Gouda", "Cubes of gouda cheese", "1,800 MN"],
        ["Dados de Jamón y Queso Gouda", "Ham and gouda cheese cubes", "2,000 MN"],
        ["Picadera Arguelles", "Croquettes, bruschettas and tostones stuffed with ham and cheese", "3,000 MN", true],
        ["Coctel de Camarón", "Shrimp cocktail", "2,200 MN"],
        ["Coctel de Pescado", "Fish cocktail", "1,000 MN"],
        ["Picadera Villaverde", "Croquettes, bruschettas, plantain chips and ham and cheese cubes", "3,500 MN"]
      ] }
    ]
  },
  {
    name: "Tacos & Kebab",
    eyebrow: "Tradición con sabor propio",
    groups: [
      { name: "Tacos", items: [
        ["Tacos de Vegetales", "Vegetable tacos", "1,600 MN"],
        ["Tacos de Pollo", "Chicken tacos", "1,900 MN"],
        ["Tacos Mixtos Cerdo y Pollo", "Mixed pork and chicken tacos", "2,250 MN"],
        ["Tacos de Cerdo", "Pork tacos", "2,500 MN"],
        ["Tacos Jamón y Queso Blanco", "Ham and white cheese", "2,500 MN"],
        ["Tacos Mixtos Cerdo y Ropa Vieja", "Mixed pork and shredded beef tacos", "2,500 MN"],
        ["Tacos de Ropa Vieja", "Shredded beef tacos", "2,800 MN"],
        ["Tacos Jamón y Queso Gouda", "Ham and gouda cheese", "2,800 MN"],
        ["Tacos Mixtos Cerdo y Camarón", "Mixed pork and shrimp tacos", "3,000 MN"],
        ["Tacos de Camarón", "Shrimp tacos", "3,500 MN"]
      ] },
      { name: "Kebab", items: [
        ["Kebab de Pollo", "Chicken kebab", "2,100 MN"],
        ["Kebab de Cerdo", "Pork kebab", "2,200 MN"],
        ["Kebab Mixto Cerdo y Pollo", "Mixed pork and chicken kebab", "2,250 MN"],
        ["Kebab Mixto Cerdo y Ropa Vieja", "Mixed pork and shredded beef kebab", "2,500 MN"],
        ["Kebab de Ropa Vieja", "Shredded beef kebab", "2,800 MN"],
        ["Kebab de Atún", "Tuna kebab", "2,800 MN"],
        ["Kebab de Camarón", "Shrimp kebab", "3,600 MN"]
      ] }
    ]
  },
  {
    name: "Pescados & Mariscos",
    eyebrow: "Del mar a la piedra",
    groups: [
      { name: "Pescados", items: [
        ["Eperlán", null, "3,500 MN"],
        ["Pescado a la Piedra", null, "3,000 MN"],
        ["Filete de Pescado Grillé", null, "2,800 MN"],
        ["Filete de Pescado al Ajillo", null, "3,000 MN"],
        ["Pescado Asado", "Roasted fish", "3,500 MN"],
        ["Pescado Frito", "Fried fish", "3,700 MN"]
      ] },
      { name: "Mariscos", items: [
        ["Camarón al Ajillo", "Shrimp in garlic sauce", "5,500 MN"],
        ["Camarón Grillado", "Grilled shrimp", "5,800 MN"],
        ["Camarón Empanado", "Breaded shrimp", "6,500 MN"],
        ["Enchilado de Camarón", "Shrimp stew", "6,500 MN"]
      ] },
      { name: "Especialidades", featured: true, items: [
        ["Filete de Pescado al Camarón", "Fish filet with shrimp", "5,200 MN"],
        ["Pescado al Camarón a la Piedra", "Stone-grilled fish with shrimp", "5,400 MN"],
        ["Paella Villaverde", "Villaverde paella", "5,800 MN"]
      ] }
    ]
  },
  {
    name: "Carnes",
    eyebrow: "A la brasa y a la piedra",
    groups: [
      { name: "Pollo", items: [
        ["Pollo a la Piedra", "Stone grilled chicken", "2,700 MN"],
        ["Bistec de Pollo Grillé", "Grilled chicken steak", "2,500 MN"],
        ["Fricasé de Pollo", "Chicken fricassee", "2,500 MN"],
        ["Pollo al Ajillo", "Chicken in garlic sauce", "2,500 MN"],
        ["Fajitas de Pollo con Vegetales", "Chicken strips with vegetables", "3,000 MN"],
        ["Bistec de Pechuga Grillé", "Grilled chicken breast steak", "3,000 MN"],
        ["Fajitas de Pollo Empanadas", "Breaded chicken strips", "3,500 MN"],
        ["Pollo a la Cordon Bleu", "Chicken cordon bleu (chicken breast)", "4,800 MN"]
      ] },
      { name: "Cerdo", featured: true, items: [
        ["Fajitas de Cerdo Empanadas", "Breaded pork strips", "3,500 MN"],
        ["Fricase de Cerdo a la Piedra", "Stone grilled pork fricasse", "3,900 MN"],
        ["Cerdo Grillé", "Grilled pork", "2,800 MN"],
        ["Fajitas de Cerdo Grillé", "Grilled pork strips", "2,800 MN"],
        ["Cerdo al Ajillo", "Pork in garlic sauce", "3,000 MN"],
        ["Bistec de Cerdo Encebollado", "Pork steak with onions", "3,000 MN"],
        ["Cerdo a la Piedra", "Stone grilled pork", "3,500 MN"],
        ["Masa de Cerdo", "Pork chunks", "3,500 MN"],
        ["Bistec de Cerdo Empanado", "Breaded pork steak", "3,500 MN"],
        ["Fricase de Cerdo", "Pork fricasse", "3,800 MN"],
        ["Fajitas de Cerdo con Vegetales", "Pork strips with vegetables", "3,900 MN"],
        ["Masa de Cerdo 460g", "Pork chunks, 460 g", "5,000 MN"],
        ["Bistec Uruguayo", "Palomilla steak", "5,500 MN"]
      ] },
      { name: "Res", items: [
        ["Ropa Vieja (Ración)", "Shredded beef", "3,800 MN"]
      ] }
    ]
  },
  {
    name: "Arroz",
    eyebrow: "Para acompañar y compartir",
    groups: [{ items: [
      ["Ración de Arroz Blanco", "Portion of white rice", "250 MN"],
      ["Ración de Arroz Moro", "Portion of black beans and rice", "500 MN"],
      ["Arroz con Vegetales", "Rice with vegetables", "1,000 MN"],
      ["Arroz Frito", "Fried rice", "2,500 MN"],
      ["Arroz Frito Especial", "Special fried rice", "3,500 MN"]
    ] }]
  },
  {
    name: "Pastas",
    eyebrow: "Cocina italiana con alma cubana",
    groups: [
      { name: "Spaguetti", items: [
        ["Spaguetti Napolitano Queso Blanco", "With regular cheese", "1,600 MN"],
        ["Spaguetti Napolitano Queso Gouda", "With gouda cheese", "2,300 MN"],
        ["Spaguetti Sin Queso", null, "1,300 MN"],
        ["Spaguetti con Ropa Vieja", "With shredded beef", "2,300 MN"],
        ["Spaguetti Bolognesa", "Spaghetti bolognese", "3,800 MN"],
        ["Spaguetti Carbonara", "Spaghetti carbonara", "3,200 MN"]
      ] },
      { name: "Macarrones", items: [
        ["Macarrones Napolitano Queso Blanco", "With regular cheese", "750 MN"],
        ["Macarrones Napolitano Queso Gouda", "With gouda cheese", "1,200 MN"],
        ["Macarrones con Ropa Vieja", "With shredded beef", "1,800 MN"],
        ["Macarrones Bolognesa", "Macaroni bolognese", "1,950 MN"],
        ["Macarrones Carbonara", "Macaroni carbonara", "2,200 MN"]
      ] },
      { name: "Especialidades", items: [
        ["Lasaña", "Lasagna", "1,700 MN"],
        ["Lasaña Boloñesa (c/Carne, Jamón y Queso)", null, "2,800 MN"],
        ["Pastas al Horno", "Baked pasta", "2,500 MN"]
      ] },
      { name: "Agregados", items: [
        ["Ag. Pimiento", null, "300 MN"],
        ["Ag. Col", null, "200 MN"],
        ["Ag. Cerdo", null, "800 MN"],
        ["Ag. Queso Blanco", null, "300 MN"],
        ["Ag. Pollo", null, "400 MN"],
        ["Ag. Jamón", null, "400 MN"],
        ["Ag. Queso Gouda", null, "500 MN"],
        ["Ag. Cebolla", null, "200 MN"],
        ["Ag. Piña", null, "300 MN"],
        ["Ag. Atún", null, "550 MN"],
        ["Ag. Tomate", null, "250 MN"],
        ["Ag. Vegetales", null, "300 MN"],
        ["Mantequilla", null, "300 MN"],
        ["Ag. Bacon", null, "500 MN"],
        ["Ag. Mayonesa", null, "300 MN"]
      ] }
    ]
  },
  {
    name: "Pizzas",
    eyebrow: "Horno de piedra",
    groups: [{ items: [
      ["Pizza Sin Queso", "Cheeseless pizza", "600 MN"],
      ["Pizza Queso Blanco 30cm", "Regular cheese pizza", "1,000 MN"],
      ["Pizza Queso Gouda 30cm", "Gouda cheese pizza", "1,500 MN"],
      ["Pizza Hawaiana", "Hawaiian pizza", "2,200 MN"]
    ] }]
  },
  {
    name: "Sandwiches",
    eyebrow: "Pan artesanal",
    groups: [{ items: [
      ["Sandwich de Queso Blanco", "White cheese sandwich", "800 MN"],
      ["Sandwich de Jamón", "Ham sandwich", "950 MN"],
      ["Sandwich Jamón y Queso Blanco", "Ham and white cheese", "1,100 MN"],
      ["Sandwich de Huevo", "Egg sandwich", "1,100 MN"],
      ["Sandwich de Atún", "Tuna sandwich", "1,200 MN"],
      ["Sandwich de Queso Gouda", "Gouda cheese sandwich", "1,400 MN"],
      ["Sandwich Jamón y Queso Gouda", "Ham and gouda cheese", "1,800 MN"]
    ] }]
  },
  {
    name: "Hamburguesas",
    eyebrow: "A la parrilla",
    groups: [{ items: [
      ["Hamburguesa Clásica", "Classic burger", "850 MN"],
      ["Hamburguesa con Queso Blanco", "Cheese burger", "950 MN"],
      ["Hamburguesa con Jamón", "Burger with ham", "1,000 MN"],
      ["Hamburguesa Jamón y Queso Blanco", "Ham and cheese burger", "1,400 MN"],
      ["Hamburguesa con Queso Gouda", "Gouda cheese burger", "1,600 MN"],
      ["Hamburguesa a Caballo", "Burger topped with fried egg", "1,800 MN"],
      ["Hamburguesa Jamón y Queso Gouda", "Ham and gouda burger", "1,900 MN"],
      ["Hamburguesa Super", "Super burger", "2,000 MN"]
    ] }]
  },
  {
    name: "Postres",
    eyebrow: "El cierre perfecto",
    groups: [{ items: [
      ["Tres Gracias", "Three scoops", "600 MN"],
      ["Flan", "Caramel custard", "650 MN"],
      ["Ensalada de Helado", "Ice cream salad", "1,000 MN"],
      ["Helado (Dos Gracias)", null, "400 MN"],
      ["Dulce Fino Brownie", "Fine brownie dessert", "800 MN"],
      ["Copa Lolita", "Lolita sundae", "1,200 MN", true],
      ["Brownie con Helado", "Brownie with ice cream", "1,200 MN"]
    ] }]
  },
  {
    name: "Empaques",
    eyebrow: "Para llevar",
    groups: [{ items: [
      ["Retráctil", "Plastic wrap", "40 MN"],
      ["Domicilio", "Additional cost depending on the address", "250 MN"],
      ["Empaque Tapper", "Take-away container", "250 MN"],
      ["Jabas de Nylon", null, "20 MN"],
      ["Vaso Desechable", null, "40 MN"],
      ["Vaso Desechable Café", null, "10 MN"],
      ["Vaso Tapa Domo", null, "250 MN"],
      ["Absorbente para Batidos", null, "50 MN"]
    ] }]
  },
  {
    name: "Bebidas",
    eyebrow: "Para acompañar",
    groups: [
      { name: "Jugos y Batidos", items: [
        ["Jugo del Día", null, "350 MN"],
        ["Suero de Helado de Chocolate", null, "700 MN"],
        ["Suero de Helado de Guayaba", null, "600 MN"],
        ["Suero de Helado Vainilla", null, "600 MN"],
        ["Suero de Helado Naranja Piña", null, "600 MN"],
        ["Batido de Mango", null, "600 MN"],
        ["Limonada Villaverde", null, "350 MN"],
        ["Limonada Frappe", null, "300 MN"],
        ["Piña Colada s/ Alcohol", null, "700 MN"],
        ["Suero de Helado de Piña Glacé", null, "700 MN"],
        ["Suero de Helado Mamey", null, "700 MN"]
      ] },
      { name: "Cafés", items: [
        ["Café Mulato", null, "280 MN"],
        ["Café Expresso", null, "180 MN"],
        ["Café Cortado", null, "230 MN"],
        ["Café Capuchino", null, "290 MN"],
        ["Frapuchino", null, "600 MN"],
        ["Café Americano", null, "190 MN"],
        ["Café Híbrido", null, "390 MN"]
      ] },
      { name: "Bebidas del Glacial", items: [
        ["Agua Tónica", null, "750 MN"],
        ["Agua Natural 500ml", null, "500 MN"],
        ["Refresco Piña", null, "950 MN"],
        ["Cerveza Nacional Cristal", null, "1,250 MN"],
        ["Energizante Shaka", null, "900 MN"],
        ["Cerveza Importada Windmill", null, "1,100 MN"],
        ["Cerveza Importada Presidente", null, "1,200 MN"],
        ["Refresco Naranja", null, "950 MN"],
        ["Refresco Limón", null, "950 MN"]
      ] }
    ]
  },
  {
    name: "Coctelería",
    eyebrow: "Nuestra barra",
    groups: [
      { name: "Cócteles", items: [
        ["Vodka", null, "300 MN"],
        ["Wisky Reserve 7 Años", null, "300 MN"],
        ["Shot de Tequila", null, "500 MN"],
        ["Copa de Licor (60 ml)", null, "500 MN"],
        ["Caipirísima", null, "1,200 MN"],
        ["Caipiroska", null, "750 MN"],
        ["Crema Licor", null, "900 MN"],
        ["Cuba Libre", null, "1,200 MN"],
        ["Cubata", null, "1,500 MN"],
        ["Espresso Martini", null, "900 MN"],
        ["Preparado de Michelada (c/Tajín)", null, "450 MN"],
        ["Preparado de Chelada", null, "250 MN"],
        ["Preparado de Michelada (c/Sal)", null, "350 MN"],
        ["San Francisco Coctel", null, "500 MN"],
        ["Mojito", null, "850 MN"],
        ["Daiquirí", null, "900 MN"],
        ["Ron Collins", null, "1,200 MN"],
        ["Piña Colada con Alcohol", null, "1,500 MN"],
        ["Piña Colada sin Alcohol", null, "550 MN"]
      ] },
      { name: "Rones", items: [
        ["Añejo Blanco", null, "550 MN"],
        ["Pacto Navío", null, "1,000 MN"],
        ["Havana Club 3 Años", null, "650 MN"],
        ["Havana Club 7 Años", null, "1,000 MN"],
        ["Havana Club Especial", null, "750 MN"]
      ] }
    ]
  },
  {
    name: "Vinos",
    eyebrow: "Selección de importación",
    groups: [
      { name: "Vino Tinto", items: [
        ["Copa de Campo de Borja", null, "1,500 MN"],
        ["Botella de Campo Borja", null, "7,000 MN"]
      ] },
      { name: "Vino Blanco", items: [
        ["Copa de Entre Ríos", null, "900 MN"],
        ["Copa de La Viña", null, "800 MN"]
      ] }
    ]
  }
];

const nav = document.querySelector("#category-nav");
const title = document.querySelector("#category-title");
const eyebrow = document.querySelector("#category-eyebrow");
const groupsContainer = document.querySelector("#menu-groups");

function renderCategory(index) {
  const category = menuData[index];
  title.textContent = category.name;
  eyebrow.textContent = category.eyebrow;
  groupsContainer.innerHTML = category.groups.map((group) => {
    const groupStar = group.featured ? '<span class="menu-item__featured" aria-label="Recomendado"> ★</span>' : "";
    const heading = group.name ? `<h3 class="menu-group__title">${group.name}${groupStar}</h3>` : "";
    const items = group.items.map(([name, translation, price, featured]) => {
      const modifier = translation ? "" : " menu-item--description";
      const subtitle = translation ? `<p class="menu-item__translation">${translation}</p>` : "";
      const star = featured ? '<span class="menu-item__featured" aria-label="Recomendado"> ★</span>' : "";
      return `<article class="menu-item${modifier}">
        <div class="menu-item__details">
          <h4 class="menu-item__name">${name}${star}</h4>
          ${subtitle}
        </div>
        <span class="menu-item__price">${price || ""}</span>
      </article>`;
    }).join("");
    return `<section class="menu-group">${heading}${items}</section>`;
  }).join("");

  nav.querySelectorAll(".category-button").forEach((button, buttonIndex) => {
    const isCurrent = buttonIndex === index;
    button.setAttribute("aria-pressed", String(isCurrent));
    if (isCurrent) {
      nav.scrollTo({
        left: Math.max(0, button.offsetLeft - (nav.clientWidth - button.clientWidth) / 2),
        behavior: "smooth"
      });
    }
  });
}

nav.innerHTML = menuData.map((category, index) =>
  `<button class="category-button" type="button" aria-pressed="false" data-category="${index}">${category.name}</button>`
).join("");

nav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) renderCategory(Number(button.dataset.category));
});

renderCategory(0);