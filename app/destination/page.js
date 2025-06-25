"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetWishlistItem from "@/components/destination/PlanetWishlistItem";
import { planets } from "@/components/destination/Planets";

const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [wishlist, setWishlist] = useState([]); 

  const numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name) => {
    const isSelected = selectedPlanets.includes(name);
    if (isSelected) {
      setSelectedPlanets(selectedPlanets.filter((planet) => planet !== name));
    } else {
      setSelectedPlanets([...selectedPlanets, name]);
    }
  };

  const removeFromWishlist = (name) => {
    setSelectedPlanets(selectedPlanets.filter((planet) => planet !== name));
    setWishlist(wishlist.filter((item) => item.name !== name));
  };

  const handleAddWishlistItem = (itemName) => {
    const newItem = {
      name: itemName,
      thumbnail: "/images/placeholder.png", 
    };
    setWishlist((prev) => [...prev, newItem]);
    setSelectedPlanets((prev) => [...prev, itemName]);
  };

  const PlanetCard = ({
    name,
    description,
    thumbnail,
    isSelected,
    onAddOrRemovePlanet,
    index,
  }) => {
    return (
      <div className={styles.planetCard}>
        <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
        <div className={styles.planetDescription}>
          <h2>
            {name.toUpperCase()} {isSelected ? "- SELECTED" : ""}
          </h2>
          <p>{description}</p>
        </div>
        <button
          className="roundButton"
          onClick={() => onAddOrRemovePlanet(name, index)}
        >
          {isSelected ? "REMOVE" : "ADD PLANET"}
        </button>
      </div>
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} planets in your wishlist</p>
          )}
          <b>List coming soon after lesson 3!</b>

          {/* AddWishlistItem now receives the handler prop */}
          <AddWishlistItem onAddWishlistItem={handleAddWishlistItem} />

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {[...selectedPlanets].map((planetName) => {
              const planet =
                planets.find((p) => p.name === planetName) ||
                wishlist.find((w) => w.name === planetName);

              return (
                <PlanetWishlistItem
                  key={planet.name}
                  name={planet.name}
                  thumbnail={planet.thumbnail}
                  onRemove={() => removeFromWishlist(planet.name)}
                />
              );
            })}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet, index) => {
            const isSelected = selectedPlanets.includes(planet.name);
            return (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={isSelected}
                onAddOrRemovePlanet={onAddOrRemovePlanet}
                index={index}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Destinations;

