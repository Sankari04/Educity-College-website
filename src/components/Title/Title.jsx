import React from 'react';
import './Title.css';
import about from '../../assets/about.png';
function Title(){
    return(
      <>
        <div>
          <img src={about} alt="About" />
        </div>

        
        <div className='title-container'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eos reiciendis veritatis totam 
                laudantium corporis dicta beatae quidem? Ipsum totam numquam repellat qui, deleniti libero! 
                Eveniet reiciendis a fuga quibusdam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eos reiciendis veritatis totam laudantium corporis dicta
                 beatae quidem? Ipsum totam numquam repellat qui, deleniti libero! 
                Eveniet reiciendis a fuga quibusdam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eos reiciendis veritatis totam 
                laudantium corporis dicta beatae quidem? Ipsum totam numquam repellat qui, deleniti libero!Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Ea eos reiciendis veritatis totam laudantium corporis dicta beatae quidem? Ipsum totam numquam repellat qui, 
                deleniti libero!
            </p>

        </div>
        </>
    )
}
export default Title;