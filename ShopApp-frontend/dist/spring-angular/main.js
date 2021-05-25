(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/PpX":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"banner\">\n  <div class=\"container\">\n    <h3>BookStore, <span>Special Offers</span></h3>\n  </div>\n</div>\n<!-- //banner --> \n<!-- banner-bottom -->\n<div class=\"banner-bottom\">\n  <div class=\"container\">\n    <div class=\"col-md-3 w3agile_special_deals_grid_right\">\n     \n      <div class=\"col-md-3 w3agile_special_deals_grid_right\"> \n        <iframe width=\"1000\" height=\"425\" margin-right=\"10px\" src=\"https://www.youtube.com/embed/SKVcQnyEIT8\" title=\"YouTube video player\" frameborder=\"0\"  allowfullscreen></iframe>\n      </div> \n        <!-- pop-up-box -->     \n        <script src=\"assets/js/jquery.magnific-popup.js\" type=\"text/javascript\"></script>\n        <!--//pop-up-box -->\n        <script>\n          $(document).ready(function() {\n          $('.popup-with-zoom-anim').magnificPopup({\n            type: 'inline',\n            fixedContentPos: false,\n            fixedBgPos: true,\n            overflowY: 'auto',\n            closeBtnInside: true,\n            preloader: false,\n            midClick: true,\n            removalDelay: 300,\n            mainClass: 'my-mfp-zoom-in'\n          });\n                                          \n          });\n        </script>\n    </div>\n    <div>\n    </div>\n\n\n    <!-- <div class=\"col-md-7 wthree_banner_bottom_right\">\n      <div class=\"bs-example bs-example-tabs\" role=\"tabpanel\" data-example-id=\"togglable-tabs\">\n        <ul id=\"myTab\" class=\"nav nav-tabs\" role=\"tablist\">\n          <li *ngFor=\"let category of categoryList\" role=\"presentation\" >\n            <a (click)=\"getProductsByCategory(category)\" href=\"javascript:void(0)\" id=\"home-tab\" role=\"tab\" data-toggle=\"tab\" aria-controls=\"home\">{{category.name}}</a>\n          </li>\n        </ul>\n\n        <div id=\"myTabContent\" class=\"tab-content\">\n          <div role=\"tabpanel\" class=\"tab-pane fade active in\" id=\"home\" aria-labelledby=\"home-tab\">\n            <div   class=\"agile_ecommerce_tabs\">\n              <div  *ngFor=\"let book of productsList\" class=\"col-md-4 agile_ecommerce_tab_left\">\n                <div class=\"hs-wrapper\">\n                  <img  src=\"assets/images/3.jpg\" alt=\" \" class=\"img-responsive\" />\n                  <img  src=\"assets/images/4.jpg\" alt=\" \" class=\"img-responsive\" />\n                  <img  src=\"assets/images/5.jpg\" alt=\" \" class=\"img-responsive\" />\n                  <img  src=\"assets/images/6.jpg\" alt=\" \" class=\"img-responsive\" />\n                  <img  src=\"assets/images/7.jpg\" alt=\" \" class=\"img-responsive\" />\n                  <img  src=\"assets/images/3.jpg\" alt=\" \" class=\"img-responsive\" />\n                  <img  src=\"assets/images/4.jpg\" alt=\" \" class=\"img-responsive\" />\n                  <img  src=\"assets/images/5.jpg\" alt=\" \" class=\"img-responsive\" />\n                  <div class=\"w3_hs_bottom\">\n                    <ul>\n                      <li>\n                        <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\"><span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span></a>\n                      </li>\n                    </ul>\n                  </div>\n                </div> \n                <h5><a href=\"single.html\">{{book.name}}</a></h5>\n                <div class=\"simpleCart_shelfItem\">\n                  <p>\n                    <span>{{book.price}}</span> <i class=\"item_price\">{{book.price}}</i>\n                  </p>\n                    <button (click)=\"addToCart(book.id, book.price)\" type=\"submit\" class=\"w3ls-cart\">Add to cart</button>\n                </div>\n              </div>\n              <div class=\"clearfix\"> </div>\n            </div>            \n          </div>\n  \n          \n              </div>\n              \n              <div class=\"clearfix\"> </div>\n            </div>\n          </div>\n         \n        </div>\n      <!-- </div> \n    </div>\n    <div class=\"clearfix\"> </div> -->\n</div> -->\n\n\n<!-- //modal-video -->\n<!-- banner-bottom1 -->\n<div class=\"banner-bottom1\">\n  <div class=\"agileinfo_banner_bottom1_grids\">\n    <div class=\"col-md-7 agileinfo_banner_bottom1_grid_left\">\n      <h3>Grand Opening Event With <span>20% <i>Discount</i></span></h3>\n      <a href=\"products.html\">Shop Now</a>\n    </div>\n    <div class=\"col-md-5 agileinfo_banner_bottom1_grid_right\">\n      <h4>hot deal</h4>\n      <div class=\"timer_wrap\">\n        <div id=\"counter\"> </div>\n      </div>\n      <script src=\"assets/js/jquery.countdown.js\"></script>\n      <script src=\"assets/js/script.js\"></script>\n    </div>\n    <div class=\"clearfix\"> </div>\n  </div>\n</div>\n\n\n\n\n<!-- //banner-bottom1 --> \n<!-- special-deals -->\n<div class=\"special-deals\">\n  <div class=\"container\">\n    <h2>Special Deals</h2>\n    <div class=\"w3agile_special_deals_grids\">\n      <div class=\"col-md-7 w3agile_special_deals_grid_left\">\n        <div class=\"w3agile_special_deals_grid_left_grid\">\n          <img  src=\"assets/images/21.jpg\" alt=\" \" class=\"img-responsive\" />\n          <div class=\"w3agile_special_deals_grid_left_grid_pos1\">\n            <h5>30%<span>Off/-</span></h5>\n          </div>\n          <div class=\"w3agile_special_deals_grid_left_grid_pos\">\n            <h4>We Offer <span>Best Books</span></h4>\n          </div>\n        </div>\n    \n          <script src=\"assets/js/jquery.wmuSlider.js\"></script> \n          <script>\n            $('.example1').wmuSlider();         \n          </script> \n      </div>\n      <div class=\"col-md-5 w3agile_special_deals_grid_right\">\n        <img  src=\"assets/images/20.jpg\" alt=\" \" class=\"img-responsive\" />\n        <div class=\"w3agile_special_deals_grid_right_pos\">\n          <h4>Book's <span>Special</span></h4>\n          <h5>save up <span>to</span> 30%</h5>\n        </div>\n      </div>\n      <div class=\"clearfix\"> </div>\n    </div>\n  </div>\n</div>\n<!-- //special-deals -->\n<!-- new-products -->\n<div class=\"new-products\">\n  <div class=\"container\">\n    <h3>New Books</h3>\n    <div class=\"agileinfo_new_products_grids\">\n      <div class=\"col-md-3 agileinfo_new_products_grid\">\n        <div class=\"agile_ecommerce_tab_left agileinfo_new_products_grid1\">\n          <div class=\"hs-wrapper hs-wrapper1\">\n            <img  src=\"assets/images/captain.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/cap1.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/cap2.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/cap3.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/cap4.jpg\" alt=\" \" class=\"img-responsive\" /> \n            <div class=\"w3_hs_bottom w3_hs_bottom_sub\">\n              <ul>\n                <li>\n                  <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal2\"><span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span></a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <h5><a href=\"single.html\">Captain Underpants</a></h5>\n          <div class=\"simpleCart_shelfItem\">\n            <p><span>$10.50</span> <i class=\"item_price\">$9.95</i></p>\n            <form action=\"#\" method=\"post\">\n              <input type=\"hidden\" name=\"cmd\" value=\"_cart\">\n              <input type=\"hidden\" name=\"add\" value=\"1\"> \n              <input type=\"hidden\" name=\"w3ls_item\" value=\"Captain Underpants\"> \n              <input type=\"hidden\" name=\"amount\" value=\"9.95\">   \n              <button type=\"submit\" class=\"w3ls-cart\" [routerLink]=\"['/book','1']\">Add to cart</button>\n      \n            </form>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"col-md-3 agileinfo_new_products_grid\">\n        <div class=\"agile_ecommerce_tab_left agileinfo_new_products_grid1\">\n          <div class=\"hs-wrapper hs-wrapper1\">\n            <img  src=\"assets/images/game.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/gm1.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/gm2.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/gm3.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/gm4.jpg\" alt=\" \" class=\"img-responsive\" /> \n            <div class=\"w3_hs_bottom w3_hs_bottom_sub\">\n              <ul>\n                <li>\n                  <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\"><span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span></a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <h5><a href=\"single.html\">Game Master</a></h5>\n          <div class=\"simpleCart_shelfItem\">\n            <p><span>$12.99</span> <i class=\"item_price\">$10.99</i></p>\n            <form action=\"#\" method=\"post\">\n              <input type=\"hidden\" name=\"cmd\" value=\"_cart\">\n              <input type=\"hidden\" name=\"add\" value=\"1\"> \n              <input type=\"hidden\" name=\"w3ls_item\" value=\"Game Master\"> \n              <input type=\"hidden\" name=\"amount\" value=\"10.99\">   \n              <button type=\"submit\" class=\"w3ls-cart\" [routerLink]=\"['/book','3']\">Add to cart</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3 agileinfo_new_products_grid\">\n        <div class=\"agile_ecommerce_tab_left agileinfo_new_products_grid1\">\n          <div class=\"hs-wrapper hs-wrapper1\">\n            <img  src=\"assets/images/34.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/33.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/36.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/35.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/36.jpg\" alt=\" \" class=\"img-responsive\" /> \n            <div class=\"w3_hs_bottom w3_hs_bottom_sub\">\n              <ul>\n                <li>\n                  <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal5\"><span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span></a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <h5><a href=\"single.html\">Caste</a></h5>\n          <div class=\"simpleCart_shelfItem\">\n            <p><span>$55.00</span> <i class=\"item_price\">$42.00</i></p>\n            <form action=\"#\" method=\"post\">\n              <input type=\"hidden\" name=\"cmd\" value=\"_cart\">\n              <input type=\"hidden\" name=\"add\" value=\"1\"> \n              <input type=\"hidden\" name=\"w3ls_item\" value=\"Caste\"> \n              <input type=\"hidden\" name=\"amount\" value=\"42.00\">   \n              <button type=\"submit\" class=\"w3ls-cart\" [routerLink]=\"['/book','2']\">Add to cart</button>\n            </form>\n          </div>  \n        </div>\n      </div>\n      <div class=\"col-md-3 agileinfo_new_products_grid\">\n        <div class=\"agile_ecommerce_tab_left agileinfo_new_products_grid1\">\n          <div class=\"hs-wrapper hs-wrapper1\">\n            <img  src=\"assets/images/25.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/23.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/24.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/22.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/26.jpg\" alt=\" \" class=\"img-responsive\" /> \n            <div class=\"w3_hs_bottom w3_hs_bottom_sub\">\n              <ul>\n                <li>\n                  <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal6\"><span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span></a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <h5><a href=\"single.html\">Crossroads</a></h5>\n          <div class=\"simpleCart_shelfItem\" > \n            <p><span>$30</span> <i class=\"item_price\">$25</i></p>\n            <form action=\"#\" method=\"post\">\n              <input type=\"hidden\" name=\"cmd\" value=\"_cart\">\n              <input type=\"hidden\" name=\"add\" value=\"id\" id=\"1\"> \n              <input type=\"hidden\" name=\"w3ls_item\" value=\"Croosroads\"> \n              <input type=\"hidden\" name=\"amount\" value=\"10.99\" price=\"10.99\">  \n              <!-- <input type=\"hidden\" name={{book.id}} value={{1}} book.id={{1}} book.price={25}> \n              <input type=\"hidden\" name=\"name\" value={{Crossroads}}> \n              <input type=\"hidden\" name={{book.price}} value={{25}}>    -->\n              <!-- <button class=\"w3ls-cart\" (click)=\"addToCart(book.id, book.price)\" [disabled]=\"book.isAdded===true\">Add to cart</button> -->\n              <button class=\"w3ls-cart\" [routerLink]=\"['/book','6']\">Add to cart</button> \n              <!-- <button class=\"w3ls-cart\" (click)=\"addToCart(book.id, book.price)\"  [book.id]='1' [book.price]='10.99'>Add to cart</button>  -->\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"clearfix\"> </div>\n    </div>\n  </div>\n</div>\n<!-- //new-products -->\n<!-- top-brands -->\n<div class=\"top-brands\">\n  <div class=\"container\">\n    <h3>The best BookStore in Town!</h3>\n      <div class=\"row\">\n        <div class=\"col-sm-4\" style=\"margin-right: 50px;\"> \n          <img src=  \"assets/images/nice.jpg\">\n        </div> \n        <div class=\"col-sm-4\" style=\"margin-left: 150px;\"> \n          <img src=  \"assets/images/2-1.jpg\">\n        </div>      \n      </div>\n  \n  \n    <br><br>\n</div>\n<!-- //top-brands --> \n<!-- newsletter -->\n<div class=\"newsletter\">\n  <div class=\"container\">\n    <div class=\"col-md-6 w3agile_newsletter_left\">\n      <h3>Newsletter</h3>\n      <p>Subscribe to our newsletter and be update about promotions an new arrivals.</p>\n    </div>\n    <div class=\"col-md-6 w3agile_newsletter_right\">\n      <form action=\"#\" method=\"post\">\n        <input type=\"email\" name=\"Email\" placeholder=\"Email\" required=\"\">\n        <input type=\"submit\" value=\"\" />\n      </form>\n    </div>\n    <div class=\"clearfix\"> </div>\n  </div>\n</div>\n<!-- //newsletter -->\n<div class=\"col-md-7 wthree_banner_bottom_right\">\n  <div class=\"bs-example bs-example-tabs\" role=\"tabpanel\" data-example-id=\"togglable-tabs\">\n    <ul id=\"myTab\" class=\"nav nav-tabs\" role=\"tablist\">\n      <li *ngFor=\"let category of categoryList\" role=\"presentation\" >\n        <a (click)=\"getProductsByCateogy(category)\" href=\"javascript:void(0)\" id=\"home-tab\" role=\"tab\" data-toggle=\"tab\" aria-controls=\"home\">{{category.name}}</a>\n      </li>\n    </ul>\n\n    <!-- <div id=\"myTabContent\" class=\"tab-content\">\n      <div role=\"tabpanel\" class=\"tab-pane fade active in\" id=\"home\" aria-labelledby=\"home-tab\">\n        <div   class=\"agile_ecommerce_tabs\">\n          <div  *ngFor=\"let data of productsList\" class=\"col-md-4 agile_ecommerce_tab_left\">\n            <div class=\"hs-wrapper\">\n              <img  src=\"assets/images/3.jpg\" alt=\" \" class=\"img-responsive\" />\n              <img  src=\"assets/images/4.jpg\" alt=\" \" class=\"img-responsive\" />\n              <img  src=\"assets/images/5.jpg\" alt=\" \" class=\"img-responsive\" />\n              <img  src=\"assets/images/6.jpg\" alt=\" \" class=\"img-responsive\" />\n              <img  src=\"assets/images/7.jpg\" alt=\" \" class=\"img-responsive\" />\n              <img  src=\"assets/images/3.jpg\" alt=\" \" class=\"img-responsive\" />\n              <img  src=\"assets/images/4.jpg\" alt=\" \" class=\"img-responsive\" />\n              <img  src=\"assets/images/5.jpg\" alt=\" \" class=\"img-responsive\" />\n              <div class=\"w3_hs_bottom\">\n                <ul>\n                  <li>\n                    <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\"><span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span></a>\n                  </li>\n                </ul>\n              </div>\n            </div> \n            <h5><a href=\"single.html\">{{book.name}}</a></h5>\n            <div class=\"simpleCart_shelfItem\">\n              <p>\n                <span>{{book.price}}</span> <i class=\"item_price\">{{book.author}}</i>\n              </p>\n                <button (click)=\"addCart(data)\" type=\"submit\" class=\"w3ls-cart\">Add to cart</button>\n            </div>\n          </div>\n          <div class=\"clearfix\"> </div>\n        </div>            \n      </div> -->\n\n\n<!-- footer -->\n<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"w3_footer_grids\">\n      <div class=\"col-md-3 w3_footer_grid\">\n        <h3>Contact</h3>\n        <p>Visit our location.</p>\n        <ul class=\"address\">\n          <li><i class=\"glyphicon glyphicon-map-marker\" aria-hidden=\"true\"></i>123 Noplace Road, unit 4, <span>Toronto.</span></li>\n          <li><i class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></i><a href=\"mailto:info@example.com\">info@bookstore.com</a></li>\n          <li><i class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></i>+1234 567 8999</li>\n        </ul>\n      </div>\n      <div class=\"col-md-3 w3_footer_grid\">\n        <h3>Information</h3>\n        <ul class=\"info\"> \n          <li><a href=\"about.html\">About Us</a></li>\n          <li><a href=\"mail.html\">Contact Us</a></li>\n          <li><a href=\"codes.html\">Social Media</a></li>\n          <li><a href=\"faq.html\">FAQ's</a></li>\n          <li><a href=\"products.html\">Special Products</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-3 w3_footer_grid\">\n        <h3>Category</h3>\n        <ul class=\"info\"> \n          <li><a href=\"products.html\">Kids</a></li>\n          <li><a href=\"products1.html\">Romance</a></li>\n          <li><a href=\"products.html\">Fiction</a></li>\n          <li><a href=\"products1.html\">Cooking</a></li>\n          <li><a href=\"products2.html\">Health</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-3 w3_footer_grid\">\n        <h3>Profile</h3>\n        <ul class=\"info\"> \n          <li><a href=\"index.html\">Home</a></li>\n          <li><a href=\"products.html\">Today's Deals</a></li>\n        </ul>\n        <h4>Follow Us</h4>\n        <div class=\"agileits_social_button\">\n          <ul>\n            <li><a href=\"#\" class=\"facebook\"> </a></li>\n            <li><a href=\"#\" class=\"twitter\"> </a></li>\n            <li><a href=\"#\" class=\"google\"> </a></li>\n            <li><a href=\"#\" class=\"pinterest\"> </a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"clearfix\"> </div>\n    </div>\n  </div>\n  <div class=\"footer-copy\">\n    <div class=\"footer-copy1\">\n      <div class=\"footer-copy-pos\">\n        <a href=\"#home1\" class=\"scroll\"><img  src=\"assets/images/arrow.png\" alt=\" \" class=\"img-responsive\" /></a>\n      </div>\n    </div>\n    <div class=\"container\">\n      <p>&copy; 2021 BookStore. All rights reserved | Design by <a href=\"http://revature.com/\">Revature | Group 4</a></p>\n    </div>\n  </div>\n</div>\n<!-- //footer --> \n<!-- cart-js -->\n<script src=\"assets/js/minicart.js\"></script>\n<script>\n      w3ls.render();\n\n      w3ls.cart.on('w3sb_checkout', function (evt) {\n        var items, len, i;\n\n        if (this.subtotal() > 0) {\n          items = this.items();\n\n          for (i = 0, len = items.length; i < len; i++) { \n          }\n        }\n      });\n  </script>  ");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/owner/Downloads/ShopApp-frontend-main/src/main.ts */"zUnb");


