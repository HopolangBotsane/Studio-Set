import { Link } from "react-router";

const productCard = () => {

    const vatText = "Incl. Vat";
    const rateCharged = "Price Per Day";

  return (
        <Link>
            <div className="product-img">
                <img src="" alt="product Image" />
            </div>

            <div className="product-info">
                <div className="product-name">
                    <p>
                        Sony FXR Kit
                    </p>
                    <span>
                        {vatText}
                    </span>
                </div>

                <div className="product-price">
                    R 2 500 {rateCharged}
                </div>
            </div>
        </Link>
  )
}

export default productCard