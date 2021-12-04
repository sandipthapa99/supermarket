import React from 'react'

function SorterDropdown() {
    return (
        <div className="products-right-grid">
			<div className="products-right-grids">
				<div className="sorting-left">
					<select id="country1" className="frm-field required sect">
						<option value="null">A - Z</option>
						<option value="null">Z - A</option> 
						<option value="null">Price Increasing</option>					
						<option value="null">Price Decreasing</option>								
					</select>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
    )
}

export default SorterDropdown
