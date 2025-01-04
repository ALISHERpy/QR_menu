document.addEventListener("DOMContentLoaded", function () {
    const imageField = document.querySelector('input[type="file"]');

    if (imageField) {
        document.addEventListener("paste", function (event) {
            const clipboardItems = event.clipboardData.items;
            for (const item of clipboardItems) {
                if (item.type.startsWith("image/")) {
                    const file = item.getAsFile();
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);

                    imageField.files = dataTransfer.files;

                    // Optionally, show a preview
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const imgPreview = document.createElement("img");
                        imgPreview.src = e.target.result;
                        imgPreview.style.maxWidth = "100%";
                        imgPreview.style.marginTop = "10px";
                        imageField.insertAdjacentElement("afterend", imgPreview);
                    };
                    reader.readAsDataURL(file);

                    break;
                }
            }
        });
    }
});
