import styles from './EducationSection.module.css';
import { FaBook, FaLightbulb, FaUsers, FaChartLine,FaGraduationCap, FaHeartbeat,FaRobot, FaGlobe } from 'react-icons/fa'; // Importing icons

const EducationSection = () => {
  return (
    <div className={styles.educationSection}>
      <h2 className={styles.educationTitle}>The Importance of Education in the Age of AI</h2>
      <div className={styles.educationContainer}>
        
        <div className={styles.educationCard}>
          <div className={styles.cardContent}>
            <FaBook className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Knowledge is Power</h3>
            <p className={styles.cardText}>
              Education opens doors to a vast world of knowledge, equipping individuals to make informed decisions and achieve their goals.
            </p>
          </div>
        </div>
        <div className={styles.educationCard}>
          <div className={styles.cardContent}>
            <FaGraduationCap className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Career Opportunities</h3>
            <p className={styles.cardText}>
            Education opens doors to better career opportunities and higher earning potential, paving the way for future success.
            </p>
          </div>
        </div>
        
        <div className={styles.educationCard}>
          <div className={styles.cardContent}>
            <FaHeartbeat className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Personal Development</h3>
            <p className={styles.cardText}>
            Education promotes personal growth by fostering a deeper understanding of yourself and the world around you.
            </p>
          </div>
        </div>
        

        <div className={styles.educationCard}>
          <div className={styles.cardContent}>
            <FaLightbulb className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Critical Thinking</h3>
            <p className={styles.cardText}>
              Education encourages critical thinking and problem-solving, essential skills in today’s fast-paced, technology-driven world.
            </p>
          </div>
        </div>

        <div className={styles.educationCard}>
          <div className={styles.cardContent}>
            <FaUsers className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Social and Emotional Growth</h3>
            <p className={styles.cardText}>
              Education fosters social connections, empathy, and emotional intelligence, helping students grow into well-rounded individuals.
            </p>
          </div>
        </div>

        <div className={styles.educationCard}>
          <div className={styles.cardContent}>
            <FaChartLine className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Career Advancement</h3>
            <p className={styles.cardText}>
              A solid education leads to better career opportunities, increasing earning potential and job satisfaction in the long run.
            </p>
          </div>
        </div>

        <div className={styles.educationCard}>
          <div className={styles.cardContent}>
            <FaRobot className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Adapting to AI</h3>
            <p className={styles.cardText}>
              As AI reshapes industries, education helps individuals stay relevant and adapt to the ever-changing job market.
            </p>
          </div>
        </div>

        <div className={styles.educationCard}>
          <div className={styles.cardContent}>
            <FaGlobe className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Global Awareness</h3>
            <p className={styles.cardText}>
              Education promotes global citizenship, encouraging students to be aware of and engage with international issues and cultures.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationSection;
