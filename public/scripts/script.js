// Getting Elements
const classes = (c) => {
  return document.querySelectorAll(`.${c}`);
};
const id = (id) => {
  return document.querySelector(`#${id}`);
};

// MEDIA QUERIES
const sm = window.matchMedia("(max-width: 768px)");
const md = window.matchMedia("(min-width: 768px)");
const lg = window.matchMedia("(max-width: 1024px)");
const xl = window.matchMedia("(max-width: 1280px)");
const xl_2 = window.matchMedia("(max-width: 1536px)");

// Menu items selection
classes("menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    classes("menu-item").forEach((i) => {
      i.classList.contains("active") && i.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// MESSAGE POPUP
const mediaQuery = () => {
  if (sm.matches) {
    id("message").classList.remove("hidden");
    id("message").classList.add("block");
  } else {
    id("message").classList.add("open");
    setTimeout(() => {
      id("message").classList.remove("open");
    }, 2000);
  }
};

id("message-icon").addEventListener("click", () => {
  id('message-counter').style.display = 'none';
  mediaQuery();
});

sm.addEventListener("change", () => {
  if (id("message-icon").classList.contains("active")) {
    mediaQuery();
  }
});

id("message-close").addEventListener("click", () => {
  id("message").classList.remove("block");
  id("message").classList.add("hidden");
});

// NOTIFICATION POPUP
id("notification-icon").addEventListener("click", () => {
  id('notification-counter').style.display = 'none';
  id("notification").classList.remove("hidden");
  id("notification").classList.add("block");
});

id("notification-close").addEventListener("click", () => {
  id("notification").classList.remove("block");
  id("notification").classList.add("hidden");
});

// THEME CUSTOMIZATION
id("theme-icon").addEventListener("click", () => {
  id("theme").classList.remove("hidden");
});

id("theme").addEventListener("click", (e) => {
  if (e.target.children.length >= 1) {
    if (e.target.children[0].classList.contains("theme-panel")) {
      id("theme").classList.add("hidden");
    } else return;
  } else return;
});

id('theme-close').addEventListener('click', () => {
    id("theme").classList.add("hidden");
})

// THEME COLOR
const updateTheme = theme => {
    const html = document.documentElement
    html.setAttribute('data-theme', theme)
}
// THEME BG
const updateMode = mode => {
    const html = document.documentElement
    html.setAttribute('data-mode', mode)
}

// STORIES CAROUSEL SCROLL
const storyCarousel = dir => {
 id('stories-container').scrollLeft = 50


  // if(dir == 'left'){
  // }else {
  //   container.scrollLeft = 10
  // }
}


// PREV BUTTON
id('prev').addEventListener('click', () => {
  storyCarousel('left')
})
// NEXT BUTTON
id('next').addEventListener('click', () => {
  storyCarousel('right')
})



// INSERTING CONTENTS
const insertStories = () => {

  Stories.map(({username, userAvatar, storyPath}) => {
    id('stories').innerHTML += `<div
    class="relative min-w-[110px] min-h-[160px] shadow-md bg-box rounded-lg relative cursor-pointer overflow-hidden story bg-gradient-to-t from-slate-300/50 to-transparent"
  >
    <div
      class="w-8 h-8 rounded-full shadow-md bg-gradient-to-b from-primary to-secondary p-1 absolute top-3 left-3 overflow-hidden"
    >
      <img
        src='${userAvatar}'
        alt="story-user "
        class="w-full h-full object-fill rounded-full"
      />
    </div>
    <img
      src='${storyPath}'
      alt="story"
      class="w-full h-full"
    />

    <p
      class="text-xs px-2 text-white absolute bottom-2 text-center"
    >
    ${username}
    </p>
  </div>`
  })

}


// POSTS CONTENTS
const insertPosts = () => {
  Posts.map(({username, userAvatar, postImage, content, commentor, time}) => {
    id('posts').innerHTML += ` <div
    class="bg-box rounded-lg drop-shadow-md hover:drop-shadow-lg p-4"
  >
    <div class="flex justify-between items-center mb-2">
      <div class="flex gap-4 items-center cursor-pointer">
        <div
          class="relative w-12 h-12 rounded-full mr-2 cursor-pointer"
        >
          <img
            src='${userAvatar}'
            alt="avatar"
            class="w-full h-full rounded-full"
          />
          <span
            class="absolute bottom-0 -right-[3px] w-3 h-3 rounded-full border-2 border-white p-1 bg-green-500 overflow-hidden z-40"
          ></span>
        </div>
        <div class="flex flex-col">
          <p class="text-lg">${username}</p>
          <p class="flex items-center gap-4 text-slate-400 text-xs">
            <span>Posted ${time}</span>
            <span class="material-icons-outlined">public</span>
          </p>
        </div>
      </div>
      <span class="material-icons-outlined p-0 cursor-pointer">
        more_vert
      </span>
    </div>
    <div class="mb-2">
      <p class="text-sm">
      ${content}
    </div>
    <div class="w-full h-[260px] rounded-lg bg-bg mb-2">
      <img
        src='${postImage}'
        alt="post image"
        class="w-full h-full"
      />
    </div>
    <div>
      <div class="flex justify-between">
        <span>
          <span class="material-icons-outlined cursor-pointer">
            favorite_border
          </span>
          <span class="material-icons-outlined cursor-pointer">
            comment
          </span>
          <span class="material-icons-outlined cursor-pointer">
            share
          </span>
        </span>
        <span class="material-icons-outlined cursor-pointer">
          bookmark_border
        </span>
      </div>
      <div class="flex items-center">
        <span class="flex mr-2">
          
          <img
            src='${commentor[0]}'
            alt="commentor"
            class="w-6 h-6 -ml-2 border border-[2px] border-color rounded-full bg-color cursor-pointer"
          />
          <img
            src='${commentor[1]}'
            alt="commentor"
            class="w-6 h-6 -ml-2 border border-[2px] border-color rounded-full bg-color cursor-pointer"
          />
          <img
            src='${commentor[2]}'
            alt="commentor"
            class="w-6 h-6 -ml-2 border border-[2px] border-color rounded-full bg-color cursor-pointer"
          />
        </span>
        <span class="flex text-xs text-color">
          Liked by
          <p class="font-semibold text-xs px-1 cursor-pointer">
            Solution
          </p>
          and 1,950 others
        </span>
      </div>
    </div>
  </div>
`
  })

}





insertPosts()
insertStories()