import React from 'react'

export default function NavbarSearchbox() {
    return (
        <div >
            <div class="search-box">
                <button class="btn-search"><i class="fa fa-search"></i></button>
                <input type="text" class="input-search" placeholder="Type to Search..." onfocus=" " />
            </div>
        </div>
    )
}
