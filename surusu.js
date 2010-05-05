var frontTextArea = $('textarea[name=question]');
var backTextAreaParent = $('textarea[name=answer]').parent();
var kwikAdd = $('input[value=KwikAdd]');

frontTextArea.focus();
backTextAreaParent.after($('<div></div>').append(kwikAdd));