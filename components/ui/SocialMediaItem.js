/* TASK - React 1 week 2 */
/* Create a <SocialMediaItem /> component and replace all of the list items! */
/* it should accept the following props */
/* url, title, icon */
/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */

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
