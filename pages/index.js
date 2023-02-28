import annievillalbaLogo from "/public/images/logo-annievillalba.png";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>Annie Villalba Wedding & Event Planner - Home</title>
        <meta
          name="description"
          content="Diseñamos experiencias únicas y memorables para bodas destino y eventos en Colombia. Con sede en Cartagena, creamos experiencias personalizadas e inolvidables."
        />
        <link
          rel="canonical"
          href="https://annievillalba.com/"
          key="canonical"
        />
        <meta property="og:image" content={annievillalbaLogo}></meta>
      </Head>
      <div
        className={styles["home-container"]}
        style={{
          transition: "opacity 3s",
          opacity: `${isVisible ? 1 : 0}`,
        }}
      >
        <Link href="/about" className={styles["home-image-container"]}>
          <Image
            className={`${styles["home-logo-annievillalba"]} ${styles.pulsing}`}
            src={annievillalbaLogo}
            alt="Logo de Annie Villalba Wedding Planner"
          />
        </Link>
      </div>
    </>
  );
};

export default Home;
