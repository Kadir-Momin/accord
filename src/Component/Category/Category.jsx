import React from "react";
import './CategoryList.css'


const Category = (props) => {
    const { category_id, category_name, category_image } = props.data
    return (
        <div class="col-sm-3">
            <div class="card">
                <img src={category_image} alt={category_name}
                    className="cart-image-top" />
                <div class="card-body">
                    <h2 class="card-title">{category_name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla quia, 
                        minima officiis perspiciatis ipsum fugit, fugiat voluptatum eos nam minus inventore 
                        quod itaque vero quibusdam repellat sint asperiores molestias.</p>
                    <a href="/products" class="category-btn">Select</a>
                </div>
            </div>
        </div>
    )
}

export default Category