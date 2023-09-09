import Header from '../header';
import Quhute from '../content/Quhute';
import Information from '../content/infomation';
import Results from '../content/results';
import Financial from '../content/Financial';
import Join from '../content/Join';
import Footer from '../footer';
import classNames from 'classnames';
import styles from './home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('home')}>
            <Header />
            <Quhute />
            <Information />
            <Results />
            <Financial />
            <Join />
            <Footer />
        </div>
    );
}

export default Home;
