function showWeeklyList() {
    const links = [{
        label: "Week 1",
        url: "week1/"
    },
    {
        label: "Week 2",
        url: "week2/"
    },
    {
        label: "Week 3",
        url: "week3/"
    }];
    var listDisplayer = document.getElementById("weekly_list");
    listDisplayer.innerHTML = null;
    var numberOfLinks = links.length;
    for (var i = 0; i < links.length; i++) {
        var aLink = links[i]["label"];
        var aUrl = links[i]["url"];
        listDisplayer.innerHTML += "<li><a href='" +aUrl + "'>"+ aLink + "</a></li>";
    }
}