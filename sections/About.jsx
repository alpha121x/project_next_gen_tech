"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to{" "}
        <span className="font-extrabold text-white">Next-Gen Tech</span> , your
        premier destination for cutting-edge IT services. We specialize in
        delivering comprehensive online solutions that cater to the evolving
        needs of businesses and individuals alike. Our team of expert{" "}
        <span className="font-extrabold text-white">
          developers, designers,
        </span>{" "}
        and <span className="font-extrabold text-white">IT professionals</span>{" "}
        is dedicated to providing innovative and reliable services, ranging from
        web development and design to cloud computing and cybersecurity. At{" "}
        <span className="font-extrabold text-white">Next-Gen Tech</span>, we are
        committed to excellence and strive to empower our clients with the
        latest technological advancements, ensuring they stay ahead in the
        digital landscape.{" "}
        <span className="font-extrabold text-white">Join us</span> as we drive
        the future of technology, one project at a time.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
