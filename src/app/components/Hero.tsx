import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}> 
        <div className={styles.textContainer}>
          <h1 className={styles.title}><span>Unlock Your Learning Potential  </span><br></br><span>with The Study Matrix!</span></h1>
          <p className={styles.description}>
           <span> Dive into a world of organized study techniques,</span><br /><span>  effective timetables, and the importance of education. </span> <br /><span>Empower yourself with tools that enhance your </span><br></br><span>learning journey and help you achieve academic success.</span>
          </p>
          <blockquote className={styles.quote}>
            <span>Education is the most </span><br /><span> powerful weapon which you  </span><br /><span> can use to change the world.</span>
            <span className={styles.author}>  - Nelson Mandela</span>
          </blockquote>
          
        </div>
        <div className={styles.imageContainer}> 
          <Image 
            src="/student.jpg" 
            alt="Study with AI"
            layout="responsive" 
            width={500} 
            height={500} 
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;






















// import styles from './Hero.module.css';

// const Hero = () => {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.textContainer}>
//         <h1 className={styles.title}>Elevate Your Study Game with AI!</h1>
//         <p className={styles.description}>
//           Discover personalized study plans, enhance your learning experience, and unleash your potential with our AI-driven tools.
//         </p>
//         <blockquote className={styles.quote}>
//           Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.
//           <span className={styles.author}> - Albert Schweitzer</span>
//         </blockquote>
//         <button className={styles.ctaButton}>Get Started Now</button>
//       </div>
//       <div className={styles.imageContainer}>
//         <img src="/path/to/your/image.jpg" alt="Study with AI" className={styles.heroImage} />
//       </div>
//     </section>
//   );
// };

// export default Hero;
