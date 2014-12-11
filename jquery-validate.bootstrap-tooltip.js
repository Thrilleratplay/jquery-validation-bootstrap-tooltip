/*!
 * jQuery Validation Bootstrap Tooltip extention v0.6
 *
 * https://github.com/Thrilleratplay/jQuery-Validation-Bootstrap-tooltip
 *
 * Copyright 2014 Tom Hiller
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
	$.extend(true,$.validator, {
		prototype:{
			defaultShowErrors: function() {
				var self=this;
				$.each( this.successList, function(index, value) {
					$(value).removeClass(self.settings.errorClass).addClass(self.settings.validClass).tooltip('destroy');
					if (self.settings.unhighlight) {
						self.settings.unhighlight.call( self, value, self.settings.errorClass, self.settings.validClass );
					}
				});
				$.each( this.errorList, function(index, value) {
					$(value.element).removeClass(self.settings.validClass).addClass(self.settings.errorClass).tooltip('destroy').tooltip(self.apply_tooltip_options(value.element,value.message)).tooltip('show'); 			
					if ( self.settings.highlight ) {
						self.settings.highlight.call( self, value.element, self.settings.errorClass, self.settings.validClass );
					}
				});
			},
			
			apply_tooltip_options: function(element, message){
				var options={
					/* Using Twitter Bootstrap Defaults if no settings are given */ 
					animation: $(element).data('animation')||true,
					html: $(element).data('html')||false,
					placement: $(element).data('placement')||'top',
					selector: $(element).data('animation')||false,
					title: $(element).attr('title')||message,
					trigger: $.trim('manual '+($(element).data('trigger')||'')),
					delay: $(element).data('delay')||0,
					container: $(element).data('container')||false
				};
				if(this.settings.tooltip_options&&this.settings.tooltip_options[element.name]){
					$.extend(options,this.settings.tooltip_options[element.name]);
				}
				return options;
			}
		}
	});
}(jQuery));
