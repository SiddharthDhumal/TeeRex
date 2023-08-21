function EmptyCart() {
  return (
    <div className="empty-cart-div">
      <div className="empty-cart">
        <img
          src={require("../images/emptyCartImg.avif")}
          alt="empty cart"
          width={600}
          height={400}
        />
      </div>
      <h3>You have no item in the Cart</h3>
    </div>
  );
}

export default EmptyCart;
