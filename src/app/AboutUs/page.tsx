import styles from './About.module.css';

const AboutPage = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <div className={styles.aboutContainer}>
          <p className={styles.introText}>
            Welcome to our AI Study Companion platform! Our mission is to revolutionize education by integrating artificial intelligence into everyday learning experiences. In todays fast-paced world, students face challenges like never before – managing time, keeping up with complex subjects, and finding effective study methods. We believe that AI can be the key to simplifying education, making it more personalized, and ultimately helping students succeed.
          </p>
        </div>

        <div className={styles.additionalSections}>
          <div className={styles.sectionCard}>
            <h2 className={styles.subtitle}>Why We Built This Website</h2>
            <p className={styles.paragraph}>
              As the demands of modern education evolve, students need smarter tools to keep up. This platform was created to provide personalized assistance, study techniques, and learning tools powered by AI, designed to make learning more efficient and enjoyable.
            </p>
          </div>
          <div className={styles.sectionCard}>
            <h2 className={styles.subtitle}>Our Mission</h2>
            <p className={styles.paragraph}>
              Our mission is simple: to make education accessible and easy for everyone through the use of cutting-edge AI technology. By offering AI-driven tools and study tips, we aim to reduce the stress associated with learning and boost productivity.
            </p>
          </div>
          <div className={styles.sectionCard}>
            <h2 className={styles.subtitle}>Looking to the Future</h2>
            <p className={styles.paragraph}>
              We believe that the future of education lies in the seamless integration of technology and learning. Our platform is continuously evolving to offer new features and tools that cater to the diverse needs of students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
