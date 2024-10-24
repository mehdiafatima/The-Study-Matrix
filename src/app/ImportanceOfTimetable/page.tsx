import React from 'react';
import styles from './ImportanceOfTimetable.module.css';

const ImportanceOfTimetable = () => {
  return (
    <section className={styles.timetableSection}>
      <h1 className={styles.title}>The Importance of a Timetable for Students</h1>
      <p className={styles.intro}>
        A well-structured timetable can be the key to academic success. It helps you stay organized, manage your time effectively, and balance your studies with personal life.
      </p>
      
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>1. Stay Organized</h2>
          <p className={styles.cardText}>
            A timetable ensures you keep track of your assignments, exams, and other commitments. It reduces last-minute stress and keeps everything in order.
          </p>
        </div>
        
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>2. Improve Time Management</h2>
          <p className={styles.cardText}>
            Allocating time for each subject or activity improves your time management skills, making sure you don’t fall behind in your studies.
          </p>
        </div>
        
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>3. Set Realistic Goals</h2>
          <p className={styles.cardText}>
            Creating a realistic timetable helps in setting achievable goals, so you can accomplish tasks without overburdening yourself.
          </p>
        </div>
        
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>4. Balance Personal and Academic Life</h2>
          <p className={styles.cardText}>
            A well-balanced timetable gives you time for relaxation and personal activities, reducing burnout and promoting well-being.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>5. Stress Reduction</h2>
          <p className={styles.cardText}>
          By following a timetable, students reduce the anxiety of last-minute 
          preparations and tasks, leading to lower stress levels.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>6. Improved Discipline</h2>
          <p className={styles.cardText}>
          Sticking to a timetable cultivates discipline and teaches students 
          the importance of following a schedule.
          </p>
        </div>
      </div>
      
      <div className={styles.tipsSection}>
        <h2 className={styles.tipsTitle}>Tips for Creating an Effective Timetable</h2>
        <ul className={styles.tipsList}>
          <li className={styles.tipItem}>Start with the most difficult tasks when your focus is highest.</li>
          <li className={styles.tipItem}>Allocate break times to avoid burnout.</li>
          <li className={styles.tipItem}>Be flexible and adjust your timetable when needed.</li>
          <li className={styles.tipItem}>Use color coding to visually organize different activities.</li>
        </ul>
      </div>
    </section>
  );
};

export default ImportanceOfTimetable;
