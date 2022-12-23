import { useScroll } from "framer-motion";

import ScrollDown from "./lottieComponents/ScrollDown";

export function CasaBrancaPage() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div>
        <ScrollDown />
      </div>
      <div>
        <a href="https://casa-branca.vercel.app/">
          <img
            src="/img/CasaBranca.jpg"
            alt="casa Branca page"
            className="casa-branca"
          />
        </a>
      </div>
      <div>
        <h2
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          className="titles"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, est!
        </h2>
        <p
          className="paragraphs"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 1 }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          ex est quasi! Minus aperiam excepturi, tenetur, ipsam quo nam
          voluptatem dolores quae officia, quia eos repellat inventore earum
          magnam veritatis.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          blanditiis dolor nostrum minus dicta est vero! Vel, quas, eos odit,
          facilis ea nisi molestias ipsa corporis quam expedita unde explicabo.
        </p>
        <h2
          className="titles"
          initial={{ x: 700 }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
          obcaecati.
        </h2>
        <p className="paragraphs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aliquam
          molestiae exercitationem doloremque recusandae. Iure, quisquam
          nesciunt! Neque aliquam perspiciatis, nisi commodi consequatur eius
          odit, voluptates provident in cum eum.
        </p>
      </div>
    </>
  );
}
