"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetWishlistItem from "@/components/destination/PlanetWishlistItem";
import { planets } from "@/components/destination/Planets";

const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);

  let numberOfPlanets = 0;

  numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name) => {
    const isSelected = selectedPlanets.includes(name);
    if (isSelected) {
      onAddPlanet(selectedPlanets.filter((planet) => planet !== name));
    } else {
      onAddPlanet([...selectedPlanets, name]);
    }
  };

  const removeFromWishlist = (name) => {
    onAddPlanet(selectedPlanets.filter((planet) => planet !== name));
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
          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          <AddWishlistItem />
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.map((planetName) => {
              const planet = planets.find((p) => p.name === planetName);
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
