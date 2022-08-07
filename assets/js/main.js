var age = 22;
let now = new Date().getTime();

if (Date.now() > new Date('October 27, 2022 00:00:00 GMT+1000')){
    age = age+1;

}

$('#about').append('<div class="container py-md-5 py-4">\
<div class="row align-items-center">\
    <div class="col-lg-4">\
        <div class="position-relative">\
            <img src="/assets/images/about.jpg" alt="" class="radius-image img-fluid">\
        </div>\
    </div>\
    <div class="col-lg-8 ps-lg-5 mt-lg-0 mt-5">\
        <h5 class="title-small mb-1">My Intro</h5>\
        <h3 class="title-style">About Me</h3>\
        <p class="mt-3">My Name is Isaac Ojo Iyanuoluwa, I am a Mobile Application Developer, a Full-stack developer and a content creator.</p>\
        <div class="my-info mt-md-5 mt-4">\
            <ul class="single-info">\
                <li class="name-style">Name</li>\
                <li>:</li>\
                <li>\
                    <p>Isaac Ojo</p>\
                </li>\
            </ul>\
            <ul class="single-info">\
                <li class="name-style">Age</li>\
                <li>:</li>\
                <li>\
                    <p id="age">0 Years</p>\
                </li>\
            </ul>\
            <ul class="single-info">\
                <li class="name-style">From</li>\
                <li>:</li>\
                <li>\
                    <p>Lagos, NG</p>\
                </li>\
            </ul>\
            <ul class="single-info">\
                <li class="name-style">Email</li>\
                <li>:</li>\
                <li>\
                    <p><a href="mailto:hojoisaac@gmail.com">hojoisaac@gmail.com</a></p>\
                </li>\
            </ul>\
        </div>\
        <a href="/assets/OjoIsaac2022.pdf" class="btn btn-style mt-5">Download CV</a>\
    </div>\
</div>\
</div>')

$('#progress').append('<div class="container py-md-5 py-4">\
<div class="title-heading-w3 text-center mb-sm-5 mb-4">\
    <h5 class="title-small mb-1">My Skills</h5>\
    <h3 class="title-style">My Expertise Area</h3>\
</div>\
<div class="row py-lg-4">\
    <div class="col-lg-6 pe-lg-5">\
        <div class="progress-info info1">\
            <h6 class="progress-tittle">Flutter & Dart <span class=""></span></h6>\
            <div class="progress">\
                <div class="progress-bar progress-bar-striped gradient-1" role="progressbar"\
                    style="width: 80%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">\
                </div>\
            </div>\
        </div>\
        <div class="progress-info info2">\
            <h6 class="progress-tittle">HTML/CSS <span class=""></span>\
            </h6>\
            <div class="progress">\
                <div class="progress-bar progress-bar-striped gradient-2" role="progressbar"\
                    style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">\
                </div>\
            </div>\
        </div>\
        <div class="progress-info info3">\
            <h6 class="progress-tittle">JavaScript <span class=""></span></h6>\
            <div class="progress">\
                <div class="progress-bar progress-bar-striped gradient-3" role="progressbar"\
                    style="width: 60%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">\
                </div>\
            </div>\
        </div>\
        \
        \
    </div>\
    <div class="col-lg-6 ps-lg-5 mt-lg-0 mt-5">\
        \
        <div class="progress-info info3">\
            <h6 class="progress-tittle">Java <span class=""></span></h6>\
            <div class="progress">\
                <div class="progress-bar progress-bar-striped gradient-3" role="progressbar"\
                    style="width: 80%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">\
                </div>\
            </div>\
        </div>\
        <div class="progress-info info4 mb-0">\
            <h6 class="progress-tittle">Node.js<span class=""></span></h6>\
            <div class="progress">\
                <div class="progress-bar progress-bar-striped gradient-4" role="progressbar"\
                    style="width: 85%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">\
                </div>\
            </div>\
        </div>\
        \
    </div>\
</div>\
</div>');

$('#resume').append('<div class="container py-lg-5 py-4">\
<div class="title-heading-w3 text-center mb-sm-5 mb-4">\
    <h5 class="title-small">Resume</h5>\
    <h3 class="title-style">Awesome Journey</h3>\
</div>\
<div class="row">\
    <div class="col-lg-6">\
        <h5 class="sub-title-timeline"><i class="fas fa-graduation-cap"></i> Education</h5>\
        <div class="timeline">\
            <div class="column">\
                <div class="title">\
                    <h2>Bachelor in Computer Science</h2>\
                </div>\
                <div class="description">\
                    <a href= "https://www.uniosun.edu.ng"><p>Osun State University, Osogbo</p></a>\
                    <h6><i class="fas fa-calendar-alt"></i> 2016 - 2021</h6>\
                </div>\
            </div>\
            <div class="column">\
                <div class="title">\
                    <h2>Grait International College</h2>\
                </div>\
                <div class="description">\
                    <p></p>\
                    <h6><i class="fas fa-calendar-alt"></i>  - 2016</h6>\
                </div>\
            </div>\
            \
        </div>\
    </div>\
\
    <div class="col-lg-6 mt-lg-0 mt-4">\
        <h5 class="sub-title-timeline"><i class="fas fa-briefcase"></i> Experience</h5>\
        <div class="timeline">\
           \
            \
            <div class="column">\
                <div class="title">\
                    <h2>Freelance App Dev</h2>\
                </div>\
                <div class="description">\
                    <p>Self</p>\
                    <h6><i class="fas fa-calendar-alt"></i> 2021 - Present</h6>\
                </div>\
            </div>\
           \
            <div class="column">\
                <div class="title">\
                    <h2>Web3 Developer</h2>\
                </div>\
                <div class="description">\
                    <p>OxifiLab (Self Startup)</p>\
                    <h6><i class="fas fa-calendar-alt"></i> 2022</h6>\
                </div>\
            </div>\
           \
             \
            <div class="column">\
                <div class="title">\
                    <h2>Programming Instructor</h2>\
                </div>\
                <div class="description">\
                    <p>Mc. Adoph  Institutes (Siwes)</p>\
                    <h6><i class="fas fa-calendar-alt"></i> 2019</h6>\
                </div>\
            </div>\
            <div class="column">\
                <div class="title">\
                    <h2>Youtuber/ Content Creator</h2>\
                </div>\
                <div class="description">\
                    <p>Omeiza</p>\
                    <h6><i class="fas fa-calendar-alt"></i> 2018 - </h6>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>\
</div>')
$('zzz').append('bfbfb');

$('#age').text(age + " Years");

