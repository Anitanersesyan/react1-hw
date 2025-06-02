// TASK - React 1 week 1
// Create the "Our Crew section"
// Use the descriptions provided in /app/about_us/README.md
// Use the pictures from /public/crew
// Some inspiration ideas found in /data/inspiration_about_us

import styles from "./OurCrew.module.css";

const crewMembers = [
  {
    name: "Captain Sarah Vega",
    role: "Mission Leader",
    image: "/crew/image-anousheh-ansari.png",
    description:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
  },
  {
    name: "Dr. Leo Redding",
    role: "Chief Astrophysicist",
    image: "/crew/image-douglas-hurley.png",
    description:
      "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
  },
  {
    name: "Chief Engineer Hana Lee",
    role: "Aerospace Engineer",
    image: "/crew/image-anousheh-ansari.webp",
    description:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
  },
  {
    name: "Mission Specialist Alex Santos",
    role: "Journey Coordinator",
    image: "/crew/image-victor-glover.webp",
    description:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
  },
  {
    name: "Crew Member Maya Patel",
    role: "Customer Experience Specialist",
    image: "/crew/image-anousheh-ansari.png",
    description:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
  },
];

const OurCrew = () => {
  return (
    <div className={styles.container}>
      <p className={styles.intro}>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        space explorers, engineers, and visionaries united by a common goal: to
        make space travel accessible and exciting for all.
      </p>
      <div className={styles.grid}>
        {crewMembers.map((member) => (
          <div key={member.name} className={styles.member}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.image}
            />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.description}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCrew;
