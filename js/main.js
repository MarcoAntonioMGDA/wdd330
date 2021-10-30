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
    },
    {
        label: "Week 4",
        url: "week4/"
    },
    {
        label: "Week 5",
        url: "week5/"
    },
    {
        label: "ToDo App",
        url: "todo/"
    },
    {
        label: "Week 7",
        url: "week7/"
    }
];
    var listDisplayer = document.getElementById("weekly_list");
    listDisplayer.innerHTML = null;
    var numberOfLinks = links.length;
    for (var i = 0; i < links.length; i++) {
        var aLink = links[i]["label"];
        var aUrl = links[i]["url"];
        listDisplayer.innerHTML += "<li><a href='" +aUrl + "'>"+ aLink + "</a></li>";
    }
}