// put your javascript code here
$(document).ready(function(){
	
	// 
	var tabsData=animals_data;

	//nav-tabs template genereate
	var source=$('#tabs-template').html();
	var tabsTemplate=Handlebars.compile(source);
	var tabsHtml=tabsTemplate(animals_data);
	$("#tabs-content").html(tabsHtml);

	// album template generate
	source=$("#album-template").html();
	var albumTemplate=Handlebars.compile(source);
	var albumHtml=albumTemplate(animals_data);
	$("#content").html(albumHtml);

	// modal template generate
	source=$("#modal-template").html();
	var modalTemplate =Handlebars.compile(source);

	// declare displayModal function to display modal
	function displayModal(event){

		var aminalsCategoryIndex=$(this).data('aminals-category-index');
		var aminalsCategory=$(this).data('aminals-category');
		var imageIndex=$(this).data("image-index");
		var modalHtml=modalTemplate(tabsData.category[aminalsCategoryIndex].animals[imageIndex]);
		$('.animalCategory').append("asd");
		$("#modal-container").html(modalHtml);
		$("#imageModal").modal('show');

		//add button for closing modal
		$(".js-close-modal").on('click',function(){
			$("#imageModal").modal('hide');
		});

	};

	// after click the thumbnails display modal
	$(".thumbnail").click(displayModal);
	
	//active tabs after clicking it
	$('.js-tabs').click(function(){
		$('.js-tabs.active').removeClass('active');
		$(this).addClass('active');
	})


	//nav-tabs function
	$(".js-tabs").on('click',function(){
		
		var chosenCategory=$(this).children('a').html();
			if (chosenCategory=='All'){
			tabsData=animals_data;
			tabsHtml=albumTemplate(tabsData);			
		}else{
			tabsData={
				category:animals_data.category.filter(function(item){
					return item.name===chosenCategory
				})
			};
			var tabsHtml=albumTemplate(tabsData);
		};

		$('#content').fadeOut(500,function(){
			$('#content').fadeIn(500).html(tabsHtml),
			$(".thumbnail").click(displayModal);		
		});
	});


	// TODO: search bar
	// $("#searchBox").keypress(function(event){
	// 	if(event.which==13){
	// 		var search_text=$("#searchBox").val().toUpperCase();
	// 		console.log(search_text);
	// 		var filteredData={
	// 			category:animals_data.category.filter(function(item){
	// 				for(var i=0;i<item.animals.length;i++){
	// 					console.log(item.animals[i].name.toUpperCase());
	// 					if(item.animals[i].name.toUpperCase().search(search_text)>-1){
	// 						return true;
	// 					};
	// 				};
	// 			})
	// 		};
	// 		console.log(filteredData);
	// 		var searchedHtml=albumTemplate(filteredData);
	// 		$('#content').html(searchedHtml);	
	// 	};

	// 		// 	function(event){
	// 		// 	if(event.name.search(search_text)>-1){
	// 		// 		return true
	// 		// 	};
	// 		// 	return false;
	// 		// })
	
	// });
});

	