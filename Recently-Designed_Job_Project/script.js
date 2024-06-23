// searchpart
const searchPoint = document.querySelector(".search-point");
const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-icon i");
const closeIcon = document.querySelector(".search-input i");

searchIcon.addEventListener("click", () => {
    searchIcon.parentElement.classList.add("change");
    searchPoint.classList.add("change");

    setTimeout(() => {
        searchInput.focus();
    }, 1000);
});

closeIcon.addEventListener("click", () => {
    searchIcon.parentElement.classList.remove("change");
    searchPoint.classList.remove("change");
});

// front of page
document.querySelector(".dots-item").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});

// clock
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setData() {
    const now = new Date();

    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();

    const secondDegree = (getSecond / 60) * 360;
    const minuteDegree = (getMinute / 60) * 360;
    const hourDegree = (getHour / 12) * 360;

    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setData, 1000);

// Slideshow gallery
const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

//-------------Slideshow-big------------
let current = 1,
    playPauseBool = true,
    interval;

const changeSlides = () => {
    const slideList = document.querySelectorAll(".slide");

    const slides = Array.from(slideList);
    console.log(current);

    if (current > slides.length) {
        current = 1;
    } else if (current === 0) {
        current = slides.length;
    }

    slides.forEach(slide => {
        if (slide.classList[1].split("-")[1] * 1 === current) {
            slide.style.cssText = "visibility: visible; opacity: 1";
        } else {
            slide.style.cssText = "visibility: hidden; opacity: 0";
        }
    });
};

const arrowVisibility = () => {
    const arrows = document.querySelectorAll(".control");

    Array.from(arrows).forEach(arrow => {
        if (!playPauseBool) {
            arrow.classList.add("arrows-visibility");
        } else {
            arrow.classList.remove("arrows-visibility");
        }
    });
};

const changePlayPause = () => {
    const i = document.querySelector(".play-pause i");

    const cls = i.classList[1];

    if (cls === "fa-play") {
        i.classList.remove("fa-play");
        i.classList.add("fa-pause");
    } else {
        i.classList.remove("fa-pause");
        i.classList.add("fa-play");
    }
};

const playPause = () => {
    if (playPauseBool) {
        interval = setInterval(() => {
            current++;
            changeSlides();
        }, 3000);

        playPauseBool = false;
    } else {
        clearInterval(interval);
        playPauseBool = true;
    }

    arrowVisibility();
    changePlayPause();
};

document.querySelector(".left-arrow").addEventListener("click", () => {
    if (!playPauseBool) {
        playPause();
    }

    current--;
    changeSlides();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
    if (!playPauseBool) {
        playPause();
    }

    current++;
    changeSlides();
});

document.querySelector(".play-pause").addEventListener("click", () => {
    playPause();
});

changeSlides();
playPause();

// --------- Card-Details------------
document.querySelector(".card-btn").addEventListener("click", () => {
    document.querySelector(".card").classList.toggle("change");
});

document.querySelector(".move-btn").addEventListener("click", () => {
    document.querySelector(".move").classList.toggle("change");
});

document.querySelector(".run-btn").addEventListener("click", () => {
    document.querySelector(".run").classList.toggle("change");
});

document.querySelector(".go-btn").addEventListener("click", () => {
    document.querySelector(".go").classList.toggle("change");
});

document.querySelector(".walk-btn").addEventListener("click", () => {
    document.querySelector(".walk").classList.toggle("change");
});

document.querySelector(".pace-btn").addEventListener("click", () => {
    document.querySelector(".pace").classList.toggle("change");
});

document.querySelector(".journey-btn").addEventListener("click", () => {
    document.querySelector(".journey").classList.toggle("change");
});

document.querySelector(".stand-btn").addEventListener("click", () => {
    document.querySelector(".stand").classList.toggle("change");
});

//--------- Space-Department--------
document.querySelector(".department-btn").addEventListener("click", () => {
    document.querySelector(".space-department").classList.toggle("change");
});

//------------- Sign Up --------------
const container = document.querySelector(".container5");
const signUpBtn = document.querySelector(".blue-bg button");

signUpBtn.addEventListener("click", () => {
    container.classList.toggle("change");
});

//-----------SignIn & SignUp-------------------
const box = document.querySelector(".container6");
const headingSpan2 = document.querySelector(".heading-span-2");
const form = document.querySelector(".form");

