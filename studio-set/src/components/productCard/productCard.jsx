
const productCard = () => {

    const vat = "Incl .VAT";
    const rate = "Price Per Day"

    return (
    <div>
        <div className="product-img"></div>

        <div className="product-info">
            <h4 className="product-name">
                Product Name Placeholder {vat}
            </h4>
            <span>
                {rate}
            </span>
        </div>
    </div>
  )
}

export default productCard