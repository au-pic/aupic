function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function searchImages() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".image-card");

  cards.forEach(card => {
    const tags = card.getAttribute("data-tags").toLowerCase();
    const title = card.querySelector("p").innerText.toLowerCase();
    if (tags.includes(input) || title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}


function trackDownload(link) {
  const card = link.closest(".image-card");
  const counterSpan = card.querySelector(".counter");
  const imgSrc = link.getAttribute("href");
  let count = localStorage.getItem(imgSrc) || 0;
  count = parseInt(count) + 1;
  localStorage.setItem(imgSrc, count);
  counterSpan.textContent = "Downloaded: " + count;
}

window.onload = function() {
  document.querySelectorAll(".image-card a").forEach(link => {
    const card = link.closest(".image-card");
    const counterSpan = card.querySelector(".counter");
    const imgSrc = link.getAttribute("href");
    let count = localStorage.getItem(imgSrc) || 0;
    counterSpan.textContent = "Downloaded: " + count;
  });
};



window.onload = function () {
  document.querySelectorAll(".image-card a").forEach(link => {
    const card = link.closest(".image-card");
    const counterSpan = card.querySelector(".counter");
    const imgSrc = link.getAttribute("href");

    // Set the link to open in a new tab and force download
    link.setAttribute("target", "_blank");
    link.setAttribute("download", "");

    // Show download count from localStorage
    let count = localStorage.getItem(imgSrc) || 0;
    counterSpan.textContent = "Downloaded: " + count;

    // Add click handler to increment download count
    link.addEventListener("click", () => {
      let current = parseInt(localStorage.getItem(imgSrc)) || 0;
      current++;
      localStorage.setItem(imgSrc, current);
      counterSpan.textContent = "Downloaded: " + current;
    });
  });
};

//
function filterCategory(category) {
  const cards = document.querySelectorAll(".image-card");

  cards.forEach(card => {
    const cardCategories = card.dataset.category.split(" ");

    if (category === 'all' || cardCategories.includes(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
