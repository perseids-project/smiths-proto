(function(b){function d(g,f){this.element=g;this.options=b.extend({},c,f);b(this.element).data("max-height",this.options.maxHeight);b(this.element).data("height-margin",this.options.heightMargin);delete this.options.maxHeight;if(this.options.embedCSS&&!e){var d=".readmore-js-toggle, .readmore-js-section { "+this.options.sectionCSS+" } .readmore-js-section { overflow: hidden; }",k=document.createElement("style");k.type="text/css";k.styleSheet?k.styleSheet.cssText=d:k.appendChild(document.createTextNode(d));
document.getElementsByTagName("head")[0].appendChild(k);e=!0}this._defaults=c;this._name=a;this.init()}var a="readmore",c={speed:100,maxHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,sectionCSS:"display: block; width: 100%;",startOpen:!1,expandedClass:"readmore-js-expanded",collapsedClass:"readmore-js-collapsed",beforeToggle:function(){},afterToggle:function(){}},e=!1;d.prototype={init:function(){var a=this;b(this.element).each(function(){var c=
b(this),e=c.css("max-height").replace(/[^-\d\.]/g,"")>c.data("max-height")?c.css("max-height").replace(/[^-\d\.]/g,""):c.data("max-height"),d=c.data("height-margin");"none"!=c.css("max-height")&&c.css("max-height","none");a.setBoxHeight(c);if(c.outerHeight(!0)<=e+d)return!0;c.addClass("readmore-js-section "+a.options.collapsedClass).data("collapsedHeight",e);c.after(b(a.options.startOpen?a.options.lessLink:a.options.moreLink).on("click",function(b){a.toggleSlider(this,c,b)}).addClass("readmore-js-toggle"));
a.options.startOpen||c.css({height:e})});b(window).on("resize",function(b){a.resizeBoxes()})},toggleSlider:function(a,c,e){e.preventDefault();var d=this;e=newLink=sectionClass="";var m=!1;e=b(c).data("collapsedHeight");b(c).height()<=e?(e=b(c).data("expandedHeight")+"px",newLink="lessLink",m=!0,sectionClass=d.options.expandedClass):(newLink="moreLink",sectionClass=d.options.collapsedClass);d.options.beforeToggle(a,c,m);b(c).animate({height:e},{duration:d.options.speed,complete:function(){d.options.afterToggle(a,
c,m);b(a).replaceWith(b(d.options[newLink]).on("click",function(a){d.toggleSlider(this,c,a)}).addClass("readmore-js-toggle"));b(this).removeClass(d.options.collapsedClass+" "+d.options.expandedClass).addClass(sectionClass)}})},setBoxHeight:function(a){var b=a.clone().css({height:"auto",width:a.width(),overflow:"hidden"}).insertAfter(a),c=b.outerHeight(!0);b.remove();a.data("expandedHeight",c)},resizeBoxes:function(){var a=this;b(".readmore-js-section").each(function(){var c=b(this);a.setBoxHeight(c);
(c.height()>c.data("expandedHeight")||c.hasClass(a.options.expandedClass)&&c.height()<c.data("expandedHeight"))&&c.css("height",c.data("expandedHeight"))})},destroy:function(){var a=this;b(this.element).each(function(){var c=b(this);c.removeClass("readmore-js-section "+a.options.collapsedClass+" "+a.options.expandedClass).css({"max-height":"",height:"auto"}).next(".readmore-js-toggle").remove();c.removeData()})}};b.fn[a]=function(c){var e=arguments;if(void 0===c||"object"===typeof c)return this.each(function(){if(b.data(this,
"plugin_"+a)){var e=b.data(this,"plugin_"+a);e.destroy.apply(e)}b.data(this,"plugin_"+a,new d(this,c))});if("string"===typeof c&&"_"!==c[0]&&"init"!==c)return this.each(function(){var h=b.data(this,"plugin_"+a);h instanceof d&&"function"===typeof h[c]&&h[c].apply(h,Array.prototype.slice.call(e,1))})}})(jQuery);String.prototype.smoosh=function(){return this.replace(/(\r\n+|\n+|\r+|\t+)/gm,"")};String.prototype.splice=function(b,d){return this.slice(0,Math.abs(d))+b+this.slice(Math.abs(d))};
String.prototype.stripTags=function(){return this.replace(/<\/?[^>]+(>|$)/g,"")};String.prototype.oneSpace=function(){return this.replace(/\s{2,}/g," ")};String.prototype.alphaSpaceOnly=function(){return this.replace(/[^\w\s]/gi,"")};String.prototype.alphaOnly=function(){return this.replace(/[^\w]/gi,"")};String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};String.prototype.repeat=function(b){return Array(b+1).join(this)};
String.prototype.occurs=function(b,d){if(void 0==b)return this.length;b+="";if(0>=b.length)return this.length;for(var a=0,c=0,e=d?1:b.length;;)if(c=this.indexOf(b,c),0<=c)a++,c+=e;else break;return a};String.prototype.positions=function(b,d,a,c){b+="";var e=0;d=d?1:b.length;for(var g=[];;){var f=!0,e=this.indexOf(b,e);if(0<=e){if(!0==a)for(var h=e;h<this.length&&"<"!=this[h];h++)">"==this[h]&&(f=!1);!0==c&&!0==this.substr(e-1,e+b.length+1).isAlphaNum()&&(f=!1);!0==f&&g.push(e);e+=d}else break}return g};
String.prototype.insertAt=function(b,d){return this.substr(0,b)+d+this.substr(b)};String.prototype.params=function(){for(var b=this.split("?"),b=b[1].split("&"),d={},a=0,c=b.length;a<c;a++)if(void 0!=b[a]){var e=b[a].split("=");d[e[0]]=e[1]}return d};String.prototype.hasUpper=function(){return/[A-Z]/.test(this)};String.prototype.report=function(){for(var b=this.toLowerCase().split(" "),d={},a=0,c=b.length;a<c;a++){var e=b[a];d[e]=e in d?d[e]+1:1}return d};String.prototype.lines=function(){return this.split("\n")};
String.prototype.isAlphaNum=function(){return/[^a-zA-Z0-9]/.test(this)?!1:!0};String.prototype.sentences=function(){for(var b=this.match(/[^\.!\?]+[\.!\?]+/g),d="aeiouy".split(""),a=[],c="",e=0;e<b.length;e++){for(var g=c+b[e],c="",f=!0,h=0;h<d.length;h++)if(-1!=g.indexOf(d[h])){f=!1;break}g.trim()[0].hasUpper()||(f=!0);f?0<a.length?a[a.length-1]+=g:c=g:a.push(g.smoosh().trim())}return a};
function Styler(){this.head=document.getElementsByTagName("head")[0];this.style=document.createElement("style");this.style.type="text/css";this.head.appendChild(this.style)}Styler.prototype.add=function(b){for(var d in b){var a=document.createTextNode(d+" { "+b[d]+" }");this.style.styleSheet?style.styleSheet.cssText=a.nodeValue:this.style.appendChild(a)}};
jQuery.fn.cursorToEnd=function(){return this.each(function(){jQuery(this).focus();if(this.setSelectionRange){var b=2*jQuery(this).val().length;this.setSelectionRange(b,b)}else jQuery(this).val(jQuery(this).val());this.scrollTop=999999})};jQuery.fn.myHtml=function(){return jQuery(this).clone().wrap("<div>").parent().html()};jQuery.fn.transLength=function(){var b=jQuery(this).css("transition").match(/ [\d|\.]+s/g);return 1E3*Number(b[0].replace("s",""))};
(function(b){function d(a,b,e){this.elem=a;this.id=e;this.init(a,b)}d.prototype.init=function(a,c){b(this.elem).addClass("sidecart");this.config=b.extend({side:"right",inside:!1,"bottom-space":40,theme:null,"tab-pad":2,"anim-length":0.25},c);this.styler=new Styler;this.start()};d.prototype.start=function(){this.theme();this.buildWrapper();this.buildViews();this.resize();this.hide()};d.prototype.theme=function(){null!=this.config.theme&&b(this.elem).addClass(this.config.theme)};d.prototype.buildWrapper=
function(){b(this.elem).addClass("hidden");switch(this.config.side){case "left":this.buildTabsLast();b(this.elem).addClass("left");break;case "top":this.buildTabsLast();b(this.elem).addClass("top");break;default:this.buildTabsFirst()}this.fitToParent()};d.prototype.fitToParent=function(){if(!0==this.config.inside){var a=b(this.elem).parent(),c=a.position();b(this.elem).css({left:c.left});"top"==this.config.side&&(b(this.elem).width(a.outerWidth()),a=a.height()-b(".tabs",this.elem).height()-this.config["bottom-space"],
c={},c[this.id+" .inner"]="height:"+a+"px",c[this.id+".hidden .inner"]="height:0",this.styler.add(c))}};d.prototype.buildTabsLast=function(){b(this.elem).append('            <div class="wrapper">                <div class="inner">                    <div class="views"></div>                </div>            </div>            <div class="tabs"></div>        ')};d.prototype.buildTabsFirst=function(){b(this.elem).append('            <div class="tabs"></div>            <div class="wrapper">                <div class="inner">                    <div class="views"></div>                </div>            </div>        ')};
d.prototype.buildViews=function(){if(void 0!=this.config.views)for(var a=0,b=this.config.views.length;a<b;a++)this.buildView(this.config.views[a])};d.prototype.addView=function(a){void 0==this.config.views&&(this.config.views=[]);this.config.views.push(a);this.buildView(a)};d.prototype.buildView=function(a){b(".views",this.elem).append('            <div id="'+a.id+'" class="'+a.type+'"></div>        ');void 0!=a.src&&""!=a.src?b(a.src).detach().appendTo("#"+a.id):void 0!=a.text&&b("#"+a.id).append(a.text);
var c='<a href="#'+a.id+'">'+a.link+"</a>";b(".tabs",this.elem).append(c);void 0!=a.init&&a.init(this);this.viewEvents(a);this.showView(a.id);this.hide()};d.prototype.viewEvents=function(a){this.tabClick(a)};d.prototype.resize=function(){var a=this;b(window).resize(function(){a.fitToParent()})};d.prototype.tabClick=function(a){var c=this;b('.tabs a[href="#'+a.id+'"]',c.elem).on("touchstart click",function(a){a.preventDefault();a=b(this).attr("href").replace("#","");c.showView(a)})};d.prototype.slide=
function(){this.hidden()?this.show():this.hide()};d.prototype.hidden=function(){return b(this.elem).hasClass("hidden")};d.prototype.show=function(){b(this.elem).removeClass("hidden");b(this.elem).removeClass("wayback")};d.prototype.hide=function(){var a=this;b(a.elem).addClass("hidden");setTimeout(function(){b(a.elem).addClass("wayback")},1E3*a.config["anim-length"])};d.prototype.hideViews=function(){b(".views ",this.elem).children().hide()};d.prototype.showView=function(a){a!==this.last_tab?(this.last_tab=
a,this.hideViews(),b("#"+a,this.elem).show(),b(".tabs a",this.elem).removeClass("selected"),b('.tabs a[href="#'+a+'"]',this.elem).addClass("selected"),this.hidden()&&this.slide()):this.slide();this.refreshView(a)};d.prototype.refreshView=function(a){for(var b=0,e=this.config.views.length;b<e;b++){var d=this.config.views[b];d.id==a&&void 0!=d.refresh&&d.refresh(this)}};d.prototype.showFirst=function(){this.showView(this.config.views[0].id)};b(document).ready(function(a){a.fn.sidecart=function(b){var e=
a(this).selector;return this.each(function(){a.data(this,e,new d(this,b,e))})}})})(jQuery);
(function(b){function d(a,b,e){this.elem=a;this.id=e;this.init(a,b)}d.prototype.init=function(a,c){this.config=b.extend({},c);this.results={passage:[],text:[],work:[],artifact:[]};this.events={loaded:"PerseusLD--LOADED"};this.userConfig();this.query_md_annotations()};d.prototype.userConfig=function(){this.xslt_url=b(this.elem).attr("data-lib_root")+"/xslt/oactohtml.xsl";this.xslt_processor=null;this.sbj_elemname=b(b(this.elem).attr("data-sbj"));this.verb=b(this.elem).attr("data-verb");this.dataset=
b(this.elem).attr("data-set");this.formatter=b(this.elem).attr("data-formatter");this.datatype=b(this.elem).attr("data-class");this.format=b(this.elem).attr("data-serialization");this.max_results=b(this.elem).attr("data-pagemax");this.sbj_elem=b("*[typeof='http://lawd.info/ontology/Citation']",this.sbj_elemname);0!=this.sbj_elem.length?this.sbj=this._strip_uri_prefix(b("*[typeof='http://lawd.info/ontology/ConceptualWork']",this.sbj_elem).attr("resource")):this.sbj_elem=b("*[typeof='http://www.cidoc-crm.org/cidoc-crm/E22_Man-Made_Object']",
this.sbj_elemname);0==this.sbj_elem.length&&(this.sbj_elem=b("*[typeof='http://www.cidoc-crm.org/cidoc-crm/E53_Place']",this.sbj_elemname));0!=this.sbj_elem.length&&(this.sbj||(this.sbj=this.sbj_elem.attr("resource")),this.queryuri=b(this.elem).attr("data-endpoint"),this.sbj="\\\\Q"+this.sbj+"\\\\E")};d.prototype.showError=function(){window.console&&console.log("Error retrieving annotations")};d.prototype.query_md_annotations=function(){var a=this,c="";a.dataset&&(c="FROM <"+a.dataset+"> ");a.queryuri&&
a.sbj&&a.verb&&(c="                SELECT distinct ?annotation ?target ?who                 "+c+"                WHERE { ?annotation <"+a.verb+'> ?target.                    FILTER regex( str(?target), "'+a.sbj+'").                    ?annotation <http://www.w3.org/ns/oa#annotatedBy> ?who                }            ',c=a.queryuri+encodeURIComponent(c.smoosh().oneSpace())+"&format=json",b.get(c).done(function(b){a.sparql_results(b)}).fail(function(){a.showError()}))};d.prototype.sparql_results=function(a){var c=
[];0<a.results.bindings.length&&b.each(a.results.bindings,function(a,b){c.push(b)});this[this.formatter](c)};d.prototype._strip_uri_prefix=function(a){var b=a;a=a.match("^https?://.*?/(urn:cts:.*)$");null!=a&&(b=a[1]);return b};d.prototype.show=function(){b(this.elem).show()};d.prototype._show_annotations=function(a,c){var e=this;e.max_results&&""!=e.max_results||(e.max_results=e.results[a].length);0==c?b(".perseusld_results.perseusld_"+a,e.elem).children().remove():b(".perseusld_results.perseusld_"+
a+" .more_annotations",e.elem).hide();b(".perseusld_results.perseusld_"+a,e.elem).addClass("loading");var d=c+e.max_results-1;d>e.results[a].length-1&&(d=e.results[a].length-1);for(var f=c;f<=d;f++){var h=null,k=f==d;k&&d<e.results[a].length-1&&(h=d+1);b.ajax(e.results[a][f]+"/"+e.format,{type:"GET",xhrFields:{data:{last:k,next:h,type:a}},processData:!1,dataType:"xml"}).done(function(c,d,f){d=b(".perseusld_results.perseusld_"+a,e.elem);b(".perseusld_results.perseusld_"+a,e.elem).removeClass("loading");
e._transform_annotation(c,d,this.xhrFields.data)}).fail(function(c){b(".perseusld_results.perseusld_"+a,e.elem);e._fail_annotation(this.xhrFields.data.last)})}};d.prototype._fail_annotation=function(a){a&&b(this.elem).removeClass("loading")};d.prototype._transform_annotation=function(a,c,d){var g=this;null==g.xslt_processor?b.get(g.xslt_url,function(b,h,k){g.xslt_processor=new XSLTProcessor;g.xslt_processor.importStylesheet(b);g._add_annotation(a,c,d)},"xml"):g._add_annotation(a,c,d)};d.prototype._add_annotation=
function(a,c,d){a=this.xslt_processor.transformToDocument(a);a=document.importNode(b("div",a).get(0),!0);var g=new Markdown.getSanitizingConverter,f=b(".oac_cnt_chars",a).get(0),g=g.makeHtml(b(f).html());b(f).html(g);b(c).append(a);!0==d.last&&b(this.elem).trigger(this.events.loaded,[d,this.elem])};d.prototype.filter_artifact_annotations=function(a){var c=a.length;if(0==c)b(this.elem).append("<p>No Annotations Found</p>").removeClass("loading");else for(var d=0;d<c;d++)this.results.artifact.push(a[d].annotation.value);
this._show_annotations("artifact",0)};d.prototype.filter_text_annotations=function(a){var c=this,d=b("*[typeof='http://lawd.info/ontology/ConceptualWork']",c.sbj_elem),g=b("*[typeof='http://lawd.info/ontology/WrittenWork']",c.sbj_elem),f=c.sbj_elem,d=c._strip_uri_prefix(d.attr("resource")),g=c._strip_uri_prefix(g.attr("resource")),h="^"+g+"$",k="^"+d+"$",m=null,p=null,s=[],t=[],u=[];0<f.length&&(f=c._strip_uri_prefix(f.attr("resource")),f=RegExp("^"+g+":(.+)$").exec(f),null!=f&&(m=f[1],m.match(/-/)&&
(p=m.split(/-/),m=p[0],p=p[1])));f=a.length;if(0==f)b(c.elem).append("<p>No Annotations Found</p>").removeClass("loading");else if(0<f)for(var q=0;q<f;q++){var l=c._strip_uri_prefix(a[q].target.value);if(null!=l.match(RegExp(k)))s.push(a[q].annotation.value);else if(null!=l.match(RegExp(h)))t.push(a[q].annotation.value);else if(null!=m){var r=null,v=RegExp("^"+g+":(.+)$"),n=RegExp("^"+d+":(.+)$").exec(l),l=v.exec(l);null!=n?r=n[1]:null!=l&&(r=l[1]);null!=r&&(n=null,l=r.match(/^(.+?)-(.+)$/),null!=
l?(n=l[1].replace(/[@#].*$/,""),l[2].replace(/[@#].*$/,"")):n=r.replace(/[@#].*$/,""),n>=m&&(null==p||n<=p)&&u.push(a[q].annotation.value))}}c.results.passage=b.unique(u);c.results.text=b.grep(t,function(a){return-1==b.inArray(a,c.results.passage)});c.results.work=b.grep(s,function(a){return-1==b.inArray(a,c.results.passage)&&-1==b.inArray(a,c.results.text)});a=0<c.results.text.length;d=0<c.results.work.length;0<c.results.passage.length&&c._show_annotations("passage",0);a&&c._show_annotations("text",
0);d&&c._show_annotations("work",0)};b(document).ready(function(a){a.fn.PerseusLD=function(b){var e=a(this).selector;return this.each(function(){a.data(this,e,new d(this,b,e))})}})})(jQuery);

