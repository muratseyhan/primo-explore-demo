angular.module('viewCustom').service('sectionOrdering', function() {
 
  this.orderSections =  function (sections) {
    if (!sections || !sections.length || !(sections.length > 0))
      return false;
    
    moveToBottomIfExists('links', sections);
    moveToBottomIfExists('details', sections);
    
    return true;
  };

  function moveToBottomIfExists(sectionId, sections) {
    let section = sections.find(function(s) {
      return s.scrollId === sectionId;
    });
    if (section)
      moveToBottom(section, sections);
  }

  function moveToBottom(section, sections) {
    // Remove the section.
    sections.splice(sections.indexOf(section), 1);
    // Append the section to the end.
    sections.splice(sections.length, 0, section);
  }

});