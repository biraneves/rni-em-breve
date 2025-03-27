import Head from "next/head";
import { useEffect, useState } from "react";

const GeneralHead = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const metadataUrl = 'http://localhost:3000/api/v1/metadata';

  useEffect(() => {
    const fetchMetadata = async() => {
      try {
        const response = await fetch(metadataUrl);
        const data = await response.json();
  
        setTitle(data.title);
        setDescription(data.description);
        console.log(data.title, data.description);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMetadata();
  }, []);

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || '...'} />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <title>{title || '...'}</title>
    </Head>
  );
};

export default GeneralHead;