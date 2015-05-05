/*!
 * jQuery Validation Bootstrap Tooltip extention v0.7.1 - flicker fix
 *
 * https://github.com/Thrilleratplay/jQuery-Validation-Bootstrap-tooltip
 *
 * Copyright 2015 Tom Hiller
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
 !function(t){t.extend(!0,t.validator,{prototype:{defaultShowErrors:function(){var s=this;t.each(this.successList,function(i,e){t(e).removeClass(s.settings.errorClass).addClass(s.settings.validClass).tooltip("destroy"),s.settings.unhighlight&&s.settings.unhighlight.call(s,e,s.settings.errorClass,s.settings.validClass)}),t.each(this.errorList,function(i,e){var a=t(e.element);void 0!==a.data("bs.tooltip")?a.data("bs.tooltip").options.title=e.message:a.tooltip(s.applyTooltipOptions(e.element,e.message)),t(e.element).removeClass(s.settings.validClass).addClass(s.settings.errorClass).tooltip("show"),s.settings.highlight&&s.settings.highlight.call(s,e.element,s.settings.errorClass,s.settings.validClass)})},applyTooltipOptions:function(s,i){var e={animation:t(s).data("animation")||!0,html:t(s).data("html")||!1,placement:t(s).data("placement")||"top",selector:t(s).data("animation")||!1,title:t(s).attr("title")||i,trigger:t.trim("manual "+(t(s).data("trigger")||"")),delay:t(s).data("delay")||0,container:t(s).data("container")||!1};return this.settings.tooltip_options&&this.settings.tooltip_options[s.name]&&t.extend(e,this.settings.tooltip_options[s.name]),this.settings.tooltip_options&&this.settings.tooltip_options.all&&t.extend(e,this.settings.tooltip_options.all),e}}})}(jQuery);
