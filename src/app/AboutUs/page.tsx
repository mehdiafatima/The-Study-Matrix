import styles from './About.module.css';

const AboutPage = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <div className={styles.aboutContainer}>
          <p className={styles.introText}>
          Welcome to The Study Matrix!  Our mission is to revolutionize education by providing a structured framework that integrates essential study techniques and time management strategies into everyday learning experiences. 
            In todays fast-paced world, students face unprecedented challenges: managing their time effectively, mastering complex subjects, and discovering the best study methods to enhance their performance. 
            We believe that with the right tools and resources, every student can unlock their potential. The Study Matrix aims to simplify education, making it more personalized and accessible, ultimately guiding students toward success in their academic journeys.
          </p>
        </div>

        <div className={styles.additionalSections}>
          <div className={styles.sectionCard}>
            <h2 className={styles.subtitle}>Why We Built This Website</h2>
            <p className={styles.paragraph}>
            The Study Matrix was created to address the growing need for effective study techniques and time management among students. 
            In a world filled with distractions, we aim to provide a structured approach to learning that empowers students to succeed academically and beyond.
            </p>
          </div>
          <div className={styles.sectionCard}>
            <h2 className={styles.subtitle}>Our Mission</h2>
            <p className={styles.paragraph}>
            Our mission is to equip students with the tools they need to excel in their studies. 
            We believe that education is the foundation for a successful future, and we are dedicated to making learning accessible, enjoyable, and effective for everyone.
            </p>
          </div>
          <div className={styles.sectionCard}>
            <h2 className={styles.subtitle}>Looking to the Future</h2>
            <p className={styles.paragraph}>
            As we look to the future, we plan to expand our offerings by incorporating advanced AI-driven study tools and resources tailored to individual learning styles. 
            We envision a community where students can collaborate, share tips, and inspire each other to reach their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
