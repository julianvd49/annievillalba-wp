import annievillalbaLogo from "../public/images/logo-annievillalba.png";
import igIcon from "../public/images/ig-icon.png";
import styles from "../styles/About.module.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import { content, formContent } from "../utils/content";
import Head from "next/head";
import { useContext } from "react";
import { StateContext } from "../utils/state";
import LangBtn from "..langbtn/components/langBtn";

const ContactForm = () => {
  const { isEN, setIsEN } = useContext(StateContext);

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("email", "");
    setValue("subject", "");
    setValue("message", "");

    setIsLoading(true);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/hello@annievillalba.com", {
        name: data.firstName + " " + data.lastName,
        email: data.email,
        subject: data.subject,
        message: data.message,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === "true") {
          setIsLoading(false);
          Swal.fire({
            icon: "success",
            text: isEN ? content.alert.en : content.alert.es,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Algo salio mal... :(",
          text: "Intente nuevamente",
        });
      });
  };

  return (
    <>
      <Head>
        <title>
          Annie Villalba Wedding & Event Planner - Diseño de bodas destino en
          Cartagena y Colombia.
        </title>
        <meta
          name="description"
          content="Diseñamos experiencias únicas y memorables para bodas destino y eventos en Colombia. Con sede en Cartagena, creamos experiencias personalizadas e inolvidables."
        />
        <link
          rel="canonical"
          href="https://annievillalba.com/about"
          key="canonical"
        />
        <meta property="og-image" content={annievillalbaLogo} />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
      </Head>
      <div
        id="bg"
        className={styles.bg}
        style={{
          transition: "opacity 3s",
          opacity: `${isVisible ? 1 : 0}`,
        }}
      >
        <LangBtn />

        <div className={styles.container}>
          <section>
            <header className={styles["logo-container"]}>
              <Image
                className={styles["logo-annievillalba"]}
                src={annievillalbaLogo}
                alt="AnnieVillalbaPlanner"
              />
            </header>
            <Link href="/meet-annie" className={styles["meet-link"]}>
              {isEN
                ? `Visit ${content.meet.title.en}`
                : `Visita ${content.meet.title.es}`}
            </Link>
            {isEN
              ? content.en.map((para, index) => {
                  return (
                    <p className={styles.text} key={index}>
                      {para}
                    </p>
                  );
                })
              : content.es.map((para, index) => {
                  return (
                    <p className={styles.text} key={index}>
                      {para}
                    </p>
                  );
                })}
          </section>

          <p className={styles.text}>
            {isEN
              ? "¡Visit our Instagram profile to learn more about our work!  "
              : "¡Visita nuestro perfil en Instagram para conocer nuestro trabajo!  "}
            <a
              href="https://www.instagram.com/annievillalbaplanner"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                id="ig"
                src={igIcon}
                alt="Instagram de Annie Villalba"
                width={17}
              />
            </a>
          </p>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles["contact-us"]}>
              {isEN ? formContent.en.contactUs : formContent.es.contactUs}
            </span>
            <div className={styles["flex-inputs"]}>
              <div
                className={`${styles["input-position"]} ${styles["margin-position"]}`}
              >
                <label className={styles.label}>
                  {isEN ? formContent.en.firstName : formContent.es.firstName} *
                </label>
                <input
                  className={styles.input}
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName && (
                  <p className={styles.text} role="alert">
                    {errors.firstName?.message}
                  </p>
                )}
              </div>

              <div
                className={`${styles["input-position"]} ${styles["margin-position"]}`}
              >
                <label className={styles.label}>
                  {isEN ? formContent.en.lastName : formContent.es.lastName}
                </label>
                <input className={styles.input} {...register("lastName")} />
              </div>
            </div>

            <div className={styles["flex-inputs"]}>
              <div
                className={`${styles["input-position"]} ${styles["margin-position"]}`}
              >
                <label className={styles.label}>
                  {isEN ? formContent.en.email : formContent.es.email} *
                </label>
                <input
                  className={styles.input}
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid Email",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className={styles.text} role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div
                className={`${styles["input-position"]} ${styles["margin-position"]}`}
              >
                <label className={styles.label}>
                  {isEN ? formContent.en.subject : formContent.es.subject}
                </label>
                <input className={styles.input} {...register("subject")} />
              </div>
            </div>

            <div className={styles["flex-inputs"]}>
              <div
                className={`${styles["msg-position"]} ${styles["margin-position"]}`}
              >
                <label className={styles.label}>
                  {isEN ? formContent.en.message : formContent.es.message} *
                </label>
                <textarea
                  className={styles.textarea}
                  {...register("message", {
                    required: "This field is required",
                  })}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className={styles.text} role="alert">
                    {errors.message?.message}
                  </p>
                )}
              </div>
            </div>

            <div
              className={`${styles["btn-position"]} ${styles["margin-position"]}`}
            >
              {isLoading ? (
                <div class="spinner-border" role="status">
                  <span class="sr-only"></span>
                </div>
              ) : (
                <button className={styles.submit}>
                  {isEN ? "Submit" : "Enviar"}
                </button>
              )}
            </div>
          </form>

          <footer className={styles["main-footer"]}>
            <span className={styles.phone}>
              {isEN ? "Phone +57 318 3776875" : "Tel +57 318 3776875"}
            </span>
            <a
              href="https://www.instagram.com/annievillalbaplanner"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={igIcon}
                alt="Instagram de Annie Villalba"
                width={17}
              />
            </a>
            <span className={styles.rights}>Developed by enzoTech</span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
