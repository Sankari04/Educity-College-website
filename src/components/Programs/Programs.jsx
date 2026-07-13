import React from 'react';
import './Programs.css';
import program1 from '../../assets/program1.png';
import program2 from '../../assets/program2.png';
import program3 from '../../assets/program3.png';
function Programs() {
    return (
        <div className="programs-container">
          <div className="programs-images">
            <img src={program1} alt="Program1"/>
            </div>
             <div className="programs-images">
            <img src={program2} alt="Program2"/>
            </div>  
             <div className="programs-images">
            <img src={program3} alt="Program3"/>
            </div>    
        </div>
    );
}
export default Programs;