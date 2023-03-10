import { motion, useScroll } from "framer-motion";
import LandingPageLottie from "./lottieComponents/landingPageLottie";
import ScrollDown from "./lottieComponents/ScrollDown";
import WellcomeAll from "./lottieComponents/WellcomeAll";
import { BsGithub } from "react-icons/bs";
import Projects from "./lottieComponents/Projects";

export function MainPage() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div>
        <LandingPageLottie />
        <WellcomeAll />
        <ScrollDown />
      </div>
      <div className="my-projects-container">
        <h2 className="my-projects">Mis Proyectos</h2>
      </div>
      <Projects />
      <div>
        <h2 className="project-titles">
          Casa Branca{" "}
          <span>
            <a
              href="https://github.com/PabloCharamello/Casa_Branca"
              target="_blank"
            >
              <BsGithub size="3.5rem" className="github-icon" />
            </a>
          </span>
        </h2>
        <p className="paragraphs">
          Casa Branca es un proyecto que realicé para aprender a utilizar
          Tailwindcss, firebase, framer motion, threeJs, lottie, useContext
          entre muchas otras tecnologías con React.js. <br /> Me pareció buena
          idea para implementarlo todo en una sola app y decidí crear éste
          ecommerce lleno de animaciónes e interacciones.
        </p>
      </div>
      <div className="front-page-container">
        <a href="https://casa-branca.vercel.app/" target="_blank">
          <img
            src="/img/CasaBranca.jpg"
            alt="casa branca page"
            className="front-pages"
          />
        </a>
      </div>
      <div>
        <h2 className="project-titles">
          Nike Store{" "}
          <span>
            <a
              href="https://github.com/PabloCharamello/NikeStore"
              target="_blank"
            >
              <BsGithub size="3.5rem" className="github-icon" />
            </a>
          </span>
        </h2>
        <p className="paragraphs">
          Nike Store es un proyecto realizado con Tailwindcss, y redux/toolkit
          con Slices para manejar la lógica del carrito.
        </p>
      </div>
      <div className="front-page-container">
        <a href="https://nikestore-pablocharamello.vercel.app/" target="_blank">
          <img
            src="/img/NikeStore.jpg"
            alt="nike store page"
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
              <BsGithub size="3.5rem" className="github-icon" />
            </a>
          </span>
        </h2>
        <p className="paragraphs">
          Hack Design es el proyecto final del bootcamp ultra intensivo que
          realicé en Hack Academy,desarrollado por mis 2 colegas de equipo y yo.
          <br /> Se creó en un periodo de tres semanas como proyecto final e
          integrador donde se pusieron en práctica todos los conocimientos
          adquiridos durante el curso, sumando más de 600 horas de formación en
          3 meses. <br /> Ha sido una oportunidad para aprender sobre el
          fenomenal mundo del desarrollo web.
        </p>
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
              <BsGithub size="3.5rem" className="github-icon" />
            </a>
          </span>
        </h2>
        <p className="paragraphs">
          HackFlix es la vieja y querida app de peliculas. Ésta vez mi version
          realizada con React.js. Fue mi primer app y le faltan muchas cosas
          pero el diseño me dejó bastante conforme. <br /> P.D: No es
          responsive, es desktop o para tablet. <br /> La realicé en el
          transcurso del pasado bootcamp como uno de los primeros ejercicios.
        </p>
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
      <div>
        <div className="paragraphs-titles">
          <p className="introduction">
            Hola y bienvenidos!, mi nombre es Pablo Charamello y soy un nuevo
            desarrollador full stack apasionado y motivado por cada tecnología y
            los resultados de su implementación. <br />
            Comenzando me encontré en un abismo de información donde tuve que
            entender que todo tiene un proceso y un tiempo para aprender y
            asimilar la información que recibimos. <br />
            Por eso ahora más motivado que nunca creo proyectos de todo tipo
            para repasar e ir bajando toda la información de cada tecnología a
            medida que puedo. <br /> ESTOY ABIERTO A PROPUESTAS LABORALES DE
            FORMA INMEDIATA COMO JUNIOR/TRAINEE!{" "}
          </p>
        </div>
        <div className="paragraphs-titles">
          <motion.h2
            initial={{ x: 700 }}
            animate={{ x: 0 }}
            exit={{ x: 0 }}
            className="paragraphs-titles"
          >
            Admiro a las personas que pueden diseñar e implementar.
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
      </div>
    </>
  );
}
