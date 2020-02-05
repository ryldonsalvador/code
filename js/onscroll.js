function scrollReveal() {
    window.sr = ScrollReveal();
        ///////////////////// home animations ///////////
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    var homesocialIcons = {
        delay: 1200,
        opacity: 0,
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        scale: 0.6,
    }
    var titlejob = {
        delay: 1000,
        opacity: 0,
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        origin: 'bottom',
        distance: '20px', 
    }

    var homeline_anim = {
        delay: 500,
        opacity: 0,
        duration: 1000,
        scale: 0.9,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        origin: 'bottom',
        distance: '20px',
    }
    var animName = {
        delay: 500,
        interval: 0,
        opacity: 0,
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        origin: 'top',
        distance: '50px',
    }
    var fadeInGreetings = {
        opacity: 0,
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        delay: 500,
    };

    sr.reveal('.social-icons', homesocialIcons);
    sr.reveal('.home_job_title, .home_job_title_ampersand', titlejob);
    sr.reveal('.line', homeline_anim);
    sr.reveal('.home_name', animName);
    sr.reveal('.home_greetings, .home_greetings_period', fadeInGreetings);

    ///////////////////// about animations ///////////
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    var profilePicAnimate = {
        duration: 500,
        distance: '100px',
        easing: 'ease-out',
        origin: 'bottom',
        reset: false,
    };
    var revealAboutTexts =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500,
    };
    var revealAboutDetails =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500,
    }
    /// about animations listeners
    sr.reveal('.profile_pic', profilePicAnimate);
    sr.reveal('.about_me_text', revealAboutTexts);
    sr.reveal('.about_me_details', revealAboutDetails);
    
        ///////////////////// skills animations ///////////
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
 
    var revealSkills =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500,
    }
    var revealSkills1 =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500,
    }
    var revealSkills2 =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500,
    }
    var revealSkills3 =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500,
    }

    sr.reveal('.about_skills_text', revealSkills);
    sr.reveal('.one', revealSkills1);
    sr.reveal('.two', revealSkills2);
    sr.reveal('.three', revealSkills3);
    
    ///////////////////// services animations ///////////
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    var revealServices =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    var revealOfferTexts =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    var revealOfferColumns =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    var revealOfferColumnsTexts =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    
    /// services animations listeners
    sr.reveal('.about_services_text', revealServices);
    sr.reveal('.about_services_offer_text', revealOfferTexts);
    sr.reveal('.columns', revealOfferColumns);
    sr.reveal('.offer_text', revealOfferColumnsTexts);

    ///////////////////// projects animations ///////////
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    var revealProjectHeader =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    var revealProjectSubHeader =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    var revealProjectColumns =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    
    /// projects animations listeners
    sr.reveal('.myprojects_header', revealProjectHeader);
    sr.reveal('.myprojects_sub_header', revealProjectSubHeader);
    sr.reveal('.columns_proj', revealProjectColumns);

    ///////////////////// contactme animations ///////////
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    var revealContactMeHeader =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    var revealContactMeMsg =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    var revealContactMeEnvelope =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    var revealContactMeEmail =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    var revealContactMeIcons =  {
        duration   : 500,
        distance   : '100px',
        origin     : 'bottom',
        reset      : false,
        easing     : 'ease-out',
        delay      : 500
    }
    /// contact me animations listeners
    sr.reveal('.contact_me_header', revealContactMeHeader);
    sr.reveal('.contact_me_messages', revealContactMeMsg);
    sr.reveal('.contact_me_email_icon', revealContactMeEnvelope);
    sr.reveal('.contact_me_email', revealContactMeEmail);
    sr.reveal('.contact_me_icons', revealContactMeIcons);
}