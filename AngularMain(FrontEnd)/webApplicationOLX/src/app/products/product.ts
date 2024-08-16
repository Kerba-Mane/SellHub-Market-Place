export class Product {
  productId: string;
  productTitle: string;
  productType: string;
  productName: string;
  productdesc: string;
  productPrice: string;
  addedby: string;
  img1: string;
  img2: string;
  img3: string;
  productStatus: boolean;

  constructor(
    productId: string,
    productTitle: string,
    productType: string,
    productName: string,
    productDesc: string,
    productPrice: string,
    addedBy: string,
    img1: string,
    img2: string,
    img3: string,
    productStatus: boolean
  ) {
    this.productId = productId;
    this.productTitle = productTitle;
    this.productType = productType;
    this.productName = productName;
    this.productdesc = productDesc;
    this.productPrice = productPrice;
    this.addedby = addedBy;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
    this.productStatus=productStatus;
  }

}