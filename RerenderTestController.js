({
  fillApples: function(component, event, helper) {
    var apples = ["Macintosh", "Granny Smith", "Courtland"];
    console.log(apples);
    component.set("v.apples", apples);
    component.set("v.name", "mohan");

  },

  fillOpps: function(component, event, helper) {
    var opps = [{
      "sobjectType": "Opportunity",
      "name": "Macintosh Opp"
    }, {
      "sobjectType": "Opportunity",
      "name": "Granny Smith Opp"
    }, {
      "sobjectType": "Opportunity",
      "name": "Courtland Opp"
    }];



    component.set("v.opps", opps);

  },

  deleteOpps: function(component, event, helper) {
    var opps = [];

    component.set("v.opps", opps);


  }
})
