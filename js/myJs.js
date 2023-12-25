$(window).scroll(function(){
    
    var menuClass = [".home", ".about", ".services", ".products", ".clients", ".contact"]; 
    var menuID = ["_home", "_about", "_services", "_products", "_clients", "_contact"]; 

    for(var i=0; i<menuClass.length; i++)
    {
        var ID = document.getElementById(menuID[i]);

        if(window.scrollY > (ID.offsetTop - 60))
        { 
            for(var j=0; j<menuClass.length; j++)
                $(menuClass[j]).removeClass("active")

            $(menuClass[i]).addClass('active')
        }
    }
});