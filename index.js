




const posts = [];

const TITLE_VALIDATION_LIMIT = 10;
const TEXT_VALIDATION_LIMIT = 15;

const postTitleInputNode = document.querySelector('.js-title-input');
const postTextInputNode = document.querySelector('.js-text-input');
const newPostBtnNode = document.querySelector('.js-btn-post');
const postsNode = document.querySelector('.js-posts');
const validationMessage = document.querySelector('#vallidation');


const input = document.querySelector("input");
const button = document.querySelector("button");

input.disabled = true;

input.addEventListener("input", function() {
  button.disabled = !this.value.length;
})


newPostBtnNode.addEventListener('click', function() {

const postFromUser = getPostFromUser();
addPost(postFromUser);
renderPosts();

});

postTitleInputNode.addEventListener('input', validation );

postTextInputNode.addEventListener('input', validation );

function validation() {
   const titleLength = postTitleInputNode.value.length;
   const textLength = postTextInputNode.value.length;

   if (titleLength > TITLE_VALIDATION_LIMIT) {
    validationMessage.innerText = `Длинна заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
    validationMessage.classList.remove('vallidation_hidden')
    return;
   }
   if (textLength > TEXT_VALIDATION_LIMIT) {
    validationMessage.innerText = `Длинна заголовка не должна превышать ${TEXT_VALIDATION_LIMIT} символов`;
    validationMessage.classList.remove('vallidation_hidden')
    return;
   }

   validationMessage.classList.add('vallidation_hidden');
};


function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text,
    };
};

function addPost({title, text}) {
   
    const currentDate = new Date();
    const dt = `${currentDate.getHours()} : ${currentDate.getMinutes()}`;
   
    posts.push({
        dt,
        title: title,
        text: text,
    });



}


function getPosts (){
return posts;
};


function renderPosts() {

    const posts = getPosts();

let postsHTML = '';

posts.forEach(post => {
       postsHTML +=
       `
<div class='post'>
<p class='blog__date'>${post.dt} </p>
<p class='blog__title'>${post.title} </p>
<p class='blog__text'>${post.text} </p>
</div>
`
});


postsNode.innerHTML = postsHTML;
}

