document.addEventListener("DOMContentLoaded", function() {
    var csrftoken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

    $(".menu-category a").click(function(event) {
        event.preventDefault();
        var url = $(this).attr("href");
        var $category = $(this).closest(".menu-category");

        $.ajax({
            url: url,
            type: "GET",
            success: function(data) {
                $(".menu-grid").html($(data).find(".menu-grid").html());
                $(".menu-category").removeClass("menu-category--active");
                $category.addClass("menu-category--active");

                // Update the URL
                window.history.pushState(null, "", url);
            },
            error: function() {
                alert("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
            }
        });
    });
});
