({
  showSpinner: function(component, event, helper) {
    var spinner = component.find('spinner');
    var evt = spinner.get("e.toggle");
    evt.setParams({
      isVisible: true
    });
    evt.fire();
  },

  hideSpinner: function(component, event, helper) {
    var spinner = component.find('spinner');
    var evt = spinner.get("e.toggle");
    evt.setParams({
      isVisible: false
    });
    evt.fire();
  },

  toggleSpinner: function(cmp) {
    var spinner = cmp.find('spinner');
    var evt = spinner.get("e.toggle");

    if (!$A.util.hasClass(spinner, 'hideEl')) {
      evt.setParams({
        isVisible: false
      });
    } else {
      evt.setParams({
        isVisible: true
      });
    }
    evt.fire();
  }


})
