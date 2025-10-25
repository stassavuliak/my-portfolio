import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './ThemeToggle.scss'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? 
        <svg xmlns="http://www.w3.org/2000/svg" width = "30" height = "30" version="1.0" id="Layer_1" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
          <g>
            <circle fillRule="evenodd" clipRule="evenodd" fill="#fff" cx="32.003" cy="32.005" r="16.001"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4   s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656   c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4   s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004   s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M60.006,27.997l-4.009,0.008   c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4   C64.002,29.79,62.217,27.997,60.006,27.997z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657   c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4   c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"/>
            <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004   c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653   L12.212,17.855z"/>
          </g>
        </svg>
        : 
        <svg xmlns="http://www.w3.org/2000/svg" width = "30" height = "30"  viewBox="0 0 24 24">
          <path d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z"/>
        </svg> 
      }
    </button>
  );
};


export default ThemeToggle;
