/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "project1/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, models, JSONModel) {
        "use strict";

        return UIComponent.extend("project1.Component", {
            metadata: {
                interfaces: ["sap.ui.core.IAsyncContentCreation"],
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                
                // enable routing
                this.getRouter().initialize();

                // set the device model
                // this.setModel(models.createDeviceModel(), "device");
                this.getRouter().attachTitleChanged(this.onTitleChange, this);
                
               
            },
            
            onTitleChange: function(event) {
                //document.title = event.getParameter("title");
                document.title = event.getParameter("title");

              
            },
           
            
        });
    }
);