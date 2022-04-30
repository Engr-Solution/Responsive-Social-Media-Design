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