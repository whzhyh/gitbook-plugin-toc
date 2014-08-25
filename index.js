var toc = require('marked-toc');
const template = require('./node_modules/marked-toc/node_modules/template');

module.exports = {
  book: {
  },
  hooks: {
    "page:before": function(page) {
      var tmpl = '<%= depth %><%= bullet %>[<% var h=depth.length/2+1; if (typeof(h1) == "undefined") {h1=0;} if (typeof(h2) == "undefined") {h2=0;} if (typeof(h3) == "undefined") {h3=0;} var head; if (h == 1) {h1++;h2=0;h3=0;head=h1;} else if (h == 2) {h2++;h3=0;head=h1+"."+h2;} else if (h == 3) {h3++;head=h1+"."+h2+"."+h3;} %><%= head%> <%= heading %>](#<%= url %>)\n';
      page.content = toc.insert(page.content, {template: tmpl});
      template('<% h1=0 %>', {});
      return page;
    }
  }
};
