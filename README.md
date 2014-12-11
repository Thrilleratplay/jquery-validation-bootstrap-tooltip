jQuery-Validation-Bootstrap-tooltip
===================================

A drop in extension replacing error labels from jQuery Validation plugin with Twitter Bootstrap tooltips

Requirements
-------------
* [jQuery](http://jquery.com/)
* [jQuery Validation](http://jqueryvalidation.org/) 
* [Twitter Bootstrap](http://getbootstrap.com/)  


Usage
------
Tooltip options are given either through an element's data attributes or as objects set during validate initializing.  An example would be:

        $("#theform").validate({
            rules: {     
               thefield: { digits:true, required: true } 
            },
            tooltip_options: {
               thefield: { placement: 'left' }
            }
         });
           
Changelog
-----
* 0.6 - Corrected default selector option 
* 0.5 - Fixed missing highlight/unhighlight calls
* 0.4 - Fixed missing toggle of error/valid class on input element  
* 0.3 - Fixed IE 7/8 error caused but the rouge trim function
* 0.2 - Added extra error check and added minified version.
* 0.1 - Inital release.
        
Demo
-----
[Demo](http://thrilleratplay.github.io/jquery-validation-bootstrap-tooltip/) or it didn't happen

* * *     
###### Special Thanks to dennysfredericci
Who's gist ([found here](https://gist.github.com/dennysfredericci/3030983))was the basis of this extension. 