/***/ }),

/***/ "0ksM":
/*!*************************************************!*\
  !*** ./src/app/service/cart-service.service.ts ***!
  \*************************************************/
/*! exports provided: CartServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartServiceService", function() { return CartServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "Xv0t");




var CartServiceService = /** @class */ (function () {
    function CartServiceService(http) {
        this.http = http;
        this.cartServiceEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.cartQty = 0;
        this.cartObj = [];
        this.getCartDetailsByUser();
    }
    CartServiceService.prototype.getCartDetailsByUser = function () {
        var _this = this;
        this.http.postRequestWithToken("addtocart/getCartsByUserId", {}).subscribe(function (data) {
            //alert("Error while fetching the cart Details");
            _this.cartObj = data;
            _this.cartQty = data.length;
            _this.cartTotalPrice = _this.getTotalAmountOfTheCart();
            console.log(_this.cartObj);
            _this.cartServiceEvent.next({ "status": "completed" }); //emitter
        }, function (error) {
            alert("Please log in to access all features.");
        });
    };
    CartServiceService.prototype.addCart = function (obj) {
        var _this = this;
        //this.cartServiceEvent.next({"status":"completed"})//emitter
        var userId = this.http.getLoginDataByKey("user_id");
        var request = {
            "userId": userId,
            "productId": obj.productId,
            "qty": obj.qty,
            "price": obj.price
        };
        this.http.postRequestWithToken("addtocart/addProduct", request).subscribe(function (data) {
            _this.getCartDetailsByUser();
        }, function (error) {
            //if the products is already in cart
            alert("You already added the book. To add more books, go to checkout cart.");
        });
    };
    CartServiceService.prototype.getCartOBj = function () {
        return this.cartObj;
    };
    CartServiceService.prototype.getTotalAmountOfTheCart = function () {
        var obj = this.cartObj;
        var totalPrice = 0;
        for (var o in obj) {
            totalPrice = totalPrice + parseFloat(obj[o].price);
        }
        return totalPrice.toFixed(2);
    };
    CartServiceService.prototype.getQty = function () {
        return this.cartQty;
    };
    CartServiceService.prototype.alertCart = function () {
        alert('invalid');
    };
    CartServiceService.prototype.removeCart = function (addCartId) {
        var _this = this;
        /*
          var request = {
              "productId":"dummy_val",
              "cartId":cartId,
          }
          */
        var userId = this.http.getLoginDataByKey("user_id");
        var request = {
            "userId": userId,
            "addCartId": addCartId
        };
        this.http.postRequestWithToken("addtocart/removeProductFromCart", request).subscribe(function (data) {
            _this.getCartDetailsByUser();
        }, function (error) {
            //   alert("Error while fetching the cart Details");
        });
    };
    CartServiceService.ctorParameters = function () { return [
        { type: _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"] }
    ]; };
    CartServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"]])
    ], CartServiceService);
    return CartServiceService;
}());



