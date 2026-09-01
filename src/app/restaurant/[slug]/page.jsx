import MenuItem from "@/components/MenuItem/MenuItem";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import { restaurants } from "@/data/restaurants.json";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function RestaurantPage({ params }) {
  const { slug } = await params;
  const restaurant = restaurants.find((r) => r.slug === slug);

  if (!restaurant) {
    notFound();
  }

  const menuSections = [
    { title: "Entrées", items: restaurant.menu["entrées"] },
    { title: "Plats", items: restaurant.menu.plats },
    { title: "Desserts", items: restaurant.menu.desserts },
  ];

  return (
    <>
      <div className="heroImage">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="image"
        />
      </div>

      <div className="mainWrapper">
        <div className="contentWrapper">
          <RestaurantHeader name={restaurant.name} />

          <div className="menu">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3 className="sectionTitle">{section.title}</h3>
                {section.items.map((item, index) => (
                  <MenuItem key={item.nom} item={item} index={index} />
                ))}
              </div>
            ))}
          </div>

          <button className="orderButton">Commander</button>
        </div>
      </div>
    </>
  );
}
