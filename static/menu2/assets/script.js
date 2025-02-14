$(document).ready(function() {
    var csrftoken = $('meta[name="csrf-token"]').attr('content');
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
                $(".menu-grid").html($(data).find(".menu-grid").html()); // ✅ Mahsulotlar yangilanadi
                $(".subcategories-section").html($(data).find(".subcategories-section").html()); // ✅ Subkategoriyalar ham yangilanadi
                $(".menu-category").removeClass("menu-category--active");
                $category.addClass("menu-category--active");

                window.history.pushState(null, "", url);  // ✅ URL yangilanadi
            },
            error: function() {
                alert("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
            }
        });
    });
});
