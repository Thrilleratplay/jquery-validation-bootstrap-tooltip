jQuery-Validation-Bootstrap-tooltip
===================================

A drop in extension replacing error labels from jQuery Validation plugin with Twitter Bootstrap tooltips

Requirements
-------------
* [jQuery](http://jquery.com/)
* [jQuery Validation](http://jqueryvalidation.org/)
* [Twitter Bootstrap](http://twitter.github.io/bootstrap/index.html)

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
         
Demo
-----
[Demo](http://thrilleratplay.github.io/jquery-validation-bootstrap-tooltip/) or it didn't happen

* * *     
###### Special Thanks to dennysfredericci
Who's gist ([found here](https://gist.github.com/dennysfredericci/3030983))was the basis of this extension. 
