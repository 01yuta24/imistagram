window.addEventListener('load', () => {

  const mynameMember = document.querySelector(".member-profile-name");
  const mynameAside = document.querySelector(".aside-me");
  const myheaderIcon = document.querySelector(".header-profile-icon");
  const myMemberIcon = document.querySelector(".member-profile-icon");
  const myProfileIcon = document.querySelector(".profile-icon");

  mynameMember.innerHTML = localStorage.getItem("username");
  mynameAside.innerHTML =  localStorage.getItem("username");

  function iconFn(name){
    switch(name){
      case("yuta"):
      return "../images/runners-icon/yuta.jpg";
      case("kiyo"):
      return "../images/runners-icon/kiyo.jpg";
      default:
        return "../images/runners-icon/dare.jpeg";
    }
  }

  switch(localStorage.getItem("username")){
    case("yuta"):
      myMemberIcon.src = iconFn("yuta");
      myheaderIcon.src = iconFn("yuta");
      myProfileIcon.src = iconFn("yuta");
      localStorage.setItem("img",iconFn("yuta"));
      break;
    case("kiyo"):
      myMemberIcon.src = iconFn("kiyo");
      myheaderIcon.src = iconFn("kiyo");
      myProfileIcon.src = iconFn("kiyo");
      localStorage.setItem("img",iconFn("kiyo"));
      break;
    default:
      myMemberIcon.src = iconFn("dare");
      myheaderIcon.src = iconFn("dare");
      myProfileIcon.src = iconFn("dare");
      localStorage.setItem("img",iconFn("dare"));
      break;
  }

  function createFeed(){
    const containerEl = document.querySelector('#newsfeed');
    containerEl.innerHTML = "";
    // This makes things appear
    for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
      const post = bacefook.newsfeed[index];

      const sectionEl = document.createElement("section");
      sectionEl.className = "post-section";

      const timeEl = document.createElement("div");
      const checkDiff = moment().diff(post.timestamp,"seconds");

      if (checkDiff < 8){
      timeEl.innerText = `新しい投稿`;
      } else if(checkDiff >= 8 && checkDiff < 60){
        const diffTime = moment().diff(post.timestamp,"seconds");
        timeEl.innerText = `${diffTime}秒前`;
      }else if (checkDiff >= 60 && checkDiff < 3600){
        const diffTime = moment().diff(post.timestamp,"minutes");
        timeEl.innerText = `${diffTime}分前`;
      } else if (checkDiff >= 3600 && checkDiff < 86400){
        const diffTime = moment().diff(post.timestamp,"hours");
        timeEl.innerText = `${diffTime}時間前`;
      } else if (checkDiff >= 86400 && checkDiff < 31536000){
        const diffTime = moment().diff(post.timestamp,"days");
        timeEl.innerText = `${diffTime}日前`;
      } else {
        const diffTime = moment().diff(post.timestamp,"years");
        timeEl.innerText = `${diffTime}年前`;
      }

      const friendContainerEl = document.createElement("div");
      friendContainerEl.className = 'newsfeed-friend-container';
      const friendSubContainerEl = document.createElement("div");

      const friendIconContainerEl = document.createElement("div");
      friendIconContainerEl.className = "newsfeed-profile";
      const friendIconEl = document.createElement("img");
      friendIconEl.className = "newsfeed-profile-icon";
      friendIconEl.src = post.friendIcon;

      const friendIconBackEl = document.createElement("div");
      friendIconBackEl.className = "newsfeed-profile-icon-back";

      friendIconContainerEl.append(friendIconEl);
      friendIconContainerEl.append(friendIconBackEl);

      const friendNameContainerEl = document.createElement("div");
      friendNameContainerEl.className = "friend-name-container";
      const friendEl = document.createElement('span');
      friendEl.className = 'friend';
      friendEl.innerText = post.friend;
      const friendSpanEl = document.createElement('span');
      friendSpanEl.className = 'friend-time';
      friendSpanEl.innerText = `・ ${timeEl.innerText}`;
      const friendPlaceEl = document.createElement('span');
      friendPlaceEl.className = "friend-place";
      friendPlaceEl.innerText = "音楽なし";
      const ellipsisEl = document.createElement("i");
      ellipsisEl.className = "fa-solid fa-ellipsis";

      friendNameContainerEl.append(friendEl);
      friendNameContainerEl.append(friendSpanEl);
      friendNameContainerEl.append(friendPlaceEl);

      friendSubContainerEl.append(friendIconContainerEl);
      friendSubContainerEl.append(friendNameContainerEl);

      friendContainerEl.append(friendSubContainerEl);
      friendContainerEl.append(ellipsisEl);
      
      const imageEl = document.createElement('img');
      imageEl.src = post.image;
      imageEl.alt = `${post.friend}'s picture`;
      imageEl.width = 468;
      imageEl.height = 585;
      imageEl.style.borderRadius = "5px";

      // imgの下にアイコン追加しました
      const iconEl = document.createElement("div");
      iconEl.className = "newsfeed-icon-container";

      const subIconEl = document.createElement("div");
      subIconEl.className = "newsfeed-sub-icon-container";

      const heartEl = document.createElement("i");
      heartEl.className = "fa-regular fa-heart";
      const messageEl = document.createElement("i");
      messageEl.className = "fa-regular fa-comment";
      const shareEl = document.createElement("i");
      shareEl.className = "fa-regular fa-paper-plane";
      const markEl = document.createElement("i");
      markEl.className = "fa-regular fa-bookmark";

      subIconEl.append(heartEl);
      subIconEl.append(messageEl);
      subIconEl.append(shareEl);

      iconEl.append(subIconEl);
      iconEl.append(markEl);


      const postContainerEl = document.createElement("div");
      postContainerEl.className = "newsfeed-post-container"; 
      
      const postFriendEl = document.createElement('span');
      postFriendEl.className = 'friend';
      postFriendEl.innerText = post.friend;
      const postEl = document.createElement('p');
      postEl.className = "newsfeed-post-p";
      postEl.innerText = post.text;
      const hashtagAEl = document.createElement("a");
      hashtagAEl.className = "newsfeed-post-hashtag-a";
      const hashtagEl = document.createElement('span');
      hashtagEl.className = "newsfeed-post-hashtag";
      hashtagEl.innerText = post.hashtag;
      hashtagAEl.append(hashtagEl);
    
      postContainerEl.append(postFriendEl);
      postContainerEl.append(postEl);
      postContainerEl.append(hashtagAEl);
    
      sectionEl.append(friendContainerEl);
      sectionEl.append(imageEl);
      sectionEl.append(iconEl);
      sectionEl.append(postContainerEl);
      
      containerEl.append(sectionEl);
    }    
  }

  createFeed();

  let n = 0;
  const scheduler = () => {
    if(n > 0){
      createFeed();
    }
    setTimeout(scheduler,8000); // generate a new post every 3 to 8 seconds
    n++;
  };
  scheduler();
  
const body = document.querySelector("body");
const modal = document.querySelector(".modal"); //modalを指定
const overlay = document.querySelector(".overlay"); //overlayを指定

const textModal = document.querySelector(".modal-text");

const fileModal = document.querySelector(".upload-file");

const btnOpenModal = document.querySelector(".show-modal"); //modalを開くボタンを指定
const btnCloseModal = document.querySelector(".close-modal"); //modalを閉じるボタンを指定
const btnSubmitModal = document.querySelector(".modal-btn");

const changeBtn = this.document.querySelector(".change-btn");

changeBtn.addEventListener("click",function(){
  window.location.href = "signin.html";
});

const myObj = {
  friend:"",
  text:"",
  feeling: "smile",
  image:"",
  timestamp:"",
}

//modalとoverlayのhiddenクラスを消す（modalとoverlayが見えるようにする）処理
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.style.overflowY = "hidden";
};

//modalとoverlayのhiddenクラスを追加する（modalとoverlayが見えないようにする）処理
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflowY = "auto";

  fileModal.value = "";
};

const submitModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflowY = "auto";

  const timestamp = new Date();
  const username = localStorage.getItem("username");
  
  myObj.friendIcon = iconFn(username);
  myObj.friend = username;
  myObj.text = textModal.value;
  myObj.timestamp = timestamp;


  if(!bacefook.friends[username]){
    bacefook.friends[username] = [];
  }

  bacefook.friends[username].push(myObj);
  bacefook.newsfeed.push(myObj);

  createFeed();

  textModal.value = "";
  fileModal.value = "";
};

const loadFile = evt => {
  let input = evt.target;
  if (input.files.length == 0) {
    console.log('No file selected');
    return;
  }
  console.log("yes file selected");
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    myObj.image = reader.result;
  };

  reader.readAsDataURL(file);
};
fileModal.addEventListener('change', loadFile);

//modalの開くボタンと閉じるボタンをクリックした時の処理
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
btnSubmitModal.addEventListener("click",submitModal);



});



