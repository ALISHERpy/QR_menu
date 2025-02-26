document.addEventListener("DOMContentLoaded", function () {
    const imageField = document.querySelector('#id_image');

    if (!imageField) {
        console.warn("Image field not found. Make sure the field ID matches #id_image.");
        return;
    }

    // Create a drop zone area
    const dropZone = document.createElement('div');
    dropZone.style.border = "2px dashed #ccc";
    dropZone.style.padding = "20px";
    dropZone.style.textAlign = "center";
    dropZone.style.marginBottom = "10px";
    dropZone.innerHTML = `
        <p>Drag and drop an image here, or click to select a file.</p>
        <p><strong>Or paste an image directly from your clipboard.</strong></p>
    `;

    // Insert the drop zone above the file input field
    imageField.parentNode.insertBefore(dropZone, imageField);

    // Add click event to trigger file input
    dropZone.addEventListener("click", () => imageField.click());

    // Handle drag-and-drop events
    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropZone.style.borderColor = "#007bff";
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.style.borderColor = "#ccc";
    });

    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        dropZone.style.borderColor = "#ccc";

        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            imageField.files = event.dataTransfer.files; // Assign file to the input field
            previewImage(file, dropZone);
        } else {
            alert("Please drop a valid image file.");
        }
    });

    // Handle paste event
    document.addEventListener("paste", (event) => {
        const items = (event.clipboardData || event.originalEvent.clipboardData).items;
        for (const item of items) {
            if (item.type.startsWith("image/")) {
                const file = item.getAsFile();
                imageField.files = new DataTransfer().files; // Clear previous file
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                imageField.files = dataTransfer.files;
                previewImage(file, dropZone);
                break;
            }
        }
    });

    // Function to preview the image
    function previewImage(file, dropZone) {
        const reader = new FileReader();
        reader.onload = (e) => {
            dropZone.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 100%; height: auto; border: 1px solid #ccc; margin-top: 10px;">`;
        };
        reader.readAsDataURL(file);
    }
});
