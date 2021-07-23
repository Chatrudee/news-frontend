import React from 'react'

export default function AddBookmark() {
    return (
        <div>
            <div className='inline-btn'>
                <button type="button" class="btn btn-default btn-sm"  style={{ backgroundColor: "#3f22a0", color: "#fff" }}>
                    <span style={{ color: "#fff", }} class="glyphicon glyphicon-bookmark" >
                    </span>
                    &nbsp;&nbsp;ADD BOOKMARK
                </button>
            </div>
        </div>
    )
}
