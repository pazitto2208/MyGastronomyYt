import styles from './page.module.css'
import Dessert from '../../../public/imgs/homepage/dessert'
import NaturalFood from '../../../public/imgs/homepage/naturalFood'
import Vegetable from '../../../public/imgs/homepage/vegetable'
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <section>
                <h1>Welcome to My Gastronomy.</h1>
                <p>
                    Hello and welcome to our special culinary corner, 
                    where Italian tradition dances with modern creativity 
                    to give you a unique culinary experience. 
                    With us, every dish is a taste hug, 
                    conceived with love and dedication to make 
                    each of your days unforgettable.
                </p>
            </section>

            <section className={styles.foodSection}>
                <div>
                    <i><NaturalFood /></i>
                    <h4>Excellence in Everyday Life</h4>
                    <p>
                        Discover our daily selection of unique dishes to add 
                        a fresh and refined touch to your table.
                    </p>
                </div>
                <div>
                    <i><Vegetable /></i>
                    <h4>First Choice Ingredients</h4>
                    <p>We carefully select exceptional ingredients to ensure the highest quality in your favorite dishes.</p>
                </div>
                <div>
                    <i><Dessert /></i>
                    <h4>Taste for Everyone</h4>
                    <p>Explore a world of flavors with our comprehensive offering, designed to satisfy the palates of the whole family, from appetizers to desserts.</p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <h1>Stay Updated!</h1>
                <p>
                    Enter the world of My Gastronomy by following us on social media. 
                    You'll always be updated on our culinary creations, special events, 
                    and gourmet surprises. Don't miss out on a single bite!
                </p>
                <div className={styles.socialButtonsContainer}>
                    <button className={styles.socialButton}><FaInstagram /> Instagram</button>
                    <button className={styles.socialButton}><FaFacebookSquare /> Facebook</button>
                    <button className={styles.socialButton}><FaWhatsapp /> Whatsapp</button>
                    <button className={styles.socialButton}><FaMapMarkerAlt />Location</button>
                </div>
            </section>
        </div>
    )
}