/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2Ic5":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n  }\n  \n  html {\n    box-sizing: border-box;\n  }\n  \n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  .column {\n    float: left;\n    width: 33.3%;\n    margin-bottom: 16px;\n    padding: 0 8px;\n  }\n  \n  .card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    margin: 8px;\n  }\n  \n  .about-section {\n    padding: 50px;\n    text-align: center;\n    background-color: #000;\n    /*background-color: #474e5d; */\n    color: white;\n  }\n  \n  .container {\n    padding: 0 16px;\n  }\n  \n  .container::after, .row::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n  \n  .title {\n    color: grey;\n  }\n  \n  .button {\n    border: none;\n    outline: 0;\n    display: inline-block;\n    padding: 8px;\n    color: white;\n    background-color: #000;\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n  }\n  \n  .button:hover {\n    background-color: #555;\n  }\n  \n  img {\n    border-radius: 50%;\n    width: 80px;\n    height: auto;\n  }\n  \n  @media screen and (max-width: 150px) {\n    .column {\n      width: 100%;\n      display: block;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBeUM7SUFDekMsU0FBUztFQUNYOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCxjQUFjO0lBQ2hCO0VBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgaHRtbCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIH1cbiAgXG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzMy4zJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG1hcmdpbjogOHB4O1xuICB9XG4gIFxuICAuYWJvdXQtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7ICovXG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXI6OmFmdGVyLCAucm93OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuICBcbiAgLnRpdGxlIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgfVxuICBcbiAgLmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICB9XG5cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTBweCkge1xuICAgIC5jb2x1bW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "2ZcO":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"typo codes icons main-grid-border\">\n    <div class=\"container\"> \n        <div>\n            <h1>Checkout Cart</h1>\n\n\n<div style=\"display: block;\" id=\"w3lssbmincart\">  \n        <ul>        \n          <li *ngFor=\"let cart of cartObj\" class=\"sbmincart-item sbmincart-item-changed\">       \n                   <div class=\"sbmincart-details-name\">             \n                  <a class=\"sbmincart-name\">{{cart.product.name}}</a>      \n               </div>         \n               <div class=\"sbmincart-details-quantity\"> \n                     <select  [(ngModel)]=\"cart.qty\" (change)=\"qtyChange($event.target.value,cart)\">\n                         <option>1</option>\n                         <option>2</option>\n                         <option>3</option>\n                         <option>4</option>\n                         <option>5</option>\n                         <option>6</option>\n                         <option>7</option>\n                         <option>8</option>\n                         <option>9</option>\n                         <option>10</option>\n                    </select>\n               </div>         \n               <div class=\"sbmincart-details-remove\">          \n                   <button (click)=\"removeCartById(cart)\" type=\"button\" class=\"sbmincart-remove\" data-sbmincart-idx=\"0\">×</button>     \n               </div>  \n               <!-- <div class=\"sbmincart-details-remove\">          \n                <button (click)=\"removeCart(cartId)\" type=\"button\" class=\"sbmincart-remove\" data-sbmincart-idx=\"0\">×</button>     \n            </div>        -->\n               <!-- <div class=\"sbmincart-details-remove\">          \n                <button (click)=\"alert(cart)\" type=\"button\" class=\"sbmincart-remove\" data-sbmincart-idx=\"0\">×</button>     \n            </div>  -->\n               <div class=\"sbmincart-details-price\">           \n                 <span class=\"sbmincart-price\">${{cart.price}}</span>       \n               </div>     \n       </li>   \n      \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n     </ul>  \n     <div class=\"sbmincart-footer\">       \n        <div class=\"sbmincart-subtotal radio-wrap\">  \n            <span><input [(ngModel)]=\"pay_type\" value=\"cash_on_delivery\" type=\"radio\" name=\"pay_type\" /><span  class=\"radio_text\">Cash on Delivery</span></span>\n            <span><input [(ngModel)]=\"pay_type\" value=\"credit card\" name=\"pay_type\" type=\"radio\"/><span class=\"radio_text\">Credit card</span></span>\n          </div> \n          <div class=\"sbmincart-subtotal\">  \n            <textarea placeholder=\"Enter the Delivery address\" [(ngModel)]=\"delivery_address\"></textarea>\n         </div>\n         \n         \n       <div class=\"sbmincart-subtotal\">  \n        Subtotal: <span class=\"price\">${{cartTotalPrice}}</span>\n     </div>  \n     \n   \n     <div>\n             <button (click)=\"checkoutCart()\">Place Order</button>   \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n      </div>\n               </div>  \n    <input type=\"hidden\" name=\"bn\" value=\"sbmincart_AddToCart_WPS_US\">   \n  </div>\n        </div>\n        \n    </div>\t\n</div>\n<!-- //web icons -->   \n<!-- newsletter -->\n<div class=\"newsletter\">\n    <div class=\"container\">\n        <div class=\"col-md-6 w3agile_newsletter_left\">\n            <h3>Newsletter</h3>\n            <p>Signup for our newsletter.</p>\n        </div>\n        <div class=\"col-md-6 w3agile_newsletter_right\">\n            <form action=\"#\" method=\"post\">\n                <input type=\"email\" name=\"Email\" placeholder=\"Email\" required=\"\">\n                <input type=\"submit\" value=\"\" />\n            </form>\n        </div>\n        <div class=\"clearfix\"> </div>\n    </div>\n</div>\n<!-- //newsletter -->\n<!-- footer -->\n<div class=\"footer\">\n    <div class=\"container\">\n        <div class=\"w3_footer_grids\">\n            <div class=\"col-md-3 w3_footer_grid\">\n                <h3>Contact</h3>\n                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>\n                <ul class=\"address\">\n                    <li><i class=\"glyphicon glyphicon-map-marker\" aria-hidden=\"true\"></i>1234k Avenue, 4th block, <span>New York City.</span></li>\n                    <li><i class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></i><a href=\"mailto:info@example.com\">info@example.com</a></li>\n                    <li><i class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></i>+1234 567 567</li>\n                </ul>\n            </div>\n            <div class=\"col-md-3 w3_footer_grid\">\n                <h3>Information</h3>\n                <ul class=\"info\"> \n                    <li><a href=\"about.html\">About Us</a></li>\n                    <li><a href=\"mail.html\">Contact Us</a></li>\n                    <li><a href=\"codes.html\">Short Codes</a></li>\n                    <li><a href=\"faq.html\">FAQ's</a></li>\n                    <li><a href=\"products.html\">Special Products</a></li>\n                </ul>\n            </div>\n            <div class=\"col-md-3 w3_footer_grid\">\n                <h3>Category</h3>\n                <ul class=\"info\"> \n                    <li><a href=\"products.html\">Mobiles</a></li>\n                    <li><a href=\"products1.html\">Laptops</a></li>\n                    <li><a href=\"products.html\">Purifiers</a></li>\n                    <li><a href=\"products1.html\">Wearables</a></li>\n                    <li><a href=\"products2.html\">Kitchen</a></li>\n                </ul>\n            </div>\n            <div class=\"col-md-3 w3_footer_grid\">\n                <h3>Profile</h3>\n                <ul class=\"info\"> \n                    <li><a href=\"index.html\">Home</a></li>\n                    <li><a href=\"products.html\">Today's Deals</a></li>\n                </ul>\n                <h4>Follow Us</h4>\n                <div class=\"agileits_social_button\">\n                    <ul>\n                        <li><a href=\"#\" class=\"facebook\"> </a></li>\n                        <li><a href=\"#\" class=\"twitter\"> </a></li>\n                        <li><a href=\"#\" class=\"google\"> </a></li>\n                        <li><a href=\"#\" class=\"pinterest\"> </a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"clearfix\"> </div>\n        </div>\n    </div>\n    <div class=\"footer-copy\">\n        <div class=\"footer-copy1\">\n            <div class=\"footer-copy-pos\">\n                <a href=\"#home1\" class=\"scroll\"><img src=\"images/arrow.png\" alt=\" \" class=\"img-responsive\" /></a>\n            </div>\n        </div>\n        <div class=\"container\">\n            <p>&copy; 2017 Electronic Store. All rights reserved | Design by <a href=\"http://w3layouts.com/\">W3layouts</a></p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "5TFM":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about-section\">\n  <h1>About Us</h1>\n  <p>We developed an API using Spring Boot and a client application that will consume the API using Angular.</p>\n  <p>\n    The user will be able to login, and add/remove books from a product list to/from a shopping cart and to place an order.</p>\n</div>\n\n<h2 style=\"text-align:center\">Our Team</h2>\n<div class=\"row\">\n  <div class=\"column\">\n    <div class=\"card\">\n      <img src=\"assets/images/kati.jpg\" alt=\"Kati\" style=\"width:100%\">\n      <div class=\"container\">\n        <h2>Katiuscia Novaes</h2>\n        <p class=\"title\">Software Developer</p>\n        <p>Developer, tech lover and lifetime learner. 😏💕</p>\n        <p>katiuscia.novaesdesa@revature.com</p>\n        <!-- <p><button class=\"button\">Contact</button></p> -->\n      </div>\n    </div>\n  </div>\n\n  <div class=\"column\">\n    <div class=\"card\">\n      <img src=\"/assets/images/tom.jpg\" alt=\"Thah\" style=\"width:100%\">\n      <div class=\"container\">\n        <h2>Thanh Tran</h2>\n        <p class=\"title\">Software Developer</p>\n        <p>Developer, tech lover.</p>\n        <p>thanhtam.tran@revature.net</p>\n        <!-- <p><button class=\"button\">Contact</button></p> -->\n      </div>\n    </div>\n  </div>\n\n  <div class=\"column\">\n    <div class=\"card\">\n      <img src=\"/assets/images/sree.jpg\" alt=\"Sree\" style=\"width:100%\">\n      <div class=\"container\">\n        <h2>Sree Manikandan</h2>\n        <p class=\"title\">Software Developer</p>\n        <p>Developer, tech lover.</p>\n        <p>sree.manikandan@revature.com</p>\n        <!-- <p><button class=\"button\">Contact</button></p> -->\n      </div>\n    </div>\n  </div>\n\n  <div class=\"column\">\n    <div class=\"card\">\n      <img src=\"/assets/images/neethu.jpg\" alt=\"Neethu\" style=\"width:100%\">\n      <div class=\"container\">\n        <h2>Neethu Augustin</h2>\n        <p class=\"title\">Software Developer</p>\n        <p>Developer, tech lover.</p>\n        <p>neethu.augustin@revature.com</p>\n        <!-- <p><button class=\"button\">Contact</button></p> -->\n      </div>\n    </div>\n  </div>\n\n  <div class=\"column\">\n    <div class=\"card\">\n      <img src=\"/assets/images/asha.jpg\" alt=\"Aisha\" style=\"width:100%\">\n      <div class=\"container\">\n        <h2>Aisha</h2>\n        <p class=\"title\">Software Developer</p>\n        <p>Developer, tech lover.</p>\n        <p>aisha@revature.com</p>\n        <!-- <p><button class=\"button\">Contact</button></p> -->\n      </div>\n    </div>\n  </div>\n\n  <div class=\"column\">\n    <div class=\"card\">\n      <img src={{src}} alt=\"new team\" style=\"width:100%\"> \n       <br>\n       <h2>{{fullname}}</h2> \n       <p>{{email}}</p>\n       <p>{{message}}</p>    \n       <br>  \n    </div>\n  </div>\n\n</div>\n\n\n\n<br>\n<br>\n<div class=\"about-section\">\n<h1>Want to be in our team?</h1>\n<br><br>\n<!-- \n<button (click)=\"onClick1()\" class=\"btn btn-success row container-fluid\" id=\"divshow\" style=\"color: white; font-size: 16px;\"> Sign Up Now!! {{show1}}</button> -->\n\n<button (click)=\"onClick1()\" class=\"btn btn-success row container-fluid\" id=\"divshow\" style=\"color: white; font-size: 16px; margin:5px\"> Sign Up Now!!</button>\n<ng-template [ngIf]=\"show1\"><div>\n<label class=\"btn btn-default mb-3\" >\n  <form #userlogin = \"ngForm\" (ngSubmit) = \"onClick(userlogin.value)\" >\n   <input class=\"form-label\" type = \"text\" name = \"fullName\" placeholder = \"Your full name\" ngModel>\n   <input class=\"form-label\" type = \"text\" name = \"email\" placeholder = \"Your email\" ngModel>\n   <textarea class=\"form-label\" name = \"message\" placeholder = \"Your message\" ngModel></textarea>\n    <br/>\n   <!-- <button class=\"btn btn-success\"> Upload your picture! {{show}}</button> -->\n\n   <button class=\"btn btn-success\" style=\"margin-top: 15px;\"> Upload your picture! </button>\n  </form>\n    <ng-template [ngIf]=\"show\"><div><input type=\"file\" (change)=\"selectFile($event)\"></div>\n    </ng-template>\n  </label>\n  <br>\n  <br>\n\n  <button class=\"btn btn-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\n  \n</div></ng-template>");

