import { existLinks } from "../../../../utilities";
import React from 'react'
import styles from "./elementsDescription.module.scss";

function ElementsDescription({ list = [], links = [] }) {
  const getLinks = (position) => {
    return existLinks(position, links);
  };

  return (
    <ul>
      {list.map((cont, index) => {
        const { length, linksFilt } = getLinks(index);
        return (
          <li key={index} className={styles.list}>
            {cont}{" "}
            {length > 0 &&
              linksFilt.map((link, i) => (
                <React.Fragment key={link.routerLink}>
                  <a className={styles.link} href={link.routerLink}>
                    {link.label}
                  </a>
                  {length - 2 === i && "y"}
                </React.Fragment>
              ))}
          </li>
        );
      })}
    </ul>
  );
}
export default ElementsDescription;
