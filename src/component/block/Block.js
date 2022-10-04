import sldr from '../assets/img/sldr.png';
import find from '../assets/img/find-01.svg';
import key from '../assets/img/key-01.svg';
import chrono from '../assets/img/chrono-01.svg';
function Block() {
  return (
    <div class="block">
    <div class="part4"></div>
     <div class="part2-part3">
        <div class="part2">
            <h1>Why To Choose Us?</h1>
            <div class="icons">
                <div class="icon">
                    <div class="icon-img"><img src={find}/></div>
                    <div class="icon-txt">
                        <h2>Easy To Find</h2>
                        <p>Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.</p>
                    </div>
                </div>
                <div class="icon">
                    <div class="icon-img"><img src={key}/></div>
                    <div class="icon-txt">
                        <h2>Affordable Prices</h2>
                        <p>Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.</p>
                    </div>
                </div>
                <div class="icon">
                    <div class="icon-img"><img src={chrono}/></div>
                    <div class="icon-txt">
                        <h2>Quickly Process</h2>
                        <p>Ac, gravida in diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="part3">
            <div class="part3-txt">
                <p>Massa semper non rutrum orci facilisi sit. Lectus porta quam a fringilla eget viverra sem. Vulputate massa hendrerit turpis gravida tempor, porttitor</p>
            </div>
            <div class="petite-zone">
                <div class="petit-txt">
                    <p>Elena Pravo</p>
                    <p>Ceo, Upstate</p>
                </div>
                <div><img src={sldr} /></div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Block;
