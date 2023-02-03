$('document').ready(function(){

    // Admin menu responsive
    $('#admin-menu-bars').click(()=>{
        $('.dashboard .sidebar').toggleClass('hide show');
        $('.dashboard .main-admin').toggleClass('full aside');
    })

})