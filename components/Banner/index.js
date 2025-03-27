import { useEffect, useState } from "react";
import styles from './banner.module.scss';

const Banner = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const metadataUrl = 'http://localhost:3000/api/v1/metadata';

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(metadataUrl);
        const data = await response.json();
    
        setTitle(data.title);
        setDescription(data.description);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMetadata();
  }, []);

  return (
    <section className={styles.banner} id="banner">
      <div className="container">
        <div className={styles.banner__content}>
          <h1 className={styles.banner__content__title}>{title || '...'}</h1>
          <div className={styles['banner__content__hor-ruler']}></div>
          <p className={styles.banner__content__subtitle}>{description || '...'}</p>
        </div>
        <div className={styles.banner__overlay}></div>
      </div>
    </section>
  );
};

export default Banner;