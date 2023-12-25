import { categories, products} from '../../data'
import Category from './Category'
import './CategoryList.css'


const CategoryList = () => {

    return(
        <div className="category-container">
            <h3 style={{marginLeft:'40rem', marginTop: '10rem', fontSize: '2.5rem', fontFamily: 'Roboto', textDecoration: 'underline'}}>Our Products</h3>
            <div className="wrapper">
                { categories.map((category) => (
                    <Category data={category} />
                ))}
            </div>
        </div>
    )
} 

export default CategoryList