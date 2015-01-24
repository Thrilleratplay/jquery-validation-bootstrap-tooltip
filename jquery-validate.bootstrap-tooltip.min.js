/*!
 * jQuery Validation Bootstrap Tooltip extention v0.7
 *
 * https://github.com/Thrilleratplay/jQuery-Validation-Bootstrap-tooltip
 *
 * Copyright 2015 Tom Hiller
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function(e){e.extend(true,e.validator,{prototype:{defaultShowErrors:function(){var t=this;e.each(this.successList,function(n,r){e(r).removeClass(t.settings.errorClass).addClass(t.settings.validClass).tooltip("destroy");if(t.settings.unhighlight){t.settings.unhighlight.call(t,r,t.settings.errorClass,t.settings.validClass)}});e.each(this.errorList,function(n,r){e(r.element).removeClass(t.settings.validClass).addClass(t.settings.errorClass).tooltip("destroy").tooltip(t.apply_tooltip_options(r.element,r.message)).tooltip("show");if(t.settings.highlight){t.settings.highlight.call(t,r.element,t.settings.errorClass,t.settings.validClass)}})},apply_tooltip_options:function(t,n){var r={animation:e(t).data("animation")||true,html:e(t).data("html")||false,placement:e(t).data("placement")||"top",selector:e(t).data("animation")||false,title:e(t).attr("title")||n,trigger:e.trim("manual "+(e(t).data("trigger")||"")),delay:e(t).data("delay")||0,container:e(t).data("container")||false};if(this.settings.tooltip_options&&this.settings.tooltip_options[t.name]){e.extend(r,this.settings.tooltip_options[t.name])}if(this.settings.tooltip_options&&this.settings.tooltip_options["_all_"]){e.extend(r,this.settings.tooltip_options["_all_"])}return r}}})})(jQuery)