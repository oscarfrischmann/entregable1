const Products = [];

class ProductManager {
	constructor(title, description, price, thumbnail, stock) {
		this.products = Products;
		this.title = title;
		this.description = description;
		this.price = price;
		this.thumbnail = thumbnail;
		this.code;
		this.stock = stock;
	}

	addProduct(product) {
		let lastIndexOfProducts = Products.length;
		this.code = lastIndexOfProducts++;
		this.products.push(product);
		console.log(`Producto ${this.code} agregado\n\n`);
	}

	getProducts() {
		console.log('Productos agregados:');
		this.products.forEach((product) => {
			console.log(`Title: ${product.title}`);
			console.log(`Description: ${product.description}`);
			console.log(`Price: $${product.price}`);
			console.log(`Code: ${product.code}`);
			console.log(`Stock:  ${product.stock}\n\n`);
		});
	}

	getProductrById(code) {
		console.log(`Producto filtrado por código: ${code}`);

		let getCode = this.products.find((product) => product.code === code);
		if (getCode) {
			for (let prop in getCode) {
				if (prop === 'price') {
					console.log(`${prop}: $${getCode[prop]}`);
				} else {
					console.log(`${prop}: ${getCode[prop]}`);
				}
			}
		} else {
			console.log('Product not found');
		}
	}
}
let product;

product = new ProductManager('Agua', 'Fresca', 10, 'http://google.com', 5);
product.addProduct(product);

product = new ProductManager('Vino', 'Mendocino', 15, 'http://yahoo.com', 5);
product.addProduct(product);

product = new ProductManager('cerveza', 'quilmes', 20, 'http://bing.com', 5);
product.addProduct(product);

product.getProducts();

product.getProductrById(1);
