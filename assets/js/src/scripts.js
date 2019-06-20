const posts = function () {

    const url = "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs";

    return (
        fetch(url)
            .then(function (response) {
                if (response.ok) {
                    response.json()
                        .then(function (data) {
                            var blogWrapper = document.getElementById("demo")
                            var allPosts = data.map(function (item) {
                                // var title = "<h2>" + item.title + "</h2>"
                                var title = `<h2>${item.title}</h2>`;
                                var body = `<p>${item.body}</p>`;
                                var meta = `<p class='blog-post-meta'>Post #<a href='#'${item.id}</a></p>`;
                                var blogPost = `<div class='blog-post'>${title + meta + '<hr/>' + body + body + body + body + body}</div>`;
                                // console.log(title);
                                return blogPost;
                            })
                                .splice(0, 4)
                                .join("");



                            blogWrapper.innerHTML = allPosts;
                            console.log(allPosts);
                        });
                }
            }));

}()

const search = (function () {
    const url = "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs";
    return {
        sendSearch: function() {
            let searchTerm = document.querySelector("#searchTerm").value;
            fetch(url + "?search=Hand")
                .then(response => response.json())
                .then(json => {
                    let searchResult = document.querySelector("#searchResult");
                    let result = json.map(item => (
                        `<li>${item.title}</li>`
                    ))
                })
        },
        openSearch: function(){
            document.querySelector('#searchLink')
                .addEventListener("click", () => {
                    let form = document.querySelector("#searchBox > div");
                    let input = document.querySelector("#searchDiv > input");
                    let submitSearch = document.querySelector("#submitSearch");

                    form.style.display = "block";
                    form.animate(
                        [
                            // keyframes
                            { transform: "translateX(15px)" },
                            { transform: "translateX(0px)" }
                        ],
                        {
                            // timing options
                            duration: 300,
                            iterations: 1
                        }
                    );
                    input.focus();
                    submitSearch.addEventListener("click", function () {
                        SEARCH.sendSearch();
                    });
                })
        }
    }
})

posts.fetch();

search.openSearch();