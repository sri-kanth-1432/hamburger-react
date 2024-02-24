
import Header from '../Header';
import './index.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Header />
      <div className="not-found-content-container">
        <div className="not-found-responsive-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
          />
          <h2 className="heading">Lost Your Way?</h2>
          <p className="description">
            Sorry, we cannot find that page. You will find lots to explore on the
            home page
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
