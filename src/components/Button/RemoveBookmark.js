import React from 'react'

export default function RemoveBookmark() {
    return (
        <div>
            <div className='inline-btn'>
                <button type="button" class="btn btn-default"  style={{ backgroundColor: "#3f22a0", color: "#fff", fontSize:"1.5rem" }}>
                    <span style={{ color: "#fff", }} class="glyphicon glyphicon-bookmark" >
                    </span>
                    &nbsp;&nbsp;REMOVE BOOKMARK
                </button>
            </div>
        </div>
    )
}