const clearForm = () => {
    document.querySelectorAll(".form-input-wrapper").forEach((item) => {
        item.className = "form-input-wrapper";
    });
    form.reset();
};

document.querySelector(".signup-btn").addEventListener("click", () => {
    box.classList.add("change");
    setTimeout(() => {
        headingSpan2.textContent = "Up";
    }, 200);
    form.className = "form sign-up";
    clearForm();
});

document.querySelector(".signin-btn").addEventListener("click", () => {
    box.classList.remove("change");
    setTimeout(() => {
        headingSpan2.textContent = "In";
    }, 200);
    form.className = "form sign-in";
    clearForm();
});

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const error = (input, message) => {
    const inputWrapper = input.parentElement;
    inputWrapper.className = "form-input-wrapper error";
    inputWrapper.querySelector(".message").textContent = message;
};

const success = (input) => {
    const inputWrapper = input.parentElement;
    inputWrapper.className = "form-input-wrapper success";
};

const checkEmail = (input) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regEx.test(input.value.trim())) {
        success(input);
    } else {
        error(input, "Email is not valid");
    }
};

const checkRequiredFields = (inputArr) => {
    inputArr.forEach((input) => {
        if (input.value.trim() === "") {
            if (input.id === "password2") {
                error(input, "Password confirmation is required");
            } else {
                error(input, `${input.id} is required`);
            }
        } else {
            success(input);
        }
    });
};

const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        error(input, `${input.id} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        error(input, `${input.id} must be less than ${max} characters`);
    } else {
        success(input);
    }
};

const passwordsMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        error(input2, "Password do not match");
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.classList[1] == "sign-up") {
        checkRequiredFields([username, email, password, password2]);
        checkLength(username, 2, 15);
        checkLength(password, 5, 25);
        passwordsMatch(password, password2);
    } else {
        checkRequiredFields([email, password]);
    }
    checkEmail(email);
});

//------------ Boxes -----------------
const boxes = document.querySelectorAll(".box");
const head = document.querySelector(".head span");
const btn = document.querySelector(".btn");

const colors = ["#efd81d", "#61dbfb", "#41b883", "#ff0000", "#1cee09", "#3d82ed", "#FFA500",];

const techs = ["Astronaut instructors", "Science instructors", "Engineering instructors", "Mission operations instructors", "IT staff", "Facilities staff", "Flight surgeons"];

let curr = 1;

const textStyle = () => {
    head.style.color = colors[current - 1];
    head.textContent = techs[current - 1];
    btn.style.backgroundColor = colors[current - 1];
    btn.firstElementChild.textContent = techs[current - 1];
};

let inter = setInterval(() => {
    boxes.forEach((box) => {
        if (current > boxes.length) current = 1;

        if (box.classList[1].split("-")[1] * 1 === current) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    });
    textStyle();
    current++;
}, 5000);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxes.forEach((cube) => {
            cube.classList.remove("active");
        });
        box.classList.add("active");

        current = box.classList[1].split("-")[1] * 1;

        textStyle();

        clearInterval(interval);
    });
});

//--------------Scientist point-----------------
const slideshow = document.querySelector(".container9");

setInterval(() => {
    const firstIcon = slideshow.firstElementChild;
    firstIcon.classList.add("faded-out");

    const thirdIcon = slideshow.children[3];
    thirdIcon.classList.add("light");
    thirdIcon.previousElementSibling.classList.remove("light");

    setTimeout(() => {
        slideshow.removeChild(firstIcon); slideshow.appendChild(firstIcon);

        setTimeout(() => {
            firstIcon.classList.remove("faded-out");
        }, 500)
    }, 500)
}, 3000);

//---------------------Social-Point------------------
const slide = document.querySelector(".container10");

setInterval(() => {
    const firstIcon = slide.firstElementChild;
    firstIcon.classList.add("faded-out");

    const thirdIcon = slide.children[3];
    thirdIcon.classList.add("light");
    thirdIcon.previousElementSibling.classList.remove("light");

    setTimeout(() => {
        slide.removeChild(firstIcon); slide.appendChild(firstIcon);

        setTimeout(() => {
            firstIcon.classList.remove("faded-out");
        }, 500)
    }, 500)
}, 3000);



