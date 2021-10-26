import { FaSearchPlus, FaPlus } from "react-icons/fa";
import { BiRupee, BiHeart } from "react-icons/bi";
import { addToCart, cartItems } from "../../redux/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./productList.css";

const Index = () => {
	const dispatch = useDispatch();
	const cartLoItems = useSelector(cartItems);
	const products = [
		{
			id: 1,
			name: "product 1",
			img: "https://glizzykart.com/uploads/vendor/product/30d5cbdad801a972f0268b66569f45d1.jpg",
			price: 480,
			oldPrice: 500,
		},
		{
			id: 2,
			name: "product 2",
			img: "https://glizzykart.com/uploads/vendor/product/30d5cbdad801a972f0268b66569f45d1.jpg",
			price: 390,
			oldPrice: 800,
		},
		{
			id: 3,
			name: "product 3",
			img: "https://glizzykart.com/uploads/vendor/product/30d5cbdad801a972f0268b66569f45d1.jpg",
			price: 1080,
			oldPrice: 1500,
		},
		{
			id: 4,
			name: "product 4",
			img: "https://glizzykart.com/uploads/vendor/product/30d5cbdad801a972f0268b66569f45d1.jpg",
			price: 4080,
			oldPrice: 5000,
		},
		{
			id: 5,
			name: "product 5",
			img: "https://glizzykart.com/uploads/vendor/product/30d5cbdad801a972f0268b66569f45d1.jpg",
			price: 200,
			oldPrice: 2900,
		},
	];
	const handleAddToCard = (product) => {
		const alreadyInCart = cartLoItems.filter((fi) => product.id === fi.id);
		if (!alreadyInCart[0]) {
			dispatch(addToCart(product));
			toast.success(`${product.name} Added Successfully`);
		} else {
			toast.error(`${product.name} Already in Cart`);
		}
	};
	return (
		<div className="container py-2">
			<div className="row">
				{products.map((pi) => (
					<div className="col-md-3 col-sm-6 my-2" key={pi.id}>
						<div className="product-grid shadow">
							<div className="product-image">
								<a href="#">
									<img className="pic-1" src={pi.img} alt={pi.name} />
									<img className="pic-2" src={pi.img} alt={pi.name} />
								</a>
								<ul className="social">
									<li>
										<a data-tip="Quick View">
											<FaSearchPlus />
										</a>
									</li>
									<li>
										<a data-tip="Add to Wishlist">
											<BiHeart />
										</a>
									</li>
									<li>
										<a data-tip="Add to Cart">
											<FaPlus />
										</a>
									</li>
								</ul>
								<span className="product-new-label">Sale</span>
								<span className="product-discount-label">20%</span>
							</div>
							<div className="product-content">
								<h3 className="title">
									<a href="#">{pi.name}</a>
								</h3>
								<div className="price">
									<BiRupee /> {pi.price}
									<span>
										<BiRupee /> {pi.oldPrice}
									</span>
								</div>
								<a
									className="add-to-cart btn btn-dark text-white shadow"
									onClick={() => handleAddToCard(pi)}
								>
									+ Add To Cart
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<ToastContainer position="bottom-center" />
		</div>
	);
};

export default Index;
