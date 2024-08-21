import './App.css';
import Parent1 from './Parent1';
import backgroundImage from './gojo.jpg'; 

function App() {
  return (
    <div style={styles.appContainer}>
      <div style={styles.background}></div>
      <div style={styles.blurBox}>
        <Parent1 />
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
  },
  blurBox: {
    position: 'relative',
    zIndex: 1,
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '80%',
    maxWidth: '600px',
    height: 'auto',
  },
};

export default App;