/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.component.html */ "5TFM");
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component.css */ "2Ic5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../upload.service */ "cmkx");





var AboutComponent = /** @class */ (function () {
    function AboutComponent(uploadService) {
        this.uploadService = uploadService;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.upload = function () {
        var file = this.selectedFiles.item(0);
        this.uploadService.uploadfile(file);
        this.filekey1 = file.name;
        this.src = "https://sree-project2.s3.us-east-2.amazonaws.com/" + file.name;
        console.log(this.filekey1);
    };
    AboutComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    AboutComponent.prototype.print = function () {
        this.filekey = this.filekey1;
        console.log(this.filekey);
        return this.filekey;
    };
    AboutComponent.prototype.onClick = function (data) {
        console.log(data);
        this.fullname = data.fullName;
        this.email = data.email;
        this.message = data.message;
        this.show = true;
    };
    AboutComponent.prototype.onClick1 = function () {
        this.show1 = true;
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"] }
    ]; };
    AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-about',
            template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal.fade.in{\n    display: block;\n}\n#horizontalTab.login .tab-1.resp-tab-content{\ndisplay: block;\n}\n#horizontalTab.register .tab-2.resp-tab-content{\n    display: block;\n}\n.w3l_login .username{\n    color: #df492b;\n}\n.checkout-count-wrap{\n    position: relative;\n}\n.total_count_checkout{\n    position: absolute;\n    top: -15px;\n    right: -7px;\n    z-index: 1000;\n    color: #da6767;\n    font-weight: bold;\n    font-size: 1.5em;\n}\n.agile_ecommerce_tab_left{\n    margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLmZhZGUuaW57XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4jaG9yaXpvbnRhbFRhYi5sb2dpbiAudGFiLTEucmVzcC10YWItY29udGVudHtcbmRpc3BsYXk6IGJsb2NrO1xufVxuI2hvcml6b250YWxUYWIucmVnaXN0ZXIgLnRhYi0yLnJlc3AtdGFiLWNvbnRlbnR7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udzNsX2xvZ2luIC51c2VybmFtZXtcbiAgICBjb2xvcjogI2RmNDkyYjtcbn1cblxuLmNoZWNrb3V0LWNvdW50LXdyYXB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvdGFsX2NvdW50X2NoZWNrb3V0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIHJpZ2h0OiAtN3B4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgY29sb3I6ICNkYTY3Njc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmFnaWxlX2Vjb21tZXJjZV90YWJfbGVmdHtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn0iXX0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DN7M":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal.fade.in{\n    /* display: block; */\n}\n.modal.fade.login_dialog, #w3lssbmincart.checkout_dialog{\n    display: block;\n}\n#horizontalTab.login .tab-1.resp-tab-content{\ndisplay: block;\n}\n#horizontalTab.register .tab-2.resp-tab-content{\n    display: block;\n}\n.w3l_login .username{\n    color: red;\n}\n.agile_ecommerce_tab_left{\n    margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUtBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLmZhZGUuaW57XG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXG59XG4ubW9kYWwuZmFkZS5sb2dpbl9kaWFsb2csICN3M2xzc2JtaW5jYXJ0LmNoZWNrb3V0X2RpYWxvZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiNob3Jpem9udGFsVGFiLmxvZ2luIC50YWItMS5yZXNwLXRhYi1jb250ZW50e1xuZGlzcGxheTogYmxvY2s7XG59XG4jaG9yaXpvbnRhbFRhYi5yZWdpc3RlciAudGFiLTIucmVzcC10YWItY29udGVudHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi53M2xfbG9naW4gLnVzZXJuYW1le1xuICAgIGNvbG9yOiByZWQ7XG59XG5cblxuXG5cbi5hZ2lsZV9lY29tbWVyY2VfdGFiX2xlZnR7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59Il19 */");

/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout.component.html */ "2ZcO");
/* harmony import */ var _checkout_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.component.css */ "PkTJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_cart_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/cart-service.service */ "0ksM");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "Xv0t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(router, cartService, http) {
        this.router = router;
        this.cartService = cartService;
        this.http = http;
        this.cartObj = [];
        this.pay_type = "cash_on_delivery";
        this.delivery_address = "";
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCartDetailsByUser();
        //below function will be triggerd from when removing and qty  is changing..
        this.cartService.cartServiceEvent.subscribe(function (data) {
            _this.cartObj = _this.cartService.getCartOBj();
            _this.cartTotalPrice = _this.cartService.cartTotalPrice;
        });
    };
    CheckoutComponent.prototype.qtyChange = function (qty, cartObj) {
        var _this = this;
        var request = {
            "addCartId": cartObj.addCartId,
            "qty": qty,
            "price": (cartObj.price) * (qty)
        };
        this.http.postRequestWithToken("addtocart/updateQtyForCart", request).subscribe(function (data) {
            _this.cartService.getCartDetailsByUser(); //for updating in the application..
        }, function (error) {
            alert("Error while fetching the cart Details");
        });
    };
    CheckoutComponent.prototype.getCartDetailsByUser = function () {
        var _this = this;
        this.http.postRequestWithToken("addtocart/getCartsByUserId", {}).subscribe(function (data) {
            _this.cartObj = data;
            _this.cartTotalPrice = _this.getTotalAmounOfTheCart();
        }, function (error) {
            alert("Error while fetching the cart Details");
        });
    };
    CheckoutComponent.prototype.getTotalAmounOfTheCart = function () {
        var obj = this.cartObj;
        var totalPrice = 0;
        for (var o in obj) {
            totalPrice = totalPrice + parseFloat(obj[o].price);
        }
        return totalPrice.toFixed(2);
    };
    CheckoutComponent.prototype.removeCartById = function (cartObj) {
        if (confirm("Are you sure want to delete?")) {
            var id = cartObj.addCartId;
            console.log("About to be deleted " + id);
            this.cartService.removeCart(id);
        }
    };
    CheckoutComponent.prototype.checkoutCart = function () {
        var _this = this;
        if (this.delivery_address == "") {
            alert("Delivery address should not be empty");
            return;
        }
        if (this.pay_type != "") {
            var request = {
                "total_price": this.cartTotalPrice,
                "pay_type": this.pay_type,
                "deliveryAddress": this.delivery_address
            };
            this.http.postRequestWithToken("order/checkout_order", request).subscribe(function (data) {
                alert("Checkout process completed. Your order has been processed..");
                _this.cartService.getCartDetailsByUser();
                _this.router.navigate(['']);
            }, function (error) {
                // alert("Error while fetching the cart Details");
                alert("Checkout error, maybe price mismatch");
                _this.cartService.getCartDetailsByUser();
                _this.router.navigate(['']);
            });
        }
        else {
            alert("Payment Integration is not yet completed.");
        }
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _service_cart_service_service__WEBPACK_IMPORTED_MODULE_4__["CartServiceService"] },
        { type: _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"] }
    ]; };
    CheckoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-checkout',
            template: _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_checkout_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_cart_service_service__WEBPACK_IMPORTED_MODULE_4__["CartServiceService"], _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "PkTJ":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#w3lssbmincart{\n    display: block;\n    position: relative;\n    left: 0;\n    width: 50%;\n}\n.sbmincart-subtotal.radio-wrap span {\n    /* margin-left: 10px;\n    vertical-align: text-top; */\n}\n.radio_text{\n    margin: 0 10px;\n    vertical-align:middle;\n}\n.sbmincart-subtotal .price{\ncolor:red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0FBQ2Q7QUFDQTtJQUNJOytCQUMyQjtBQUMvQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0FBQ0EsU0FBUztBQUNUIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdzNsc3NibWluY2FydHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNTAlO1xufVxuLnNibWluY2FydC1zdWJ0b3RhbC5yYWRpby13cmFwIHNwYW4ge1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDsgKi9cbn1cblxuLnJhZGlvX3RleHR7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xufVxuLnNibWluY2FydC1zdWJ0b3RhbCAucHJpY2V7XG5jb2xvcjpyZWQ7XG59Il19 */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-service.service */ "Xv0t");





