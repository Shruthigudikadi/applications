sap.ui.define([

	 "sap/ui/core/util/MockServer",
	
	 "sap/base/util/UriParameters"
	
	], function (MockServer, UriParameters) {
	
	 "use strict";
	
	
	
	
	 return {
	
	 init: function () {
	
	 // create
	
	 var oMockServer = new MockServer({
	
	rootUri: "/V2/Northwind/Northwind.svc/"
	
	 });
	
	
	
	
	 // This line of code creates a new `UriParameters` instance
	
	 // by parsing the query string of the current URL
	
	 // (accessed via `window.location.search`) in SAPUI5.
	
	 var oUriParameters = UriParameters.fromQuery(window.location.search);
	
	
	
	
	 // configure mock server with a delay
	
	 // This code retrieves the value of the `serverDelay` parameter
	
	 // from the `oUriParameters` object, or
	
	 // defaults to `500` if the parameter is not present.
	
	 MockServer.config({
	
	autoRespond: true,
	
	 autoRespondAfter: oUriParameters.get("serverDelay") || 500
	
	 });
	
	
	
	
	 // simulate - to do or make something that looks real but is not real
	
	// `sap.ui.require.toUrl` function is used to determine
	
	 //the relative path to the `localService` folder.
	
	 var sPath = sap.ui.require.toUrl("project5/localService");
	
	
	
	
	 // `oMockServer.simulate` function is used to simulate the behavior of an OData service.
	
	 // It takes two arguments: the path to the metadata file, and the path to the mock data folder.
	
	 oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
	
	
	
	
	 // start
	
	 oMockServer.start();
	
	 }
	
	 };
	
	
	
	
	});