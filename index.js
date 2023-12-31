
var loading = document.getElementById("loading");
var home = document.getElementById("home");
var projects = document.getElementById("projects");

var isLoading = true;


if (isLoading) {
    home.style.display = 'none';
    projects.style.display = 'none';
    getData();
}


function getData() {
    try {
        fetch('https://portfolio-51fbb-default-rtdb.firebaseio.com/profile.json')
        .then(res => res.json())
        .then(res => setInfoHome(res))
        .catch( err => console.error(err));
    } catch (error) {
        throw error;
    }
}


function setInfoHome(res) {

    setDataProjects(res);

    var imgProfile = document.getElementById('img_profile');
    var name = document.getElementById('name');
    var profession = document.getElementById('profession');

    imgProfile.src = res.imgProfile;
    name.textContent = res.name;
    profession.textContent = res.profession;

    isLoading = false;
    loading.style.display = 'none';
    home.style.display = 'block';
    projects.style.display = 'block';
    console.log(res);
}


function setDataProjects(res) {
    var general_projects = document.getElementById("general_projects");

    var mobile = [];
    var frontend = [];

    res.projects.forEach(projects => {
        switch (projects.id) {
            case 1:
                mobile = projects.projects;
                break;
            case 2:
                frontend = projects.projects;
                break;
        }
    });

    console.log(mobile);
    console.log(frontend);



}
