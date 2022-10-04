import logo from '../assets/img/logo.png';
import pexels from '../assets/img/pexels-binyamin-mellish-106399.png';
import logo2 from '../assets/img/logo2.png';
import logo1 from '../assets/img/logo1.png';
import logo3 from '../assets/img/logo3.png';
import logo4 from '../assets/img/logo4.png';
import logo6 from '../assets/img/logo6.png';

function Header() {
  return (
    <div class="lmheader">
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={logo} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Buying</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Renting</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Selling</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact us</a>
              </li>
              <div class="log">
                <button class="btn btn-outline-success" type="submit">Login</button>
                <button class="btn btn-outline-success" type="submit">Sign Up</button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    <header>
        <div class="lmtxt">
            <h1 class="text-white"><strong> Perfect Way To Buy <br/> And Sell A Home </strong></h1>
            <p>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque. Ac, gravida in eget non amet eget purus non.</p>
        </div>

        <div class="lmimg">
            <img src={pexels} />
        </div>
    </header>
    <div class="search">
        <div class="Purpose">
            <p>Purpose</p>
            <h5>Buy</h5>
        </div>
        <div class="Location">
            <p>Location</p>
            <h5>Toronto, Canada</h5>
        </div>
        <div class="Type">
            <p>Type</p>
            <h5>Industrial home</h5>
        </div>
        <button>Search</button>
    </div>

    <div class="Featured">
        <h2>Featured In</h2>
        <div class="logos">
            <img src={logo1}/>
            <img src={logo2}/>
            <img src={logo3}/>
            <img src={logo4}/>
            <img src={logo6}/>
        </div>
    </div>
    <div class="squares"></div>
</div>
  );
}

export default Header;
