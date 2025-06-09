/* TASK - React 1 week 2 */
/* Create a <NavItem> component, which accepts the following:  */
/* title, link, isActive  */

"use client";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Navbar.module.css";

const NavItem = ({ title, link, isActive, index }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>{String(index).padStart(2, "0")}</b> {title}
      </Link>
    </li>
  );
};

export default NavItem;
