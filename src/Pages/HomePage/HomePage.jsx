// import SectionOne from '../../Component/SectionOne/SectionOne';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import './HomePage.css'
import CategoryList from '../../Component/Category/CategoryList';
import Slider from '../../ImageSlider/Slider';

const HomePage = () => {
    return (
        <div className='home-page'>
            <Navbar />
            {/* <SectionOne /> */}
            <Slider />
            <div className="about">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, in nisi. 
                    Tempore maiores enim cupiditate nisi itaque alias facere quae blanditiis placeat 
                    ipsa culpa maxime officiis mollitia, fugit laborum, neque at. Molestiae rerum iste 
                    voluptatibus, nobis totam inventore velit nam numquam dolorum non repellendus laudantium 
                    corrupti vero saepe quisquam deserunt fugit aperiam earum voluptatum expedita, maxime 
                    soluta, adipisci mollitia veniam? Sit nisi aut reprehenderit odit neque sapiente illum, 
                    amet dolor placeat modi praesentium quo non corporis, accusantium minima quaerat impedit 
                    voluptate at officia. Voluptates dolores nihil sed rem esse nisi quia deserunt minima 
                    repellendus! Et reiciendis nulla nobis! Aspernatur error hic in perspiciatis esse iusto 
                    ratione pariatur molestiae eveniet, veritatis quae possimus at ad facere cupiditate 
                    tempora, sapiente exercitationem tenetur tempore dolore nostrum recusandae ex accusamus. 
                    Ad in dolore minima, mollitia quod sint pariatur aspernatur, fugiat unde inventore 
                    maiores eveniet a esse accusamus! A esse, eligendi ad soluta, ipsam debitis vel 
                    consequuntur tempora, cumque magnam perspiciatis quia reprehenderit rem maxime quam ea 
                    eveniet eius porro beatae distinctio in corporis vero illum ab? Velit laboriosam, vero 
                    dignissimos hic exercitationem cumque dicta reiciendis aperiam eum rem labore, et, 
                    perspiciatis officia ea nam ratione ipsum possimus. Mollitia doloremque, maxime 
                    consequatur iusto deleniti accusamus..
                    <small>    </small><span>Know more...</span>
                    </p>
            </div>
            <CategoryList />
            <Footer />
        </div>
      
    )
}

export default HomePage