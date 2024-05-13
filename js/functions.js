$(function(){

    let value;

    $('#options button').click(function(){
        $('#options button').css('border', '0').css('font-weight', '700');
        $('#options button').removeClass('active');
        $(this).addClass("active");
        value = $(this).val();
    });

    $('#submit button').hover(function(){
        $(this).css('background-color', 'var(--white)').css('color', 'var(--orange)');
    },function(){
        $(this).css('background-color', 'var(--orange)').css('color', 'var(--white)');
    });

    $('#submit button').click(function(){
        if(value != undefined){
            $('.text-selected p').html('You selected '+value+' out of 5');
            $('.container1').css('display', 'none');
            $('.container2').css('display', 'flex');

            setTimeout(function(){
                $('.container1').css('display', 'flex');
                $('.container2').css('display', 'none');
            }, 5000);
        } else{
            $('#options button').css('border', '1px solid red');
        }
    });
});