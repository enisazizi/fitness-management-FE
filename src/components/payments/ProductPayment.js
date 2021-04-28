import React from "react"
// import "./index.css"
import { Button} from 'react-bootstrap';


function ProductPayment(){
    // let [clients, setClients] = useState([]);
    // let [searchValue, setSearchValue] = useState("");
    // let [filteredClients, setFilteredClients] = useState([]);


    return(
        <>
        <div className="cards-body">
            <div className="card">
                <div className="imgBx">
                    <img src="https://res.cloudinary.com/dtopnwa0t/image/upload/v1617983167/Fitness/yy3zc40axumohhggixnw.jpg" />

                </div>
                <div className="contentBx">
                    <h3>addTocart</h3>
                    <h2 className="price">50 <small>Euro</small></h2>
                    {/* <button className="buy">Add to Cart</button> */}
                    <Button variant="outline-primary" className="buy">Add to Cart</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductPayment