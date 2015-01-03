$('#chapters a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$( document ).ready(function() {
	$('#chapters a[href="#overview"]').tab('show');
	$(".thumbnail a").fancybox({
        helpers: {
            title : {
                type : 'float'
            }
       },
	   nextEffect: 'none',
	   prevEffect: 'none',
	   loop: false
	});
});