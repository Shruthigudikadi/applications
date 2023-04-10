sap.ui.define([
    "sap/ui/core/mvc/Controller"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onclick: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("View2", {});
       },
            onclick1: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("View3", {});
                },
                onclick2: function() {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("View4", {});
                    },
                    onclick3: function() {
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouter.navTo("View5", {});
                        }
        });
        // return Controller.extend("project1.controller.View1", {
        //     // onInit: function () {

        //     // },
        //     onclick : function() {
        //         this._getRouter().navTo("View2", {});
        //         // this.getRouter().navTo("View2");
        //         // this.getRouter().getTargets().display("RouteView2");
        //     },
        //     _getRouter: function() {
        //         return sap.ui.core.UIComponent.getRouterFor(this);;
        //     }

        // });
    });
