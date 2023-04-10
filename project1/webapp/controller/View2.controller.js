sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View2", {
            // onInit: function () {

            // },
            onBack : function(oEvent) {
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                // this.getRouter().getTargets().display("View1");
                oRouter.navTo("View1");
            },
            /**
             * getting the hide and show in one single button by using the
             * if else condition.
             */

            // toggle: function (oEvent) {
            //     this._Page = this.byId("page");
            //     if (oEvent.getSource().getPressed() === true) {
            //         this._Page.setShowFooter(!this._Page.getShowFooter());
            //         oEvent.getSource().setText("Show Footer").setIcon("sap-icon://show");
            //     } else {
            //         this._Page.setShowFooter(!this._Page.getShowFooter());
            //         oEvent.getSource().setText("Hide Footer").setIcon("sap-icon://hide");
            //     }
            // },

            /**
             * showing the hidding and showing the footer with two different 
             * toggle buttons one is for hide with icon and one is to show .
             */
            togglehide: function(oEvent) {
               this._Page = this.byId("page");
               if (oEvent.getSource().getPressed() === true) {
                this._Page.setShowFooter(!this._Page.getShowFooter());
                oEvent.getSource().setIcon("sap-icon://hide");
               }
            },
            toggleshow: function(oEvent) {
                this._Page = this.byId("page");
                if (oEvent.getSource().getPressed() === true) {
                 this._Page.setShowFooter(!this._Page.getShowFooter());
                 oEvent.getSource().setIcon("sap-icon://show");
                }
             },
            toggleFooter: function () {
                this._Page = this.byId("page");
                this._Page.setFloatingFooter(!this._Page.getFloatingFooter());
            },

        });
    });
