import classNames from 'classnames/bind';
import styles from './result.module.scss';

const cx = classNames.bind(styles);
function Results() {
    return (
        <div className={cx('wrapper')} id="results">
            <div className={cx('cover')}>
                <div className={cx('content')}></div>
                <h2>Address</h2>
                <h3>Address will be printed here</h3>
            </div>
            <div className={cx('cover')}>
                <div className={cx('content')}></div>
                <h2>Deposited</h2>
                <h3>Amount of money in accordance with some analysis chart</h3>
            </div>
            <div className={cx('cover')}>
                <div className={cx('content')}></div>
                <h2>Total Lender</h2>
                <h3>Amount of money in accordance with some analysis chart</h3>
            </div>
            <div className={cx('cover')}>
                <div className={cx('content')}></div>
                <h2>Interest Rate</h2>
                <h3>Annual interest rate</h3>
            </div>
        </div>
    );
}
export default Results;
