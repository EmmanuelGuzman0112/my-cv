const Card = () => {
  return (
    <>
        <div class="card-container">
            <header class="card-header">
                <div class="user-profile-image"></div>

                <span class="username">Emmanuel Nicolas </span>
                <span class="last-name">Guzman </span>
                <span class="user-bio">Frontend Developer </span>
            </header>
            <section class="about-section">
                <div class="about-item">
                    <div class="item-value"> 8k</div>
                    <div class="item-label"> Flollowers</div>
                </div>
                <div class="about-item">
                    <div class="item-value"> 33</div>
                    <div class="item-label"> Flollowers</div>
                </div>
            </section>
            <footer class="card-footer">
                <button class="card-footer">Follow </button>
            </footer>
        </div>
    </>
  );
};

export default Card;
