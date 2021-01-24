import './index.css';
import secondsToMinsAndSeconds from '../../../functions/secondsToMinsAndSeconds.js';

export default function CountDownTimer({ seconds }) {
  return <span className='CountDownTimer'>{secondsToMinsAndSeconds(seconds)}</span>;
}
