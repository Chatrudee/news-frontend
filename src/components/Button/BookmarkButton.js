import React from 'react'
import {useHistory , BrowserRouter as Router, Switch, Route } from 'react-router-dom'



export default function BookmarkButton() {

    const history = useHistory();

    const handleRoute = () =>{ 
        history.push('/allbookmark');
        window.location.reload();
      }

    return (
        < div className="top-right">

                <div className='inline-btn'>
                <button type="button" onClick={handleRoute} class="btn btn-default btn-sm"  style={{ backgroundColor: "#3f22a0", color: "#fff" }}>
                    <span style={{ color: "#fff", }} class="glyphicon glyphicon-bookmark" >
                    </span>
                    &nbsp;&nbsp;VIEW BOOKMARK
                </button>
            </div>

            
            <div class="select">
                <select name="format" id="format">
                    <option value="pdf">Newest First</option>
                    <option value="txt">Oldest First</option>
                    <option value="txt">Most Popular</option>
                </select>
            </div>
        </div>
    )
}
