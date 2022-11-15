$('.anketa').submit(function(e){
    e.preventDefault();
    let th =$(this);
    let modal = $('.modal');
    let btn = th.find('.btn');
    let anket = $('.form__anket')
    $.ajax({
        url: '../mail.php',
        type:  'POST',
        data: th.serialize(),
        success: function(data){
            if(data == 1){
                console.log('Ошибка отправки');
                return false;
            } else {
                setTimeout(function(){
                    th.trigger('reset');
                    modal.css('display', 'none')
                }, 3000)
            }
            anket.addClass('hidden')
            modal.css('display', 'flex')
        }, error: function(){

        }
    })
    
})


$('.oneForm').submit(function(e){
    e.preventDefault();
    let th =$(this);
    let modal = $('.modal');
    let btn = th.find('.btn');
    let anket = $('.form__one')
    $.ajax({
        url: '../mailTwo.php',
        type:  'POST',
        data: th.serialize(),
        success: function(data){
            if(data == 1){
                console.log('Ошибка отправки');
                return false;
            } else {
                setTimeout(function(){
                    th.trigger('reset');
                    modal.css('display', 'none')
                }, 3000)
            }
            anket.addClass('hidden')
            modal.css('display', 'flex')
        }, error: function(){

        }
    })
    
})