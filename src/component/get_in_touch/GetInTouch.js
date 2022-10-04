import joel from '../assets/img/joel-filipe-RFDP7_80v5A-unsplash.png';
import pexels from '../assets/img/pexels-vecislavas-popa-1571470.png';

function GetInTouch() {
  return (
    <div class="get_in_touch">
        <div class="mk_get_img">
            <div class="pic">
                <img src={joel} width="100%" height="100%" /></div>
            <div class="pic"><img src={pexels} width="100%" height="100%" /></div>
        </div>
        <div class="mk_get_txt">
            <h2>
                We help people to find homes
            </h2>
            <p>
                Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa consectetur. Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.
            </p>
            <button>Get in touch</button>
        </div>
    </div>
  );
}

export default GetInTouch;
