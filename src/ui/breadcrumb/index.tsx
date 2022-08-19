import { useEffect, useState } from 'react';

import styles from './styles.module.css';

import { Link } from '@/components';

import { SvgBreadCrumb } from '../icons';

export const BreadCrumpData = ['Sverige', 'Västra Götland', 'Göteborg'];

function Item({ title, index, length }: any) {
  const lastItem = index + 1 === length;

  return (
    <>
      <li className={styles.breadCrump}>
        <Link href='/'>{title}</Link>
      </li>

      {!lastItem && (
        <>
          <div className={styles.spacer_8} />
          <SvgBreadCrumb />
          <div className={styles.spacer_8} />
        </>
      )}
    </>
  );
}

export const BreadCrumb = ({ name, data }: any) => {
  const [list, setList] = useState(data);
  useEffect(() => {
    if (name) setList((oldArray: any) => [...oldArray, name]);
    else setList(data);
  }, [data, name]);

  return (
    <ol className={styles.breadCrump_list}>
      {list.map((bcItem: any, index: any, { length }: any) => (
        <Item
          key={bcItem}
          title={bcItem}
          name={name}
          index={index}
          length={length}
        />
      ))}
    </ol>
  );
};
