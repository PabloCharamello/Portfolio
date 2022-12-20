import { motion, useScroll } from "framer-motion";

export function MainPage() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <h2 className="titles">
        Admiro a las personas que pueden diseñar e implementar.
      </h2>
      <p className="paragraphs">
        Quiero convertirme en una persona que pueda implementar gráficos e
        interfaces de usuario que innoven y hacer que realmente funcionen.{" "}
        <br />
        El diseño y la implementación son la corriente principal de mi
        aprendizaje, y me gustaría encontrar una forma de vida en la que pueda
        manejar ambos junto a un gran equipo que lo de todo, con compromiso y
        respeto por los colaboradores y los proyectos que se nos pongan al
        frente.
      </p>
      <motion.h2 initial={{ x: -200 }} animate={{ x: 0 }} className="titles">
        Me gustan las interacciónes animadas!
      </motion.h2>
      <p className="paragraphs">
        Me gustan las cosas interactivas y los gráficos en movimiento. Creo que
        la belleza de lo digital es que puedes tener un "diálogo con las cosas",
        donde el producto responde a tus acciones.
      </p>
    </div>
  );
}
