sap.ui.define([
	'sap/ui/core/UIComponent',
	'sap/ui/model/json/JSONModel',
    'sap/f/library'
], function(UIComponent, JSONModel,fioriLibrary) {
	'use strict';

	return UIComponent.extend("UI5_new.Component", {

		metadata: {
			manifest: 'json'
		},

		init: function () {
			var oProductsModel={
            pData:{},
            ProductCollection:[{state:"In-stock", Name:"iphone X" , ProductId:"Apple", Price:"6786" , CurrencyCode:"INR",Description:"Iphone 8 with 120gb storage space" ,UserReviews:[{text:"Really awesome product",name:"Amjad",rating:"2.5",ue:"Poor"},{text:"Not a good expirince",name:"Sahil",rating:"3.5",ue:"Good"},{text:"Good Battery backup",name:"Mahil",rating:"1.5",ue:"Bad"},{text:"Really handy phone",name:"Rahul",rating:"4.5",ue:"Good"}]},
            {state:"out-stock",Name:"MTV 4" , ProductId:"Samsung", Price:"9789" , CurrencyCode:"EUR",Description:"HD Screen with Android software",UserReviews:[{text:"Really great TV",name:"Sahil",rating:"3.5",ue:"Good"},{text:"Really awesome Screen resolution",name:"Lonech",rating:"3",ue:"Good"},{text:"Not a good expirince",name:"Mohit",rating:"5",ue:"Good"},{text:"Good TV Screen",name:"Sahil",rating:"3.5",ue:"Bad"}]}],
			CC:[{text:"EUR"},{text:"INR"},{text:"DLR"},{text:"KWT"}],
			
        }
			

			// set products demo model on this sample
			// oProductsModel = new JSONModel(sap.ui.require.toUrl('sap/ui/demo/mock/products.json'));
			// oProductsModel.setSizeLimit(1000);
			// this.setModel(oProductsModel, 'products');

            var oModel = new JSONModel(oProductsModel);
            this.setModel(oModel, "products");
            sap.ui.getCore().setModel(oModel, "products");
            // sap.ui.getCore().getModel("Seller").setProperty("/sellerData", oData);

            UIComponent.prototype.init.apply(this, arguments);

            // this.getRouter().initialize();
		}
	});
});