sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	// "../model/formatter",
	"sap/m/ObjectListItem",
	"sap/m/ObjectAttribute"
], function (Controller, JSONModel, ObjectListItem, FilterOperator) {
	"use strict";

	return Controller.extend("project1.controller.View5", {

		// formatter: formatter,

		onInit: function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

        onNavBack : function() {
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("View1");
        },
		onFilterInvoices: function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});

});
