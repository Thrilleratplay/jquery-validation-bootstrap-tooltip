/**
 * @preserve
 * jQuery Validation Bootstrap Tooltip extention v0.10.1
 *
 * https://github.com/Thrilleratplay/jQuery-Validation-Bootstrap-tooltip
 *
 * Copyright 2015 Tom Hiller
 * Released under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */
!function(a){a.extend(!0,a.validator,{prototype:{defaultShowErrors:function(){var b=this,c=a.fn.tooltip.Constructor.VERSION,d=0,e=0;c&&(c=c.split("."),d=parseInt(c[0]),e=parseInt(c[1])),a.each(this.errorList,function(c,f){if(3===d&&e>=3){var g=a(f.element);void 0!==g.data("bs.tooltip")?g.data("bs.tooltip").options.title=f.message:g.tooltip(b.applyTooltipOptions(f.element,f.message)),a(f.element).removeClass(b.settings.validClass).addClass(b.settings.errorClass).tooltip("show")}else a(f.element).removeClass(b.settings.validClass).addClass(b.settings.errorClass).tooltip(4===d?"dispose":"destroy").tooltip(b.applyTooltipOptions(f.element,f.message)).tooltip("show");b.settings.highlight&&b.settings.highlight.call(b,f.element,b.settings.errorClass,b.settings.validClass)}),a.each(b.validElements(),function(c,e){a(e).removeClass(b.settings.errorClass).addClass(b.settings.validClass).tooltip(4===d?"dispose":"destroy"),b.settings.unhighlight&&b.settings.unhighlight.call(b,e,b.settings.errorClass,b.settings.validClass)})},applyTooltipOptions:function(b,c){var d={animation:a(b).data("animation")||!0,html:a(b).data("html")||!1,placement:a(b).data("placement")||"top",selector:a(b).data("selector")||!1,title:a(b).attr("title")||c,trigger:a.trim("manual "+(a(b).data("trigger")||"")),delay:a(b).data("delay")||0,container:a(b).data("container")||!1};return this.settings.tooltip_options&&this.settings.tooltip_options[b.name]&&a.extend(d,this.settings.tooltip_options[b.name]),this.settings.tooltip_options&&this.settings.tooltip_options._all_&&a.extend(d,this.settings.tooltip_options._all_),d}}})}(jQuery);
