import { motion } from "framer-motion";

export const SlideLeft = ({ tag: Tag = "div", children, ...props }) => {
  const Element = motion(Tag);

  return (
    <Element
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      {...props}
    >
      {children}
    </Element>
  );
};

export const SlideUp = ({ tag: Tag = "div", children, ...props }) => {
  const Element = motion(Tag);

  return (
    <Element
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      {...props}
    >
      {children}
    </Element>
  );
};
