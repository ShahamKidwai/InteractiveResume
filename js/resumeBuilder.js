/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	 "name" : "shaham kidwai",
	 "role" : "web Developer",
	 "contact" : {
	 "mobile": "832-438-7509",
	 "email" : "skidwai2@gmail.com",
	 "twitter": "shahamK",
	 "github": "https://github.com/shahamkidwai",
	 "location": "Houston"
	},
	 "WelcomeMessage": "welcome to my interactive resume.",
	 "skills" : ["JavaScript", "JQuery", "HTML", "CSS", "AJAX"
	],
	"bioPic": "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedmobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contact.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedTwitter =  HTMLtwitter.replace("%data%", bio.contact.twitter);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedpic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage); 
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	   for (var i = 0 ; i < bio.skills.length; i++){
	        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	        $("#skills").append(formattedSkill);
	}
}

var work = {
	jobs: [{
           "employer": "National Oilwell Varco", 
           "title": "Business Analyst",
           "location": "Houston, TX, US", 
           "dates": "2014-2015",
           "description": "Oracle Business Analyst" 
	      },
	      {
	       "employer": "Essilor of America",
           "title": "DS Process Engineer",
           "location": "Dallas, TX, US",
           "dates": "2012-2013",
           "description": "Digital Surfacing Process Engineer"		   
	      }
	     ]	
};

function displayWork() {
for (job in work.jobs){
	// create new div for work experience
	$("#workExperience").append(HTMLworkStart);	
	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)   
	$(".work-entry:last").append(formattedWorkDates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
    $(".work-entry:last").append(formattedWorkDescription);
 }
}

displayWork();


var projects = {
    projects:[{
	   "title": "Item Catalog Project",
	   "dates": "2017",
	   "description": "A RESTful web application that displays an item catalog with create, read, update and delete features to manage the content, it is built using python flask framework.",
	   "images":[]
    },
	{
	   "title": "Build a Portfolio Project",
	   "dates": "2016",
	   "description": "A fully responsive webpage that displays a list of my completed projects, built using HTML, CSS and Bootstap 4.",
	   "images":[]	
	},
	{
	   "title": "Neighborhood Map Project",
	   "dates": "2017",
	   "description": "Single page application that loads a neighborhood map containing a list of locations and displays information for each location.",
	   "images":[]
    }
	]
}

 projects.display = function(){
 for (project in projects.projects){
	  $("#projects").append(HTMLprojectStart);
	  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	  $(".project-entry:last").append(formattedTitle);
	  var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	  $(".project-entry:last").append(formattedDates);
	  var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	  $(".project-entry:last").append(formattedDescription);
	 
    }
 }
 
 projects.display();



var education = {
  "schools": [
	{
	 "name": "University of  Houston",
	 "city": "Houston, TX, US",
	 "degree": "BS",
	 "major": ["Electrical Engineering Technology"],
	 "minors":["Computer Engineering Tech"],
	 "Graduation": 2008
	},
	{
	 "name": "University of North Texas",
     "city": "Denton, TX, US",
     "degree": "MS",
     "major": ["Engineering Systems"], 
	 "minors": [],
	 "Graduation": 2011
	}
  ],
  "OnlineCourses" : [
	{
     "title": "Fundamentals of Java Programming",
     "School": "Houston Community College",
     "dates": 2016,
     "url": "http://www.hccs.edu/finder/index.php?keyword=1437&search=course"			
	}
  ]
};

education.display = function(){
	
for (school in education.schools)
	{
	  $("#education").append(HTMLschoolStart);
	   var formattedSchoolName =  HTMLschoolName.replace("%data%", education.schools[school].name);
	    $(".education-entry:last").append(formattedSchoolName);
	   var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	    $(".education-entry:last").append(formattedSchoolDegree);
	   var formattedSchoolMajor = HTMLschoolDegree.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
       var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].Graduation);
		$(".education-entry:last").append(formattedSchoolDate);
	   var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$(".education-entry:last").append(formattedSchoolLocation);
	}
}

education.display();



$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);	
});

function inName(name) {
	if (name == null){
		name = bio.name;	
	}
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);
$("#main").append(work["position"]);
$("#main").append(education.schools[0].name);