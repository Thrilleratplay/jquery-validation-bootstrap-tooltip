/*!
 * jQuery Validation Bootstrap Tooltip extention v0.3
 *
 * https://github.com/Thrilleratplay/jQuery-Validation-Bootstrap-tooltip
 *
 * Copyright 2013 Tom Hiller
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
 (function(e){e.extend(true,e.validator,{prototype:{defaultShowErrors:function(){var t=this;e.each(this.successList,function(t,n){e(n).tooltip("destroy")});e.each(this.errorList,function(n,r){e(r.element).tooltip("destroy").tooltip(t.apply_tooltip_options(r.element,r.message)).tooltip("show")})},apply_tooltip_options:function(t,n){var r={animation:e(t).data("animation")||true,html:e(t).data("html")||false,placement:e(t).data("placement")||"top",selector:e(t).data("animation")||true,title:e(t).attr("title")||n,trigger:e.trim("manual "+(e(t).data("trigger")||"")),delay:e(t).data("delay")||0,container:e(t).data("container")||false};if(this.settings.tooltip_options&&this.settings.tooltip_options[t.name]){e.extend(r,this.settings.tooltip_options[t.name])}return r}}})})(jQuery)