var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'book-store';
        this.http.postRequest("api/status", {}).subscribe(function (data) {
            console.log("test", data);
        }, function (error) {
            alert("Server connection error " + error);
        });
    }
    AppComponent.prototype.openCheckoutModel = function () {
        alert("open checkout model");
    };
    AppComponent.ctorParameters = function () { return [
        { type: _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TR6w":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "UDMC":
/*!****************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.component.ts ***!
  \****************************************************/
/*! exports provided: BookdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailComponent", function() { return BookdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bookdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bookdetail.component.html */ "kS5Q");
/* harmony import */ var _bookdetail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookdetail.component.css */ "uwRS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_cart_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/cart-service.service */ "0ksM");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http-service.service */ "Xv0t");







var BookdetailComponent = /** @class */ (function () {
    function BookdetailComponent(_Activatedroute, _router, http, cartService) {
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.http = http;
        this.cartService = cartService;
    }
    BookdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            console.log(params);
            _this.id = params.get('id');
            _this.getProductsByCategory(_this.id);
        });
    };
    BookdetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BookdetailComponent.prototype.getProductsByCategory = function (obj) {
        var _this = this;
        var request = {
            "category": obj
        };
        var url = 'product/getProductsByCategory';
        console.log("URL is " + url);
        this.http.postRequestWithToken(url, request).subscribe(function (data) {
            _this.books = data;
            if (_this.books.length == 0) {
                alert("No books found.");
            }
            else {
                console.log(_this.books);
            }
        }, function (error) {
            alert("Book already exists in the cart, you can modify the quantity later!");
        });
    };
    BookdetailComponent.prototype.addToCart = function (productId, productPrice) {
        var cartObj = {
            "productId": productId,
            "qty": "1",
            "price": productPrice
        };
        this.cartService.addCart(cartObj);
    };
    BookdetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"] },
        { type: _service_cart_service_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceService"] }
    ]; };
    BookdetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-bookdetail',
            template: _raw_loader_bookdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_bookdetail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"],
            _service_cart_service_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceService"]])
    ], BookdetailComponent);
    return BookdetailComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- for bootstrap working -->\n<script type=\"text/javascript\" src=\"assets/js/bootstrap-3.1.1.min.js\"></script>\n<!-- //for bootstrap working -->\n\n<app-header></app-header>\n<!-- //navigation -->\n<!-- banner -->\n\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "Xv0t":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "9YHx");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(http, router) {
        this.http = http;
        this.router = router;
        // url = "http://localhost:8080/";
        this.url = "http://ec2-35-183-206-50.ca-central-1.compute.amazonaws.com:8080/";
    }
    HttpServiceService.prototype.postRequest = function (url, param) {
        return this.http.post(this.url + url, param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError.bind(this)) // then handle the error
        );
    };
    HttpServiceService.prototype.postRequestWithToken = function (url, param) {
        var httpOptionsWithToken = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLoginToken()
            })
        };
        param['userId'] = this.getLoginDataByKey("user_id");
        return this.http.post(this.url + url, param, httpOptionsWithToken)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError.bind(this)) // then handle the error
        );
    };
    HttpServiceService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])("Something went wrong while connecting with server");
        }
    };
    HttpServiceService.prototype.setLoginData = function (data) {
        localStorage.setItem("login_data", JSON.stringify(data.user_profile_details));
    };
    HttpServiceService.prototype.getLoginDataByKey = function (key) {
        var data = JSON.parse(localStorage.getItem("login_data"));
        if (data.hasOwnProperty(key)) {
            return data[key];
        }
        return null;
    };
    HttpServiceService.prototype.setLoginToken = function (token) {
        if (token != "")
            localStorage.setItem("token", token);
    };
    HttpServiceService.prototype.getLoginToken = function () {
        return localStorage.getItem("token");
    };
    HttpServiceService.prototype.logout = function () {
        localStorage.setItem("token", "");
        localStorage.removeItem("cartObj");
        alert("You are successfully logged out.");
        this.router.navigate(['']);
    };
    HttpServiceService.prototype.isLogin = function () {
        try {
            console.log("login token ", this.getLoginToken());
            if (this.getLoginToken() != "" && this.getLoginToken().length > 10) {
                return true;
            }
        }
        catch (e) {
        }
        return false;
    };
    HttpServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    HttpServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ "aUdj");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bookdetail/bookdetail.component */ "UDMC");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_11__["BookdetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aUdj":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "/PpX");
