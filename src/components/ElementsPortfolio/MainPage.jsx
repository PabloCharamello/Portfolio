import { motion, useScroll } from "framer-motion";
import LandingPageLottie from "./lottieComponents/landingPageLottie";
import ScrollDown from "./lottieComponents/ScrollDown";
import SoundBigScreen from "./lottieComponents/SoundBigScreen";
import WellcomeAll from "./lottieComponents/WellcomeAll";
import { DiGithubAlt } from "react-icons/di";

export function MainPage() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div>
        <LandingPageLottie />
        <WellcomeAll />
        <ScrollDown />
        <SoundBigScreen />
      </div>
      <div>
        <div className="paragraphs-titles">
          <motion.h2
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 0 }}
            className="paragraphs-titles"
          >
            <motion.h2
              initial={{ x: 700 }}
              animate={{ x: 0 }}
              exit={{ x: 0 }}
              className="paragraphs-titles"
            >
              Admiro a las personas que pueden diseñar e implementar.
            </motion.h2>
          </motion.h2>

          <motion.p
            className="paragraphs"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1 }}
          >
            Quiero convertirme en una persona que pueda implementar gráficos e
            interfaces de usuario que innoven y hacer que realmente funcionen.{" "}
            <br />
            El diseño y la implementación son la corriente principal de mi
            aprendizaje, y me gustaría encontrar una forma de vida en la que
            pueda manejar ambos junto a un gran equipo que lo de todo, con
            compromiso y respeto por los colaboradores y los proyectos que se
            nos pongan al frente.
          </motion.p>
        </div>
        <div className="paragraphs-titles">
          <motion.h2
            initial={{ x: 700 }}
            animate={{ x: 0 }}
            exit={{ x: 0 }}
            className="paragraphs-titles"
          >
            Me gustan las interacciónes animadas!
          </motion.h2>
          <p className="paragraphs">
            Me gustan las cosas interactivas y los gráficos en movimiento. Creo
            que la belleza de lo digital es que puedes tener un "diálogo con las
            cosas", donde el producto responde a tus acciones.
          </p>
        </div>

        <div className="my-projects-container">
          <h2 className="my-projects">Mis Proyectos</h2>
        </div>
        <div>
          <h2 className="project-titles">
            Casa Branca{" "}
            <span>
              <a
                href="https://github.com/PabloCharamello/Casa_Branca"
                target="_blank"
              >
                <DiGithubAlt size="3.5rem" className="github-icon" />
              </a>
            </span>
          </h2>
        </div>
        <div className="front-page-container">
          <a href="https://casa-branca.vercel.app/" target="_blank">
            <img
              src="/img/CasaBranca.jpg"
              alt="casa Branca page"
              className="front-pages"
            />
          </a>
        </div>
        <div>
          <h2 className="project-titles">
            Hack Design{" "}
            <span>
              <a
                href="https://github.com/PabloCharamello/Final-project-Ecommerce-Front-Team1"
                target="_blank"
              >
                <DiGithubAlt size="3.5rem" className="github-icon" />
              </a>
            </span>
          </h2>
        </div>
        <div className="front-page-container">
          <a href="https://hackdesign.vercel.app/" target="_blank">
            <img
              src="/img/HackDesign.jpg"
              alt="Hack Design page"
              className="front-pages"
            />
          </a>
        </div>
        <div>
          <h2 className="project-titles">
            Hack Flix{" "}
            <span>
              <a
                href="https://github.com/PabloCharamello/HackFlix"
                target="_blank"
              >
                <DiGithubAlt size="3.5rem" className="github-icon" />
              </a>
            </span>
          </h2>
        </div>
        <div className="front-page-container">
          <a href="https://hack-flix.vercel.app/" target="_blank">
            <img
              src="/img/HackFlix.jpg"
              alt="Hack Flix page"
              className="front-pages"
            />
          </a>
        </div>
      </div>
    </>
  );
}
