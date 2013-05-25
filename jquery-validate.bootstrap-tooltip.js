/*!
 * jQuery Validation Bootstrap Tooltip extention v0.1
 *
 * https://github.com/wbp-tomh/jQuery-Validation-Bootstrap-tooltip
 *
 * Copyright 2013 Tom Hiller and Internet Marketing Ninjas
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
 
(function($) {

$.extend(true,$.validator, {
	prototype:{
		defaultShowErrors: function() {
			var self=this;
			$.each( this.successList, function(index, value) {
				$(value).tooltip('destroy');
			});
			$.each( this.errorList, function(index, value) {
				$(value.element).tooltip('destroy');
				$(value.element).tooltip(self.tooltip_options(value.element,value.message));
				$(value.element).tooltip('show'); 
			});
		},
		tooltip_options: function(element, message){
			var options={
				/* Using Twitter Bootstrap Defaults if no settings are given */ 
				animation: $(element).data('animation')||true,
				html: $(element).data('html')||false,
				placement: $(element).data('placement')||'top',
				selector: $(element).data('animation')||true,
				title: $(element).attr('title')||message,
				trigger: String('manual '+($(element).data('trigger')||'')).trim(),
				delay: $(element).data('delay')||0,
				container: $(element).data('container')||false
			};
			if(this.settings.tooltip_options[element.name]){
				$.extend(options,this.settings.tooltip_options[element.name]);
			}
			return options;
		},
	}
});

}(jQuery));