/* harmony import */ var _index_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.component.css */ "TR6w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_cart_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/cart-service.service */ "0ksM");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "Xv0t");






var IndexComponent = /** @class */ (function () {
    function IndexComponent(cartService, http) {
        this.cartService = cartService;
        this.http = http;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.postRequestWithToken("api/product/getAllCategory", {}).subscribe(function (data) {
            _this.categoryList = data;
            if (_this.categoryList.length > 1)
                _this.getProductsByCategory(data[0]);
        }, function (error) {
            //  alert("Server connection error "+error)
        });
    };
    IndexComponent.prototype.addCart = function (cartProductObj) {
        var cartObj = {
            "productId": cartProductObj.id,
            "qty": "1",
            "price": cartProductObj.price
        };
        this.cartService.addCart(cartObj);
    };
    IndexComponent.prototype.getProductsByCategory = function (obj) {
        var _this = this;
        var request = {
            "cat_id": obj.id
        };
        this.http.postRequestWithToken('product/getProductsByCategory/' + obj.id, request).subscribe(function (data) {
            _this.productsList = data;
            if (_this.productsList.length == 0) {
                alert("No Product is found..");
            }
        }, function (error) {
            alert("Error in product Get " + error);
        });
    };
    IndexComponent.ctorParameters = function () { return [
        { type: _service_cart_service_service__WEBPACK_IMPORTED_MODULE_4__["CartServiceService"] },
        { type: _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"] }
    ]; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-index',
            template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_index_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_cart_service_service__WEBPACK_IMPORTED_MODULE_4__["CartServiceService"], _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "cmkx":
/*!***********************************!*\
  !*** ./src/app/upload.service.ts ***!
  \***********************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "tegk");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2__);



var UploadService = /** @class */ (function () {
    function UploadService() {
    }
    UploadService.prototype.uploadfile = function (file) {
        var bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2__({
            accessKeyId: 'AKIA547YFSLXVN3W2LWM',
            secretAccessKey: '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',
            region: 'us-east-2',
        });
        var params = {
            Bucket: 'sree-project2',
            Key: file.name,
            Body: file
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            this.filekey = file.Key;
            return true;
        });
    };
    UploadService.prototype.print = function () {
        console.log(this.filekey);
        return this.filekey;
    };
    UploadService.ctorParameters = function () { return []; };
    UploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "DN7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "Xv0t");
/* harmony import */ var _service_cart_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/cart-service.service */ "0ksM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");








var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, cartService, http) {
        var _this = this;
        this.router = router;
        this.cartService = cartService;
        this.http = http;
        this.faCheckSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheckSquare"];
        this.isOpenLoginDialog = false;
        this.currentDropDownMenu = "";
        this.dialogType = "login";
        this.mainDialogType = "";
        this.isLogin = false;
        this.mobile = "123456789";
        this.password = "test";
        this.cartObj = [];
        this.cart_qty = 0;
        this.cartTotalPrice = 0;
        this.register = { "name": "", "email": "", "mobile": "", "password": "", "re_password": "" };
        this.welcomeUsername = "";
        this.resetemail = "";
        this.show = false;
        var request = {};
        this.http.postRequest("api/status", request).subscribe(function (data) {
            console.log("test", data);
        }, function (error) {
            alert("Server connection error " + error);
        });
        if (this.http.isLogin()) {
            this.isLogin = true;
            this.welcomeUsername = this.http.getLoginDataByKey("name");
        }
        if (this.http.isLogin()) {
            this.isLogin = true;
            this.welcomeUsername = this.http.getLoginDataByKey("name");
        }
        this.cartService.cartServiceEvent.subscribe(function (data) {
            _this.cart_qty = _this.cartService.getQty();
        });
    }
    HeaderComponent.prototype.logout = function () {
        this.http.logout();
        this.isLogin = false;
    };
    HeaderComponent.prototype.forgotpassword = function () {
        alert("inside forgot password ");
        if (this.resetemail == "") {
            alert("email should not be empty");
            return;
        }
        var request = {
            "resetemail": this.resetemail,
        };
        this.http.postRequest('api/signup/resetemail', request).subscribe(function (data) {
            console.log("connected to server ${request}");
            console.log(data);
        }, function (error) {
            alert("Error in reset data " + error);
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    HeaderComponent.prototype.loginUserCheck = function () {
        var _this = this;
        if (this.mobile == "") {
            alert("Name should not be empty");
            return;
        }
        if (this.password == "") {
            alert("Password should not be empty");
            return;
        }
        var request = {
            "mobile": this.mobile,
            "password": this.password
        };
        this.http.postRequest('api/login/user', request).subscribe(function (data) {
            if (data.hasOwnProperty("token")) {
                _this.http.setLoginToken(data['token']);
                _this.http.setLoginData(data);
                _this.welcomeUsername = _this.http.getLoginDataByKey("name");
                _this.isLogin = true;
                _this.isOpenLoginDialog = false;
            }
        }, function (error) {
            alert("Error in login ");
        });
    };
    HeaderComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.register.name == "") {
            alert("Name should not be empty");
            return;
        }
        if (this.register.email == "") {
            alert("Email should not be empty");
            return;
        }
        if (this.register.password == "") {
            alert("password should not be empty");
            return;
        }
        if (this.register.password != this.register.re_password) {
            alert("password and rePassword should be same");
            return;
        }
        if (this.register.mobile == "") {
            alert("Mobile should not be empty");
            return;
        }
        var request = {
            "user_name": this.register.name,
            "email": this.register.email,
            "password": this.register.password,
            "mobile": this.register.mobile
        };
        this.http.postRequest('api/signup/user', request).subscribe(function (data) {
            alert("Register successfully.");
            console.log(data);
            _this.dialogType = "login";
        }, function (error) {
            alert("Error in login " + error);
        });
    };
    HeaderComponent.prototype.checkout_btn = function () {
        this.router.navigate(['checkout']);
    };
    HeaderComponent.prototype.openCheckoutModel = function () {
        this.cartObj = this.cartService.getCartOBj();
        this.cartTotalPrice = this.cartService.cartTotalPrice;
        this.mainDialogType = "checkout";
    };
    HeaderComponent.prototype.openDialog = function () {
        this.mainDialogType = "login";
    };
    HeaderComponent.prototype.dialogTypeInside = function (type) {
        if (this.dialogType != type)
            this.dialogType = type;
    };
    HeaderComponent.prototype.closeDialog = function () {
        this.mainDialogType = "";
    };
    HeaderComponent.prototype.curentDropDown = function (currentDropdownMenuName) {
        if (this.currentDropDownMenu == currentDropdownMenuName) {
            this.currentDropDownMenu = "";
        }
        else {
            this.currentDropDownMenu = currentDropdownMenuName;
        }
    };
    HeaderComponent.prototype.getProductsByCategory = function (obj) {
        var _this = this;
        var request = {
            "category": obj
        };
        var url = 'product/getProductsByCategory';
        console.log("URL is " + url);
        this.http.postRequestWithToken(url, request).subscribe(function (data) {
            _this.productsList = data;
            if (_this.productsList.length == 0) {
                alert("No Product is found..");
            }
            else {
                console.log(_this.productsList);
            }
        }, function (error) {
            alert("Error in product Get " + error);
        });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _service_cart_service_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceService"] },
        { type: _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] }
    ]; };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_cart_service_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceService"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "kS5Q":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookdetail/bookdetail.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container row\">\n    <div class=\"col-md-4\" *ngFor=\"let book of books;let i=index\">\n        <div class=\"card card-block\">\n            <div class=\"agile_ecommerce_tab_left agileinfo_new_products_grid1\">\n                <div class=\"hs-wrapper hs-wrapper1\">\n                      <img  src=\"assets/images/bn1.jpg\" alt=\" \" class=\"img-responsive\" />\n                      <img  src=\"assets/images/b2.jpg\" alt=\" \" class=\"img-responsive\" />\n                    </div>\n               \n            <!-- <img class=\"custom-image-style\" src=\"assets/images/captain.jpg\" height=\"300\" width=\"200\" style=\"margin-left: 60px;\n          margin-top: 10px\"> -->\n            <div class=\"book-desc-container row\" style=\" margin-top: -70px\">\n                    <p style=\"margin-left: -15px\"><strong>{{book.name}} and {{book.product_id}}: ${{book.price}}</strong></p>\n                    <p style=\"margin-left: -15px\">{{book.author}}</p>\n                <div class=\"offset-md-4 col-md-4\">\n                    <button class=\"btn btn-primary btn-sm\" style=\"margin-left: 125px\" (click)=\"addToCart(book.product_id, book.price)\"\n                        [disabled]=\"book.isAdded===true\">Add To Cart</button>\n                </div>\n            </div>\n\n        </div>\n</div> \n\n<!-- \n<div class=\"container row\">\n <div class=\"col-md-4\" *ngFor=\"let book of books;let i=index\">\n\n  <div class=\"col-md-3 agileinfo_new_products_grid\">\n    <div class=\"agile_ecommerce_tab_left agileinfo_new_products_grid1\">\n      <div class=\"hs-wrapper hs-wrapper1\">\n            <img  src=\"assets/images/bn1.jpg\" alt=\" \" class=\"img-responsive\" />\n            <img  src=\"assets/images/b2.jpg\" alt=\" \" class=\"img-responsive\" />\n        \n        \n        <div class=\"book-desc-container row\">\n            <div>\n                <p style=\"margin-left: 60px\"><strong>{{book.name}}: ${{book.price}}</strong></p>\n                <p style=\"margin-left: 60px\">{{book.author}}</p>\n            </div>\n            <div class=\"offset-md-4 col-md-4\">\n                <button class=\"btn btn-primary btn-sm\" style=\"margin-left: 60px\" (click)=\"addToCart(book.id, book.price)\"\n                    [disabled]=\"book.isAdded===true\">Add To Cart</button>\n            </div>\n        </div>\n        </div>\n      </div>\n     </div>\n    </div>\n    </div> -->\n\n\n");

/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header modal -->\n<div class=\"modal fade\" [ngClass]=\"[mainDialogType == 'login' ? 'login_dialog in' : '']\" id=\"myModal88\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModal88\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" (click)=\"closeDialog('login_dialog')\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          &times;</button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Don't Wait, Login now!</h4>\n      </div>\n      <div class=\"modal-body modal-body-sub\">\n        <div class=\"row\">\n          <div class=\"col-md-8 modal_body_left modal_body_left1\" style=\"border-right: 1px dotted #C2C2C2;padding-right:3em;\">\n            <div class=\"sap_tabs\">\t\n              <div id=\"horizontalTab\" [ngClass]=\"[dialogType =='login' ? 'login' : 'register']\" style=\"display: block; width: 100%; margin: 0px;\">\n                <ul>\n                  <li (click)=\"dialogTypeInside('login')\"class=\"resp-tab-item\" aria-controls=\"tab_item-0\"><span>Sign in</span></li>\n                  <li (click)=\"dialogTypeInside('register')\" class=\"resp-tab-item\" aria-controls=\"tab_item-1\"><span>Sign up</span></li>\n                </ul>\t\t\n                <div class=\"tab-1 resp-tab-content\" aria-labelledby=\"tab_item-0\">\n                  <div class=\"facts\">\n                    <div class=\"register\">\n                      <form action=\"#\" method=\"post\">\t\t\t\n                        <input [(ngModel)]=\"mobile\" name=\"Email\" placeholder=\"Your Mobile Number\" type=\"text\" required=\"\">\t\t\t\t\t\t\n                        <input [(ngModel)]=\"password\"  name=\"Password\" placeholder=\"Password\" type=\"password\" required=\"\">\t\t\t\t\t\t\t\t\t\t\n                        <div class=\"sign-up\">\n                          <input (click)=\"loginUserCheck()\" type=\"submit\" value=\"Sign in\"/>\n                        </div>\n                      </form>\n                      <a (click)=\"toggle()\">Forgot your password?</a>\n                      <div class=\"re_password\" *ngIf=\"show\">\n                        <input [(ngModel)]=\"resetemail\" name=\"Email\" placeholder=\"Enter your Email Address\" type=\"text\" required=\"\">\n                       <input (click)=\"forgotpassword()\" type=\"submit\" value=\"Send\"/>\n                   </div> \n                    </div>\n                  </div> \n                </div>\t \n                <div class=\"tab-2 resp-tab-content\" aria-labelledby=\"tab_item-1\">\n                  <div class=\"facts\">\n                    <div class=\"register\">\n                      <form action=\"#\" method=\"post\">\t\t\t\n                        <input [(ngModel)]=\"register.name\" placeholder=\"Name\" name=\"Name\" type=\"text\" required=\"\">\n                        <input [(ngModel)]=\"register.mobile\" placeholder=\"Mobile\" name=\"mobile\" type=\"text\" required=\"\">\n                        <input [(ngModel)]=\"register.email\" placeholder=\"Email Address\" name=\"Email\" type=\"email\" required=\"\">\t\n                        <input [(ngModel)]=\"register.password\" placeholder=\"Password\" name=\"Password\" type=\"password\" required=\"\">\t\n                        <input [(ngModel)]=\"register.re_password\" placeholder=\"Confirm Password\" name=\"Password\" type=\"password\" required=\"\">\n                        <div class=\"sign-up\">\n                          <input (click)=\"registerUser()\"  type=\"submit\" value=\"Create Account\"/>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                </div> \t\t\t        \t\t\t\t\t            \t      \n              </div>\t\n            </div>\n            <script src=\"assets/js/easyResponsiveTabs.js\" type=\"text/javascript\"></script>\n            <script type=\"text/javascript\">\n              $(document).ready(function () {\n                $('#horizontalTab').easyResponsiveTabs({\n                  type: 'default', //Types: default, vertical, accordion           \n                  width: 'auto', //auto or any width like 600px\n                  fit: true   // 100% fit in a container\n                });\n              });\n            </script>\n            <div id=\"OR\" class=\"hidden-xs\">OR</div>\n          </div>\n          <div class=\"col-md-4 modal_body_right modal_body_right1\">\n            <div class=\"row text-center sign-with\">\n              <div class=\"col-md-12\">\n                <h3 class=\"other-nw\">Sign in with</h3>\n              </div>\n              <div class=\"col-md-12\">\n                <ul class=\"social\">\n                  <li class=\"social_facebook\"><a href=\"https://www.facebook.com/\" class=\"entypo-facebook\"></a></li>\n                  <li class=\"social_dribbble\"><a href=\"https://www.google.com/\" class=\"entypo-dribbble\"></a></li>\n                  <li class=\"social_twitter\"><a href=\"https://www.twitter.com/\" class=\"entypo-twitter\"></a></li>\n                  <li class=\"social_behance\"><a href=\"https://www.pinterest.com/\" class=\"entypo-behance\"></a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- header modal -->\n<!-- header -->\n<div class=\"header\" id=\"home1\">\n  <div class=\"container\">\n    <div  *ngIf=\"!isLogin\" class=\"w3l_login\">\n      <a href=\"#\"  (click)=\"openDialog()\" ata-toggle=\"modal\" data-target=\"#myModal88\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span></a>\n    </div>\n    <div  *ngIf=\"isLogin\" class=\"w3l_login\">\n       <p>Welcome back, <span class=\"username\">{{welcomeUsername}}</span> </p>\n    </div>\n    <div class=\"w3l_logo\">\n      <h1><a href=\"index.html\">Book Store<span>The best books just for you!</span></a></h1>\n    </div>\n    <div class=\"search\">\n      <input class=\"search_box\" type=\"checkbox\" id=\"search_box\">\n      <label class=\"icon-search\" for=\"search_box\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></label>\n      <div class=\"search_form\">\n        <form action=\"#\" method=\"post\">\n          <input type=\"text\" name=\"Search\" placeholder=\"Search...\">\n          <input type=\"submit\" value=\"Send\">\n        </form>\n      </div>\n    </div>\n    <div class=\"cart cart box_1 checkout-count-wrap\"> \n      <form action=\"#\" method=\"post\" class=\"last\">        \n        <button class=\"w3view-cart\" type=\"submit\" (click)=\"openCheckoutModel()\" name=\"submit\" value=\"\">\n          <p class=\"total_count_checkout\">{{cart_qty}}</p>\n          <i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>      \n        </button>\n      </form>   \n    </div>  \n  </div>\n</div>\n\n\n\n\n\n<!-- //header -->\n<!-- navigation -->\n<div class=\"navigation\">\n  <div class=\"container\">\n    <nav class=\"navbar navbar-default\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header nav_2\">\n        <button type=\"button\" class=\"navbar-toggle collapsed navbar-toggle1\" data-toggle=\"collapse\" data-target=\"#bs-megadropdown-tabs\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n      </div> \n      <div class=\"collapse navbar-collapse\" id=\"bs-megadropdown-tabs\">\n        <ul class=\"nav navbar-nav\">\n          <li><a href=\"#\" class=\"act\">Home</a></li>\t\n          <!-- Mega Menu -->\n          <li class=\"dropdown\" [ngClass]=\"[currentDropDownMenu == 'products' ? 'open' : '']\">\n            <a href=\"javascript:void(0)\" (click)=\"curentDropDown('products')\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Genre <b class=\"caret\"></b></a>\n            <ul class=\"dropdown-menu multi-column columns-3\">\n              <div class=\"row\">\n                <div class=\"col-sm-3\">\n                  <ul class=\"multi-column-dropdown\">\n                    <h6>Popular</h6>\n                    <li><a [routerLink]=\"['/book','1']\">Kids</a></li>\n                    <li><a [routerLink]=\"['/book','2']\">Romance <span>New</span></a></li> \n                    <li><a [routerLink]=\"['/book','3']\">Fiction</a></li>\n                    <li><a [routerLink]=\"['/book','4']\">Cooking<span>New</span></a></li>\n                  </ul>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ul class=\"multi-column-dropdown\">\n                    <h6>Non-fiction</h6>\n                    <li><a [routerLink]=\"['/book','5']\">Science</a></li>\n                    <li><a [routerLink]=\"['/book','6']\">Biography</a></li>\n                    <li><a [routerLink]=\"['/book','7']\">Health <span>New</span></a></li>\n                    <li><a [routerLink]=\"['/book','8']\"><i>On Sale</i></a></li>\n                  </ul>\n                </div>\n                <div class=\"col-sm-2\">\n                  <ul class=\"multi-column-dropdown\">\n                    <h6>Others</h6>\n                    <li><a href=\"products2.html\">Garden</a></li>\n                    <li><a href=\"products2.html\">Medical</a></li>\n                    <li><a href=\"products2.html\">Fashion</a></li>\n                    <li><a href=\"products2.html\">History</a></li>\n                  </ul>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"w3ls_products_pos\">\n                    <h4>30%<i>Off/-</i></h4>\n                    <img  src=\"assets/images/1.jpg\" alt=\" \" class=\"img-responsive\" />\n                  </div>\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n            </ul>\n          </li>\n          <li><a [routerLink]=\"['/about']\">About Us</a></li> \n          <!-- a href=\"about.html\">About Us</a></li>  -->\n          <li class=\"w3pages\" [ngClass]=\"[currentDropDownMenu == 'pages' ? 'open' : '']\">\n            <a (click)=\"curentDropDown('pages')\"  href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">In the Media <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"https://bookpeopleblog.com/\" target=\"_blanl\">Blog</a></li>\n              <li><a href=\"https://www.youtube.com/channel/UCovQFgis-zwBWnO5axLzlmg\" target=\"_blanl\">Youtube</a></li>     \n            </ul>\n          </li>  \n          <li *ngIf=\"isLogin\"  (click)=\"logout()\"><a href=\"javascript:void(0)\">Logout</a></li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n\n\n<div  [ngClass]=\"[mainDialogType == 'checkout' ? 'checkout_dialog' : '']\" id=\"w3lssbmincart\">\n  <form method=\"post\" class=\"\" target=\"\">   \n  <button type=\"button\" (click)=\"closeDialog()\" class=\"sbmincart-closer\">×</button>  \n          <ul>        \n            <li *ngFor=\"let cartObjItem of  cartObj\" class=\"sbmincart-item sbmincart-item-changed\">       \n                 <div class=\"sbmincart-details-name\">             \n                    <a class=\"sbmincart-name\">{{cartObjItem.product.name}}</a>      \n                      <ul class=\"sbmincart-attributes\">                                                            \n                     </ul>     \n                 </div>         \n                 <div class=\"sbmincart-details-quantity\"> \n                       <input class=\"sbmincart-quantity\" data-sbmincart-idx=\"0\" name=\"quantity_1\" type=\"text\" value=\"1\" autocomplete=\"off\">       \n                 </div>         \n                 <div class=\"sbmincart-details-remove\">          \n                     <!-- <button type=\"button\" class=\"sbmincart-remove\" data-sbmincart-idx=\"0\" (click)=\"removeCart()\"></button>      -->\n                     <fa-icon [icon]=\"faCheckSquare\"></fa-icon>               \n                      </div>        \n                 <div class=\"sbmincart-details-price\">           \n                   <span class=\"sbmincart-price\">{{cartObjItem.price}}</span>       \n                 </div>     \n         </li>   \n          \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n       </ul>  \n       <div class=\"sbmincart-footer\">       \n         <div class=\"sbmincart-subtotal\">  \n         Subtotal: {{cartTotalPrice}}   \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n       </div>       \n       <button type=\"button\" (click)=\"checkout_btn()\">Check out</button>\n        </div>  \n      <input type=\"hidden\" name=\"bn\" value=\"sbmincart_AddToCart_WPS_US\">   \n    </form></div>");

/***/ }),

/***/ "uwRS":
/*!*****************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "aUdj");
/* harmony import */ var _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookdetail/bookdetail.component */ "UDMC");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "84zG");







var routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"] },
    { path: 'book/:id', component: _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_5__["BookdetailComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map