function addFeed(post) {
    const newFeeds = document.querySelector(".feeds");
    let { content, dateCreate, id } = post;
    let commentsRendered = "";
    (async () => {
    const user = await getUser(post.idUser);
    commentsRendered = await getComment(post, user);
    if (newFeeds) {
        const feed = document.createElement("div");
        feed.classList.add("feed");
        feed.innerHTML = `
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png">
                                </div>
                                <div class="ingo">
                                    <h3>${user.userName}</h3>
                                    <small>${dateCreate}</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>
                        <div class="photo">
                            <img src="./images/feed-1.jpg">
                        </div>
                        <div class="caption">
                            <p>${content}</p>
                        </div>
                        <div class="comments text-muted view-commnents">
                            <p class="toggle-comments${id} toggle-comments">View all comments</p>
                            <div class="comment-section${id} comment-section">
                                <!-- comment -->
                                ${commentsRendered}
                                <!-- end of comment  -->
                            </div>
                        </div>
                        <div class="comment-input-section">
                            <div class="comment">
                                <i class="uil uil-comment-dots"></i>
                                <input class="comment-input${id} comment-input" type="text" placeholder="What do you think?">
                            </div>
                            <button class="btn-create-comment${id} btn btn-primary" type='submit'>Reply</button>
                        </div>
                    `;

        newFeeds.appendChild(feed);
        }
    })();
}

async function getComment(post) {
    let commentRendered = "";
    try {
    const response = await axios.get("http://localhost:3000/Comments");
    for (let i = response.data.length - 1; i >= 0; i--) {
        if (response.data[i].idPost === post.id) {
            const user = await getUser(response.data[i].idUser);
            commentRendered += `<div class="user-comment">
                                    <img class="profile-photo"  src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png">
                                    <div class="user-comment-body">
                                        <div class="user-name-and-content">
                                            <h4 class="user-name">${user.userName} </h4>
                                            <p class="comment-content">${response.data[i].content}</p>
                                        </div>
                                        <h4 class="comment-ranking">Comment rating: ${response.data[i].rating}</h4>
                                    </div>
                                </div>`;
        }
    }
    return commentRendered;
        } catch (error) {
    console.log(error);
    }
    console.log(commentRendered);
}

async function getUser(id){
    try {
        const response = await axios.get(`http://localhost:3000/Users/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default addFeed;
