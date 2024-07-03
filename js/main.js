(function (window) {
  "use strict";

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  var hasClass, addClass, removeClass;

  if ("classList" in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + " " + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), " ");
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass,
  };
  if (typeof define === "function" && define.amd) {
    define(classie);
  } else {
    window.classie = classie;
  }
})(window);

$(".loader").remove();
$(".first-time").addClass("start");

var perfData = window.performance.timing,
  EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
  // time = parseInt((EstimatedTime / 1000) % 60) * 100;
  time = 2000;
var PercentageID = $(".percentage"),
  start = 0,
  end = 100,
  durataion = time;
animateValue(PercentageID, start, end, durataion);

function animateValue(id, start, end, duration) {
  var range = end - start,
    current = start,
    increment = end > start ? 1 : -1,
    stepTime = Math.abs(Math.floor(duration / range)),
    obj = $(id);
  var timer = setInterval(function () {
    current += increment;
    $(".line-load").css("width", current + "vw");
    $(obj).text(current + "%");
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

setTimeout(function () {
  setTimeout(function () {
    $(".first-time").addClass("full-load");
    setTimeout(function () {
      $(".loader, .first-time").remove();
      $("html").addClass("is-ready");
    }, 300);
  }, 1200);
}, time);

function AjaxSendRequest(pushState = true) {
  //заявка на обучение
  $(".js-request-form").submit(function (e) {

    var form_data = $("#form-request input").serialize();
    form_data += "&page=" + window.location.href;
    form_data += "&form=" + "edu_request";

    e.preventDefault();
    if ($("#form-request input").val().length === 0) {
    } else {
      $.ajax({
        type: "POST",
        url: "../../../form-processing.php",
        data: form_data,
        success: function () { }
      });
      $(".js-request-form").removeClass("open");
      $(".js-request-ok").addClass("open");
    }
  });
}

function AjaxSendConsultation(pushState = true) {
  // Заявка на консультацию
  $(".js-consultation-form").submit(function (e) {

    var form_data = $("#consultation-form input").serialize();
    form_data += "&page=" + window.location.href;
    form_data += "&form=" + "consultation";

    e.preventDefault();
    if ($("#consultation-form input").val().length === 0) {
    } else {
      $.ajax({
        type: "POST",
        url: "../../../form-processing.php",
        data: form_data,
        success: function () { }
      });

      $(".js-request-ok").addClass("open");
    }
  });
}

$(document.body).ready(function () {
  $(".online-user").on("click", function () {
    $(".online-user-text").toggleClass("visible");
  });

  $("#consultation-phone").mask("+7 (999) 999-99-99");

  $(".js-request-form__input").on("click", function () {
    $(".request-form__list").toggleClass("open");
    $(".request-form__field_select").toggleClass("open");
  });

  $(".js-modal-close").on("click", function () {
    $(".js-modal").removeClass("open");
  });

  $(".js-request-form__option").on("click", function () {
    $("#services").attr("value", $(this).data("option"));
    const placeholder = $(".placeholder");
    placeholder[0].innerHTML = $(this).data("option");
    placeholder.addClass("active");
    $(".request-form__list").removeClass("open");
  });

  $(".open-modal-request").on("click", function () {
    $(".js-request-form").addClass("open");
    $("#phone-request").mask("+7 (999) 999-99-99");
    $("#services").attr("value", $(this).data("name"));
    // const profession = $("#profession-request");
    // const professionSelect = $("#profession-request-select");
  });

  $(".modal-close-overlay, .modal-close").on("click", function () {
    $(".modal").addClass("close");
    setTimeout(function () {
      $(".modal").removeClass("open close");
    }, 400);
  });

  $(".course-item-program-list ul li").click(function () {
    $(this).toggleClass("open");
  });

  $(".burger").click(function () {
    $(this).toggleClass("open");
    $("body").toggleClass("open");
    $(".menu-block").toggle();
    $(".js-burger-content").toggle();
  });

  $("a").on("click", function (e) {
    if (!$(this).hasClass("inactive-link")) {
      var href = $(this).attr("href");
      e.preventDefault(e);
      $(".next-page").addClass("active");
      setTimeout(function () {
        window.location = href;
      }, 300);
      setTimeout(function () {
        $(".next-page").removeClass("active");
      }, 500);
    }
  });

  $(".js-btn-consultation").on("click", () => {
    document
      .querySelector(".js-consultation")
      .scrollIntoView({ behavior: "smooth" });
  });

  $(".js-btn-courses").on("click", () => {
    document
      .querySelector(".js-courses")
      .scrollIntoView({ behavior: "smooth" });
  });

  $(".js-btn-program").on("click", () => {
    document
      .querySelector(".js-program")
      .scrollIntoView({ behavior: "smooth" });
  });

  $(".js-header-dropdown").on("click", (e) => {
    $(e.target).next().fadeToggle();
    $(e.target).find("svg").toggleClass("_open");
  });

  $("body").on("click", (e) => {
    if (
      !(
        e.target.classList.contains(".js-header-dropdown") ||
        e.target.closest(".js-header-dropdown")
      )
    ) {
      $(".header-dropdown").fadeOut();
    }
  });

  if ($("body").find(".js-swiper-mentors").length) {
    var swiperMentors = new Swiper(".js-swiper-mentors", {
      slidesPerView: 1.1,
      spaceBetween: 8,
      slidesPerGroup: 1,
      speed: 800,
      navigation: {
        nextEl: ".js-next-mentors",
        prevEl: ".js-prev-mentors",
      },
      breakpoints: {
        1025: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        600: {
          slidesPerView: 1.7,
          slidesPerGroup: 1,
        },
      },
    });
  }
  if ($("body").find(".js-swiper-reviews").length) {
    var swiperReviews = new Swiper(".js-swiper-reviews", {
      slidesPerView: 1,
      spaceBetween: 8,
      slidesPerGroup: 1,
      speed: 800,
      navigation: {
        nextEl: ".js-next-reviews",
        prevEl: ".js-prev-reviews",
      },
    });
  }
  if ($("body").find(".js-swiper-experts").length) {
    var swiperExperts = new Swiper(".js-swiper-experts", {
      slidesPerView: 2.7,
      spaceBetween: 8,
      slidesPerGroup: 1,
      freeMode: true,
    });
  }
  if ($("body").find(".js-informal-communication-swiper").length) {
    var swiperInformalCommunication = new Swiper(
      ".js-informal-communication-swiper",
      {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: ".js-swiper-next",
          prevEl: ".js-swiper-prev",
        },
        breakpoints: {
          1280: {
            slidesPerView: 1,
          },
          1023: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          600: {
            slidesPerView: 1.2,
            spaceBetween: 8,
          },
          360: {
            slidesPerView: 1.2,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: 1.2,
            spaceBetween: 8,
          },
        },
      }
    );
  }
  if ($("body").find(".js-project-swiper").length) {
    var swiperProject = new Swiper(".js-project-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: true,
      navigation: {
        nextEl: ".js-project-swiper-next",
        prevEl: ".js-project-swiper-prev",
      },
      breakpoints: {
        1025: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        600: {
          slidesPerView: 1.1,
          slidesPerGroup: 1,
          spaceBetween: 8,
        },
        425: {
          slidesPerView: 1.1,
          slidesPerGroup: 1,
          spaceBetween: 8,
        },
        360: {
          slidesPerView: 1.1,
          slidesPerGroup: 1,
          spaceBetween: 8,
        },
        320: {
          slidesPerView: 1.1,
          slidesPerGroup: 1,
          spaceBetween: 8,
        },
      },
    });
  }
  if ($("body").find(".js-course-review-slider").length) {
    var swiperCourseReview = new Swiper(".js-course-review-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      navigation: {
        nextEl: ".js-course-review-swiper-next",
        prevEl: ".js-course-review-swiper-prev",
      },
      breakpoints: {
        1920: {
          slidesPerView: 1,
        },
        1600: {
          slidesPerView: 1,
        },
        1366: {
          slidesPerView: 1,
        },
        1280: {
          slidesPerView: 1,
        },
        1023: {
          slidesPerView: 1.3,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 1.3,
          spaceBetween: 8,
        },
        600: {
          slidesPerView: 1.2,
          spaceBetween: 8,
        },
        360: {
          slidesPerView: 1.2,
          spaceBetween: 8,
        },
        320: {
          slidesPerView: 1.2,
          spaceBetween: 8,
        },
      },
    });
  }
  if ($("body").find(".js-swiper-other").length) {
    var swiperOther = new Swiper(".js-swiper-other", {
      slidesPerView: 2,
      spaceBetween: 8,
      slidesPerGroup: 2,
      speed: 800,
      navigation: {
        nextEl: ".js-other-next",
        prevEl: ".js-other-prev",
      },
      breakpoints: {
        1025: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
    });
  }
  if ($("body").find(".js-go-to-result").length) {
    var swiperGoToResult = new Swiper(".js-go-to-result", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      navigation: {
        nextEl: ".js-go-to-result-next",
        prevEl: ".js-go-to-result-prev",
      },
      breakpoints: {
        1920: {
          slidesPerView: 1,
        },
        1600: {
          slidesPerView: 1,
        },
        1366: {
          slidesPerView: 1,
        },
        1280: {
          slidesPerView: 1,
        },
        1025: {
          slidesPerView: 1.7,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 1.7,
          spaceBetween: 8,
        },
        600: {
          slidesPerView: 1.2,
          spaceBetween: 8,
        },
      },
    });
  }

  $(".js-video-poster").on("click", function (ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest(".js-video-wrapper");
    $poster.addClass("hide");
    videoPlay($wrapper);
  });

  // play the targeted video (and hide the poster frame)
  function videoPlay($wrapper) {
    var $iframe = $wrapper.find(".js-video-iframe");
    var src = $iframe.data("src");
    // hide poster
    // add iframe src in, starting the video
    if (!$iframe.attr("src")) {
      $iframe.attr("src", src);
    }
  }

  $("body").on("wheel", function (e) {
    const scroll = $(window).scrollTop();
    if (scroll >= 200 && scroll < $("body").height() - 1300) {
      $(".header-float").removeClass("hide");
    } else {
      $(".header-float").addClass("hide");
    }
  });

  $("#phones, #phone")
    .click(function () {
      $(this).setCursorPosition(4);
    })
    .mask("+7 (999) 999-99-99");

  AjaxSendRequest();
  AjaxSendConsultation();

  (function () {
    if (!String.prototype.trim) {
      (function () {
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function () {
          return this.replace(rtrim, "");
        };
      })();
    }

    [].slice
      .call(document.querySelectorAll("input.input__field"))
      .forEach(function (inputEl) {
        if (inputEl.value.trim() !== "") {
          classie.add(inputEl.parentNode, "input--filled");
        }

        inputEl.addEventListener("focus", onInputFocus);
        inputEl.addEventListener("blur", onInputBlur);
      });

    function onInputFocus(ev) {
      classie.add(ev.target.parentNode, "input--filled");
    }

    function onInputBlur(ev) {
      if (ev.target.value.trim() === "") {
        classie.remove(ev.target.parentNode, "input--filled");
      }
    }
  })();
  // setTimeout(()=>anim.destroy(), 1000);
  $(".tabs-item").click((e) => {
    const tabs = $(e.target).closest(".tabs-block");
    tabs.find(".tabs-item").removeClass("_active");
    $(e.target).addClass("_active");
    const valueTab = $(e.target).attr("data-tab");
    tabs.find(".tabs-card").removeClass("_active-card");
    $(`[data-tab-content=${valueTab}`).addClass("_active-card");
  });

  if (window.innerWidth < 600) {
    $("#team-content-1").addClass("_open");
  }

  $("#mobile-team-tab-btn-1").click((e) => {
    $(".t-course-team__content").removeClass("_open");
    $(".t-chips__label").removeClass("_active");
    $("#team-content-1").addClass("_open");
  });

  $("#mobile-team-tab-btn-2").click((e) => {
    $(".t-course-team__content").removeClass("_open");
    $(".t-chips__label").removeClass("_active");
    $("#team-content-2").addClass("_open");
  });

  $("#mobile-team-tab-btn-3").click((e) => {
    $(".t-course-team__content").removeClass("_open");
    $(".t-chips__label").removeClass("_active");
    $("#team-content-3").addClass("_open");
  });

  $("#mobile-team-tab-btn-4").click((e) => {
    $(".t-course-team__content").removeClass("_open");
    $(".t-chips__label").removeClass("_active");
    $("#team-content-4").addClass("_open");
  });

  $("#mobile-team-tab-btn-5").click((e) => {
    $(".t-course-team__content").removeClass("_open");
    $(".t-chips__label").removeClass("_active");
    $("#team-content-5").addClass("_open");
  });
});
