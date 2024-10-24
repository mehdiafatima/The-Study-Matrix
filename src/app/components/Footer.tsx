import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 AI Study Companion. All rights reserved.</p>
      <div className="parastyle">
      <p>Website created by Mehdia Fatima Faizi</p></div><br></br> 
      
      <div className={styles.socialMedia}>
        <p>Follow Me on:</p>
        <a href="https://www.linkedin.com/in/mehdia-fatima-884506289/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/mehdiafatima" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
