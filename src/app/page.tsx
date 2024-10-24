
import Hero from './components/Hero';

import styles from './components/AIEducationSection.module.css'



const Home = () => {
  return (
    <div>
     
      <Hero />
     
    <section className={styles.aiEducationSection}>
      <h2 className={styles.sectionTitle}>Empowering Education with AI</h2>
      <p className={styles.introParagraph}>
        In today’s fast-paced world, education has become more accessible and tailored to individual needs, thanks to the advent of Artificial Intelligence.<br></br> Here are some essential tips for students to enhance their learning experience:
      </p>
      <div className={styles.tipsContainer}>
        <div className={`${styles.tipItem} ${styles.rightAligned}`}>
          <strong>Embrace Technology:</strong> Utilize AI-driven platforms for study schedules and resources.
        </div>
        <div className={`${styles.tipItem} ${styles.leftAligned}`}>
          <strong>Set Realistic Goals:</strong> Break down your studies into manageable tasks.
        </div>
        <div className={`${styles.tipItem} ${styles.rightAligned}`}>
          <strong>Stay Organized:</strong> Keep track of deadlines and assignments with digital tools.
        </div>
        <div className={`${styles.tipItem} ${styles.leftAligned}`}>
          <strong>Seek Help When Needed:</strong> Use online forums and study groups to collaborate.
        </div>
        <div className={`${styles.tipItem} ${styles.rightAligned}`}>
          <strong>Practice Mindfulness:</strong> Take breaks and practice stress-relief techniques.
        </div>
        <div className={`${styles.tipItem} ${styles.leftAligned}`}>
          <strong>Network with Peers:</strong> Build connections for support and knowledge sharing.
        </div>
        <div className={`${styles.tipItem} ${styles.rightAligned}`}>
          <strong>Utilize Resources:</strong> Make the most of available libraries, online courses, and AI tools.
        </div>
        <div className={`${styles.tipItem} ${styles.leftAligned}`}>
          <strong>Stay Curious:</strong> Always seek to learn more beyond your curriculum.
        </div>
      </div>
    </section>

    
    
    </div>
  );
};

export default Home;

