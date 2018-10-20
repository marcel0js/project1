const showModal = function(e) {
    e.preventDefault();
    $('.modal-container').show();

}

const hideModal = function(e) {
    e.preventDefault();
    $('.modal-container').hide();

}

const saveInput = function(event){
    event.preventDefault();
        const buttonInput = $('.textarea').val();

    const postData = {
        tweet: buttonInput,
        username: 'marcel0js'
    }
    $.post("api/tweet", postData)
        .then(function(Tweet){
            console.log(Tweet);
        })
}

$('.tweetbutton').on('click', showModal);
$('.close-modal').on('click', hideModal);
$('.close-modal').on('click', saveInput);



const render = function(tweetText){
    $('.center-feed').append(`<p>${tweetText}</p>`)
}


$.get('api/tweet')
 .then(function(serverData){
     for(let i = 0; i < serverData.length; i++){
         render(serverData[i].tweet);
     }
 })

 const deleteAll = function(e){
    $.ajax({
        url: '/api/Tweet',
        type: 'DELETE',
        success: function(response) {
            alert('Deleting Tweets');
            location.reload(true);
        },
        error: function(err){
            console.log(err);
        }

      });
 }

 $('.delbutton').on('click', deleteAll);