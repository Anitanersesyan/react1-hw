"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import SocialMediaItem from "./SocialMediaItem";

const socialMediaLinks = [
  {
    url: "https://linkedin.com",
    title: "LinkedIn",
    icon: "/social_media/icons8-linkedin-50.png",
  },
  {
    url: "https://facebook.com",
    title: "Facebook",
    icon: "/social_media/icons8-facebook-logo-50.png",
  },
  {
    url: "https://instagram.com",
    title: "Instagram",
    icon: "/social_media/icons8-instagram-logo-50.png",
  },
  {
    url: "https://tiktok.com",
    title: "Tiktok",
    icon: "/social_media/icons8-tiktok-50.png",
  },
  {
    url: "https://google.com",
    title: "On the streets at night",
    icon: "/social_media/icons8-google-50.png",
  },
  {
    url: "https://google.com",
    title: "On the streets at night",
    icon: "/social_media/icons8-google-50.png",
  },
];

export const Footer = () => {
  const path = usePathname().split("?")[0];

  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul className={styles.footerList}>
          <li>
            <Link href="/about_us">About Us</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link href="/nasa_collaboration">NASA Collaboration</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMediaLinks.map(({ url, title, icon }) => (
            <SocialMediaItem key={title} url={url} title={title} icon={icon} />
          ))}
        </ul>
      </div>
    </footer>
  );
};
