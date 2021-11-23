const Card = () => {
  return (
    <>
        <div className="card-container">
            <header className="card-header">
                <div className="user-profile-image"></div>

                <span className="username">Emmanuel Nicolas </span>
                <span className="last-name">Guzman </span>
                <span className="user-bio">Frontend Developer </span>
            </header>
            <section className="about-section">
                <div className="about-item">
                    <div className="item-value"> 8k</div>
                    <div className="item-label"> Flollowers</div>
                </div>
                <div className="about-item">
                    <div className="item-value"> 33</div>
                    <div className="item-label"> Flollowers</div>
                </div>
            </section>
            <footer className="card-footer">
                <button className="card-footer">Follow </button>
            </footer>
        </div>
    </>
  );
};

export default Card;
