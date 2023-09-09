import classNames from 'classnames/bind';
import styles from './join.module.scss';
import img1 from './Join1.png';

const cx = classNames.bind(styles);
function Join() {
    return (
        <div className={cx('wrapper')} id="join">
            <img src={img1} className={cx('img')} />
            <div className={cx('content')}>
                <h2>Join the waitlist.</h2>
                <p>Get started today.</p>
                <form className={cx('form')}>
                    <input type="email" placeholder="name@email.com" />
                    <button value={'Subscribe'}>Subscribe</button>
                </form>
            </div>
        </div>
    );
}
export default Join;
