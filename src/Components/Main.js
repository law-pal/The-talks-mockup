import React, {Component} from 'react';
import Pacino from '../talks-imgs/pacino.jpg';
import Gonzales from '../talks-imgs/gonzales.jpg';
import Alicia from '../talks-imgs/alicia.jpg';
import Damon from '../talks-imgs/damon.jpg';


class Main extends Component {
    render() {
        return(
        <div>
            <div className='container'>
                <div className='blue'>Header</div>
                {/* <div className='yellow'>Left</div> */}
                <div className='red'>
                    <img src={Damon} alt='#'/>
                </div>
                <div className='green'>
                     <div className='one'>1</div>
                     <div className='two'>2</div>
                     <div className='three'>3</div>
                     <div className='four'>4</div>
                     <div className='five'>5</div>
                     <div className='six'>6</div>
                     <div className='seven'>7</div>
                     <div className='eight'>8</div>
                </div>
                <div className='orange'>orange section</div>
                <div className='dark-blue'>dark blue</div>  
            </div>
            <br/>
            <div className='purple'>
                <div className='purple-one'>
                    <img src={Pacino} alt='#'/>
                    <div className='artist-header'>
                        <p><strong>Al Pacino</strong></p>
                        <p>"SAYING ANYTHING OR WHATEVER"</p>
                    </div>
                </div>
                <div className='purple-two'>
                <img src={Gonzales} alt='#'/>
                <div className='artist-header'>
                        <p><strong>Chilly Gonzales</strong></p>
                        <p>"SAYING ANYTHING OR WHATEVER"</p>
                    </div>
                </div>
                <div className='purple-three'>
                <img src={Alicia} alt='#'/>
                <div className='artist-header'>
                        <p><strong>Alicia Keys</strong></p>
                        <p>"SAYING ANYTHING OR WHATEVER"</p>
                    </div>
                </div>
            </div>
        </div>
       );
    }
}
export default Main; 