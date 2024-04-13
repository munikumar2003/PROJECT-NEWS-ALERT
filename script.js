function toggleMenu() {
    var menuclass = document.getElementsByClassName('menu-class')
    var menuContent1 = document.getElementById('menuContent');
    var before = document.getElementById('before');
    var after = document.getElementById('after');
    menuContent1.style.display = (menuContent1.style.display === "block") ? "none" : "block";
    if(menuContent1.style.display === "block"){
        after.style.display = "block";
        before.style.display = "none";
    }
    else {
        after.style.display = "none";
        before.style.display = "block";
    }
    menuContent1.style.textDecoration="none";
  }
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'ba0ceb153c7e20fdba71cf2e5915c66c';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Rangampeta&appid=' + apiKey;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatureElement = document.getElementById('temperature');
            const temperature = data.main.temp;
            const celsiusTemperature = temperature - 273.15;
            temperatureElement.textContent = celsiusTemperature.toFixed(2) + '°C';
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
function scrollToClass1() {
    var firstDiv = document.getElementById('class-1');
    firstDiv.scrollIntoView({ behavior: 'smooth',block:'end' });
}

function scrollToClass2() {
    var firstDiv = document.getElementById('class-2');
    firstDiv.scrollIntoView({ behavior: 'smooth',block:'end' });
}

function scrollToClass3() {
    var firstDiv = document.getElementById('class-3');
    firstDiv.scrollIntoView({ behavior: 'smooth',block:'end' });
}

