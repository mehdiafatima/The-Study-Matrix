import styles from './StudyTechniques.module.css';

const StudyTechniques = () => {
  return (
    <section className={styles.techniquesSection}>
      <h2 className={styles.title}>Effective Study Techniques</h2>
      <p className={styles.introduction}>
        Discover a variety of proven study techniques that can help enhance your learning experience, improve focus, and boost retention.
      </p>
      <div className={styles.cardsContainer}>
        {/* Technique 1 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Pomodoro Technique</h3>
          <p className={styles.cardDescription}>
            Study in short, focused intervals (25 minutes), followed by a 5-minute break to enhance concentration and reduce fatigue.
          </p>
        </div>

        {/* Technique 2 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Active Recall</h3>
          <p className={styles.cardDescription}>
            Test yourself on the material instead of passively rereading, which strengthens memory retention.
          </p>
        </div>

        {/* Technique 3 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Spaced Repetition</h3>
          <p className={styles.cardDescription}>
            Review information over increasing intervals of time, helping to transfer knowledge from short-term to long-term memory.
          </p>
        </div>

        {/* Technique 4 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Summarization</h3>
          <p className={styles.cardDescription}>
            Summarize key points in your own words, which ensures active engagement and a deeper understanding of the material.
          </p>
        </div>

        {/* Technique 5 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Time Blocking</h3>
          <p className={styles.cardDescription}>
            Allocate specific blocks of time to different subjects or tasks to stay organized and maximize efficiency.
          </p>
        </div>
        {/* Technique 6 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Feynman Technique</h3>
          <p className={styles.cardDescription}>
          Teach a concept in simple terms to better understand it yourself.
          </p>
        </div>
        {/* Technique 7 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Interleaving</h3>
          <p className={styles.cardDescription}>
          Switch between topics during study sessions to improve retention.
          </p>
        </div>

        {/* Technique 8 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Concept Mapping</h3>
          <p className={styles.cardDescription}>
            Create visual representations of information to clarify connections between concepts and improve recall.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudyTechniques;
