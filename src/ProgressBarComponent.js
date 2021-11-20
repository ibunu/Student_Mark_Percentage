import React from 'react';
import {useState} from 'react';
import "./progress.css";


function ProgressBarComponent({dataToPass}) {

const [inputState , setInputState] = useState("");
const [viewOutput , setViewOutput] = useState([]);

let colorPickObject = {
    green : "bg-success",
    blue : "bg-info",
    yellow : "bg-warning",
    red : "bg-danger"
}

const handleRequestFromJson=()=>{

    // 90% is Success - should be in green with % of progress shown 
    // 70% is Average - should be in blue with % of progress shown 
    //50% is Pass - should be in yellow with % of progress shown 
    //Below 30% is fail - should be in red with % of progress shown 


    let filteredData = dataToPass.filter(e=>{
        return e.id == inputState
    });
    filteredData.forEach(e => {
        e.totalPercentage = (((e.maths + e.english + e.biology + e.chemistry)/4)); 
        e.biologyColor = e.biology > 90 ? colorPickObject["green"] : (e.biology > 70 && e.biology < 90) ? colorPickObject["blue"] : (e.biology > 50 && e.totalPercentage < 70) ? colorPickObject["yellow"] : e.biology <30 ? colorPickObject["red"] : "";
        e.englishColor = e.english > 90 ? colorPickObject["green"] : (e.english > 70 && e.english < 90) ? colorPickObject["blue"] : (e.english > 50 && e.totalPercentage < 70) ? colorPickObject["yellow"] : e.english <30 ? colorPickObject["red"] : "";
        e.chemistryColor = e.chemistry > 90 ? colorPickObject["green"] : (e.chemistry > 70 && e.chemistry < 90) ? colorPickObject["blue"] : (e.chemistry > 50 && e.totalPercentage < 70) ? colorPickObject["yellow"] : e.chemistry <30 ? colorPickObject["red"] : "";
        e.mathsColor = e.maths > 90 ? colorPickObject["green"] : (e.maths > 70 && e.maths < 90) ? colorPickObject["blue"] : (e.maths > 50 && e.totalPercentage < 70) ? colorPickObject["yellow"] : e.maths <30 ? colorPickObject["red"] : "";
        e.colorClassNameFromBootStrap = e.totalPercentage > 90 ? colorPickObject["green"] : (e.totalPercentage > 70 && e.totalPercentage < 90) ? colorPickObject["blue"] : (e.totalPercentage > 50 && e.totalPercentage < 70) ? colorPickObject["yellow"] : e.totalPercentage <30 ? colorPickObject["red"] : "";
    });
    setViewOutput(filteredData);
}


    return (
        <div>
            <div className="studentinputField">
                <input onChange={(e)=>{setInputState(e.target.value)}}></input>
                <button onClick = {handleRequestFromJson}>Get Data From Server </button>
            </div>
            <div className = "containerForStudentMarks">
                {viewOutput.map(e=>(
                    <div className="studentMarksContainer">
                    <h1>Maths : {e.maths}</h1>
                    <div className="progress">
                            <div className={`progress-bar ${e.mathsColor}`} role="progressbar" style={{width: e.maths+"%"}} aria-valuenow={e.maths.toString()} aria-valuemin="0" aria-valuemax="100">{e.maths}</div>
                    </div>



                    
                    <h1>English : {e.english}</h1>
                    <div className="progress">
                            <div className={`progress-bar ${e.englishColor}`} role="progressbar" style={{width: e.english+"%"}} aria-valuenow={e.english.toString()} aria-valuemin="0" aria-valuemax="100">{e.english}</div>
                    </div>


                    <h1>Biology : {e.biology}</h1>
                    <div className="progress">
                            <div className={`progress-bar ${e.biologyColor}`} role="progressbar" style={{width: e.biology+"%"}} aria-valuenow={e.biology.toString()} aria-valuemin="0" aria-valuemax="100">{e.biology}</div>
                    </div>




                    <h1>Chemistry : {e.chemistry}</h1>
                    <div className="progress">
                            <div className={`progress-bar ${e.chemistryColor}`} role="progressbar" style={{width: e.chemistry+"%"}} aria-valuenow={e.chemistry.toString()} aria-valuemin="0" aria-valuemax="100">{e.chemistry}</div>
                    </div>

    
<div className="totalContainer">
<h1>Total Percentage : {e.totalPercentage}</h1>
                 
                        
                        <div className="progress">
                            <div className={`progress-bar ${e.colorClassNameFromBootStrap}`} role="progressbar" style={{width: e.totalPercentage+"%"}} aria-valuenow={e.totalPercentage.toString()} aria-valuemin="0" aria-valuemax="100">{e.totalPercentage}</div>
                        </div>

</div>

                    
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProgressBarComponent;