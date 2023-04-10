sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, MessageBox) {
        "use strict";

        return Controller.extend("project1.controller.View4", {
            onInit: function () {

            },
            onBack2 : function() {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();


                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("View1", {}, true);
                }
            //     var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            //     // this.getRouter().getTargets().display("View1");
            //     oRouter.navTo("View2");
            },

        });
    });
