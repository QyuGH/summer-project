import { motion } from "framer-motion";

export const SlideLeft = ({
  tag: Tag = "div",
  children,
  distance = -50,
  duration = 1.5,
  delay = 0,
  ease = "easeOut",
  once = false,
  amount = 0.5,
  ...props
}) => {
  const Element = motion(Tag);

  return (
    <Element
      initial={{ opacity: 0, x: distance }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration, ease }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </Element>
  );
};

export const SlideUp = ({
  tag: Tag = "div",
  children,
  distance = 50,
  duration = 1,
  delay = 0,
  ease = "easeOut",
  once = false,
  amount = 0.5,
  ...props
}) => {
  const Element = motion(Tag);

  return (
    <Element
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease, delay }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </Element>
  );
};

export const SlideDown = ({
  tag: Tag = "div",
  children,
  distance = -30,
  duration = 1,
  delay = 0,
  ease = "easeOut",
  once = true,
  amount = 0.5,
  ...props
}) => {
  const Element = motion(Tag);

  return (
    <Element
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease, delay }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </Element>
  );
};

