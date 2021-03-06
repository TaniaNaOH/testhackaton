
$(document).ready(function(){
     $('.slider').slider();
   });


   $(document).ready(loadPage)

   function loadPage() {
       $.getJSON('https://www.googleapis.com/books/v1/volumes?q="cochinitos"&maxResults=10&langRestrict=es', function(data) {
           paintBookCard(data)
       });
       $.getJSON('https://www.googleapis.com/books/v1/volumes?q="cuentos"&maxResults=10&langRestrict=es', function(data) {
           paintBookCard(data)
       });
       $.getJSON('https://www.googleapis.com/books/v1/volumes?q="herweck+rice"&maxResults=10&langRestrict=es', function(data) {
           paintBookCard(data)
       });
       $.getJSON('https://www.googleapis.com/books/v1/volumes?q="sarah+kartchner"&maxResults=10&langRestrict=es', function(data) {
           paintBookCard(data)
       });
       $('#search-book').keyup(filterBooks)


   }

   function paintBookCard(data) {
       for (var i = 0; i < data['items'].length; i++) {
           if (data['items'][i]['volumeInfo']['imageLinks']) {
               var $bookImage = $('<img />').attr('src', data['items'][i]['volumeInfo']['imageLinks']['smallThumbnail'])
               var $bookDiv = $('<div />', { 'class': 'book-card' })
               var $title = $('<h3 />').text(data['items'][i]['volumeInfo']['title'])
               var $date = $('<p />').text(data['items'][i]['volumeInfo']['publishedDate'])
               if (data['items'][i]['volumeInfo']['authors']) {
                   var $author = $('<p />').text(data['items'][i]['volumeInfo']['authors'][0])
               }
               $('#wrapper').append($bookDiv)
               $bookDiv.append($bookImage)
               $bookDiv.append($title)
               $bookDiv.append($author)
               $bookDiv.append($date)
           }
       }
   }

   function filterBooks() {
       var search = $('#search-book').val().trim().toLowerCase();
       $('h3').each(function() {
           if ($(this).text().toLowerCase().indexOf(search) === -1) {
               $(this).closest('div').hide()
           } else {
               $(this).closest('div').show()
           }
       })
   }
