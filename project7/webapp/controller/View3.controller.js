sap.ui.define([
    "sap/ui/core/mvc/Controller"
   
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project7.controller.View3", {
            onInit: function () {

            },
            onBack1 : function() {
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                // this.getRouter().getTargets().display("View1");
                oRouter.navTo("View1");
            },
            onpress : function() {
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("View4");
            }

        });
    });
