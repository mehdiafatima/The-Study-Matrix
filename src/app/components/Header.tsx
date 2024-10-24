import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>AI Study Companion</div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/ImportanceOfTimetable" target="_parent" rel="noopener noreferrer" className="hover:underline">Importance of Timetables</Link>
        <Link href="/EducationSection"  target="_parent" rel="noopener noreferrer" className="hover:underline">Importance of Education</Link>
        <Link href="/StudyTechniques" target="_parent" rel="noopener noreferrer" className="hover:underline">Study Techniques</Link>
        <Link href="/AboutUs" target="_parent" rel="noopener noreferrer" className="hover:underline">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
