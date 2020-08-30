import React, {Component} from 'react';
import Damon from '../talks-imgs/damon.jpg';
import Pacino from '../talks-imgs/pacino.jpg';
import Gonzales from '../talks-imgs/gonzales.jpg';
import Alicia from '../talks-imgs/alicia.jpg';
import Chipp from '../talks-imgs/Chipperfield.jpg';
import Kapoor from '../talks-imgs/Kapoor.jpg';
import Yohji from '../talks-imgs/Yohji.jpg';
import Carey from '../talks-imgs/carrey.jpg';
import Bottura from '../talks-imgs/Bottura.jpg';
import Easton from '../talks-imgs/Easton.jpg';
import Lebron from '../talks-imgs/lebron.jpg';



class Main extends Component {
    render() {
        return(
        <div>
            <div className='container'>
                <div className='header-one'><h2>NEW INTERVIEW</h2></div>
                <div className='header-two'><h2>INTERVIEW DIRECTORY</h2></div>
                <div className='red'> <img src={Damon} alt='#'/>
                <h2>MATT DAMON: "THESE TYPE OF MOVIES ARE GOING AWAY"</h2>
                </div>
                <div className='green'>
                     <div className='one'><img src={Chipp} alt='#'/></div>
                     <div className='one'><img src={Kapoor} alt='#'/></div>
                     <div className='one'><img src={Yohji} alt='#'/></div>
                     <div className='one'><img src={Carey} alt='#'/></div>
                     <div className='one'><img src={Bottura} alt='#'/></div>
                     <div className='one'><img src={Easton} alt='#'/></div>
                     <div className='one'><img src={Alicia} alt='#'/></div>
                     <div className='one'><img src={Lebron} alt='#'/></div>
                </div>
                <div className='bottom-one'>
                    <p><h2>Mr. Damon, how do you define success?</h2>
                     It’s the work. It’s the process itself. I have done enough movies now — movies that have failed, movies that have been successful. All we have as the people making it is the love of the doing of it. I am aware of the results because I have to be; it has an impact on my career so I can’t be ignorant of the movies that I am doing. But it’s really about feeling that I did my best work, the best work I could do under the circumstances, feeling that we told the story we wanted to tell in the way we wanted to tell it. That’s really the definition of success.

                        <h2>So for you it’s about the journey?</h2>

                    The journey is everything! It’s a cliché, but I have really felt it in my own life, in the 25 or 30 years I’ve been in this… The goal is the process, really enjoying the process. You can’t really predict what is going to happen with movies… I have made movies that I thought were really going to be well received and successful, and they failed miserably. And I have made movies that were very successful that I didn’t see coming.<br/>

                    <strong>“It was incredible that we even got the financing to do it because these are precisely the types of movies that are going away.”</strong></p>
                </div>
                <div className='bottom-two'></div>
                <div className='dark-blue'><h2>MOST READ INTERVIEWS</h2></div>  
            </div>
            <div className='purple'>
                <div className='purple-one'>
                    <img src={Pacino} alt='#'/>
                    <div className='artist-header'>
                        <h3>Al Pacino</h3>
                        <p>"SAYING ANYTHING OR WHATEVER"</p>
                    </div>
                </div>
                <div className='purple-one'>
                <img src={Gonzales} alt='#'/>
                <div className='artist-header'>
                        <h3>Chilly Gonzales</h3>
                        <p>"SAYING ANYTHING OR WHATEVER"</p>
                    </div>
                </div>
                <div className='purple-one'>
                <img src={Alicia} alt='#'/>
                <div className='artist-header'>
                        <h3>Alicia Keys</h3>
                        <p>"SAYING ANYTHING OR WHATEVER"</p>
                    </div>
                </div>
            </div>
        </div>
       );
    }
}
export default Main; 