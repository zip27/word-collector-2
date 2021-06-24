import React from 'react'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

import {useSelector} from 'react-redux'

function ColRight() {

    const finalDefArr = useSelector(state => state.definitionArray.value)
    const isSpelled = useSelector(state => state.definitionArray.isSpelled)
    const whereWordInput = useSelector(state => state.extraInfo.whereWord)
    const description = useSelector(state => state.extraInfo.description)

    const listItems = finalDefArr.map((indivDef) => 
        <li>{indivDef}</li>
    )

    return (
        <Col lg={4} sm={2} style={{padding: "16px"}}>
            <div style={{padding: "5% 0", fontSize: "60%"}}> 
                <h4 style = {{color: "green"}}>{isSpelled ? "" : "That word doesn't exist! Did you mean: "}</h4>
                <ul className = "my-auto">
                    {listItems}
                </ul>
                <hr></hr>
                
                <h5><strong>{whereWordInput !== "" ? "Where I found this word:" : ""}</strong></h5>
                <p style = {{fontSize: "80%"}}>{whereWordInput}</p>
                <h5><strong>{description !== "" ? "Context of Word:" : ""}</strong></h5>
                <p style = {{fontSize: "80%"}}>{description}</p>
            </div>

        </Col>
    )
}

export default ColRight