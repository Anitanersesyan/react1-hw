"use client";

import Link from "next/link";
import styles from "./SocialMediaItem.module.css";

const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li className={styles.socialMediaItem}>
      <Link href={url} className={styles.socialMediaLink}>
        <img src={icon} alt={title} className={styles.socialMediaIcon} />
        <span className={styles.socialMediaText}>{title}</span>
      </Link>
    </li>
  );
};

export default SocialMediaItem;
