import styles from "./OurPartners.module.css";

const OurPartners = () => {
  const partners = [
    { name: "Alphabet", logo: "/business_partners/alphabet-logo.png" },
    { name: "Amazon", logo: "/business_partners/amazon_logo.png" },
    { name: "CBS", logo: "/business_partners/CBC_Logo_White.png" },
    { name: "Microsoft", logo: "/business_partners/Microsoft-Logo-white.png" },
    { name: "Nyu", logo: "/business_partners/nyu-logo.png" },
    { name: "Queens", logo: "/business_partners/QueensLogo_white.png" },
    { name: "Samsung", logo: "/business_partners/samsung-logo.png" },
    { name: "Sodexo", logo: "/business_partners/sodexo-logo.png" },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.intro}>
        We collaborate with some of the most respected names in the space and
        technology industries.
      </p>
      <div className={styles.grid}>
        {partners.map((partner) => (
          <div key={partner.name} className={styles.logoCard}>
            <img
              src={partner.logo}
              alt={partner.name}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
