function EmptyCart() {
  return (
    <div className="empty-cart-div">
      <div className="empty-cart">
        {/* <div className="empty-cart-img"> */}
        <img
          // src="/public/empty-cart-03.png"
          // src="https://w7.pngwing.com/pngs/377/837/png-transparent-empty-cart-illustration-thumbnail.png"
          // src={require("../images/empty-cart-03.png")}
          src={require("../images/emptyCartImg.avif")}
          alt="empty cart"
          width={600}
          height={400}
        />
        {/* </div> */}
      </div>
      <h3>You have no item in the Cart</h3>
    </div>
  );
}

export default EmptyCart;