function scrollToClass4() {
    var lastDiv = document.getElementById('class-4');
    lastDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function scrollToClass5() {
    var lastDiv = document.getElementById('class5');
    lastDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
}
function scrollToClass6() {
    var lastDiv = document.getElementById('class-6');
    lastDiv.scrollIntoView({ behavior: 'smooth',block:'end' });
}
function gotologin(){
    window.location.href = "loginpage.html";
}

function gotoregister(){
    window.location.href = "registerpage.html";
}

function updateDynamicTimeNews1() {
    const dynamicTimeElement = document.getElementById('news1-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews2() {
    const dynamicTimeElement = document.getElementById('news2-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews3() {
    const dynamicTimeElement = document.getElementById('news3-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews4() {
    const dynamicTimeElement = document.getElementById('news4-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews5() {
    const dynamicTimeElement = document.getElementById('news5-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews6() {
    const dynamicTimeElement = document.getElementById('news6-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews7() {
    const dynamicTimeElement = document.getElementById('news7-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews8() {
    const dynamicTimeElement = document.getElementById('news8-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews9() {
    const dynamicTimeElement = document.getElementById('news9-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews10() {
    const dynamicTimeElement = document.getElementById('news10-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews11() {
    const dynamicTimeElement = document.getElementById('news11-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews12() {
    const dynamicTimeElement = document.getElementById('news12-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews13() {
    const dynamicTimeElement = document.getElementById('news13-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews14() {
    const dynamicTimeElement = document.getElementById('news14-time');
    const postTime = new Date('2024-03-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateDynamicTimeNews15() {
    const dynamicTimeElement = document.getElementById('news15-time');
    const postTime = new Date('2024-04-04T06:00:00');  // Replace this with your actual post time
    dynamicTimeElement.textContent = updateTime(postTime);
}
function updateTime(postTime){
    const currentTime = new Date();
    const timeDifference = currentTime - postTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    let dynamicTime;

    if (hours >= 24) {
        postTime = new Date();  // If more than 24 hours, display the full date and time
    } 
    if (hours >= 1) {
        dynamicTime = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes >= 1) {
        dynamicTime = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        dynamicTime = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }

    return dynamicTime;
}
function changeContent(class5) {
    const content = document.getElementById("two");
    const content1 = document.getElementById("three");
    content.innerHTML = "<div><img src='https://github.com/munikumar2003/newsalert/blob/main/last24-news-1.jpg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'> <p style='padding-left:10px;color:#203966;'>The massive train accident in Jamtara took place at Jharkhand's Kalajharia railway station as a train ran over some passengers.A major train accident took place in Jharkhand's Jamtara on Wednesday evening as a train ran over the passengers at the Kalajharia railway station. Several are feared dead though the exact number of deaths has not yet been confirmed, news agency ANI reported.</p></div>";
    content1.innerHTML = "<div><img src='https://github.com/munikumar2003/newsalert/blob/main/last24-news-2.jpg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'> <p style='padding-left:10px;color:#203966;'>Sandeshkhali came to the spotlight on January 7 when an Enforcement Directorate team that arrived to raid local TMC leader Sheikh Shahjahan’s house in connection with the public distribution system scam was attacked by a mob.Even as Sheikh Shahjahan has evaded arrest, since February 7, villagers led by local women have held violent protests against alleged harassment and exploitation by local TMC leaders.</p></div>";
}
function originalContent(class5) {
    const content = document.getElementById("two");
    content.innerHTML = "<div style='width: 100%;margin-top: 10px;'><img src='https://github.com/munikumar2003/newsalert/blob/main/last24-news-1.jpg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'><b>Jamtara train accident: 2 crushed to death, many injured in Jharkhand</b></div>";
    const content1 = document.getElementById("three");
    content1.innerHTML = "<div style='width: 100%;margin-top: 10px;'><img src='https://github.com/munikumar2003/newsalert/blob/main/last24-news-2.jpg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'><b>Sheikh Shahjahan, TMC leader accused in Sandeshkhali violence case, arrested</b></div>";
}
function changeContent1(class5i) {
    const content = document.getElementById("four");
    const content1 = document.getElementById("five");
    content.innerHTML = "<div><img src='https://github.com/munikumar2003/newsalert/blob/main/sports1.jpg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'> <p style='padding-left:10px;color:#203966;'>DC vs KKR, IPL 2024 Highlights: Sunil Narine, Angkrish Raghuvanshi and Andre Russell starred as Kolkata Knight Riders defeated Delhi Capitals by 106 runs in Vizag. The seasoned Sunil Narine and young Angkrish Raghuvanshi struck scintillating half-centuries to power KKR to an imposing 272 for seven. Narine blasted 85 in a mere 39 balls while the 18-year-old Raghuvanshi smashed his way to 54 off 27 deliveries, as the DC bowlers ran for cover.</p></div>";
    content1.innerHTML = "<div><img src='https://github.com/munikumar2003/newsalert/blob/main/sports-2.jpg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'> <p style='padding-left:10px;color:#203966;'>Suryakumar Yadav has been declared fit and is likely to feature in Mumbai Indians’ next IPL game against Delhi Capitals at the Wankhede Stadium on Sunday.The National Cricket Academy in Bengaluru cleared the middle-order batsman, who had missed more than three months of cricket, on Wednesday. The BCCI and the physios at the NCA didn’t want to take any chances and satisfied themselves thoroughly before giving Yadav the go-ahead.He is fit now. The NCA made him play a few practice games and he looked good. He can join the Mumbai Indians team. </p></div>";
}
function originalContent1(class5i) {
    const content = document.getElementById("four");
    content.innerHTML = "<div style='width: 100%;margin-top: 10px;'><img src='https://github.com/munikumar2003/newsalert/blob/main/sports1.jpg?raw=true'  height='50%' width='80%' style='border-radius: 10px; margin-left:10%'><b>All-Round Sunil Narine Guides Kolkata Knight Riders,Third Consecutive Win</b></div>";
    const content1 = document.getElementById("five");
    content1.innerHTML = "<div style='width: 100%;margin-top: 10px;'><img src='https://github.com/munikumar2003/newsalert/blob/main/sports-2.jpg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'><b>Suryakumar Yadav likely to play for Mumbai Indians against Delhi Capitals</b></div>";
}
function changeContent2(class5ii) {
    const content = document.getElementById("six");
    const content1 = document.getElementById("seven");
    content.innerHTML = "<div><img src='https://github.com/munikumar2003/newsalert/blob/main/ent-1.jpeg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'> <p style='padding-left:10px;color:#203966;'>The film Family Star, starring Vijay Deverakonda, is set to hit theaters on April 5, 2024. Directed by Parasuram Petla, the movie stars Mrunal Thakur in the female lead role and Rashmika Mandanna in a special cameo role.After completing the censor process, the film has received a U/A certificate. Recent reports reveal that the censor board has instructed the team to mute around five cuss words in the movie.With a runtime of 163 minutes, Family Star has generated significant buzz and is expected to have a decent opening at the box office. Produced by Dil Raju, the film features music by Gopi Sundar.</p></div>";
    content1.innerHTML = "<div><img src='https://github.com/munikumar2003/newsalert/blob/main/ent-2.jpeg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'> <p style='padding-left:10px;color:#203966;'>Just one week to go for the release of the Eid biggies – Maidaan and Bade Miyan Chote Miyan – and hence, the excitement in the industry and exhibition sector is tremendous. As expected, the makers had begun the censor process of both films in advance. Bollywood Hungama has exclusively learned that the Central Board of Film Certification (CBFC) granted a U/A certificate to the makers of Ajay Devgn-starrer Maidaan earlier in the day.The good news is that the Examining Committee of CBFC cleared the film without a single cut. In other words, the makers didn’t have to remove any scene or dialogue.</p></div>";
}
function originalContent2(classii) {
    const content = document.getElementById("six");
    content.innerHTML = "<div style='width: 100%;margin-top: 10px;'><img src='https://github.com/munikumar2003/newsalert/blob/main/ent-1.jpeg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'><b>Family Star faces censor board’s objections over cuss words</b></div>";
    const content1 = document.getElementById("seven");
    content1.innerHTML = "<div style='width: 100%;margin-top: 10px;'><img src='https://github.com/munikumar2003/newsalert/blob/main/ent-2.jpeg?raw=true' height='50%' width='80%' style='border-radius: 10px; margin-left:10%'><b>Sheikh Shahjahan, TMC leader accused in Sandeshkhali violence case, arrested</b></div>";
}
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordToggle = document.getElementById("password-toggle");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.textContent = "Hide password";
    } else {
      passwordInput.type = "password";
      passwordToggle.textContent = "Show password";
    }
  }