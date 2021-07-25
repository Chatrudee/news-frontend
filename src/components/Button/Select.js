import React from 'react'

export default function Select() {
    return (
        <div>
            < div className="top-right">
            <div class="select">
                <select name="format" id="format">
                    <option value="pdf">Newest First</option>
                    <option value="txt">Oldest First</option>
                    <option value="txt">Most Popular</option>
                </select>
            </div>
        </div>
    </div>
    )
}
