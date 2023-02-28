import annievillalbaLogo from "../public/images/logo-annievillalba.png";
import meetAnnie from "../public/images/Tezza-8508.webp";
import styles from "../styles/Meet.module.css";
import { useState, useEffect } from "react";
import { content } from "../utils/content";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useContext } from "react";
import { StateContext } from "../utils/state";
import LangBtn from "@/components/langBtn";

const Meet = () => {
  const { isEN, setIsEN } = useContext(StateContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>Annie Villalba Wedding & Event Planner - Conoce a Annie</title>
        <meta
          name="description"
          content="Annie Villalba ofrece experiencia y liderazgo en la planificación de bodas y eventos internacionales. Con certificaciones y doble titulación, confía en Annie para materializar tus sueños."
        />
        <link
          rel="canonical"
          href="https://annievillalba.com/meet-annie"
          key="canonical"
        />
        <meta property="og-image" content={annievillalbaLogo} />
      </Head>
      <div
        className={styles["super-container"]}
        style={{
          transition: "opacity 3s",
          opacity: `${isVisible ? 1 : 0}`,
        }}
      >
        <LangBtn />
        <main className={styles["main-container"]}>
          <div className={styles["meet-container"]}>
            <header className={styles["header-container"]}>
              <div className={styles["meet-logo-container"]}>
                <Link href="/about">
                  <Image
                    className={styles["meet-logo"]}
                    src={annievillalbaLogo}
                    alt="AnnieVillalbaPlanner"
                  />
                </Link>
              </div>

              <h1 className={styles.title}>
                {isEN ? content.meet.title.en : content.meet.title.es}
              </h1>
            </header>
            <div className={styles["meet-image-container-m"]}>
              <Image
                className={styles["meet-image-m"]}
                src={meetAnnie}
                alt="Annie Villalba"
              />
            </div>
            {isEN
              ? content.meet.en.map((para, index) => {
                  return <p key={index}>{para}</p>;
                })
              : content.meet.es.map((para, index) => {
                  return <p key={index}>{para}</p>;
                })}
            <footer className={styles["meet-footer"]}>
              <span id="sign" className={styles.sign}>
                Annie Villalba D.
              </span>
              <span>{isEN ? content.meet.sign.en : content.meet.sign.es}</span>
            </footer>
          </div>

          <div className={styles["meet-image-container"]}>
            <Image
              className={styles["meet-image"]}
              src={meetAnnie}
              alt="Annie Villalba"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Meet;
